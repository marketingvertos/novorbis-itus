import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/products.css";
import "@/styles/legacy/carbonfree-esp.css";

const meta: PageMeta = {
  "title": "CarbonFree ESP | Filterless ESP Technology for DG Sets",
  "tags": [
    {
      "name": "description",
      "content": "Discover a filterless emission control system delivering up to 95% PM reduction with zero filter replacements and ultra-low backpressure."
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
      "content": "CarbonFree ESP | Filterless ESP Technology for DG Sets"
    },
    {
      "property": "og:description",
      "content": "Discover a filterless emission control system delivering up to 95% PM reduction with zero filter replacements and ultra-low backpressure."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/carbonfree-esp.html"
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
      "content": "CarbonFree ESP | Filterless ESP Technology for DG Sets"
    },
    {
      "name": "twitter:description",
      "content": "Discover a filterless emission control system delivering up to 95% PM reduction with zero filter replacements and ultra-low backpressure."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/carbonfree-esp.html",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "CarbonFree ESP Technology",
      "brand": {
        "@type": "Brand",
        "name": "Novorbis"
      },
      "description": "Electrostatic precipitator for industrial stacks — captures fine particulate matter with no filter media and no pressure drop.",
      "url": "https://novorbisitus.com/carbonfree-esp.html"
    }
  ]
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js",
  "/js/carbonfree-esp.js",
  "/js/dg-form.js",
  "/js/forms.js",
  "https://challenges.cloudflare.com/turnstile/v0/api.js"
];

