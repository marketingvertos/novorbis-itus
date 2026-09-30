#!/usr/bin/env node
/**
 * import-ghost-export.mjs
 * Imports blog posts from a Ghost JSON backup (Ghost Admin → Settings →
 * Import/Export → Export) into the React app:
 *   - src/content/blog/index.json        post list (for /blogs)
 *   - src/content/blog/posts/{slug}.json full post (for /blogs/{slug})
 *   - public/blogs/content/images/...    images, downloaded from the old Ghost site
 *   - public/sitemap.xml                 blog URLs refreshed
 *
 * Usage:
 *   npm run import:ghost -- <path/to/novorbis.ghost.*.json>
 *
 * Images are fetched from IMAGE_SOURCE (default https://novorbisitus.com/blogs).
 * Images already present in public/ are skipped.
 */

import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import http from "node:http";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = (process.env.SITE_URL || "https://novorbisitus.com").replace(/\/$/, "");
const IMAGE_SOURCE = (process.env.IMAGE_SOURCE || "https://novorbisitus.com/blogs").replace(/\/$/, "");
const exportFile = process.argv[2];

if (!exportFile) {
  console.error("Usage: npm run import:ghost -- <ghost-export.json>");
  process.exit(1);
}

// ── Ghost placeholder URLs → local paths ─────────────────────────────────────
// __GHOST_URL__/content/...  → /blogs/content/...   (images, files)
// __GHOST_URL__/{slug}/      → /blogs/{slug}        (links between posts)
function rewriteUrls(str) {
  if (!str) return str;
  return str
    .replace(/__GHOST_URL__\/content\//g, "/blogs/content/")
    .replace(/__GHOST_URL__\/([a-z0-9-]+)\/?(?=["'#?\s])/g, "/blogs/$1")
    .replace(/__GHOST_URL__\/?/g, "/blogs");
}

// ── Heading ids + table of contents (same rules as the old build-blog.js) ────
const stripTags = (s) => s.replace(/<[^>]+>/g, "");
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");

function processArticle(html) {
  if (!html) return { html: "", toc: [] };
  const used = {};
  const toc = [];
  const out = html.replace(/<(h[123])([^>]*)>([\s\S]*?)<\/h[123]>/gi, (full, tag, attrs, inner) => {
    const text = decode(stripTags(inner)).trim();
    let id = (attrs.match(/\bid="([^"]*)"/) || [])[1] || slugify(text);
    if (used[id]) id = `${id}-${++used[id]}`;
    else used[id] = 1;
    const cleanAttrs = attrs.replace(/\s*\bid="[^"]*"/, "");
    const outTag = tag.toLowerCase() === "h1" ? "h2" : tag.toLowerCase(); // page already has an h1
    toc.push({ id, text });
    return `<${outTag}${cleanAttrs} id="${id}">${inner}</${outTag}>`;
  });
  return { html: out, toc };
}

// ── Load export ──────────────────────────────────────────────────────────────
function loadPosts(file) {
  const data = JSON.parse(fs.readFileSync(file, "utf8")).db[0].data;
  const tagsById = Object.fromEntries(data.tags.map((t) => [t.id, t]));
  const metaByPost = Object.fromEntries((data.posts_meta || []).map((m) => [m.post_id, m]));

  return data.posts
    .filter((p) => p.type === "post" && p.status === "published" && p.visibility === "public")
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    .map((p) => {
      const meta = metaByPost[p.id] || {};
      const tags = data.posts_tags
        .filter((pt) => pt.post_id === p.id)
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((pt) => tagsById[pt.tag_id]?.name)
        .filter(Boolean);
      const plain = (p.plaintext || "").replace(/\s+/g, " ").trim();
      const words = plain ? plain.split(" ").length : 0;
      const { html, toc } = processArticle(rewriteUrls(p.html));
      return {
        slug: p.slug,
        title: p.title,
        excerpt: p.custom_excerpt || meta.meta_description || plain.slice(0, 300),
        metaTitle: meta.meta_title || null,
        metaDescription: meta.meta_description || null,
        featureImage: rewriteUrls(p.feature_image) || null,
        featureImageAlt: meta.feature_image_alt || null,
        publishedAt: new Date(p.published_at).toISOString(),
        readingTime: Math.max(1, Math.round(words / 275)),
        tags,
        toc,
        html,
      };
    });
}

// ── Image download ───────────────────────────────────────────────────────────
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    lib
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          return download(new URL(res.headers.location, url).href, dest).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        const out = fs.createWriteStream(dest);
        res.pipe(out);
        out.on("finish", () => out.close(resolve));
        out.on("error", reject);
      })
      .on("error", reject);
  });
}

async function downloadImages(posts) {
  const all = posts.map((p) => `${p.html} "${p.featureImage}"`).join("\n");
  const paths = [...new Set(all.match(/\/blogs\/content\/[^"'\s),]+/g) || [])];
  console.log(`Checking ${paths.length} image(s)...`);
  let fetched = 0, failed = 0;
  const queue = paths.slice();
  async function worker() {
    while (queue.length) {
      const p = queue.shift();
      const dest = path.join(ROOT, "public", decodeURIComponent(p));
      if (fs.existsSync(dest) && fs.statSync(dest).size > 0) continue;
      try {
        await download(IMAGE_SOURCE + p.replace(/^\/blogs/, ""), dest);
        fetched++;
      } catch (e) {
        failed++;
        console.warn(`  ✗ ${p} (${e.message})`);
      }
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));
  console.log(`  → ${fetched} downloaded, ${failed} failed`);
}

// ── Sitemap ──────────────────────────────────────────────────────────────────
function updateSitemap(posts) {
  const file = path.join(ROOT, "public", "sitemap.xml");
  let xml = fs.readFileSync(file, "utf8");
  xml = xml.replace(/\s*<!-- Blog posts -->[^]*?(?=\n<\/urlset>)/, "");
  const entries = posts
    .map(
      (p) => `
  <url>
    <loc>${SITE_URL}/blogs/${p.slug}</loc>
    <lastmod>${p.publishedAt.split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    )
    .join("");
  xml = xml.replace("</urlset>", `\n  <!-- Blog posts -->${entries}\n\n</urlset>`);
  fs.writeFileSync(file, xml, "utf8");
}

// ── Main ─────────────────────────────────────────────────────────────────────
const posts = loadPosts(exportFile);
console.log(`${posts.length} published post(s) in export`);
await downloadImages(posts);

const dir = path.join(ROOT, "src/content/blog");
fs.rmSync(path.join(dir, "posts"), { recursive: true, force: true });
fs.mkdirSync(path.join(dir, "posts"), { recursive: true });
for (const p of posts) fs.writeFileSync(path.join(dir, "posts", `${p.slug}.json`), JSON.stringify(p, null, 2) + "\n");
const index = posts.map(({ html, toc, ...summary }) => summary);
fs.writeFileSync(path.join(dir, "index.json"), JSON.stringify(index, null, 2) + "\n");
updateSitemap(posts);
console.log(`Wrote src/content/blog (${posts.length} posts) and refreshed public/sitemap.xml`);
