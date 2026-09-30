import PageShell from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/coming-soon.css";

export default function NotFound() {
  return (
    <PageShell
      meta={{ title: "Page not found | Novorbis", tags: [{ name: "robots", content: "noindex, follow" }] }}
      scripts={["/js/global.js"]}
    >
      <div className="grain" aria-hidden="true" />
      <SiteNav />
      <main className="cs-page">
        <section className="cs-hero">
          <div className="cs-hero-content">
            <span className="cs-badge">404</span>
            <h1>This page doesn’t exist</h1>
            <p>
              The link may be old or mistyped. <a href="/">Go to the home page</a>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
