import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/coming-soon.css";

const meta: PageMeta = {
  "title": "Carbon Capture Utilization & Storage | Novorbis Itus",
  "tags": [
    {
      "name": "description",
      "content": "Novorbis Itus is working on Carbon Capture Utilization & Storage (CCUS) technology — capturing CO₂ from the same exhaust streams already treated for particulate matter."
    },
    {
      "name": "robots",
      "content": "index, follow"
    },
    {
      "property": "og:type",
      "content": "website"
    },
    {
      "property": "og:site_name",
      "content": "Novorbis"
    },
    {
      "property": "og:title",
      "content": "Carbon Capture Utilization & Storage | Novorbis Itus"
    },
    {
      "property": "og:description",
      "content": "Novorbis Itus is working on Carbon Capture Utilization & Storage technology — the next step in industrial emission control."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/ccus.html"
    },
    {
      "property": "og:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    },
    {
      "name": "twitter:card",
      "content": "summary_large_image"
    },
    {
      "name": "twitter:title",
      "content": "Carbon Capture Utilization & Storage | Novorbis Itus"
    },
    {
      "name": "twitter:description",
      "content": "Novorbis Itus is working on Carbon Capture Utilization & Storage technology — the next step in industrial emission control."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/ccus.html",
  "jsonLd": []
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js"
];

export default function Ccus() {
  return (
    <PageShell meta={meta} scripts={scripts}>
      <div id="pl-overlay">
        <div id="pl-inner">
          <img src="/assets/images/shared/novorbis-logo-white.svg" id="pl-logo" alt="Novorbis" />
          <div id="pl-track">
            <div id="pl-fill" />
          </div>
          <span id="pl-pct">0%</span>
        </div>
      </div>
      {" "}
      <div className="grain" aria-hidden="true" />
      {" "}
      <SiteNav active="solutions" />
      {" "}
      <main className="cs-page">
        <section className="cs-hero">
          <div className="cs-hero-content">
            {" "}
            <span className="cs-badge">Coming Soon</span>
            {" "}
            <h1>Carbon Capture Utilization & Storage</h1>
            <p>
              Our technology already captures particulate matter from the exhaust streams of thousands of industrial and commercial sources across India. The same exhaust stream carries CO₂. We’re working on what comes next.
            </p>
          </div>
        </section>
        {" "}
        {" "}
        <SiteFooter />
        {" "}
        {" "}
        {" "}
        {" "}
      </main>
    </PageShell>
  );
}
