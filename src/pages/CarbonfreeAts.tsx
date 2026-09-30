import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/coming-soon.css";

const meta: PageMeta = {
  "title": "CarbonFree After Treatment System (ATS) | Novorbis Itus",
  "tags": [
    {
      "name": "description",
      "content": "The CarbonFree After Treatment System (ATS) uses smart fluid spraying to destroy toxic NOx gases at the source — giving diesel engines full compliance with zero chemical waste."
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
      "content": "CarbonFree After Treatment System (ATS) | Novorbis Itus"
    },
    {
      "property": "og:description",
      "content": "The CarbonFree ATS destroys invisible NOx gases from diesel engines at the source — full compliance, zero chemical waste."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/ats.html"
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
      "content": "CarbonFree After Treatment System (ATS) | Novorbis Itus"
    },
    {
      "name": "twitter:description",
      "content": "The CarbonFree ATS destroys invisible NOx gases from diesel engines at the source — full compliance, zero chemical waste."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/ats.html",
  "jsonLd": []
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js"
];

export default function CarbonfreeAts() {
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
            <h1>After Treatment System for Diesel Engines</h1>
            <p>
              Standard engines leave invisible, toxic NO
              <sub>x</sub>
              {" "}gases unchecked. Our CarbonFree After Treatment System (ATS) uses smart fluid spraying to destroy these gases at the source, giving you full compliance with zero chemical waste.
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