export default function CarbonfreeEsp() {
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
      <section className="dg-hero" id="hero">
        <div className="dg-hero-pin">
          <div className="dg-hero-inner">
            <div className="dg-hero-copy">
              <div className="kicker dg-hero-kicker">
                <span className="num">01</span>
                <span className="sep">/</span>
                <span className="label">Solutions · Diesel Generators</span>
              </div>
              <h1 className="dg-hero-headline">
                {" "}
                <span className="head-a">
                  No Filters. No Clogging.
                  <br />
                  No Compromise.
                </span>
                {" "}
                <em>Meet CarbonFree ESP.</em>
                {" "}
              </h1>
            </div>
            <div className="dg-hero-side">
              <p>
                This filterless emission control technology uses electrostatic force to capture up to 95% of smoke and fine particles from your DG exhaust, without a single filter to replace, ever. CPCB certified, ARAI tested, and engineered to keep your engine running exactly as it should.
              </p>
              <div className="dg-hero-actions">
                {" "}
                <a className="btn btn-primary qc-mark" href="#contact">
                  Contact Us{" "}
                  <span className="arr">→</span>
                </a>
                {" "}
              </div>
              <div className="dg-hero-certs content-updated">
                {" "}
                <span className="cert-chip">
                  <span className="cert-dot" />
                  ARAI Certified
                </span>
                {" "}
                <span className="cert-chip">
                  <span className="cert-dot" />
                  CPCB Compliant
                </span>
                {" "}
              </div>
            </div>
          </div>
          <div className="dg-hero-stage" id="dgHeroStage">
            <div className="dg-hero-stage-canvas">
              <video className="dg-hero-stage-video" id="dgHeroVideo" muted playsInline preload="metadata" poster="/assets/images/diesel-generators/RECD-hero-poster.jpg" aria-hidden="true">
                <source src="/assets/videos/diesel-generators/RECD-Hero-scrub.mp4" type="video/mp4" />
              </video>
              <div className="dg-hero-smoke" id="dgHeroSmoke" aria-hidden="true" />
            </div>
            <div className="dg-hero-ground" />
          </div>
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
              We don’t just promise clean air, we prove it. Every system we deploy is independently tested and certified. Here’s what that looks like in numbers.
            </p>
          </div>
          <div className="dg-perf-photo" data-parallax="0.22">
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
                <span className="label">Deployed</span>
                <span className="rule" />
              </div>
              <div className="big">Up to 95%</div>
              <div className="sub-title">PM & Exhaust Reduction.</div>
              <div className="desc">Cleans your exhaust of fine particles at the source.</div>
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
                <span className="label">Reduced</span>
                <span className="rule" />
              </div>
              <div className="big content-updated">{"<0.7kPa"}</div>
              <div className="sub-title">Ultra-Low Pressure Drop.</div>
              <div className="desc">Our systems protect your engine’s health and maintain peak fuel efficiency.</div>
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
                <span className="label">Reduced</span>
                <span className="rule" />
              </div>
              <div className="big">Zero</div>
              <div className="sub-title">Filter Replacements.</div>
              <div className="desc">Engineered filterless. Eliminating every recurring cost that comes with conventional systems.</div>
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
                <span className="label">Guaranteed</span>
                <span className="rule" />
              </div>
              <div className="big">Zero</div>
              <div className="sub-title">Operational Downtime.</div>
              <div className="desc">Engineered for continuous operation. No interruptions to your facility from day one.</div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="dg-solution" id="solution">
        <div className="dg-solution-inner">
          <div className="dg-solution-header reveal">
            <div className="kicker">
              <span className="num">03</span>
              <span className="sep">/</span>
              <span className="label">The Solution</span>
            </div>
            <h2 className="qc-mark">Why CarbonFree ESP Leads The Way</h2>
            <p>
              A filterless RECD that uses Electrostatic Precipitation to trap up to 95% of particulate matter. Featuring near-zero pressure drop, zero consumables, and integrated OBD monitoring, it delivers full CPCB compliance at the market’s lowest lifecycle cost.
            </p>
          </div>
          <div className="dg-feature-grid stagger">
            <div className="dg-feature-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="feature-num">01</div>
              <h3>Filterless by Design</h3>
              <p>
                No filters to clog or replace. Cleanable electrodes minimise maintenance to optimise CAPEX and OPEX.
              </p>
            </div>
            <div className="dg-feature-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="feature-num">02</div>
              <h3>Zero Engine Load Penalty</h3>
              <p className="content-updated">
                {"Ultra-low pressure drop (<0.7kPa) protects your engine. Fuel, temperature, and power output remain completely unaffected."}
              </p>
            </div>
            <div className="dg-feature-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="feature-num">03</div>
              <h3>OBD-Integrated Monitoring</h3>
              <p>Automated OBD diagnostics monitor performance to preemptively block compliance failures.</p>
            </div>
          </div>
          <div className="dg-table-wrap">
            <table className="dg-table dg-table-2col">
              <thead>
                <tr>
                  <th />
                  <th className="qc-mark">
                    <span className="product-tag">Novorbis</span>
                    CarbonFree ESP{" "}
                    <span className="dim-small">(Filterless)</span>
                  </th>
                  <th>
                    <span className="product-tag">Conventional</span>
                    Filter Technology{" "}
                    <span className="dim-small">(Fabric / Ceramic)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Technology Principle</th>
                  <td>High-voltage ionic field. Particles deposited on electrodes. No filter media.</td>
                  <td>Exhaust forced through fabric or ceramic. PM physically trapped in media.</td>
                </tr>
                <tr>
                  <th>PM Removal Efficiency</th>
                  <td>Up to 95%</td>
                  <td>Above 99% when clean and dry. Degrades with clogging.</td>
                </tr>
                <tr>
                  <th>Fine PM2.5 Capture</th>
                  <td>
                    <span className="ok">Effective</span>
                  </td>
                  <td>
                    <span className="ok">Effective when clean</span>
                  </td>
                </tr>
                <tr>
                  <th>Pressure Drop</th>
                  <td className="content-updated">{"<0.7kPa — ultra-low"}</td>
                  <td>100–250 mmWC- high, worsens as filter loads</td>
                </tr>
                <tr>
                  <th>Engine Load Impact</th>
                  <td>
                    <span className="ok">Zero</span>
                  </td>
                  <td>
                    <span className="bad">Significant: reduces efficiency, increases fuel use</span>
                  </td>
                </tr>
                <tr>
                  <th>Consumables</th>
                  <td>None</td>
                  <td>Ceramic elements every 6–18 months</td>
                </tr>
                <tr>
                  <th>Maintenance Frequency</th>
                  <td>Minimal: periodic electrode cleaning</td>
                  <td>High: inspection, cleaning, and replacement cycles</td>
                </tr>
                <tr>
                  <th>OBD / Monitoring</th>
                  <td>
                    <span className="ok">Built in as standard</span>
                  </td>
                  <td>
                    <span className="bad">Manual inspection only</span>
                  </td>
                </tr>
                <tr>
                  <th>Compliance Longevity</th>
                  <td>
                    <span className="ok">Stable efficiency across system life</span>
                  </td>
                  <td>
                    <span className="bad">Degrades between replacements. Risk at high load or humidity.</span>
                  </td>
                </tr>
                <tr>
                  <th>Recurring OPEX</th>
                  <td>Lowest</td>
                  <td>High: consumables + labour accumulate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dg-solution-foot">
            {" "}
            <a className="btn btn-primary qc-mark" href="#contact">
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
              <span className="num">04</span>
              <span className="sep">/</span>
              <span className="label">How It Works</span>
            </div>
            <h2>Inside Our Technology. How We Clean Your Exhaust.</h2>
            <p>
              See the science behind our low-maintenance technology that transforms heavy diesel exhaust into clean air.
            </p>
          </div>
          <div className="dg-how-cards stagger">
            {" "}
            {" "}
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
                  <rect x="14" y="40" width="92" height="40" rx="2" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <line x1="2" y1="60" x2="14" y2="60" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <polygon points="14,56 14,64 22,60" fill="rgba(255,255,255,0.85)" />
                  <circle cx="32" cy="52" r="1.6" fill="rgba(180,180,180,0.7)" />
                  <circle cx="42" cy="64" r="1.4" fill="rgba(180,180,180,0.7)" />
                  <circle cx="52" cy="50" r="1.7" fill="rgba(180,180,180,0.7)" />
                  <circle cx="62" cy="68" r="1.4" fill="rgba(180,180,180,0.7)" />
                  <circle cx="72" cy="56" r="1.6" fill="rgba(180,180,180,0.7)" />
                  <circle cx="82" cy="64" r="1.4" fill="rgba(180,180,180,0.7)" />
                  <circle cx="92" cy="52" r="1.6" fill="rgba(180,180,180,0.7)" />
                  {" "}
                  <text x="14" y="32" fontFamily="Inter, system-ui, sans-serif" fontSize="7" fill="rgba(255,255,255,0.55)">EXHAUST IN</text>
                  {" "}
                </svg>
                {" "}
              </div>
              <div className="body">
                <div className="name-row wrap-down">
                  <span className="name">Step 01</span>
                  <span className="tag">Inlet</span>
                </div>
                <p className="what qc-mark">
                  Exhaust from your DG flows directly into the CarbonFree ESP through the inlet connected to your exhaust pipe. No pre-treatment needed. No warm-up time.
                </p>
                {" "}
                <span className="result">Dusty Gas Enters</span>
                {" "}
              </div>
            </div>
            {" "}
            {" "}
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
                  <rect x="14" y="30" width="92" height="60" rx="2" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <line x1="60" y1="34" x2="60" y2="86" stroke="rgba(255,255,255,0.85)" strokeWidth="1.4" strokeDasharray="3 2" />
                  <g stroke="rgba(90,167,255,0.65)" strokeWidth="0.8" fill="none">
                    <circle cx="60" cy="60" r="10" />
                    <circle cx="60" cy="60" r="16" />
                    <circle cx="60" cy="60" r="22" />
                  </g>
                  <circle cx="60" cy="60" r="3" fill="rgba(90,167,255,0.9)" />
                  {" "}
                  <text x="2" y="22" fontFamily="Inter, system-ui, sans-serif" fontSize="6.5" fill="rgba(90,167,255,0.85)">25-100 kV DC</text>
                  {" "}
                  <text x="64" y="100" fontFamily="Inter, system-ui, sans-serif" fontSize="7" fill="rgba(255,255,255,0.55)">ELECTRODE</text>
                  {" "}
                </svg>
                {" "}
              </div>
              <div className="body">
                <div className="name-row wrap-down">
                  <span className="name">Step 02</span>
                  <span className="tag">Ionisation</span>
                </div>
                <p className="what content-updated">
                  A central electrode is energised to create a glowing corona electric field, which breaks apart surrounding gas molecules into ions.
                </p>
                {" "}
                <span className="result">Corona Discharge</span>
                {" "}
              </div>
            </div>
            {" "}
            {" "}
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
                  <rect x="14" y="30" width="92" height="60" rx="2" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <line x1="60" y1="34" x2="60" y2="86" stroke="rgba(255,255,255,0.55)" strokeWidth="1" strokeDasharray="2 2" />
                  <g fill="rgba(180,180,180,0.85)">
                    <circle cx="34" cy="48" r="2" />
                    <circle cx="44" cy="68" r="2" />
                    <circle cx="76" cy="46" r="2" />
                    <circle cx="88" cy="68" r="2" />
                  </g>
                  <g stroke="rgba(90,167,255,0.85)" strokeWidth="0.6" fill="none">
                    <line x1="60" y1="48" x2="34" y2="48" />
                    <line x1="60" y1="68" x2="44" y2="68" />
                    <line x1="60" y1="46" x2="76" y2="46" />
                    <line x1="60" y1="68" x2="88" y2="68" />
                  </g>
                  {" "}
                  <text x="30" y="44" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fill="rgba(90,167,255,0.85)">−</text>
                  {" "}
                  <text x="40" y="64" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fill="rgba(90,167,255,0.85)">−</text>
                  {" "}
                  <text x="72" y="42" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fill="rgba(90,167,255,0.85)">−</text>
                  {" "}
                  <text x="84" y="64" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fill="rgba(90,167,255,0.85)">−</text>
                  {" "}
                </svg>
                {" "}
              </div>
              <div className="body">
                <div className="name-row wrap-down">
                  <span className="name">Step 03</span>
                  <span className="tag">Charging</span>
                </div>
                <p className="what">
                  The ions produced by the corona latch onto passing dust particles, transferring a strong negative electric charge to each particle like static electricity on a rubbed balloon.
                </p>
                {" "}
                <span className="result">Particles Get Charged</span>
                {" "}
              </div>
            </div>
            {" "}
            {" "}
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
                  <rect x="14" y="30" width="92" height="60" rx="2" fill="none" stroke="rgba(61,220,164,0.85)" strokeWidth="1.4" />
                  <line x1="60" y1="34" x2="60" y2="86" stroke="rgba(255,255,255,0.55)" strokeWidth="1" strokeDasharray="2 2" />
                  <g stroke="rgba(90,167,255,0.65)" strokeWidth="0.6" fill="none">
                    <line x1="50" y1="52" x2="20" y2="34" markerEnd="url(#arr)" />
                    <line x1="46" y1="60" x2="20" y2="60" markerEnd="url(#arr)" />
                    <line x1="52" y1="68" x2="22" y2="86" markerEnd="url(#arr)" />
                    <line x1="70" y1="52" x2="100" y2="34" />
                    <line x1="74" y1="60" x2="100" y2="60" />
                    <line x1="68" y1="68" x2="98" y2="86" />
                  </g>
                  <g fill="rgba(180,180,180,0.65)">
                    <circle cx="18" cy="36" r="2" />
                    <circle cx="18" cy="58" r="2" />
                    <circle cx="20" cy="84" r="2" />
                    <circle cx="100" cy="36" r="2" />
                    <circle cx="100" cy="58" r="2" />
                    <circle cx="98" cy="84" r="2" />
                  </g>
                  {" "}
                  <text x="2" y="22" fontFamily="Inter, system-ui, sans-serif" fontSize="6.5" fill="rgba(61,220,164,0.85)">GROUNDED WALL +</text>
                  {" "}
                </svg>
                {" "}
              </div>
              <div className="body">
                <div className="name-row wrap-down">
                  <span className="name">Step 04</span>
                  <span className="tag">Capture</span>
                </div>
                <p className="what">
                  The negatively charged dust is attracted to the grounded (positive) outer wall of the ESP tube. Particles drift sideways through the gas and stick firmly to the inner wall surface; the 360° radial field leaves no dead zones.
                </p>
                {" "}
                <span className="result">Particles Migrate</span>
                {" "}
              </div>
            </div>
            {" "}
            {" "}
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
                  <rect x="14" y="40" width="92" height="40" rx="2" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <line x1="106" y1="60" x2="118" y2="60" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <polygon points="106,56 106,64 114,60" fill="rgba(61,220,164,0.85)" />
                  <g stroke="rgba(255,255,255,0.45)" strokeWidth="0.7" fill="none">
                    <line x1="30" y1="60" x2="40" y2="60" markerEnd="url(#arr)" />
                    <line x1="50" y1="60" x2="60" y2="60" />
                    <line x1="70" y1="60" x2="80" y2="60" />
                    <line x1="90" y1="60" x2="100" y2="60" />
                  </g>
                  {" "}
                  <text x="14" y="32" fontFamily="Inter, system-ui, sans-serif" fontSize="7" fill="rgba(61,220,164,0.85)">CLEAN EXHAUST OUT</text>
                  {" "}
                  <text x="14" y="98" fontFamily="Inter, system-ui, sans-serif" fontSize="6.5" fill="rgba(255,255,255,0.42)">PM removed · CPCB-compliant</text>
                  {" "}
                </svg>
                {" "}
              </div>
              <div className="body">
                <div className="name-row wrap-down" style={{ textAlign: "center" }}>
                  <span className="name content-updated">Step 05</span>
                  <span className="tag content-updated">Output</span>
                </div>
                <p className="what">
                  With fine particles removed, the treated exhaust flows out through the outlet duct and up the chimney stack. Emission levels now meet government pollution norms.
                </p>
                {" "}
                <span className="result">Clean Gas Exits</span>
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
              <span className="num">05</span>
              <span className="sep">/</span>
              <span className="label">Why Us</span>
            </div>
            <h2>Why Our Clients Chose Us</h2>
            <p>There are other options on the CPCB vendor list. Here’s why our clients chose Novorbis.</p>
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
                  <path d="M3 12h3l3-7 4 14 3-7h5" />
                </svg>
              </div>
              <h3>Zero Backpressure, Zero Performance Loss</h3>
              <p>
                Unlike filter-based systems that add resistance as they load, electrostatic precipitation creates no exhaust restriction. Your generator’s fuel consumption and power output stay identical from day one to year five.
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
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3>Recognised Technology</h3>
              <p className="qc-mark">
                Independently validated beyond standard CPCB compliance. Our technology is formally recognised by NITI Aayog, the Ministry of Education’s Innovation Cell, and supported by the UNDP.
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
                  <path d="M4 21V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13M4 21h16M9 12h6M9 16h6" />
                </svg>
              </div>
              <h3>Proven Track Record with Major Brands</h3>
              <p>
                Trusted by rigorous procurement teams at the Indian Army, Google, Tata Projects, and Adani Realty. Our long-term operational success across high-stakes facilities eliminates deployment risk.
              </p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="related light" id="resources" style={{ display: "none" }}>
        <div className="related-inner">
          <div className="related-header">
            <div>
              <div className="kicker">
                <span className="num">07</span>
                <span className="sep">/</span>
                <span className="label">Reading</span>
              </div>
              <h2>Read deeper. Decide better.</h2>
            </div>
            {" "}
            <a href="#" className="all">All articles →</a>
            {" "}
          </div>
          <div className="related-grid stagger">
            {" "}
            <a className="related-card" href="#">
              {" "}
              <div className="related-cover cover-1">
                {" "}
                <span className="tag">Whitepaper</span>
                {" "}
              </div>
              {" "}
              <div className="related-body">
                <div className="related-meta">
                  <span>Engineering</span>
                  <span className="sep">/</span>
                  <span>14 min read</span>
                </div>
                <h3>Why electrostatic capture beats filtration on diesel exhaust</h3>
                <p>The physics, the math, and the field data behind the filterless RECD architecture.</p>
                {" "}
                <span className="read">Read whitepaper →</span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a className="related-card" href="#">
              {" "}
              <div className="related-cover cover-2">
                {" "}
                <span className="tag">Compliance</span>
                {" "}
              </div>
              {" "}
              <div className="related-body">
                <div className="related-meta">
                  <span>Regulation</span>
                  <span className="sep">/</span>
                  <span>6 min read</span>
                </div>
                <h3>CPCB Phase 2- what it actually means for genset operators in 2026</h3>
                <p>The deadlines, the load thresholds, and what your inspector is going to ask for.</p>
                {" "}
                <span className="read">Read article →</span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a className="related-card" href="#">
              {" "}
              <div className="related-cover cover-3">
                {" "}
                <span className="tag">Case Study</span>
                {" "}
              </div>
              {" "}
              <div className="related-body">
                <div className="related-meta">
                  <span>Field Report</span>
                  <span className="sep">/</span>
                  <span>9 min read</span>
                </div>
                <h3>A 1500 kVA hospital backup site: 24 months on Novorbis RECD</h3>
                <p>What the data says about uptime, fuel economy, and audit pass-rates.</p>
                {" "}
                <span className="read">Read case study →</span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <section className="contact light" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <div className="kicker">
              <span className="num">06</span>
              <span className="sep">/</span>
              <span className="label">Get in Touch</span>
            </div>
            <h2>Get a Technical Consultation</h2>
            <p>
              Submit your details below. Our engineering team will reach out to know more about your emission profile and design a custom solution.
            </p>
          </div>
          <div className="contact-form">
            {" "}
            <span className="bk bk-tl" />
            <span className="bk bk-tr" />
            {" "}
            <span className="bk bk-bl" />
            <span className="bk bk-br" />
            {" "}
            <form className="dg-form" id="dgForm" data-form-source="dg-esp" noValidate>
              <div className="field-row">
                <div className="field">
                  {" "}
                  <label htmlFor="f-name">Name</label>
                  {" "}
                  <input type="text" id="f-name" name="name" placeholder="Your name" required />
                  {" "}
                </div>
                <div className="field">
                  {" "}
                  <label htmlFor="f-phone">Phone</label>
                  {" "}
                  <input type="tel" id="f-phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                  {" "}
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  {" "}
                  <label htmlFor="f-email">Work Email</label>
                  {" "}
                  <input type="email" id="f-email" name="email" placeholder="you@company.com" required />
                  {" "}
                </div>
                <div className="field">
                  {" "}
                  <label htmlFor="f-company">Company</label>
                  {" "}
                  <input type="text" id="f-company" name="company" placeholder="Organisation name" required />
                  {" "}
                </div>
              </div>
              <div className="genset-section">
                <div className="genset-rows" id="gensetRows">
                  <div className="genset-row">
                    <div className="field">
                      {" "}
                      <label>Genset Capacity (KVA)</label>
                      {" "}
                      <input type="text" name="kva[]" placeholder="e.g. 500" />
                      {" "}
                    </div>
                    <div className="field">
                      {" "}
                      <label>No. of Gensets</label>
                      {" "}
                      <input type="text" name="genset_count[]" placeholder="e.g. 2" />
                      {" "}
                    </div>
                    {" "}
                    <button type="button" className="genset-remove" aria-label="Remove">×</button>
                    {" "}
                  </div>
                </div>
                {" "}
                <button type="button" className="genset-add-row" aria-label="Add genset">
                  {" "}
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  {" "}Add another genset{" "}
                </button>
                {" "}
              </div>
              <div className="field-row">
                <div className="field">
                  {" "}
                  <label htmlFor="f-city">City</label>
                  {" "}
                  <input type="text" id="f-city" name="city" placeholder="e.g. Mumbai" />
                  {" "}
                </div>
                <div className="field">
                  {" "}
                  <label htmlFor="f-state">State</label>
                  {" "}
                  <input type="text" id="f-state" name="state" placeholder="e.g. Maharashtra" />
                  {" "}
                </div>
              </div>
              <div className="field">
                {" "}
                <label htmlFor="f-message">
                  Message{" "}
                  <span style={{ fontWeight: "400", opacity: "0.6" }}>(Optional)</span>
                </label>
                {" "}
                <textarea id="f-message" name="message" placeholder="Tell us about your equipment, capacity, current compliance status..." />
                {" "}
              </div>
              <div className="cf-turnstile-wrap">
                <div className="cf-turnstile" data-sitekey="0x4AAAAAADWTNNKphv_pLG73" data-theme="light" />
              </div>
              <div className="submit-row">
                {" "}
                <button type="submit" className="btn btn-primary">
                  Send Enquiry{" "}
                  <span className="arr">→</span>
                </button>
                {" "}
              </div>
            </form>
          </div>
        </div>
      </section>
      {" "}
      <SiteFooter />
      {" "}
    </PageShell>
  );
}
