import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/products.css";
import "@/styles/legacy/ind-heavy.css";

const meta: PageMeta = {
  "title": "APCD Hybrid ESP | Boilers, Furnaces, Kilns & Industrial Plants",
  "tags": [
    {
      "name": "description",
      "content": "Custom-engineered APCD solutions for boilers, furnaces, kilns, and industrial plants. Achieve compliance with high-efficiency particulate removal systems."
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
      "content": "APCD Hybrid ESP | Boilers, Furnaces, Kilns & Industrial Plants"
    },
    {
      "property": "og:description",
      "content": "Custom-engineered APCD solutions for boilers, furnaces, kilns, and industrial plants. Achieve compliance with high-efficiency particulate removal systems."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/ind-heavy-industries.html"
    },
    {
      "property": "og:image",
      "content": "https://novorbisitus.com/assets/images/homepage/Home-APCD.jpg"
    },
    {
      "name": "twitter:card",
      "content": "summary_large_image"
    },
    {
      "name": "twitter:title",
      "content": "APCD Hybrid ESP | Boilers, Furnaces, Kilns & Industrial Plants"
    },
    {
      "name": "twitter:description",
      "content": "Custom-engineered APCD solutions for boilers, furnaces, kilns, and industrial plants. Achieve compliance with high-efficiency particulate removal systems."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/Home-APCD.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/ind-heavy-industries.html",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Air Pollution Control Device",
      "brand": {
        "@type": "Brand",
        "name": "Novorbis"
      },
      "description": "Air pollution control device for heavy industry — handles boilers, furnaces and kilns at high temperature and dust loads.",
      "url": "https://novorbisitus.com/ind-heavy-industries.html"
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

export default function CarbonfreeApcd() {
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
              <span className="label">Solutions · Heavy Industries</span>
            </div>
            <h1 className="hero-headline content-updated">
              {" "}
              <span className="a">High-Efficiency Emission Control for</span>
              {" "}
              <span className="b">Industrial Boilers, Furnaces & Kilns.</span>
              {" "}
            </h1>
            <p className="hero-sub content-updated">
              Tailored to your specific fuel footprint and combustion variables, APCD Hybrid Electrostatic Precipitator ensures surgical emission reduction and full compliance with CAQM Direction 98.
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
                CPCB
              </span>
              {" "}
              <span className="cert-chip">
                <span className="cert-dot" />
                CAQM
              </span>
              {" "}
              <span className="cert-chip">
                <span className="cert-dot" />
                NPC
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
              <source media="(max-width: 640px)" srcSet="/assets/images/ind-heavy-industries/APCD-Hero-640.webp" type="image/webp" />
              <source media="(max-width: 1200px)" srcSet="/assets/images/ind-heavy-industries/APCD-Hero-1200.webp" type="image/webp" />
              <source srcSet="/assets/images/ind-heavy-industries/APCD-Hero-1920.webp" type="image/webp" />
              {" "}
              <img className="hero-stage-video" src="/assets/images/ind-heavy-industries/APCD-Hero.jpg" alt="APCD Hybrid ESP — custom-engineered emission control" aria-hidden="false" />
              {" "}
            </picture>
            {" "}
            <span className="hero-stage-tag">APCD Hybrid ESP · Custom Engineered</span>
            {" "}
            <div className="hero-stage-readout r-tl">
              {" "}
              <span className="lbl">Capture</span>
              {" "}
              <span className="val">
                Up to 90%{" "}
                <em>PM</em>
              </span>
              {" "}
            </div>
            <div className="hero-stage-readout r-br">
              {" "}
              <span className="lbl">Outlet</span>
              {" "}
              <span className="val">
                {"<50"}{" "}
                <em>mg/Nm³</em>
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
                <span className="label">Captured</span>
                <span className="rule" />
              </div>
              <div className="big">Up to 90%</div>
              <div className="sub-title">High PM capture.</div>
              <div className="desc">PM Removal Efficiency. Captures everything from fine fly ash to coarse dust.</div>
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
                <span className="label">Inlet Load</span>
                <span className="rule" />
              </div>
              <div className="big">High PM</div>
              <div className="sub-title">Designed for High PM Load Inlet.</div>
              <div className="desc">Handles applications ranging from textile heaters to coal-fired boilers.</div>
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
              <div className="sub-title">Filter Replacements Required.</div>
              <div className="desc">No replacements, no recurring costs for the life of the system.</div>
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
                <span className="label">Outlet</span>
                <span className="rule" />
              </div>
              <div className="big">{"<50 mg/Nm³"}</div>
              <div className="sub-title">Outlet Target.</div>
              <div className="desc">Guaranteed alignment with CPCB emission norms.</div>
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
              <div className="big">100%</div>
              <div className="sub-title">Uptime Ready.</div>
              <div className="desc">Built for continuous 24/7 industrial operation.</div>
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
            <h2>Toxic Flue Gas. Stricter Norms. Growing Compliance Risk.</h2>
            <p className="qc-mark">
              {"Unchecked toxic flue gas destroys community health and triggers severe statutory penalties under today's strict <50 mg/Nm³ emission limits, turning your exhaust stream into your highest legal liability."}
            </p>
          </div>
          <div className="dg-accordion" id="dgAccordion">
            <div className="dg-acc-item open" data-acc="">
              {" "}
              <button className="dg-acc-toggle" type="button" aria-expanded="true">
                {" "}
                <span>Compliance Mandate</span>
                {" "}
                <span className="acc-icon-wrap" aria-hidden="true" />
                {" "}
              </button>
              {" "}
              <div className="dg-acc-body">
                <div className="dg-acc-body-inner">
                  <div className="dg-acc-body-content">
                    <div className="dg-acc-icon">
                      <img src="/assets/icons/shared/prob-compliance.svg" alt="" />
                    </div>
                    <div className="dg-acc-text">
                      <p>
                        India’s industrial emission regulations are tightening. Central and State Pollution Control Boards are deploying aggressive legal mechanisms and real-time monitoring to enforce strict air-quality standards across manufacturing zones.
                      </p>
                      <ul className="dg-acc-list">
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Strict 50 mg/Nm³ Ceiling:</strong>
                            {" "}{"Central policies mandate particulate limits of <50 mg/Nm³ for most industrial setups."}
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Surprise Stack Audits:</strong>
                            {" "}SPCBs regularly execute unannounced manual and continuous testing on operational flues.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>CTO Linked to History:</strong>
                            {" "}Consent to Operate renewals are now entirely contingent on your baseline emission track record.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>ESG Reporting Pressure:</strong>
                            {" "}Large industrial buyers demand documented stack-emission reductions from suppliers.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>NGT Public Petitions:</strong>
                            {" "}Non-compliant plants are increasingly named in NGT petitions filed by neighbouring communities.
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
                <span>Cost of Non-Compliance</span>
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
                        Failing to meet emission limits carries severe operational, commercial, and financial penalties. Under the CPCB’s “Polluter Pays” principle, regulators can levy compounding daily cash fines, enforce immediate utility cutoffs, and blacklist facilities from enterprise supply chains.
                      </p>
                      <ul className="dg-acc-list">
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Daily Fines:</strong>
                            {" "}Heavy, compounding daily penalties from regulators until your compliance is physically approved.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong className="content-updated">Factory Cease:</strong>
                            {" "}Immediate power and water cutoffs that freeze your production lines entirely.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Lost Contracts:</strong>
                            {" "}Blacklisting by major enterprise buyers who refuse to work with non-compliant vendors.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Wasted Fuel Costs:</strong>
                            {" "}High smoke output means poor combustion, budget blown on wasted fuel and energy.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Legal Prosecution:</strong>
                            {" "}Personal criminal liability and severe legal action for factory directors and owners.
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
                        Every time an industrial boiler, kiln, or furnace operates, it releases heavy volumes of hazardous pollutants into the atmosphere. The output creates immediate health hazards for local communities and transforms your stack into a major compliance liability.
                      </p>
                      <ul className="dg-acc-list">
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>
                              Coarse Particles (
                              <span className="content-updated">
                                PM
                                <sub>10</sub>
                              </span>
                              ):
                            </strong>
                            {" "}Visible stack emissions that trigger immediate inspection failures.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>
                              Fine Particles (
                              <span className="content-updated">
                                PM
                                <sub>2.5</sub>
                              </span>
                              ):
                            </strong>
                            {" "}Penetrates deep into lungs, causing severe chronic respiratory damage.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>
                              Sub-micron (
                              <span className="content-updated">
                                PM
                                <sub>1.0</sub>
                              </span>
                              ):
                            </strong>
                            {" "}Enters the bloodstream directly, creating systemic bodily risks.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Black Carbon / Soot:</strong>
                            {" "}Dense black smoke that acts as an instant regulatory red flag.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Metal Oxide Fumes:</strong>
                            {" "}Highly toxic, heavy-metal particulates released into the local plume.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Fly Ash:</strong>
                            {" "}High-volume particulate from coal combustion that standard traps fail to capture fully.
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Sticky / Hygroscopic PM:</strong>
                            {" "}From biomass/husk combustion, clogs conventional filters rapidly.
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
            <h2 className="qc-mark">Why APCD Hybrid Electrostatic Precipitator Leads the Way</h2>
            <p className="qc-mark">
              The APCD Hybrid Electrostatic Precipitator is not a standard, off-the-shelf catalog product. Every system we deploy is custom-engineered from the ground up to match your facility's specific fuel chemistry, flue gas volumetric flow, inlet particulate load, and regional statutory limits.
            </p>
          </div>
          <div className="dg-table-wrap">
            <div className="dg-table-overhead">
              <div />
              <div className="overhead-group">Industrial Air Pollution Control: head-to-head</div>
            </div>
            <table className="dg-table">
              <thead>
                <tr>
                  <th />
                  <th className="qc-mark">
                    <span className="product-tag">Novorbis</span>
                    APCD Hybrid Electrostatic Precipitator
                  </th>
                  <th>
                    <span className="product-tag">Alternative</span>
                    Conventional ESP
                  </th>
                  <th>
                    <span className="product-tag">Alternative</span>
                    Cyclone Only
                  </th>
                  <th>
                    <span className="product-tag">Alternative</span>
                    Bag Filter
                  </th>
                  <th>
                    <span className="product-tag">Alternative</span>
                    Wet Scrubber
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>PM Removal Efficiency</th>
                  <td>
                    <span className="ok">Very High</span>
                  </td>
                  <td>High</td>
                  <td>Low</td>
                  <td>High</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <th>Initial Cost</th>
                  <td>Moderate</td>
                  <td>High</td>
                  <td>Low</td>
                  <td>Moderate</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <th>Pressure Drop</th>
                  <td>
                    <span className="ok">Low</span>
                  </td>
                  <td>Low</td>
                  <td>Low</td>
                  <td>
                    <span className="bad">High</span>
                  </td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <th>Water Requirement</th>
                  <td>
                    <span className="ok">Minimal / Optional</span>
                  </td>
                  <td>Optional</td>
                  <td>None</td>
                  <td>None</td>
                  <td>
                    <span className="bad">High</span>
                  </td>
                </tr>
                <tr>
                  <th>Consumables</th>
                  <td>
                    <span className="ok">Very Low</span>
                  </td>
                  <td>Low</td>
                  <td>Low</td>
                  <td>
                    <span className="bad">Very High (Bags)</span>
                  </td>
                  <td>Chemicals + Water</td>
                </tr>
                <tr>
                  <th>Maintenance Frequency</th>
                  <td>
                    <span className="ok">Low</span>
                  </td>
                  <td>Moderate</td>
                  <td>Low</td>
                  <td>
                    <span className="bad">High</span>
                  </td>
                  <td>
                    <span className="bad">High</span>
                  </td>
                </tr>
                <tr>
                  <th>Suitability for Sticky PM</th>
                  <td>
                    <span className="ok">High</span>
                  </td>
                  <td>Moderate</td>
                  <td>
                    <span className="bad">Poor</span>
                  </td>
                  <td>Moderate</td>
                  <td>Excellent</td>
                </tr>
                <tr>
                  <th>Retrofit Feasibility</th>
                  <td>
                    <span className="ok">High</span>
                  </td>
                  <td>Moderate</td>
                  <td>High</td>
                  <td>Moderate</td>
                  <td>
                    <span className="bad">Difficult</span>
                  </td>
                </tr>
                <tr>
                  <th>Downtime Risk</th>
                  <td>
                    <span className="ok">Low</span>
                  </td>
                  <td>Moderate</td>
                  <td>Moderate</td>
                  <td>
                    <span className="bad">High</span>
                  </td>
                  <td>
                    <span className="bad">High</span>
                  </td>
                </tr>
                <tr>
                  <th>Lifecycle Operating Cost</th>
                  <td>
                    <span className="ok">Low</span>
                  </td>
                  <td>Moderate</td>
                  <td>Moderate</td>
                  <td>
                    <span className="bad">Very High</span>
                  </td>
                  <td>
                    <span className="bad">High</span>
                  </td>
                </tr>
                <tr>
                  <th>Expected Service Life</th>
                  <td>
                    <span className="ok">High</span>
                  </td>
                  <td>High</td>
                  <td>Moderate</td>
                  <td>Moderate</td>
                  <td>Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dg-solution-foot">
            <p>
              Our team will analyze your specific flue-gas profile and regional regulatory targets before recommending your custom Air Pollution Control Device layout.
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
            <h2>Smoke to Clear Air: How Your Exhaust Gets Cleaned.</h2>
            <p>
              Here’s what happens inside our system to clean your exhaust and keep your facility fully compliant every time your boiler, furnace, or kiln fires.
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
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stage 1 — Cyclone Separator">
                  <rect width="120" height="120" fill="#07090c" />
                  <defs>
                    <linearGradient id="cycBody" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.03" />
                      <stop offset="48%" stopColor="#ffffff" stopOpacity="0.14" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
                    </linearGradient>
                  </defs>
                  <path d="M 22 22 L 98 22 L 76 88 L 44 88 Z" fill="url(#cycBody)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  <path d="M 44 88 Q 60 92.5 76 88" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="0.7" />
                  <path d="M 44 88 L 60 102 L 76 88" fill="url(#cycBody)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" />
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
                <div className="name-row wrap-down">
                  <span className="name">Stage 1</span>
                  <span className="tag">Cyclone Separator</span>
                </div>
                <p className="what">
                  Dirty exhaust gas rushes into a spinning cyclone chamber. Spin force automatically throws heavy dust and ash against the walls, dropping them straight into a collection bin. No filter media. No moving parts.
                </p>
                {" "}
                <span className="result">
                  Coarse PM (
                  <span className="content-updated">
                    PM
                    <sub>10</sub>
                  </span>
                  +), ash, large soot · removes up to 70% of heavy load before fine treatment
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
                <div className="name-row wrap-down">
                  <span className="name">Stage 2</span>
                  <span className="tag">Electrostatic Precipitator (ESP)</span>
                </div>
                <p className="what">
                  A high-voltage field ionises fine particles in the airstream. Charged particles migrate and deposit onto grounded collection electrodes. No filter media used.
                </p>
                {" "}
                <span className="result">
                  Fine PM (
                  <span className="content-updated">
                    PM
                    <sub>2.5</sub>
                  </span>
                  {" "}{"/ sub-micron) · up to 95% total removal · safely under <50 mg/Nm³"}
                </span>
                {" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="dg-solution" id="industries">
        <div className="dg-solution-inner">
          <div className="dg-solution-header reveal">
            <div className="kicker">
              <span className="num">06</span>
              <span className="sep">/</span>
              <span className="label">Industries We Serve</span>
            </div>
            <h2>If Your Process Burns Fuel, We’ve Built a System for It.</h2>
            <p className="qc-mark">
              Our APCD Hybrid ESP is engineered for tough environments, stepping in where conventional emission systems fail or hit their limits. Whether you deal with extreme heat, sticky biomass smoke, changing fuel types, or expensive maintenance bills, our system delivers steady compliance without the downtime.
            </p>
          </div>
          <div className="dg-table-wrap">
            <div className="dg-table-overhead">
              <div />
              <div className="overhead-group">10 industrial sectors · one filterless platform</div>
            </div>
            <table className="dg-table">
              <thead>
                <tr>
                  <th>Industry</th>
                  <th>Typical Equipment</th>
                  <th>Fuel</th>
                  <th>Exhaust Challenges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Food & Food Processing</th>
                  <td>Steam boilers, thermic fluid heaters</td>
                  <td>Coal, biomass, furnace oil, gas</td>
                  <td>Variable PM loads, strict food-grade hygiene requirements, mandatory OCEMS & 50 mg/Nm³ compliance</td>
                </tr>
                <tr>
                  <th>Rice Mills & Agri</th>
                  <td>Biomass / husk-fired boilers</td>
                  <td>Rice husk, bagasse, wood</td>
                  <td>Extremely high PM (2–15 g/Nm³), hygroscopic dust</td>
                </tr>
                <tr>
                  <th>Sugar & Distilleries</th>
                  <td>Bagasse boilers</td>
                  <td>Bagasse</td>
                  <td>Seasonal operation, sticky PM, moisture-laden flue gas</td>
                </tr>
                <tr>
                  <th>Textile</th>
                  <td>Thermic fluid heaters, steam boilers</td>
                  <td>Coal, biomass</td>
                  <td>Sticky PM, variable load, high maintenance cost</td>
                </tr>
                <tr>
                  <th>Paper & Pulp</th>
                  <td>Bark / biomass boilers</td>
                  <td>Bark, biomass</td>
                  <td>High moisture, sticky fine PM, filter blinding</td>
                </tr>
                <tr>
                  <th>Steel & Metallurgy</th>
                  <td>Blast furnace, EAF, reheating furnace</td>
                  <td>Coke, coal</td>
                  <td>Metal oxide fumes, very high temperature, fine toxic PM</td>
                </tr>
                <tr>
                  <th>Cement</th>
                  <td>Rotary kiln, clinker cooler</td>
                  <td>Coal, petcoke, RDF</td>
                  <td>Very high CaO dust, silica PM, extreme gas volumes</td>
                </tr>
                <tr>
                  <th>Ceramics & Tiles</th>
                  <td>Tunnel kiln, shuttle kiln</td>
                  <td>Gas, coal</td>
                  <td>Fine silica PM, moderate loading, precise compliance targets</td>
                </tr>
                <tr>
                  <th>Foundries</th>
                  <td>Cupola furnace, induction furnace</td>
                  <td>Coke, electricity</td>
                  <td>Metal fumes, carbon soot, high temperature</td>
                </tr>
                <tr>
                  <th>Brick Kilns</th>
                  <td>Bull’s trench, zig-zag kiln</td>
                  <td>Coal, biomass</td>
                  <td>High PM, black carbon, cost-sensitive buyers</td>
                </tr>
                <tr>
                  <th>Chemical / Pharma</th>
                  <td>Calcination furnaces, reactors</td>
                  <td>Gas, coal</td>
                  <td>Fine reactive particles, strict compliance requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dg-solution-foot">
            <p>
              Don’t see your industry listed? If your process creates smoke, dust, or ash from combustion, our engineering team is ready to build a custom solution for your facility.
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
      <section className="dg-whyus" id="why-us">
        <div className="dg-whyus-inner">
          <div className="dg-whyus-header reveal">
            <div className="kicker">
              <span className="num">07</span>
              <span className="sep">/</span>
              <span className="label">Why Us</span>
            </div>
            <h2>Why Industrial Teams Choose Us</h2>
            <p>There are many APCD vendors in the market. Here’s what makes our system worth the conversation.</p>
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
                  <path d="M4 20l8-16 8 16" />
                  <path d="M7 14h10" />
                </svg>
              </div>
              <h3>Custom-Engineered Design</h3>
              <p>
                We never force your plant to adapt to a standard catalogue range. We analyse your unique flue-gas volume, temperature profile, and fuel type to build a system tailored strictly to your real-world emissions.
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
                  <path d="M5 13c0-4 3-6 7-6s7 2 7 6" />
                  <path d="M2 19c2-3 5-4 10-4s8 1 10 4" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                </svg>
              </div>
              <h3>No Thermal Limits</h3>
              <p>
                Our filterless, electro-physical architecture operates continuously across extreme thermal cycles, without expensive upstream cooling systems or media-fire risk.
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
                  <polyline points="12 7 12 12 15 14" />
                </svg>
              </div>
              <h3>Zero Downtime Drift</h3>
              <p>
                ESP electrodes don’t age, clog, or degrade. The compliance you’re certified for at commissioning is the compliance you still have five years later.
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
                  <polyline points="3 17 9 11 13 15 21 7" />
                  <polyline points="14 7 21 7 21 14" />
                </svg>
              </div>
              <h3>Load Variability Absorbed</h3>
              <p>
                From boiler startups to switching between coal, husk, and bagasse. Your exhaust is unpredictable. The system dynamically absorbs heavy emission surges to protect your production uptime.
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
              <span className="num">08</span>
              <span className="sep">/</span>
              <span className="label">Get a Consultation</span>
            </div>
            <h2>Get a Technical Consultation</h2>
            <p>
              Submit your details below. Our engineering team will reach out to know more about your emission profile and design a custom solution.
            </p>
          </div>
          <form className="contact-form qc-mark" id="apcdContactForm" data-form-source="apcd" noValidate>
            {" "}
            <span className="bk bk-tl" />
            <span className="bk bk-tr" />
            {" "}
            <span className="bk bk-bl" />
            <span className="bk bk-br" />
            {" "}
            <div className="field-row">
              <div className="field">
                {" "}
                <label htmlFor="apcd-name">Full Name *</label>
                {" "}
                <input id="apcd-name" name="name" type="text" required placeholder="Your name" />
                {" "}
              </div>
              <div className="field">
                {" "}
                <label htmlFor="apcd-tel">Mobile Number *</label>
                {" "}
                <input id="apcd-tel" name="phone" type="tel" required placeholder="+91" />
                {" "}
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                {" "}
                <label htmlFor="apcd-email">Work Email *</label>
                {" "}
                <input id="apcd-email" name="email" type="email" required placeholder="you@company.com" />
                {" "}
              </div>
              <div className="field">
                {" "}
                <label htmlFor="apcd-company">Company</label>
                {" "}
                <input id="apcd-company" name="company" type="text" placeholder="Company name" />
                {" "}
              </div>
            </div>
            <div className="field">
              {" "}
              <label htmlFor="apcd-industry">Industry</label>
              {" "}
              <select id="apcd-industry" name="industry" defaultValue="">
                <option value="" disabled>Select industry</option>
                <option>Textile</option>
                <option>Food & Food Processing</option>
                <option>Dyeing & Bleaching</option>
                <option>Pulp & Paper</option>
                <option>Chemicals</option>
                <option>Pharmaceuticals</option>
                <option>Rubber & Plastics</option>
                <option>Metal & Foundry</option>
                <option>Distillery & Sugar</option>
                <option>Other</option>
              </select>
              {" "}
            </div>
            <div className="field-row">
              <div className="field">
                {" "}
                <label htmlFor="apcd-city">City</label>
                {" "}
                <input id="apcd-city" name="city" type="text" placeholder="e.g. Pune" />
                {" "}
              </div>
              <div className="field">
                {" "}
                <label htmlFor="apcd-state">State</label>
                {" "}
                <input id="apcd-state" name="state" type="text" placeholder="e.g. Maharashtra" />
                {" "}
              </div>
            </div>
            <div className="field">
              {" "}
              <label htmlFor="apcd-message">Message (optional)</label>
              {" "}
              <textarea id="apcd-message" name="message" placeholder="Anything specific about your site we should know?" />
              {" "}
            </div>
            {" "}
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />
            {" "}
            <div className="cf-turnstile-wrap">
              <div className="cf-turnstile" data-sitekey="0x4AAAAAADWTNNKphv_pLG73" data-theme="light" />
            </div>
            <div className="submit-row">
              {" "}
              <button className="btn btn-primary" type="submit">
                Send My Enquiry{" "}
                <span className="arr">→</span>
              </button>
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
