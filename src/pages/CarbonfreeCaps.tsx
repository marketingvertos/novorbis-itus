import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/products.css";
import "@/styles/legacy/caps-crematoriums.css";

const meta: PageMeta = {
  "title": "Crematoriums Air Purification System (CarbonFree CAPS)",
  "tags": [
    {
      "name": "description",
      "content": "Eliminate smoke, odour, and harmful emissions with CarbonFree CAPS. Advanced crematorium air purification systems engineered for urban compliance in India."
    },
    {
      "name": "robots",
      "content": "index, follow"
    },
    {
      "property": "og:type",
      "content": "article"
    },
    {
      "property": "og:site_name",
      "content": "Novorbis"
    },
    {
      "property": "og:title",
      "content": "Crematoriums Air Purification System (CarbonFree CAPS)"
    },
    {
      "property": "og:description",
      "content": "Eliminate smoke, odour, and harmful emissions with CarbonFree CAPS. Advanced crematorium air purification systems engineered for urban compliance in India."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/caps-crematoriums.html"
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
      "content": "Crematoriums Air Purification System (CarbonFree CAPS)"
    },
    {
      "name": "twitter:description",
      "content": "Eliminate smoke, odour, and harmful emissions with CarbonFree CAPS. Advanced crematorium air purification systems engineered for urban compliance in India."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/caps-crematoriums.html",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Crematoriums Air Purification System",
      "brand": {
        "@type": "Brand",
        "name": "Novorbis"
      },
      "description": "Air purification system for crematoriums — eliminates smoke, odour and toxic particulates from cremation exhausts.",
      "url": "https://novorbisitus.com/caps-crematoriums.html"
    }
  ]
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js",
  "/js/video.js",
  "/js/accordion.js",
  "/js/forms.js",
  "https://challenges.cloudflare.com/turnstile/v0/api.js"
];

