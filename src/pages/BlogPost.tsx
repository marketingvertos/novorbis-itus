import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ArticleCard from "@/components/blog/ArticleCard";
import ShareIcons from "@/components/blog/ShareIcons";
import NotFound from "@/pages/NotFound";
import { FALLBACK_IMAGE, SITE_URL, formatDate, loadPost, posts, type Post } from "@/lib/blog";
import "@/styles/legacy/blogs.css";

const abs = (url: string) => (url.startsWith("/") ? SITE_URL + url : url);

function postMeta(post: Post, img: string): PageMeta {
  const url = `${SITE_URL}/blogs/${post.slug}`;
  const description = post.metaDescription || post.excerpt;
  // Same as the static site: the post title, not Ghost's separate SEO title.
  const title = post.title;
  return {
    title: `${title} | Novorbis`,
    canonical: url,
    tags: [
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "article" },
      { property: "og:site_name", content: "Novorbis" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: abs(img) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: abs(img) },
    ],
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description,
        url,
        datePublished: post.publishedAt,
        image: abs(img),
        publisher: { "@type": "Organization", name: "Novorbis", url: SITE_URL },
      },
    ],
  };
}

export default function BlogPost() {
  const { slug = "" } = useParams();
  const [post, setPost] = useState<Post | null | undefined>(undefined);

  useEffect(() => {
    loadPost(slug).then(setPost);
  }, [slug]);

  if (post === undefined) return null; // loading
  if (post === null) return <NotFound />;

  const img = post.featureImage || FALLBACK_IMAGE;
  const tag = post.tags[0] || "Article";
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageShell meta={postMeta(post, img)} scripts={["/js/global.js", "/js/article.js"]}>
      <div className="grain" aria-hidden="true" />
      <SiteNav active="resources" />

      <section className="blog-hero dark">
        <div className="blog-hero-inner">
          <div className="blog-hero-body reveal">
            <a className="blog-back-link" href="/blogs">
              <svg viewBox="0 0 16 16" aria-hidden="true" width="14" height="14">
                <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>{" "}
              All Articles
            </a>
            <span className="blog-hero-kicker">{tag}</span>
            <h1 className="blog-hero-title">{post.title}</h1>
            <p className="blog-hero-excerpt">{post.excerpt}</p>
          </div>
          <div className="blog-hero-img">
            <span className="bk bk-tl" aria-hidden="true" />
            <span className="bk bk-tr" aria-hidden="true" />
            <span className="bk bk-bl" aria-hidden="true" />
            <span className="bk bk-br" aria-hidden="true" />
            <img src={img} alt={post.featureImageAlt || post.title} width={741} height={417} {...{ fetchpriority: "high" }} />
          </div>
        </div>
      </section>

      <section className="article-section light">
        <div className="article-layout">
          <aside className="article-sidebar" aria-label="Table of contents">
            <nav className="article-toc" aria-label="Article sections">
              <p className="toc-heading">Table of Contents</p>
              <div className="toc-divider" />
              <ol className="toc-list" id="tocList">
                {post.toc.map((h, i) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`}>
                      {i + 1}. {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <ShareIcons url={`${SITE_URL}/blogs/${post.slug}`} title={post.title} />
          </aside>

          <article className="article-body" id="articleBody">
            <div className="article-meta-row">
              <span className="meta-tag">{tag}</span>
              <span className="meta-item">{formatDate(post.publishedAt)}</span>
              <span className="meta-item">&#9201; {post.readingTime} min read</span>
            </div>
            {/* Article HTML comes from the Ghost export (src/content/blog/posts). */}
            <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="article-divider" />
          </article>
        </div>
      </section>

      {others.length > 0 && (
        <section className="continue-reading-section light">
          <div className="continue-reading-head">
            <h2 className="continue-reading-title">Continue Reading</h2>
          </div>
          <ul className="articles-grid stagger" role="list" style={{ padding: 0, listStyle: "none", maxWidth: 1360, margin: "0 auto" }}>
            {others.map((p) => (
              <ArticleCard key={p.slug} post={p} />
            ))}
          </ul>
        </section>
      )}

      <SiteFooter />
    </PageShell>
  );
}
