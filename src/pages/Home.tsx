import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/index.css";

const meta: PageMeta = {
  "title": "Novorbis Itus | CPCB & ARAI Certified Emission Control Solutions",
  "tags": [
    {
      "name": "description",
      "content": "CPCB-certified and ARAI-tested emission control systems for diesel generators, industrial boilers, and crematoriums. Filterless, low-maintenance technology engineered for India."
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
      "content": "Novorbis Itus | CPCB & ARAI Certified Emission Control Solutions"
    },
    {
      "property": "og:description",
      "content": "CPCB-certified and ARAI-tested emission control systems for diesel generators, industrial boilers, and crematoriums. Filterless, low-maintenance technology engineered for India."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/"
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
      "content": "Novorbis Itus | CPCB & ARAI Certified Emission Control Solutions"
    },
    {
      "name": "twitter:description",
      "content": "CPCB-certified and ARAI-tested emission control systems for diesel generators, industrial boilers, and crematoriums. Filterless, low-maintenance technology engineered for India."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Novorbis",
      "url": "https://novorbisitus.com",
      "description": "Emission control systems for Indian industry — electrostatic precipitators, wet scrubbers, and air pollution control devices.",
      "logo": "https://novorbisitus.com/assets/images/shared/novorbis-logo-white.svg"
    }
  ]
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/inline/home-1.js",
  "/js/global.js",
  "/js/index.js"
];

