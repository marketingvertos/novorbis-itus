import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/products.css";
import "@/styles/legacy/cac-plus.css";

const meta: PageMeta = {
  "title": "CarbonFree Advanced Catalyst+ Emission Control System for DG Sets",
  "tags": [
    {
      "name": "description",
      "content": "Reduce particulate matter, CO, and hydrocarbons with CarbonFree Advanced Catalyst+. Smart monitoring, predictive maintenance, and CPCB-ready compliance."
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
      "content": "CarbonFree Advanced Catalyst+ Emission Control System for DG Sets"
    },
    {
      "property": "og:description",
      "content": "Reduce particulate matter, CO, and hydrocarbons with CarbonFree Advanced Catalyst+. Smart monitoring, predictive maintenance, and CPCB-ready compliance."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/cac-plus.html"
    },
    {
      "property": "og:image",
      "content": "https://novorbisitus.com/assets/images/homepage/Home_CAC.jpg"
    },
    {
      "name": "twitter:card",
      "content": "summary_large_image"
    },
    {
      "name": "twitter:title",
      "content": "CarbonFree Advanced Catalyst+ Emission Control System for DG Sets"
    },
    {
      "name": "twitter:description",
      "content": "Reduce particulate matter, CO, and hydrocarbons with CarbonFree Advanced Catalyst+. Smart monitoring, predictive maintenance, and CPCB-ready compliance."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/Home_CAC.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/cac-plus.html",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "CarbonFree Advanced Catalyst+",
      "brand": {
        "@type": "Brand",
        "name": "Novorbis"
      },
      "description": "Combined catalytic and electrostatic system that eliminates toxic gases and particulate smoke in one retrofit unit.",
      "url": "https://novorbisitus.com/cac-plus.html"
    }
  ]
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js",
  "/js/video.js",
  "/js/accordion.js",
  "/js/dg-form.js",
  "/js/forms.js",
  "https://challenges.cloudflare.com/turnstile/v0/api.js"
];

