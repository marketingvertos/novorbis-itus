import { useRef, useState } from "react";
import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ArticleCard from "@/components/blog/ArticleCard";
import { FALLBACK_IMAGE, SITE_URL, posts } from "@/lib/blog";
import "@/styles/legacy/blogs.css";

const PER_PAGE = 12;
const featured = posts[0];
const featImg = featured?.featureImage || FALLBACK_IMAGE;

const meta: PageMeta = {
  title: "Blog & Field Reports | Novorbis",
  canonical: `${SITE_URL}/blogs`,
  tags: [
    { name: "description", content: "Guides, compliance updates, and field reports on industrial emission control from the Novorbis team." },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Novorbis" },
    { property: "og:title", content: "Blog & Field Reports | Novorbis" },
    { property: "og:description", content: "Guides, compliance updates, and field reports on industrial emission control." },
    { property: "og:url", content: `${SITE_URL}/blogs` },
    { property: "og:image", content: featImg.startsWith("/") ? SITE_URL + featImg : featImg },
    { name: "twitter:card", content: "summary_large_image" },
  ],
};

function pageList(current: number, pages: number) {
  const out: Array<number | "gap"> = [];
  for (let p = 1; p <= pages; p++) {
    if (p === 1 || p === pages || (p >= current - 1 && p <= current + 1)) out.push(p);
    else if (p === current - 2 || p === current + 2) out.push("gap");
  }
  return out;
}

export default function Blog() {
  const [page, setPage] = useState(1);
  const grid = useRef<HTMLUListElement>(null);
  const pages = Math.ceil(posts.length / PER_PAGE);

  const go = (p: number) => {
    setPage(p);
    if (grid.current) {
      const top = grid.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <PageShell meta={meta} scripts={["/js/global.js"]}>
      <div className="grain" aria-hidden="true" />
      <SiteNav active="resources" />

      {featured && (
        <section className="blog-hero dark">
          <div className="blog-hero-inner">
            <div className="blog-hero-body reveal">
              <span className="blog-hero-kicker">Featured Article</span>
              <h1 className="blog-hero-title">{featured.title}</h1>
              <p className="blog-hero-excerpt">{featured.excerpt}</p>
              <a href={`/blogs/${featured.slug}`} className="blog-hero-cta">
                Read the guide <span className="arr" aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <a className="blog-hero-img" href={`/blogs/${featured.slug}`} aria-hidden="true" tabIndex={-1}>
              <span className="bk bk-tl" aria-hidden="true" />
              <span className="bk bk-tr" aria-hidden="true" />
              <span className="bk bk-bl" aria-hidden="true" />
              <span className="bk bk-br" aria-hidden="true" />
              <img src={featImg} alt={featured.featureImageAlt || featured.title} width={741} height={417} {...{ fetchpriority: "high" }} />
            </a>
          </div>
        </section>
      )}

      <section className="articles-section light">
        <div className="articles-section-head">
          <h2 className="articles-section-title">All Articles</h2>
        </div>
        <ul className="articles-grid" id="articlesGrid" role="list" ref={grid} style={{ padding: 0, listStyle: "none" }}>
          {posts.map((p, i) => (
            <ArticleCard key={p.slug} post={p} hidden={Math.floor(i / PER_PAGE) + 1 !== page} />
          ))}
        </ul>
        {pages > 1 && (
          <nav className="blog-pagination" id="blogPagination" aria-label="Blog pages">
            <button className="pg-btn pg-prev" aria-label="Previous page" disabled={page === 1} onClick={() => go(page - 1)}>
              &larr;
            </button>
            {pageList(page, pages).map((p, i) =>
              p === "gap" ? (
                <span key={`gap-${i}`} className="pg-ellipsis">&hellip;</span>
              ) : (
                <button key={p} className={p === page ? "pg-btn pg-active" : "pg-btn"} onClick={() => go(p)}>
                  {p}
                </button>
              ),
            )}
            <button className="pg-btn pg-next" aria-label="Next page" disabled={page === pages} onClick={() => go(page + 1)}>
              &rarr;
            </button>
          </nav>
        )}
      </section>

      <SiteFooter />
    </PageShell>
  );
}