export default function Home() {
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
      <div className="grain" />
      <SiteNav />
      {" "}
      <section className="hero dark" id="hero">
        <div className="hero-pin">
          <div className="hero-bg-fallback" />
          {" "}
          {" "}
          <canvas className="hero-bg" id="heroCanvas" aria-hidden="true" />
          <div className="hero-grad" />
          {" "}
          {" "}
          <style dangerouslySetInnerHTML={{ __html: "\n      .cc-bar{\n        position:absolute; left:0; right:0; top:0; z-index:2;\n        display:flex; align-items:center; justify-content:center; gap:clamp(18px,3vw,40px);\n        flex-wrap:wrap;\n        padding:18px clamp(20px,4vw,48px) 18px;\n        padding-top:calc(92px + 14px);\n        background:linear-gradient(180deg, rgba(7,9,12,0.86) 0%, rgba(7,9,12,0.86) 60%, rgba(7,9,12,0.5) 85%, rgba(7,9,12,0) 100%);\n        -webkit-backdrop-filter:blur(10px); backdrop-filter:blur(10px);\n        text-align:center;\n        /* match nav.site-nav so the two move as one */\n        transition:transform 0.32s cubic-bezier(.4,0,.2,1), opacity 0.24s ease;\n        will-change:opacity, transform;\n      }\n      /* mirrors #nav.nav-hidden — toggled by the script below */\n      .cc-bar.cc-hidden{ transform:translateY(-100%); opacity:0; pointer-events:none; }\n      .cc-copy{ display:flex; flex-direction:column; align-items:flex-start; gap:2px; }\n      .cc-tagline{\n        font-family:var(--display,\"DM Sans\",sans-serif); font-weight:600;\n        font-size:clamp(0.82rem,1.5vw,0.98rem); line-height:1.35; margin:0;\n        color:#fff; letter-spacing:0.01em; text-align:left;\n      }\n      .cc-tagline .accent{ color:#5aa7ff; }\n      .cc-subline{\n        font-family:var(--body,\"Inter\",sans-serif); font-weight:400;\n        font-size:clamp(0.72rem,1.2vw,0.8rem); color:rgba(255,255,255,0.55); margin:0;\n        text-align:left;\n      }\n      .cc-timer{ display:flex; align-items:center; gap:clamp(14px,2.4vw,26px); }\n      .cc-t-block{ display:flex; flex-direction:column; align-items:center; gap:2px; min-width:52px; }\n      .cc-t-num{\n        font-family:var(--display,\"DM Sans\",sans-serif); font-weight:600;\n        font-size:clamp(1.25rem,2.8vw,1.7rem); line-height:1; letter-spacing:-0.01em;\n        color:#fff; font-variant-numeric:tabular-nums; white-space:nowrap;\n      }\n      .cc-t-label{\n        font-family:var(--body,\"Inter\",sans-serif); font-weight:500;\n        font-size:clamp(0.6rem,1vw,0.68rem); text-transform:uppercase; letter-spacing:0.06em;\n        color:rgba(255,255,255,0.5);\n      }\n      .cc-t-sep{ color:rgba(255,255,255,0.25); font-size:1.2rem; font-weight:300; align-self:flex-start; margin-top:2px; }\n      .cc-cta-btn{\n        display:inline-flex; align-items:center; white-space:nowrap;\n        font-family:var(--body,\"Inter\",sans-serif); font-weight:600; font-size:0.82rem;\n        color:#07090c; background:#fff; border-radius:999px; padding:10px 20px;\n        text-decoration:none; transition:transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;\n      }\n      .cc-cta-btn:hover{ transform:translateY(-1px); box-shadow:0 10px 24px rgba(0,0,0,0.35); background:#5aa7ff; color:#07090c; }\n\n      @media (max-width:900px){\n        .cc-bar{ padding:14px 18px 14px; padding-top:calc(72px + 10px); gap:12px; flex-direction:column; }\n        /* keep the copy — stack it above the timer and centre it */\n        .cc-copy{ align-items:center; gap:3px; }\n        /* balance evens the wrap so we don't get a long line + orphan stub */\n        .cc-tagline, .cc-subline{ text-align:center; text-wrap:balance; }\n      }\n      @media (max-width:600px){\n        .cc-timer{ gap:10px; }\n        .cc-t-block{ min-width:42px; }\n        .cc-cta-btn{ padding:9px 16px; font-size:0.76rem; }\n      }\n    " }} />
          <div className="cc-bar" id="climate-clock">
            <div className="cc-copy">
              <p className="cc-tagline">
                The window to hold warming under{" "}
                <span className="accent">1.5°C</span>
                {" "}is shutting - live
              </p>
              <p className="cc-subline">Tracking Copernicus long-term warming data. Every operation we clean up buys back time.</p>
            </div>
            <div className="cc-timer">
              <div className="cc-t-block">
                <span className="cc-t-num" id="ccY">—</span>
                <span className="cc-t-label">Yrs</span>
              </div>
              {" "}
              <span className="cc-t-sep">:</span>
              {" "}
              <div className="cc-t-block">
                <span className="cc-t-num" id="ccD">—</span>
                <span className="cc-t-label">Days</span>
              </div>
              {" "}
              <span className="cc-t-sep">:</span>
              {" "}
              <div className="cc-t-block">
                <span className="cc-t-num" id="ccH">00</span>
                <span className="cc-t-label">Hrs</span>
              </div>
              {" "}
              <span className="cc-t-sep">:</span>
              {" "}
              <div className="cc-t-block">
                <span className="cc-t-num" id="ccM">00</span>
                <span className="cc-t-label">Min</span>
              </div>
              {" "}
              <span className="cc-t-sep">:</span>
              {" "}
              <div className="cc-t-block">
                <span className="cc-t-num" id="ccS">00</span>
                <span className="cc-t-label">Sec</span>
              </div>
            </div>
            {" "}
            <a className="cc-cta-btn" href="/contact-us">Contact Us</a>
            {" "}
          </div>
          {" "}
          {" "}
          <div className="hero-inner">
            <div className="hero-spacer" />
            {" "}
            {" "}
            <div className="hero-bottom-stack">
              <h1 className="hero-headline" id="heroHeadline">
                {" "}
                <span className="hero-line" id="heroLine1">
                  {" "}
                  <span className="hw">Cleaner</span>
                  {" "}
                  <span className="hw">Emissions</span>
                  {" "}
                </span>
                {" "}
                <span className="hero-line" id="heroLine2">
                  {" "}
                  <span className="hw">in</span>
                  {" "}
                  <span className="hw">Every</span>
                  {" "}
                  <span className="hw">Operation</span>
                  {" "}
                </span>
                {" "}
                <span className="hero-line hero-line-b" id="heroLine3" aria-hidden="true">
                  {" "}
                  <span className="hw">Novorbis</span>
                  {" "}
                </span>
                {" "}
                <span className="hero-line hero-line-b" id="heroLine4" aria-hidden="true">
                  {" "}
                  <span className="hw">Makes</span>
                  {" "}
                  <span className="hw">it</span>
                  {" "}
                  <span className="hw">Real.</span>
                  {" "}
                </span>
                {" "}
              </h1>
              <div className="hero-actions">
                {" "}
                <a className="btn btn-primary" href="#products">
                  Explore Solutions{" "}
                  <span className="arr">→</span>
                </a>
                {" "}
                <a className="btn btn-ghost-dark content-updated" href="/contact-us">
                  Contact Us{" "}
                  <span className="arr">→</span>
                </a>
                {" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="clients dark">
        <div className="clients-title">Chosen By India’s Leading Enterprises</div>
        <div className="clients-strip">
          <div className="clients-track">
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Reliance.svg" alt="Reliance" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Google.svg" alt="Google" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/tata Projects.svg" alt="Tata Projects" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Indian army.svg" alt="Indian Army" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Adani.svg" alt="Adani" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/L&T.svg" alt="L&T" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Motherson.svg" alt="Motherson" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/sandvik.svg" alt="Sandvik" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Greaves.svg" alt="Greaves" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/CK birla group.svg" alt="CK Birla Group" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Avery Dennison.svg" alt="Avery Dennison" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Hettich.svg" alt="Hettich" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Sapphire foods.svg" alt="Sapphire Foods" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Jaypee.svg" alt="Jaypee" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Sona comstar.svg" alt="Sona Comstar" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Amber.svg" alt="Amber" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Nucleus.svg" alt="Nucleus" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Asti.svg" alt="Asti" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/HAthi.svg" alt="Hathi" />
            </span>
            {" "}
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Reliance.svg" alt="Reliance" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Google.svg" alt="Google" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/tata Projects.svg" alt="Tata Projects" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Indian army.svg" alt="Indian Army" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Adani.svg" alt="Adani" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/L&T.svg" alt="L&T" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Motherson.svg" alt="Motherson" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/sandvik.svg" alt="Sandvik" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Greaves.svg" alt="Greaves" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/CK birla group.svg" alt="CK Birla Group" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Avery Dennison.svg" alt="Avery Dennison" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Hettich.svg" alt="Hettich" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Sapphire foods.svg" alt="Sapphire Foods" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Jaypee.svg" alt="Jaypee" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Sona comstar.svg" alt="Sona Comstar" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Amber.svg" alt="Amber" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Nucleus.svg" alt="Nucleus" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/Asti.svg" alt="Asti" />
            </span>
            {" "}
            <span className="clients-item">
              <img src="/assets/images/homepage/Client Logos/HAthi.svg" alt="Hathi" />
            </span>
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <section className="lead-text" id="leadText">
        <div className="lead-text-inner">
          <p className="lead-paragraph content-updated" id="leadParagraph">
            Lower your emission with our low-maintenance, custom-engineered control devices built for diesel gensets, industrial engines, crematoriums, and diverse industrial applications, ensuring seamless compliance with strict Indian environmental standards.
          </p>
          <div className="lead-badges" id="leadBadges">
            {" "}
            <span className="lead-badge content-updated">Deployment Ready</span>
            {" "}
            <span className="lead-badge content-updated">Operationally Reliable</span>
            {" "}
            <span className="lead-badge content-updated">Sustainability Focused</span>
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <section className="proof light" id="proof">
        <div className="proof-inner">
          <div className="proof-header reveal">
            <div className="kicker">
              <span className="num">01</span>
              <span className="sep">/</span>
              <span className="label">Novorbis Impact</span>
            </div>
            <h2>Proven in the field.</h2>
            <p className="qc-mark">Our performance and impact, by the numbers.</p>
          </div>
          <div className="proof-photo">
            {" "}
            <span className="bk bk-tl" />
            <span className="bk bk-tr" />
            {" "}
            <span className="bk bk-bl" />
            <span className="bk bk-br" />
            {" "}
            <div className="proof-swiper swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <picture>
                    <source media="(max-width: 640px)" srcSet="/assets/images/homepage/Impact-640.webp" type="image/webp" />
                    <source media="(max-width: 1200px)" srcSet="/assets/images/homepage/Impact-1200.webp" type="image/webp" />
                    <source srcSet="/assets/images/homepage/Impact-1920.webp" type="image/webp" />
                    {" "}
                    <img src="/assets/images/homepage/Impact.jpg" alt="Novorbis Impact" />
                    {" "}
                  </picture>
                </div>
                <div className="swiper-slide">
                  <picture>
                    <source media="(max-width: 640px)" srcSet="/assets/images/DG-CAC/CAC_page_wide-640.webp" type="image/webp" />
                    <source media="(max-width: 1200px)" srcSet="/assets/images/DG-CAC/CAC_page_wide-1200.webp" type="image/webp" />
                    <source srcSet="/assets/images/DG-CAC/CAC_page_wide-1920.webp" type="image/webp" />
                    {" "}
                    <img src="/assets/images/DG-CAC/CAC_page_wide.jpg" alt="CAC+ Catalytic Air Cleaner" />
                    {" "}
                  </picture>
                </div>
              </div>
            </div>
          </div>
          <div className="proof-stats stagger">
            <div className="stat-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              {" "}
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="stat-top">
                <span className="label">deployed</span>
                <span className="rule" />
              </div>
              <div className="stat-num">
                <span data-count="500">0</span>
                <span className="unit">+</span>
              </div>
              <div className="stat-rule" />
              <div className="stat-label">DG sets retrofitted</div>
            </div>
            <div className="stat-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              {" "}
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="stat-top">
                <span className="label">reduced</span>
                <span className="rule" />
              </div>
              <div className="stat-num">
                <span className="unit">Up to</span>
                <span data-count="95">0</span>
                <span className="unit">%</span>
              </div>
              <div className="stat-rule" />
              <div className="stat-label">Average carbon reduction</div>
            </div>
            <div className="stat-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              {" "}
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="stat-top">
                <span className="label">averted</span>
                <span className="rule" />
              </div>
              <div className="stat-num">
                <span data-count="10498">0</span>
              </div>
              <div className="stat-rule" />
              <div className="stat-label">
                Tonnes CO
                <sub>2</sub>
                {" "}averted
              </div>
            </div>
            <div className="stat-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              {" "}
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="stat-top">
                <span className="label">operational</span>
                <span className="rule" />
              </div>
              <div className="stat-num">
                <span data-count="50">0</span>
                <span className="unit">+</span>
              </div>
              <div className="stat-rule" />
              <div className="stat-label">Cities operational across India</div>
            </div>
          </div>
          <div className="certs-row">
            <h2 className="certs-heading">Certified & Approved by</h2>
            <div className="cert-grid">
              <div className="cert">
                <div className="cert-mark">
                  {" "}
                  <span className="bk bk-tl" />
                  <span className="bk bk-tr" />
                  {" "}
                  <span className="bk bk-bl" />
                  <span className="bk bk-br" />
                  {" "}
                  <picture>
                    <source media="(max-width: 640px)" srcSet="/assets/images/shared/ARAI-640.webp" type="image/webp" />
                    <source srcSet="/assets/images/shared/ARAI-1200.webp" type="image/webp" />
                    {" "}
                    <img src="/assets/images/shared/ARAI.jpg" alt="ARAI" />
                    {" "}
                  </picture>
                </div>
                <div className="cert-text">
                  {" "}
                  <strong>ARAI Certified</strong>
                  {" "}
                </div>
              </div>
              <div className="cert">
                <div className="cert-mark">
                  {" "}
                  <span className="bk bk-tl" />
                  <span className="bk bk-tr" />
                  {" "}
                  <span className="bk bk-bl" />
                  <span className="bk bk-br" />
                  {" "}
                  <picture>
                    <source media="(max-width: 640px)" srcSet="/assets/images/shared/CPCB-640.webp" type="image/webp" />
                    <source srcSet="/assets/images/shared/CPCB-1200.webp" type="image/webp" />
                    {" "}
                    <img src="/assets/images/shared/CPCB.jpg" alt="CPCB" />
                    {" "}
                  </picture>
                </div>
                <div className="cert-text">
                  {" "}
                  <strong>CPCB Compliant</strong>
                  {" "}
                </div>
              </div>
              <div className="cert">
                <div className="cert-mark">
                  {" "}
                  <span className="bk bk-tl" />
                  <span className="bk bk-tr" />
                  {" "}
                  <span className="bk bk-bl" />
                  <span className="bk bk-br" />
                  {" "}
                  <picture>
                    <source media="(max-width: 640px)" srcSet="/assets/images/shared/iitb logo-640.webp" type="image/webp" />
                    <source srcSet="/assets/images/shared/iitb logo-1200.webp" type="image/webp" />
                    {" "}
                    <img src="/assets/images/shared/iitb logo.jpg" alt="IIT Bombay" />
                    {" "}
                  </picture>
                </div>
                <div className="cert-text">
                  {" "}
                  <strong>Validated by IIT Bombay</strong>
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="why dark" id="why">
        <div className="why-inner">
          <div className="why-header reveal">
            <div className="kicker">
              <span className="num">02</span>
              <span className="sep">/</span>
              <span className="label">Advantage</span>
            </div>
            <h2>What Sets Us Apart</h2>
            <p className="qc-mark">Engineering a better way forward by delivering higher performance and lower operating costs.</p>
          </div>
          <div className="why-grid stagger">
            <div className="why-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="why-card-icon">
                <img src="/assets/icons/homepage/ICON-1.svg" alt="" width="84" height="84" />
              </div>
              <h3 className="why-card-title">Filterless Design</h3>
              <p className="why-card-text">Eliminate all recurring costs for filters and consumable parts.</p>
            </div>
            <div className="why-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="why-card-icon">
                <img src="/assets/icons/homepage/ICON-2.svg" alt="" width="84" height="84" />
              </div>
              <h3 className="why-card-title">Lowest Back Pressure</h3>
              <p className="why-card-text">Capture pollution without “choking” your engine or consuming extra fuel.</p>
            </div>
            <div className="why-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="why-card-icon">
                <img src="/assets/icons/homepage/ICON-3.svg" alt="" width="84" height="84" />
              </div>
              <h3 className="why-card-title">Fully Automated</h3>
              <p className="why-card-text content-updated">OBD-integrated, IoT-enabled real-time monitoring, zero manual intervention.</p>
            </div>
            <div className="why-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="why-card-icon">
                <img src="/assets/icons/homepage/ICON-4.svg" alt="" width="84" height="84" />
              </div>
              <h3 className="why-card-title">Maximum Compliance</h3>
              <p className="why-card-text">Up to 95% efficiency. Highest certified performance in the category.</p>
            </div>
            <div className="why-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="why-card-icon">
                <img src="/assets/icons/homepage/ICON-5.svg" alt="" width="84" height="84" />
              </div>
              <h3 className="why-card-title">Minimal Maintenance</h3>
              <p className="why-card-text">Periodic cleaning. That’s it.</p>
            </div>
            <div className="why-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="why-card-icon">
                <img src="/assets/icons/homepage/ICON-6.svg" alt="" width="84" height="84" />
              </div>
              <h3 className="why-card-title">Custom Engineered</h3>
              <p className="why-card-text">Custom-engineered systems to handle your unique heat peaks and dust loads.</p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="manifesto dark" id="manifesto">
        <canvas className="smoke-canvas" id="smoke" />
        <div className="manifesto-frame">
          <div className="frame-corner tl" />
          <div className="frame-corner tr" />
          <div className="frame-corner bl" />
          <div className="frame-corner br" />
        </div>
        <div className="manifesto-tag-r">CAPTURE · CONTAIN · CERTIFY</div>
        <div className="manifesto-content">
          <h2 className="manifesto-statement">
            {" "}This is the air
            <br />
            {" "}your site is
            <br />
            {" "}emitting{" "}
            <span className="em">right now</span>
            .{" "}
          </h2>
          <p className="manifesto-sub">
            {" "}Move your cursor. That’s roughly what a Novorbis unit does, only at industrial scale, certified, and continuously.{" "}
          </p>
          {" "}
          <a className="manifesto-cta" href="/core-technology">
            {" "}See the technology{" "}
            <span className="arr">→</span>
            {" "}
          </a>
          {" "}
        </div>
        <div className="manifesto-foot">Hover anywhere · mobile: tap & drag</div>
        <div className="cursor-ring" id="cursorRing" />
      </section>
      {" "}
      <section className="products light" id="products">
        <div className="products-pin">
          <div className="products-inner">
            <div className="products-header">
              <div>
                <div className="kicker">
                  <span className="num">03</span>
                  <span className="sep">/</span>
                  <span className="label">Solutions</span>
                </div>
                <h2>Solutions Across Emission Sources</h2>
              </div>
              <p>
                Eliminate toxic emissions and daily non-compliance fines. We provide custom-engineered emission control solutions built for Indian compliance standards for every industrial load.
              </p>
            </div>
            <div className="products-tabs" role="tablist">
              {" "}
              <button className="tab active content-updated" data-tab="dg">RECD</button>
              {" "}
              <button className="tab content-updated" data-tab="caps">CAPS</button>
              {" "}
              <button className="tab content-updated" data-tab="ind">APCD</button>
              {" "}
              <button className="tab content-updated" data-tab="ats" style={{ display: "none" }}>ATS</button>
              {" "}
              <button className="tab content-updated" data-tab="cc" style={{ display: "none" }}>CCUS</button>
              {" "}
            </div>
            <div className="products-pane-stack">
              <div className="product-pane active" data-pane="recd" data-label="Diesel Generators">
                <div className="product-info">
                  <div className="dg-pills">
                    {" "}
                    <button className="dg-pill active" data-pane="recd">CarbonFree ESP</button>
                    {" "}
                    <button className="dg-pill qc-mark" data-pane="cac">CAC+</button>
                    {" "}
                  </div>
                  <h3>CarbonFree ESP</h3>
                  <p>The ultimate filterless solution. No recurring costs, ever.</p>
                  <ul>
                    <li>Up to 95% PM reduction</li>
                    <li>Zero filters, zero consumables</li>
                    <li>Zero backpressure</li>
                    <li>OBD-integrated, fully automated</li>
                    <li>CPCB listed & ARAI Type Approved</li>
                  </ul>
                  {" "}
                  <a className="btn btn-success" href="/carbonfree-recd/carbonfree-esp">
                    View Solution{" "}
                    <span className="arr">→</span>
                  </a>
                  {" "}
                </div>
                <div className="product-photo" data-parallax="0.12">
                  {" "}
                  <span className="photo-tag">RECD · Rooftop Deployment</span>
                  {" "}
                </div>
              </div>
              <div className="product-pane" data-pane="cac" data-label="Diesel Generators">
                <div className="product-info">
                  <div className="dg-pills">
                    {" "}
                    <button className="dg-pill" data-pane="recd">CarbonFree ESP</button>
                    {" "}
                    <button className="dg-pill active qc-mark" data-pane="cac">CAC+</button>
                    {" "}
                  </div>
                  <h3 className="qc-mark">CarbonFree Advanced Catalyst+</h3>
                  <p>Smoke, toxic gases, fine particles eliminated in one system.</p>
                  <ul>
                    <li>Up to 95% PM reduction, up to 90% CO/HC reduction</li>
                    <li>Self-regenerating filter. No manual cleaning</li>
                    <li>Dual pressure sensors predict service before failure</li>
                    <li>IoT-enabled real-time monitoring</li>
                    <li>Built for 30 kVA to 3000 kVA DG sets</li>
                  </ul>
                  {" "}
                  <a className="btn btn-success" href="/carbonfree-recd/carbonfree-advanced-catalyst-plus">
                    View Solution{" "}
                    <span className="arr">→</span>
                  </a>
                  {" "}
                </div>
                <div className="product-photo" data-parallax="0.12">
                  {" "}
                  <span className="photo-tag">CAC+ · Aftertreatment Module</span>
                  {" "}
                </div>
              </div>
              <div className="product-pane" data-pane="caps" data-label="Crematoriums">
                <div className="product-info">
                  <h3>Crematoriums Air Purification System</h3>
                  <p>
                    Eliminate visible smoke, odour, and community complaints. Built specifically for crematorium operations.
                  </p>
                  <ul>
                    <li>Eliminates visible smoke, odour, and public complaints</li>
                    <li>Captures both coarse and fine particulate matter</li>
                    <li className="content-updated">Optimised liquid discharge- closed-loop water system</li>
                    <li>Designed for continuous, reliable operation</li>
                    <li>Compliant with urban emission standards</li>
                  </ul>
                  {" "}
                  <a className="btn btn-success" href="/carbonfree-caps">
                    View Solution{" "}
                    <span className="arr">→</span>
                  </a>
                  {" "}
                </div>
                <div className="product-photo" data-parallax="0.12">
                  {" "}
                  <span className="photo-tag">CAPS · Stack Mounted</span>
                  {" "}
                </div>
              </div>
              <div className="product-pane" data-pane="ind" data-label="Heavy Industry">
                <div className="product-info">
                  <h3>APCD Hybrid ESP</h3>
                  <p>Custom-engineered emission control for boilers, furnaces, kilns and other industrial applications.</p>
                  <ul>
                    <li>Handles high dust loads and extreme temperatures</li>
                    <li>Captures both coarse and fine particulates effectively</li>
                    <li>Custom-built for your exact process and flue gas</li>
                    <li>Modular design- seamless integration with existing plants</li>
                    <li>Built for continuous operation- minimal downtime</li>
                  </ul>
                  {" "}
                  <a className="btn btn-success" href="/carbonfree-apcd">
                    View Solution{" "}
                    <span className="arr">→</span>
                  </a>
                  {" "}
                </div>
                <div className="product-photo" data-parallax="0.12">
                  {" "}
                  <span className="photo-tag">APCD · Plant Skid</span>
                  {" "}
                </div>
              </div>
              <div className="product-pane" data-pane="cc" data-label="Carbon Capture" style={{ display: "none" }}>
                <div className="product-info">
                  <h3>Carbon Capture Utilization & Storage</h3>
                  <p>
                    Turn your industrial emissions into carbon credits. Novorbis’s next frontier in industrial decarbonisation.
                  </p>
                  <ul>
                    <li>Converts emissions into measurable carbon credits</li>
                    <li>Aligned with India’s Carbon Credit Trading Scheme (CCTS)</li>
                    <li>Turns compliance into a revenue opportunity</li>
                    <li>Future-proofs operations against tightening regulations</li>
                    <li>Supports net-zero and ESG commitments</li>
                  </ul>
                  {" "}
                  <a className="btn btn-success" style={{ opacity: "0.38", pointerEvents: "none", cursor: "default" }}>Coming Soon</a>
                  {" "}
                </div>
                <div className="product-photo" data-parallax="0.12">
                  {" "}
                  <span className="photo-tag">CCUS · R&D Phase</span>
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="testimonials dark" id="testimonials">
        <div className="testimonials-inner">
          <div className="kicker">
            <span className="num">04</span>
            <span className="sep">/</span>
            <span className="label">What Our Partners Say</span>
          </div>
          <h2>
            Trusted across the industry.
            <br />
            Built for performance.
          </h2>
          <div className="testi-card-wrap">
            <div className="testi-swiper swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-card">
                    {" "}
                    <span className="bk bk-tl" />
                    <span className="bk bk-tr" />
                    {" "}
                    <span className="bk bk-bl" />
                    <span className="bk bk-br" />
                    {" "}
                    <div className="testi-logo-box">
                      <picture>
                        <source srcSet="/assets/images/homepage/Testimonials/Jaypee.webp" type="image/webp" />
                        {" "}
                        <img src="/assets/images/homepage/Testimonials/Jaypee.jpg" alt="Jaypee Infratech Limited" />
                        {" "}
                      </picture>
                    </div>
                    <p className="testi-quote">
                      “Novorbis Itus delivered a practical and efficient emission control solution aligned with our operational requirements. Their team demonstrated strong technical understanding, timely execution, and reliable support throughout deployment.”
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    {" "}
                    <span className="bk bk-tl" />
                    <span className="bk bk-tr" />
                    {" "}
                    <span className="bk bk-bl" />
                    <span className="bk bk-br" />
                    {" "}
                    <div className="testi-logo-box">
                      <picture>
                        <source srcSet="/assets/images/homepage/Testimonials/Kion.webp" type="image/webp" />
                        {" "}
                        <img src="/assets/images/homepage/Testimonials/Kion.jpg" alt="KION Group" />
                        {" "}
                      </picture>
                    </div>
                    <p className="testi-quote">
                      “The emission control system integrated smoothly into our facility operations and contributed toward improved environmental compliance objectives. We appreciated the professionalism and responsiveness of the Novorbis Itus team.”
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    {" "}
                    <span className="bk bk-tl" />
                    <span className="bk bk-tr" />
                    {" "}
                    <span className="bk bk-bl" />
                    <span className="bk bk-br" />
                    {" "}
                    <div className="testi-logo-box">
                      <picture>
                        <source srcSet="/assets/images/homepage/Testimonials/LNT.webp" type="image/webp" />
                        {" "}
                        <img src="/assets/images/homepage/Testimonials/LNT.jpg" alt="Larsen & Toubro Limited" />
                        {" "}
                      </picture>
                    </div>
                    <p className="testi-quote">
                      “Novorbis Itus provided a well-engineered solution for DG emission management with minimal operational disruption. Their technical expertise and execution capabilities made the implementation process efficient and dependable.”
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    {" "}
                    <span className="bk bk-tl" />
                    <span className="bk bk-tr" />
                    {" "}
                    <span className="bk bk-bl" />
                    <span className="bk bk-br" />
                    {" "}
                    <div className="testi-logo-box">
                      <picture>
                        <source srcSet="/assets/images/homepage/Testimonials/Unitech.webp" type="image/webp" />
                        {" "}
                        <img src="/assets/images/homepage/Testimonials/Unitech.jpg" alt="Unitech Limited" />
                        {" "}
                      </picture>
                    </div>
                    <p className="testi-quote">
                      “The team at Novorbis Itus offered a reliable and low-maintenance emission control solution that supported our compliance and sustainability initiatives. Their service approach was proactive and professional.”
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    {" "}
                    <span className="bk bk-tl" />
                    <span className="bk bk-tr" />
                    {" "}
                    <span className="bk bk-bl" />
                    <span className="bk bk-br" />
                    {" "}
                    <div className="testi-logo-box">
                      <picture>
                        <source srcSet="/assets/images/homepage/Testimonials/Asti.webp" type="image/webp" />
                        {" "}
                        <img src="/assets/images/homepage/Testimonials/Asti.jpg" alt="Asti Electronics India Pvt. Ltd." />
                        {" "}
                      </picture>
                    </div>
                    <p className="testi-quote">
                      “We found the Novorbis Itus solution effective in reducing visible emissions while maintaining operational efficiency. The installation and support teams were knowledgeable, cooperative, and technically sound.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <button className="testi-arrow prev" aria-label="Previous">
              {" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {" "}
            </button>
            {" "}
            <button className="testi-arrow next" aria-label="Next">
              {" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {" "}
            </button>
            {" "}
          </div>
          <div className="testi-dots" />
        </div>
      </section>
      {" "}
      <section className="faq dark" id="faq">
        <div className="faq-inner">
          <div className="faq-header">
            <div className="kicker">
              <span className="num">05</span>
              <span className="sep">/</span>
              <span className="label">Questions Before Commitment</span>
            </div>
            <h2>
              The answers to the
              <br />
              questions we hear most.
            </h2>
          </div>
          <div className="faq-grid stagger">
            <div className="faq-item">
              {" "}
              <span className="q-tag">Q · 01</span>
              {" "}
              <h4>How long does an installation take?</h4>
              <p>
                Manufacturing to installation is completed within 1 month, depending on your equipment type and site conditions.
              </p>
            </div>
            <div className="faq-item">
              {" "}
              <span className="q-tag">Q · 02</span>
              {" "}
              <h4>What’s the warranty coverage?</h4>
              <p>We back every system with a 20-year performance guarantee covering parts and labor.</p>
            </div>
            <div className="faq-item">
              {" "}
              <span className="q-tag">Q · 03</span>
              {" "}
              <h4>What about maintenance costs?</h4>
              <p>Maintenance costs drop to nearly zero with our filterless design and fully automated operation.</p>
            </div>
            <div className="faq-item">
              {" "}
              <span className="q-tag">Q · 04</span>
              {" "}
              <h4>Is Novorbis on the CPCB approved vendor list?</h4>
              <p>Yes, CPCB IV+ compliance is built into every system we deliver.</p>
            </div>
            <div className="faq-item">
              {" "}
              <span className="q-tag">Q · 05</span>
              {" "}
              <h4>Is the filterless system safe? Does it create electrical hazards?</h4>
              <p>No. The high-voltage field is fully enclosed with no exposed live parts.</p>
            </div>
            <div className="faq-item">
              {" "}
              <span className="q-tag">Q · 06</span>
              {" "}
              <h4>Is filterless technology expensive to maintain?</h4>
              <p>
                Quite the opposite. No filters or consumables means near-zero operating costs. Maintenance is minimal, and total ownership cost is lower over time.
              </p>
            </div>
            <div className="faq-item">
              {" "}
              <span className="q-tag">Q · 07</span>
              {" "}
              <h4>What happens if the system develops a fault, how will I know?</h4>
              <p>
                OBD-based monitoring, differential pressure sensing, and NOx/temperature control enable real-time diagnostics and automated system management.
              </p>
            </div>
          </div>
          <div className="faq-foot">
            <p>Still have questions? Get answers tailored to your needs.</p>
            {" "}
            <a className="btn btn-dark-solid" href="#contact">
              Contact Us{" "}
              <span className="arr">→</span>
            </a>
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <section className="closing light" id="contact">
        <div className="closing-inner">
          <h2>
            Tell us your operation.
            <br />
            We’ll handle the compliance.
          </h2>
          <p>
            Our engineering team will reach out to know more about your emission profile and design a custom solution.
          </p>
          <div className="closing-actions">
            {" "}
            <a className="btn btn-success" href="/contact-us">
              Contact Us{" "}
              <span className="arr">→</span>
            </a>
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <SiteFooter />
      {" "}
    </PageShell>
  );
}