export default function CarbonfreeAdvancedCatalystPlus() {
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
              <span className="label">Solutions · Diesel Generators</span>
            </div>
            <h1 className="hero-headline">
              {" "}
              <span className="a">Kill the Toxic Gases & Smoke.</span>
              {" "}
              <span className="b">In One System.</span>
              {" "}
            </h1>
            <p className="hero-sub qc-mark">
              CarbonFree Advanced Catalyst+ cuts up to 95% of particulate matter and up to 90% of CO and hydrocarbons from your diesel generator exhaust, with built-in smart monitoring so you’re always inspection-ready.
            </p>
            <div className="hero-actions">
              {" "}
              <a className="btn btn-primary qc-mark" href="#contact">
                Contact Us{" "}
                <span className="arr">→</span>
              </a>
              {" "}
            </div>
            <div className="hero-certs qc-mark">
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
          <div className="hero-stage">
            {" "}
            <span className="bk bk-tl" />
            <span className="bk bk-tr" />
            {" "}
            <span className="bk bk-bl" />
            <span className="bk bk-br" />
            {" "}
            <picture>
              <source media="(max-width: 640px)" srcSet="/assets/images/DG-CAC/CAC_Hero-640.webp" type="image/webp" />
              <source media="(max-width: 1200px)" srcSet="/assets/images/DG-CAC/CAC_Hero-1200.webp" type="image/webp" />
              <source srcSet="/assets/images/DG-CAC/CAC_Hero-1920.webp" type="image/webp" />
              {" "}
              <img className="hero-stage-video" src="/assets/images/DG-CAC/CAC_Hero.jpg" alt="CarbonFree Advanced Catalyst+ — advanced catalyst aftertreatment module" aria-hidden="false" />
              {" "}
            </picture>
            {" "}
            <span className="hero-stage-tag qc-mark">CarbonFree Advanced Catalyst+ · Aftertreatment Module</span>
            {" "}
            <div className="hero-stage-readout r-tl">
              {" "}
              <span className="lbl">PM Reduction</span>
              {" "}
              <span className="val qc-mark">
                Up to 95%{" "}
                <em>Certified</em>
              </span>
              {" "}
            </div>
            <div className="hero-stage-readout r-br">
              {" "}
              <span className="lbl">Gases Removed</span>
              {" "}
              <span className="val">
                CO + HC{" "}
                <em>Eliminated</em>
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
                <span className="label">Reduced</span>
                <span className="rule" />
              </div>
              <div className="big">Up to 95%</div>
              <div className="sub-title">PM, CO & HC Reduction.</div>
              <div className="desc">
                Simultaneously eliminates up to 95% of PM and up to 90% of CO and hydrocarbons in a single retrofit device.
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
                <span className="label">Measured</span>
                <span className="rule" />
              </div>
              <div className="big">1.5–2.5 kPa</div>
              <div className="sub-title">Clean Filter Backpressure.</div>
              <div className="desc">Minimal exhaust restriction protects fuel efficiency with zero performance penalty.</div>
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
              <div className="sub-title">Unplanned Downtime.</div>
              <div className="desc">Dual sensors predict service needs to keep maintenance on your schedule.</div>
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
            <h2 className="qc-mark">Why CarbonFree Advanced Catalyst+ Leads The Way</h2>
            <p className="qc-mark">
              Smoke. Toxic gases. Fine particles. CarbonFree Advanced Catalyst+ eliminates all three simultaneously, with a self-cleaning filter and a smart controller that keeps your compliance records ready without you doing a thing.
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
              <h3>Advanced Oxidation Catalyst</h3>
              <p className="qc-mark">
                Converts CO and unburned hydrocarbons into CO₂ and water. No chemicals. No external energy. Works passively with exhaust heat.
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
              <h3>Ceramic Wall-Flow Particulate Filter</h3>
              <p>
                Captures up to 95% of fine soot and PM. Self-regenerates at normal exhaust temperatures. No manual cleaning or replacement ever.
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
              <h3>Smart Monitoring Controller</h3>
              <p>4 temperature sensors and 2 pressure sensors. Predictive alerts before service is needed.</p>
            </div>
          </div>
          <div className="dg-table-wrap">
            <table className="dg-table dg-table-4col">
              <thead>
                <tr>
                  <th />
                  <th className="qc-mark">
                    <span className="product-tag">Novorbis</span>
                    CAC+
                  </th>
                  <th>
                    <span className="product-tag">Conventional</span>
                    Passive DPF
                  </th>
                  <th>
                    <span className="product-tag">Conventional</span>
                    Active DPF
                  </th>
                  <th>
                    <span className="product-tag">Conventional</span>
                    DOC Only
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>PM Reduction</th>
                  <td>Up to 95%</td>
                  <td>60–80%</td>
                  <td>80–90%</td>
                  <td>30–40% only</td>
                </tr>
                <tr>
                  <th>CO Reduction</th>
                  <td>Up to 90%</td>
                  <td>None</td>
                  <td>None</td>
                  <td>Up to 90%</td>
                </tr>
                <tr>
                  <th>HC Reduction</th>
                  <td>Up to 90%</td>
                  <td>None</td>
                  <td>None</td>
                  <td>Up to 90%</td>
                </tr>
                <tr>
                  <th>CPCB Compliance</th>
                  <td>
                    <span className="ok">Full: Certified RECD</span>
                  </td>
                  <td>Partial</td>
                  <td>Partial</td>
                  <td>Gases only</td>
                </tr>
                <tr>
                  <th>Engine Backpressure</th>
                  <td>Low (1.5–2.5 kPa)</td>
                  <td>
                    <span className="bad">High: rises with soot</span>
                  </td>
                  <td>Moderate</td>
                  <td>Near zero</td>
                </tr>
                <tr>
                  <th>Engine Fuel Penalty</th>
                  <td>
                    <span className="ok">None</span>
                  </td>
                  <td>
                    <span className="bad">Yes: worsens over time</span>
                  </td>
                  <td>Moderate</td>
                  <td>None</td>
                </tr>
                <tr>
                  <th>Regeneration Method</th>
                  <td>Passive: fully automatic</td>
                  <td>Passive: unreliable</td>
                  <td>Active: needs fuel injection</td>
                  <td>Not applicable</td>
                </tr>
                <tr>
                  <th>Heavy-Duty DG Sets</th>
                  <td>
                    <span className="ok">Yes: 30–3000 kVA</span>
                  </td>
                  <td>Limited</td>
                  <td>Limited</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <th>Filter / Consumable Cost</th>
                  <td>
                    <span className="ok">None</span>
                  </td>
                  <td>Regular replacement</td>
                  <td>Regular replacement</td>
                  <td>None</td>
                </tr>
                <tr>
                  <th>Maintenance Model</th>
                  <td>Predictive: app alert before failure</td>
                  <td>Reactive: fails first</td>
                  <td>Scheduled: fixed interval</td>
                  <td>Periodic inspection</td>
                </tr>
                <tr>
                  <th>Unplanned Downtime</th>
                  <td>
                    <span className="ok">Very low</span>
                  </td>
                  <td>
                    <span className="bad">High: no warning</span>
                  </td>
                  <td>Moderate</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <th>Real-Time Monitoring</th>
                  <td>
                    <span className="ok">Built in</span>
                  </td>
                  <td>
                    <span className="bad">Not available</span>
                  </td>
                  <td>Basic only</td>
                  <td>
                    <span className="bad">Not available</span>
                  </td>
                </tr>
                <tr>
                  <th>Predictive Service Alerts</th>
                  <td>
                    <span className="ok">Yes: mobile app</span>
                  </td>
                  <td>
                    <span className="bad">No</span>
                  </td>
                  <td>
                    <span className="bad">No</span>
                  </td>
                  <td>
                    <span className="bad">No</span>
                  </td>
                </tr>
                <tr>
                  <th>Remote Data Access (IoT)</th>
                  <td>
                    <span className="ok">Yes: Wi-Fi, RS-485, USB</span>
                  </td>
                  <td>
                    <span className="bad">No</span>
                  </td>
                  <td>
                    <span className="bad">No</span>
                  </td>
                  <td>
                    <span className="bad">No</span>
                  </td>
                </tr>
                <tr>
                  <th>Audit-Ready Logs</th>
                  <td>
                    <span className="ok">Yes: auto-logged</span>
                  </td>
                  <td>
                    <span className="bad">No</span>
                  </td>
                  <td>
                    <span className="bad">No</span>
                  </td>
                  <td>
                    <span className="bad">No</span>
                  </td>
                </tr>
                <tr>
                  <th>Fault Detection</th>
                  <td>
                    <span className="ok">Yes: 5 fault types</span>
                  </td>
                  <td>
                    <span className="bad">None</span>
                  </td>
                  <td>Basic only</td>
                  <td>
                    <span className="bad">None</span>
                  </td>
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
            <h2>Inside Our Technology: How We Clean Your Exhaust.</h2>
            <p className="qc-mark">
              See the science behind the CAC+ system. Built to eliminate PM, CO, and hydrocarbons in a single pass, automatically.
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
                <p className="what">
                  Hot exhaust gas from your DG set flows in. The catalyst housing prepares it for treatment. No pressure build-up, no engine load added.
                </p>
                {" "}
                <span className="result">Exhaust Enters</span>
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
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Catalyst converts CO and HC into CO2 and H2O">
                  <rect width="120" height="120" fill="#07090c" />
                  <rect x="22" y="22" width="76" height="76" rx="2" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <g stroke="rgba(255,255,255,0.42)" strokeWidth="0.7" fill="none" transform="translate(-3,4)">
                    <polygon points="36,32 42,30 48,32 48,38 42,40 36,38" />
                    <polygon points="50,32 56,30 62,32 62,38 56,40 50,38" />
                    <polygon points="64,32 70,30 76,32 76,38 70,40 64,38" />
                    <polygon points="78,32 84,30 90,32 90,38 84,40 78,38" />
                    <polygon points="36,46 42,44 48,46 48,52 42,54 36,52" />
                    <polygon points="50,46 56,44 62,46 62,52 56,54 50,52" />
                    <polygon points="64,46 70,44 76,46 76,52 70,54 64,52" />
                    <polygon points="78,46 84,44 90,46 90,52 84,54 78,52" />
                    <polygon points="36,60 42,58 48,60 48,66 42,68 36,66" />
                    <polygon points="50,60 56,58 62,60 62,66 56,68 50,66" />
                    <polygon points="64,60 70,58 76,60 76,66 70,68 64,66" />
                    <polygon points="78,60 84,58 90,60 90,66 84,68 78,66" />
                    <polygon points="36,74 42,72 48,74 48,80 42,82 36,80" />
                    <polygon points="50,74 56,72 62,74 62,80 56,82 50,80" />
                    <polygon points="64,74 70,72 76,74 76,80 70,82 64,80" />
                    <polygon points="78,74 84,72 90,74 90,80 84,82 78,80" />
                  </g>
                  {" "}
                  <text x="2" y="34" fontFamily="Inter, system-ui, sans-serif" fontSize="7" fill="rgba(255,90,90,0.85)">CO</text>
                  {" "}
                  <text x="2" y="46" fontFamily="Inter, system-ui, sans-serif" fontSize="7" fill="rgba(255,170,90,0.85)">HC</text>
                  {" "}
                  <line x1="3" y1="57" x2="17" y2="57" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                  <polygon points="16,54.5 16,59.5 20,57" fill="rgba(255,255,255,0.6)" />
                  {" "}
                  <text x="100" y="66" fontFamily="Inter, system-ui, sans-serif" fontSize="7" fill="rgba(61,220,164,0.85)">CO₂</text>
                  {" "}
                  <text x="100" y="78" fontFamily="Inter, system-ui, sans-serif" fontSize="7" fill="rgba(61,220,164,0.85)">H₂O</text>
                  {" "}
                  <line x1="100" y1="89" x2="114" y2="89" stroke="rgba(61,220,164,0.85)" strokeWidth="1" />
                  <polygon points="113,86.5 113,91.5 117,89" fill="rgba(61,220,164,0.85)" />
                </svg>
                {" "}
              </div>
              <div className="body">
                <div className="name-row wrap-down">
                  <span className="name">Step 02</span>
                  <span className="tag">Catalyst</span>
                </div>
                <p className="what">
                  The precious-metal-coated catalyst breaks down carbon monoxide and hydrocarbons into CO
                  <sub>2</sub>
                  {" "}and water. No chemicals. No external power.
                </p>
                {" "}
                <span className="result">Gases Converted</span>
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
                  <rect x="20" y="28" width="80" height="64" rx="2" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <g stroke="rgba(255,255,255,0.32)" strokeWidth="0.8">
                    <line x1="20" y1="36" x2="100" y2="36" />
                    <line x1="20" y1="44" x2="100" y2="44" />
                    <line x1="20" y1="52" x2="100" y2="52" />
                    <line x1="20" y1="60" x2="100" y2="60" />
                    <line x1="20" y1="68" x2="100" y2="68" />
                    <line x1="20" y1="76" x2="100" y2="76" />
                    <line x1="20" y1="84" x2="100" y2="84" />
                  </g>
                  <circle cx="34" cy="48" r="1.6" fill="rgba(255,255,255,0.75)" />
                  <circle cx="48" cy="48" r="1.6" fill="rgba(255,255,255,0.75)" />
                  <circle cx="62" cy="48" r="1.6" fill="rgba(255,255,255,0.75)" />
                  <circle cx="44" cy="64" r="1.6" fill="rgba(255,255,255,0.75)" />
                  <circle cx="58" cy="64" r="1.6" fill="rgba(255,255,255,0.75)" />
                  <circle cx="36" cy="80" r="1.6" fill="rgba(255,255,255,0.75)" />
                  <circle cx="56" cy="80" r="1.6" fill="rgba(255,255,255,0.75)" />
                  <g transform="translate(82, 12)">
                    <path d="M 8 14 C 8 8 4 6 4 2 C 2 6 0 8 0 12 C 0 16 4 18 4 16 C 4 13 6 13 6 16 C 6 18 12 16 12 12 C 12 10 10 8 8 14 Z" fill="rgba(255,160,80,0.85)" stroke="rgba(255,200,140,0.95)" strokeWidth="0.6" />
                  </g>
                </svg>
                {" "}
              </div>
              <div className="body">
                <div className="name-row wrap-down">
                  <span className="name">Step 03</span>
                  <span className="tag">Wall-Flow Filter</span>
                </div>
                <p className="what">
                  Fine particulate matter is forced into the porous ceramic filter walls and retained. The filter self-cleans using normal exhaust heat. No active intervention needed.
                </p>
                {" "}
                <span className="result">Soot Captured</span>
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
                  <rect x="22" y="22" width="76" height="60" rx="2" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <line x1="30" y1="36" x2="90" y2="36" stroke="rgba(255,255,255,0.32)" strokeWidth="0.6" />
                  <line x1="30" y1="46" x2="90" y2="46" stroke="rgba(255,255,255,0.32)" strokeWidth="0.6" />
                  <line x1="30" y1="56" x2="90" y2="56" stroke="rgba(255,255,255,0.32)" strokeWidth="0.6" />
                  <line x1="30" y1="66" x2="90" y2="66" stroke="rgba(255,255,255,0.32)" strokeWidth="0.6" />
                  {" "}
                  {" "}
                  <g fill="rgba(61,220,164,0.85)">
                    <circle cx="34" cy="36" r="1.4" />
                    <circle cx="56" cy="36" r="1.4" />
                    <circle cx="78" cy="36" r="1.4" />
                    <circle cx="86" cy="46" r="1.4" />
                  </g>
                  <g fill="rgba(90,167,255,0.85)">
                    <circle cx="34" cy="56" r="1.4" />
                    <circle cx="78" cy="66" r="1.4" />
                  </g>
                  <rect x="46" y="88" width="28" height="14" rx="2" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
                  <line x1="60" y1="82" x2="60" y2="88" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
                  {" "}
                  <text x="60" y="112" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="6.5">
                    <tspan fill="rgba(61,220,164,0.85)">4×TEMP</tspan>
                    <tspan fill="rgba(255,255,255,0.35)">·</tspan>
                    <tspan fill="rgba(90,167,255,0.85)">2×PRESSURE</tspan>
                  </text>
                  {" "}
                </svg>
                {" "}
              </div>
              <div className="body">
                <div className="name-row wrap-down">
                  <span className="name">Step 04</span>
                  <span className="tag">Telemetry</span>
                </div>
                <p className="what">
                  Dual pressure sensors and four temperature probes report to the onboard controller. You get live status on your phone and an alert before anything needs attention.
                </p>
                {" "}
                <span className="result">Monitored Every Second</span>
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
                    <line x1="30" y1="60" x2="40" y2="60" />
                    <line x1="50" y1="60" x2="60" y2="60" />
                    <line x1="70" y1="60" x2="80" y2="60" />
                    <line x1="90" y1="60" x2="100" y2="60" />
                  </g>
                  {" "}
                  <text x="14" y="32" fontFamily="Inter, system-ui, sans-serif" fontSize="7" fill="rgba(61,220,164,0.85)">CLEAN EXHAUST OUT</text>
                  {" "}
                  <text x="14" y="98" fontFamily="Inter, system-ui, sans-serif" fontSize="6.5" fill="rgba(255,255,255,0.42)">95% less PM · 90% less CO/HC · CPCB-compliant</text>
                  {" "}
                </svg>
                {" "}
              </div>
              <div className="body">
                <div className="name-row wrap-down" style={{ textAlign: "center" }}>
                  <span className="name content-updated">Step 05</span>
                  <span className="tag content-updated">Output</span>
                </div>
                <p className="what">Up to 95% fewer particles. Up to 90% less CO and HC. Your DG set meets CPCB norms. Full stop.</p>
                {" "}
                <span className="result" style={{ alignSelf: "center" }}>Clean Gas Exits</span>
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
              <span className="label">Why Novorbis</span>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
                </svg>
              </div>
              <h3>Active Precious Metal Coating</h3>
              <p>
                Coated ceramic filter lowers regeneration temperatures and expands surface area. It actively burns off trapped soot using the generator’s normal operating heat.
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
              </div>
              <h3>Custom Engineering</h3>
              <p>
                Available in 8 custom models matched to DG ratings from 30 kVA to 3000 kVA. We verify footprint dimensions beforehand to guarantee a perfect on-site fit.
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 12h4l2-5 4 12 2-7h6" />
                  <circle cx="20" cy="6" r="2" />
                </svg>
              </div>
              <h3>Dual Stage Pressure Sensing</h3>
              <p>
                Independent pressure monitoring across both the catalyst and particulate filter isolates errors instantly. No hidden blockages or guessing games.
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
                <span className="num">06</span>
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
                  <span>12 min read</span>
                </div>
                <h3>
                  How electrostatic precipitation beats wet scrubbers on{" "}
                  <span className="content-updated">
                    PM
                    <sub>2.5</sub>
                  </span>
                  {" "}capture
                </h3>
                <p>The catalytic chemistry and field data behind the CAC+ multi-pollutant aftertreatment system.</p>
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
                  <span>7 min read</span>
                </div>
                <h3>CPCB RECD mandates for diesel gensets: what's actually required in 2026</h3>
                <p>Consent-to-Operate thresholds, drain discharge rules, and what inspectors will ask for.</p>
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
                  <span>8 min read</span>
                </div>
                <h3>A commercial facility, 18 months on CarbonFree Advanced Catalyst+</h3>
                <p>From visible-smoke complaints to a clean-air stack: what the audit logs say.</p>
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
              <span className="label">Get a Consultation</span>
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
            <form className="dg-form" id="dgForm" data-form-source="dg-cac-plus" noValidate>
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
