import { FALLBACK_IMAGE, formatDate, type PostSummary } from "@/lib/blog";

export default function ArticleCard({ post, hidden }: { post: PostSummary; hidden?: boolean }) {
  return (
    <li style={hidden ? { display: "none" } : undefined}>
      <a className="article-card" href={`/blogs/${post.slug}`}>
        <div className="article-card-img">
          <span className="bk bk-tl" aria-hidden="true" />
          <span className="bk bk-tr" aria-hidden="true" />
          <span className="bk bk-bl" aria-hidden="true" />
          <span className="bk bk-br" aria-hidden="true" />
          <img src={post.featureImage || FALLBACK_IMAGE} alt={post.featureImageAlt || post.title} loading="lazy" />
        </div>
        <div className="article-card-body">
          <h3 className="article-card-title">{post.title}</h3>
          <p className="article-card-excerpt">{post.excerpt}</p>
        </div>
        <div className="article-card-foot">
          <span className="read-more-link">
            Read More <span className="arr" aria-hidden="true">&rarr;</span>
          </span>
          <span className="article-meta">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="article-meta-sep">&middot;</span>
            <span>&#9201; {post.readingTime} min</span>
          </span>
        </div>
      </a>
    </li>
  );
}