export default function CarbonfreeCaps() {
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
      {" "}
      <SiteNav active="solutions" />
      {" "}
      <section className="hero dark" id="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="kicker">
              <span className="num">01</span>
              <span className="sep">/</span>
              <span className="label">Solutions · Crematoriums</span>
            </div>
            <h1 className="hero-headline">
              {" "}
              <span className="a">The Future of</span>
              {" "}
              <span className="b">Cleaner Cremation Operations.</span>
              {" "}
            </h1>
            <p className="hero-sub">
              Urban cremation should not mean urban pollution. Upgrade to India’s most advanced Crematoriums Air Purification System (CarbonFree CAPS), eliminating smoke, odour, and over 90% of harmful particulate emissions before release.
            </p>
            <div className="hero-actions">
              {" "}
              <a className="btn btn-primary qc-mark" href="#contact">
                Contact Us{" "}
                <span className="arr">→</span>
              </a>
              {" "}
            </div>
            <div className="hero-certs content-updated">
              {" "}
              <span className="cert-chip">
                <span className="cert-dot" />
                Aligned with India's Net-Zero mission.
              </span>
              {" "}
            </div>
          </div>
          <div className="hero-stage">
            {" "}
            <span className="bk bk-tl" />
            <span className="bk bk-tr" />
            {" "}
            <span className="bk bk-bl" />
            <span className="bk bk-br" />
            {" "}
            <picture>
              <source media="(max-width: 640px)" srcSet="/assets/images/caps-crematoriums/CAPS-hero-640.webp" type="image/webp" />
              <source media="(max-width: 1200px)" srcSet="/assets/images/caps-crematoriums/CAPS-hero-1200.webp" type="image/webp" />
              <source srcSet="/assets/images/caps-crematoriums/CAPS-hero-1920.webp" type="image/webp" />
              {" "}
              <img className="hero-stage-video" src="/assets/images/caps-crematoriums/CAPS-hero.jpg" alt="CarbonFree CAPS — stack-mounted air purification system" aria-hidden="false" />
              {" "}
            </picture>
            {" "}
            <span className="hero-stage-tag">CarbonFree CAPS · Stack Mounted</span>
            {" "}
            <div className="hero-stage-readout r-tl">
              {" "}
              <span className="lbl">Capture</span>
              {" "}
              <span className="val qc-mark">
                Up to 95%{" "}
                <em className="content-updated">
                  PM
                  <sub>2.5/10</sub>
                </em>
              </span>
              {" "}
            </div>
            <div className="hero-stage-readout r-br">
              {" "}
              <span className="lbl">Discharge</span>
              {" "}
              <span className="val">
                Zero{" "}
                <em>Closed-Loop</em>
              </span>
              {" "}
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          {" "}
          <span>Scroll</span>
          {" "}
          <span className="line" />
          {" "}
        </div>
      </section>
      {" "}
      <section className="dg-perf" id="performance">
        <div className="dg-perf-inner">
          <div className="dg-perf-header reveal">
            <div className="kicker">
              <span className="num">02</span>
              <span className="sep">/</span>
              <span className="label">Novorbis Impact</span>
            </div>
            <h2>Certified Performance.</h2>
            <p>
              We don't just promise clean air, we prove it. Every system we deploy is independently tested and certified. Here's what that looks like in numbers.
            </p>
          </div>
          <div className="dg-perf-photo" data-parallax="0.12">
            {" "}
            <span className="bk bk-tl" />
            <span className="bk bk-tr" />
            {" "}
            <span className="bk bk-bl" />
            <span className="bk bk-br" />
            {" "}
          </div>
          <div className="dg-perf-stats stagger">
            <div className="dg-stat">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              {" "}
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="label-row">
                <span className="label">Engineered</span>
                <span className="rule" />
              </div>
              <div className="big">2-Stage</div>
              <div className="sub-title">Vortex System & ionic capture mechanism.</div>
              <div className="desc">Nothing leaves the stack untreated. Every cremation cycle, every time.</div>
            </div>
            <div className="dg-stat">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              {" "}
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="label-row">
                <span className="label">Captured</span>
                <span className="rule" />
              </div>
              <div className="big">95%</div>
              <div className="sub-title">PM₂.₅ & PM₁₀ Reduction.</div>
              <div className="desc">Captures up to 95% of PM₂.₅ and PM₁₀ particulates. Delivering cleaner, healthier air.</div>
            </div>
            <div className="dg-stat">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              {" "}
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="label-row">
                <span className="label">Discharge</span>
                <span className="rule" />
              </div>
              <div className="big">Optimized</div>
              <div className="sub-title">Liquid Discharge.</div>
              <div className="desc">
                Liquid discharge optimized to drain infrastructure periodically. Closed-loop ETP system with continuous water recirculation.
              </div>
            </div>
            <div className="dg-stat">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              {" "}
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="label-row">
                <span className="label">Uptime</span>
                <span className="rule" />
              </div>
              <div className="big">24/7</div>
              <div className="sub-title">Continuous Operation.</div>
              <div className="desc">
                Designed for uninterrupted crematorium operations. Reliable long-duration performance, no planned downtime needed.
              </div>
            </div>
            <div className="dg-stat">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              {" "}
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="label-row">
                <span className="label">Running Cost</span>
                <span className="rule" />
              </div>
              <div className="big">Zero</div>
              <div className="sub-title">Filter Replacements.</div>
              <div className="desc">No recurring consumable or filter replacement costs.</div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="dg-problem" id="problem">
        <div className="dg-problem-inner">
          <div className="dg-problem-header reveal">
            <div className="kicker">
              <span className="num">03</span>
              <span className="sep">/</span>
              <span className="label">Problem · Reality</span>
            </div>
            <h2>Smoke, Complaints & Compliance</h2>
            <p>
              Crematoriums are under immense pressure to eliminate visible smoke and meet strict environmental standards. We help you stay ahead of these growing demands.
            </p>
          </div>
          <div className="dg-accordion" id="dgAccordion">
            <div className="dg-acc-item open" data-acc="">
              {" "}
              <button className="dg-acc-toggle" type="button" aria-expanded="false">
                {" "}
                <span>Cost of Delay</span>
                {" "}
                <span className="acc-icon-wrap" aria-hidden="true" />
                {" "}
              </button>
              {" "}
              <div className="dg-acc-body">
                <div className="dg-acc-body-inner">
                  <div className="dg-acc-body-content">
                    <div className="dg-acc-icon">
                      <img src="/assets/icons/shared/prob-cost.svg" alt="" />
                    </div>
                    <div className="dg-acc-text">
                      <p>
                        Postponing upgrades leads to public opposition. Persistent smoke and odour issues can damage community trust and threaten long-term operational continuity.
                      </p>
                      <ul className="dg-acc-list">
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Community Trust:</strong>
                            {" "}Every day of visible smoke damages your reputation. The longer you wait, the harder it is to rebuild local goodwill.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Health Risks:</strong>
                            {" "}
                            <span className="content-updated">
                              PM
                              <sub>2.5/10</sub>
                            </span>
                            {" "}soot actively settles on nearby homes. Delay increases long-term impact on neighbours.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Rising Neighbourhood Tension:</strong>
                            {" "}Unresolved odours (VOCs) turn minor complaints into deep-seated resentment.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dg-acc-item" data-acc="">
              {" "}
              <button className="dg-acc-toggle" type="button" aria-expanded="false">
                {" "}
                <span>Harmful Emissions</span>
                {" "}
                <span className="acc-icon-wrap" aria-hidden="true" />
                {" "}
              </button>
              {" "}
              <div className="dg-acc-body">
                <div className="dg-acc-body-inner">
                  <div className="dg-acc-body-content">
                    <div className="dg-acc-icon">
                      <img src="/assets/icons/shared/prob-harmful.svg" alt="" />
                    </div>
                    <div className="dg-acc-text">
                      <p>
                        One cremation cycle emits as much pollution as driving a car 3,600 km. Since these toxins are difficult to stabilize, they create dangerous “pollution hotspots” for families living nearby.
                      </p>
                      <ul className="dg-acc-list">
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>
                              Visible Soot (
                              <span className="content-updated">
                                PM
                                <sub>2.5/10</sub>
                              </span>
                              ):
                            </strong>
                            {" "}Fine smoke particles that settle on nearby buildings and lungs.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Odours & Chemicals (VOCs):</strong>
                            {" "}Organic compounds responsible for unpleasant smells and community complaints.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dg-problem-cta">
            {" "}
            <a className="btn btn-primary" href="/compliance-guide">
              Compliance Guidance{" "}
              <span className="arr">→</span>
            </a>
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <section className="dg-solution" id="solution">
        <div className="dg-solution-inner">
          <div className="dg-solution-header reveal">
            <div className="kicker">
              <span className="num">04</span>
              <span className="sep">/</span>
              <span className="label">The Solution</span>
            </div>
            <h2 className="qc-mark">Why CarbonFree CAPS Leads the Way</h2>
            <p>
              From visible soot to toxic odours, we’ve designed CAPS to neutralize every emission, ensuring your facility operates in total harmony with the community.
            </p>
          </div>
          <div className="dg-table-wrap">
            <div className="dg-table-overhead">
              <div />
              <div className="overhead-group">Crematorium Air Purification: head-to-head</div>
            </div>
            <table className="dg-table">
              <thead>
                <tr>
                  <th />
                  <th>
                    <span className="product-tag">Novorbis</span>
                    Crematoriums Air Purification System
                  </th>
                  <th>
                    <span className="product-tag">Alternative</span>
                    Cyclone Only
                  </th>
                  <th>
                    <span className="product-tag">Alternative</span>
                    Wet Scrubber Only
                  </th>
                  <th>
                    <span className="product-tag">Alternative</span>
                    Electric Cremation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Fine PM Removal</th>
                  <td>Up to 95% (IDT stage)</td>
                  <td>
                    Poor: misses{" "}
                    <span className="content-updated">
                      PM
                      <sub>2.5</sub>
                    </span>
                  </td>
                  <td>Moderate</td>
                  <td>High, but fuel dependent</td>
                </tr>
                <tr>
                  <th>Coarse PM Removal</th>
                  <td>Stage 1 Cyclone</td>
                  <td>Yes</td>
                  <td>Partial</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <th>Water Discharge</th>
                  <td className="qc-mark">Optimized Liquid Discharge</td>
                  <td>N/A</td>
                  <td>Effluent treatment needed separately</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <th>Retrofit on Existing</th>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Complex</td>
                  <td>Full replacement required</td>
                </tr>
                <tr>
                  <th>Urban / Sensitive Site Fit</th>
                  <td>Designed for this</td>
                  <td>Not sufficient</td>
                  <td>Partial</td>
                  <td className="qc-mark">High capex</td>
                </tr>
                <tr>
                  <th>Consumables / Media</th>
                  <td>None</td>
                  <td>None</td>
                  <td>Water + chemicals</td>
                  <td>Electricity</td>
                </tr>
                <tr>
                  <th>Maintenance Burden</th>
                  <td>Low</td>
                  <td>Very low</td>
                  <td>Medium: water treatment</td>
                  <td>Medium: equipment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dg-solution-foot">
            <p className="qc-mark">
              CarbonFree CAPS is built for facilities moving beyond basic scrubbers and partial-control systems. Delivering up to 95% cleaning efficiency that conventional systems cannot typically achieve.
            </p>
            {" "}
            <a className="btn btn-primary" href="#contact">
              Contact Us{" "}
              <span className="arr">→</span>
            </a>
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <section className="dg-how" id="how">
        <div className="dg-how-inner">
          <div className="dg-how-header reveal">
            <div className="kicker">
              <span className="num">05</span>
              <span className="sep">/</span>
              <span className="label">How It Works</span>
            </div>
            <h2>Two Stages. One Clean Outcome.</h2>
            <p>
              We’ve engineered a two-step purification process that guarantees a smoke-free discharge. We trap pollutants at every level so what leaves your stack is clean air.
            </p>
          </div>
          <div className="dg-how-cards stagger">
            <div className="dg-how-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="diagram">
                {" "}
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stage 1 — Dust Vortex cyclone separator">
                  <rect width="120" height="120" fill="#07090c" />
                  <defs>
                    <linearGradient id="cycBodyCaps" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.03" />
                      <stop offset="48%" stopColor="#ffffff" stopOpacity="0.14" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
                    </linearGradient>
                  </defs>
                  <path d="M 22 22 L 98 22 L 76 88 L 44 88 Z" fill="url(#cycBodyCaps)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <path d="M 44 88 Q 60 92.5 76 88" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="0.7" />
                  <path d="M 44 88 L 60 102 L 76 88" fill="url(#cycBodyCaps)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" />
                  <ellipse cx="60" cy="22" rx="38" ry="6.5" fill="#07090c" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
                  <ellipse cx="60" cy="21" rx="31" ry="4.2" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="0.6" />
                  <rect x="56" y="5" width="8" height="17" rx="1" fill="#07090c" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                  <rect x="17" y="11" width="15" height="8" rx="1" fill="#07090c" stroke="rgba(255,90,90,0.9)" strokeWidth="1.1" />
                  <line x1="8" y1="15" x2="17" y2="15" stroke="rgba(255,90,90,0.9)" strokeWidth="1.1" />
                  <polygon points="15.5,12.5 15.5,17.5 19.5,15" fill="rgba(255,90,90,0.9)" />
                  <g fill="none" strokeLinecap="round">
                    <path d="M 92.7 38 Q 61.3 30 30 46" stroke="rgba(61,220,164,0.30)" strokeWidth="0.9" />
                    <path d="M 87.3 54 Q 61.3 47 35.3 62" stroke="rgba(61,220,164,0.30)" strokeWidth="0.9" />
                    <path d="M 82 70 Q 61.3 64 40.7 78" stroke="rgba(61,220,164,0.30)" strokeWidth="0.9" />
                    <path d="M 24.7 30 Q 58.7 48 92.7 38" stroke="rgba(61,220,164,0.9)" strokeWidth="1.3" />
                    <path d="M 30 46 Q 58.6 63 87.3 54" stroke="rgba(61,220,164,0.9)" strokeWidth="1.3" />
                    <path d="M 35.3 62 Q 58.6 78 82 70" stroke="rgba(61,220,164,0.9)" strokeWidth="1.3" />
                  </g>
                  <circle cx="61.3" cy="36" r="1.1" fill="rgba(255,255,255,0.32)" />
                  <circle cx="48.5" cy="39.2" r="1.4" fill="rgba(255,255,255,0.85)" />
                  <circle cx="72.3" cy="41.5" r="1.3" fill="rgba(255,255,255,0.8)" />
                  <circle cx="52.9" cy="55.4" r="1.4" fill="rgba(255,255,255,0.85)" />
                  <circle cx="71.2" cy="57" r="1.3" fill="rgba(255,255,255,0.8)" />
                  <circle cx="58.6" cy="72" r="1.4" fill="rgba(255,255,255,0.85)" />
                  <circle cx="57" cy="84" r="1.3" fill="rgba(255,255,255,0.7)" />
                  <circle cx="60" cy="92" r="1.3" fill="rgba(255,255,255,0.8)" />
                  <circle cx="60" cy="99" r="1.0" fill="rgba(255,255,255,0.55)" />
                </svg>
                {" "}
              </div>
              <div className="body">
                <div className="name-row">
                  <span className="name">Stage 1</span>
                  <span className="tag">Dust Vortex System</span>
                </div>
                <p className="what">
                  Gas enters the cyclone chamber. Centrifugal force throws coarse particles to the wall, where they fall into the collection hopper. No filter media. No moving parts.
                </p>
                {" "}
                <span className="result">
                  Coarse PM (
                  <span className="content-updated">
                    PM
                    <sub>10</sub>
                  </span>
                  +), ash, large soot · bulk load removed before fine treatment
                </span>
                {" "}
              </div>
            </div>
            <div className="dg-how-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="diagram">
                {" "}
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  {" "}
                  {" "}
                  <rect x="14" y="22" width="92" height="76" rx="2" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  {" "}
                  {" "}
                  <line x1="6" y1="60" x2="14" y2="60" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <line x1="106" y1="60" x2="114" y2="60" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  {" "}
                  {" "}
                  <line x1="20" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.85)" strokeWidth="1.4" />
                  <line x1="20" y1="90" x2="100" y2="90" stroke="rgba(255,255,255,0.85)" strokeWidth="1.4" />
                  {" "}
                  {" "}
                  <line x1="22" y1="60" x2="98" y2="60" stroke="rgba(61,220,164,0.85)" strokeWidth="1" strokeDasharray="3 3" />
                  {" "}
                  {" "}
                  <text x="32" y="28" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fill="rgba(255,255,255,0.78)">+</text>
                  {" "}
                  <text x="56" y="28" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fill="rgba(255,255,255,0.78)">+</text>
                  {" "}
                  <text x="80" y="28" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fill="rgba(255,255,255,0.78)">+</text>
                  {" "}
                  <text x="32" y="98" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fill="rgba(255,255,255,0.78)">+</text>
                  {" "}
                  <text x="56" y="98" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fill="rgba(255,255,255,0.78)">+</text>
                  {" "}
                  <text x="80" y="98" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fill="rgba(255,255,255,0.78)">+</text>
                  {" "}
                  {" "}
                  <circle cx="42" cy="46" r="1.4" fill="rgba(61,220,164,0.85)" />
                  <circle cx="56" cy="40" r="1.4" fill="rgba(61,220,164,0.85)" />
                  <circle cx="76" cy="44" r="1.4" fill="rgba(61,220,164,0.85)" />
                  <circle cx="48" cy="78" r="1.4" fill="rgba(61,220,164,0.85)" />
                  <circle cx="68" cy="74" r="1.4" fill="rgba(61,220,164,0.85)" />
                  <circle cx="86" cy="80" r="1.4" fill="rgba(61,220,164,0.85)" />
                </svg>
                {" "}
              </div>
              <div className="body">
                <div className="name-row">
                  <span className="name">Stage 2</span>
                  <span className="tag">Ionic Deposition Technology (IDT)</span>
                </div>
                <p className="what">
                  A high-voltage field ionises fine particles in the airstream. Charged particles migrate and deposit onto grounded collection electrodes. No filter media. No backpressure penalty.
                </p>
                {" "}
                <span className="result">
                  Fine PM (
                  <span className="content-updated">
                    PM
                    <sub>2.5</sub>
                  </span>
                  {" "}/ sub-micron) · up to 95% capture, continuous
                </span>
                {" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="dg-whyus" id="why-us">
        <div className="dg-whyus-inner">
          <div className="dg-whyus-header reveal">
            <div className="kicker">
              <span className="num">06</span>
              <span className="sep">/</span>
              <span className="label">Why Us</span>
            </div>
            <h2 className="qc-mark">Why Crematorium Operators Choose CarbonFree CAPS</h2>
            <p className="qc-mark">
              There are generic industrial systems that can be retrofitted. Here is why facility managers and municipal bodies choose CarbonFree CAPS specifically.
            </p>
          </div>
          <div className="dg-whyus-grid stagger">
            <div className="dg-whyus-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <h3>Purpose-Built Technology</h3>
              <p>
                Every component is engineered to handle the high heat, particulate load, and odour compounds unique to cremation operations.
              </p>
            </div>
            <div className="dg-whyus-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3c-3 5-6 8-6 12a6 6 0 0 0 12 0c0-4-3-7-6-12z" />
                  <path d="M9 16a3 3 0 0 0 6 0" />
                </svg>
              </div>
              <h3 className="qc-mark">Optimized Liquid Discharge</h3>
              <p>
                A closed-loop system recycles all water internally. You won’t need any drainage infrastructure, perfect for strict urban compliance.
              </p>
            </div>
            <div className="dg-whyus-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="6" width="16" height="12" rx="1" />
                  <line x1="4" y1="10" x2="20" y2="10" />
                  <line x1="9" y1="6" x2="9" y2="18" />
                  <line x1="15" y1="6" x2="15" y2="18" />
                  <line x1="5" y1="4" x2="19" y2="20" />
                </svg>
              </div>
              <h3>No Filters, No Hassle</h3>
              <p>
                Eliminated physical filters entirely. No clogging, no expensive replacement parts, significantly lower daily running costs.
              </p>
            </div>
            <div className="dg-whyus-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="8" cy="9" r="3" />
                  <circle cx="16" cy="9" r="3" />
                  <path d="M3 20a5 5 0 0 1 10 0M11 20a5 5 0 0 1 10 0" />
                </svg>
              </div>
              <h3>Community-First Focus</h3>
              <p>
                Focused on what matters most: zero smoke and zero smell. The surest way to stop community complaints and avoid municipal pressure.
              </p>
            </div>
            <div className="dg-whyus-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6" />
                </svg>
              </div>
              <h3>One Partner, End-to-End</h3>
              <p>
                From initial site survey to installation and long-term support: we handle everything. No more juggling multiple vendors or accountability gaps.
              </p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="contact light" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <div className="kicker">
              <span className="num">07</span>
              <span className="sep">/</span>
              <span className="label">Get a Consultation</span>
            </div>
            <h2>Get a Technical Consultation</h2>
            <p>
              Submit your details below. Our engineering team will reach out to know more about your emission profile and design a custom solution.
            </p>
          </div>
          <form className="contact-form reveal" id="capsForm" data-form-source="caps" noValidate>
            {" "}
            <span className="bk bk-tl" />
            <span className="bk bk-tr" />
            {" "}
            <span className="bk bk-bl" />
            <span className="bk bk-br" />
            {" "}
            <div className="field-row">
              <div className="field">
                <label htmlFor="cf-name">Full Name</label>
                <input type="text" id="cf-name" name="name" placeholder="Rajesh Kumar" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="cf-phone">Phone</label>
                <input type="tel" id="cf-phone" name="phone" placeholder="+91 98765 43210" autoComplete="tel" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-email">Work Email</label>
              <input type="email" id="cf-email" name="email" placeholder="rajesh@company.com" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="cf-company">Company</label>
              <input type="text" id="cf-company" name="company" placeholder="Company name" autoComplete="organization" />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="cf-city">City</label>
                <input type="text" id="cf-city" name="city" placeholder="Mumbai" />
              </div>
              <div className="field">
                <label htmlFor="cf-state">State</label>
                <input type="text" id="cf-state" name="state" placeholder="Maharashtra" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-msg">
                Message{" "}
                <span style={{ opacity: "0.45", fontWeight: "400" }}>(optional)</span>
              </label>
              <textarea id="cf-msg" name="message" placeholder="Tell us about your equipment, capacity, current compliance status..." />
            </div>
            {" "}
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />
            {" "}
            <div className="cf-turnstile-wrap">
              <div className="cf-turnstile" data-sitekey="0x4AAAAAADWTNNKphv_pLG73" data-theme="light" />
            </div>
            <div className="submit-row">
              {" "}
              <button type="submit" className="btn btn-primary">
                Send My Enquiry{" "}
                <span className="arr">→</span>
              </button>
              {" "}
              <span className="small">Response within a few hours</span>
              {" "}
            </div>
          </form>
        </div>
      </section>
      {" "}
      <SiteFooter />
      {" "}
    </PageShell>
  );
}
