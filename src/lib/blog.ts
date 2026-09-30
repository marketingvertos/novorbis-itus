import index from "@/content/blog/index.json";

export const SITE_URL = "https://novorbisitus.com";
export const FALLBACK_IMAGE = "/assets/images/ind-heavy-industries/APCD-Hero.jpg";

export type PostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string | null;
  metaDescription: string | null;
  featureImage: string | null;
  featureImageAlt: string | null;
  publishedAt: string;
  readingTime: number;
  tags: string[];
};

export type Post = PostSummary & {
  toc: Array<{ id: string; text: string }>;
  html: string;
};

/** All published posts, newest first. */
export const posts = index as PostSummary[];

// Full posts are split into one chunk each so /blogs doesn't download every article.
const postModules = import.meta.glob<{ default: Post }>("@/content/blog/posts/*.json");

export async function loadPost(slug: string): Promise<Post | null> {
  const mod = postModules[`/src/content/blog/posts/${slug}.json`];
  return mod ? (await mod()).default : null;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
