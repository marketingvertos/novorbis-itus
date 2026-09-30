import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/products.css";
import "@/styles/legacy/diesel-generators.css";

const meta: PageMeta = {
  "title": "CPCB-Certified DG Emission Control Systems | Novorbis Itus",
  "tags": [
    {
      "name": "description",
      "content": "CPCB-certified emission control solutions for diesel generators. Reduce smoke, PM emissions, and compliance risks with low-maintenance retrofit systems."
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
      "content": "CPCB-Certified DG Emission Control Systems | Novorbis Itus"
    },
    {
      "property": "og:description",
      "content": "CPCB-certified emission control solutions for diesel generators. Reduce smoke, PM emissions, and compliance risks with low-maintenance retrofit systems."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/diesel-generators.html"
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
      "content": "CPCB-Certified DG Emission Control Systems | Novorbis Itus"
    },
    {
      "name": "twitter:description",
      "content": "CPCB-certified emission control solutions for diesel generators. Reduce smoke, PM emissions, and compliance risks with low-maintenance retrofit systems."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/diesel-generators.html",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "CarbonFree DG Retrofit",
      "brand": {
        "@type": "Brand",
        "name": "Novorbis"
      },
      "description": "Retrofit emission control system for diesel generators — CPCB-compliant, eliminates black smoke and PM2.5.",
      "url": "https://novorbisitus.com/diesel-generators.html"
    }
  ]
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js",
  "/js/video.js",
  "/js/accordion.js",
  "/js/diesel-generators.js",
  "/js/dg-form.js",
  "/js/forms.js",
  "https://challenges.cloudflare.com/turnstile/v0/api.js"
];

export default function CarbonfreeRecd() {
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
              <span className="label">Solutions · Category</span>
            </div>
            <h1 className="hero-headline">
              {" "}
              <span className="a">Make Diesel Generators</span>
              {" "}
              <span className="b">Cleaner, Safer, Compliance-Ready.</span>
              {" "}
            </h1>
            <p className="hero-sub">
              We provide CPCB-certified emission control solutions engineered to eliminate smoke and pollutants with near-zero maintenance. Keep operations running without the burden of constant servicing.
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
              <source media="(max-width: 640px)" srcSet="/assets/images/diesel-generators/RECD-3-web-640.webp" type="image/webp" />
              <source media="(max-width: 1200px)" srcSet="/assets/images/diesel-generators/RECD-3-web-1200.webp" type="image/webp" />
              <source srcSet="/assets/images/diesel-generators/RECD-3-web-1920.webp" type="image/webp" />
              {" "}
              <img className="hero-stage-video" src="/assets/images/diesel-generators/RECD-3-web.jpg" alt="Diesel generator emission control deployment" aria-hidden="false" />
              {" "}
            </picture>
            {" "}
            <span className="hero-stage-tag">CarbonFree DG Solutions · Field Installation</span>
            {" "}
            <div className="hero-stage-readout r-tl">
              {" "}
              <span className="lbl">Coverage</span>
              {" "}
              <span className="val">
                2 Products{" "}
                <em>ESP · CAC+</em>
              </span>
              {" "}
            </div>
            <div className="hero-stage-readout r-br qc-mark">
              {" "}
              <span className="lbl">Compliance</span>
              {" "}
              <span className="val">
                CPCB{" "}
                <em>Compliance</em>
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
      <section className="dg-problem" id="problem">
        <div className="dg-problem-inner">
          <div className="dg-problem-header reveal">
            <div className="kicker">
              <span className="num">02</span>
              <span className="sep">/</span>
              <span className="label">Problem · Reality</span>
            </div>
            <h2>Emissions, Regulations & Rising Costs</h2>
            <p>What was once reliable backup power is now a growing environmental and financial liability.</p>
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
                        India’s DG emission regulations are becoming stricter, with increased inspections, enforcement actions, and operational restrictions for non-compliant systems.
                      </p>
                      <ul className="dg-acc-list">
                        <li>
                          <span className="tick" />
                          <span>Emission control systems are mandatory</span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>Only CPCB-approved vendors are accepted</span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>Generators must meet strict emission limits</span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>DG operations can be restricted or banned</span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>Non-compliance can lead to penalties and shutdowns</span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>Compliance now impacts ESG and sustainability reporting</span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>Monitoring and diagnostics are becoming essential</span>
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
                        Failing to meet emission regulations can lead to financial penalties, operational disruption, and long-term reputational risk.
                      </p>
                      <ul className="dg-acc-list">
                        <li>
                          <span className="tick" />
                          <span>Financial Penalties</span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>Operational Shutdowns</span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>Business & Audit Risk</span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>ESG & Tenant Impact</span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>Backup Power Reliability at Risk</span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>Higher Fuel & Maintenance Costs</span>
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
                        Every time a diesel generator operates, it releases harmful pollutants into the air, affecting both people nearby and the environment.
                      </p>
                      <ul className="dg-acc-list">
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Black Smoke / Soot (PM):</strong>
                            {" "}Fine particles that pollute air
                          </span>
                        </li>
                        <li>
                          <span className="tick" />
                          <span>
                            <strong>Unburned Hydrocarbons (HC):</strong>
                            {" "}Released from incomplete combustion
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
              <span className="num">03</span>
              <span className="sep">/</span>
              <span className="label">The Solution</span>
            </div>
            <h2>Find the Right Emission Control Solution</h2>
            <p>
              Whether you’re addressing black smoke or compliance notices, choose a solution that fits your needs.
            </p>
          </div>
          <div className="dg-choose-grid stagger">
            <div className="dg-choose-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="choose-tag">Product 01 · RECD</div>
              <h3 className="qc-mark">
                CarbonFree ESP{" "}
                <span className="choose-sub">(Filterless)</span>
              </h3>
              <ul className="choose-spec">
                <li>
                  <span className="lbl">Our Recommendation</span>
                  <span className="val">For DG sets needing primary PM compliance.</span>
                </li>
                <li>
                  <span className="lbl">What We Solve</span>
                  <span className="val">Black smoke, soot, and PM inspection failures.</span>
                </li>
                <li>
                  <span className="lbl">Ideal Application</span>
                  <span className="val">Retrofit on existing DG- universal fit.</span>
                </li>
                <li>
                  <span className="lbl">Compliance</span>
                  <span className="val">CPCB & ARAI certified</span>
                </li>
                <li>
                  <span className="lbl">Maintenance</span>
                  <span className="val">Only periodic electrode cleaning.</span>
                </li>
                <li>
                  <span className="lbl">PM Removal</span>
                  <span className="val">Up to 95%</span>
                </li>
                <li>
                  <span className="lbl">CO / HC Reduction</span>
                  <span className="val">
                    <span className="dash">—</span>
                  </span>
                </li>
                <li>
                  <span className="lbl">Pressure Drop</span>
                  <span className="val content-updated">{"<0.7kPa"}</span>
                </li>
                <li>
                  <span className="lbl">Monitoring System</span>
                  <span className="val">OBD-integrated feedback control</span>
                </li>
              </ul>
              {" "}
              <a className="btn btn-primary" href="/carbonfree-recd/carbonfree-esp">
                View Product{" "}
                <span className="arr">→</span>
              </a>
              {" "}
            </div>
            <div className="dg-choose-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="choose-tag">Product 02 · Advanced Catalyst</div>
              <h3 className="qc-mark">CarbonFree Advanced Catalyst+</h3>
              <ul className="choose-spec">
                <li>
                  <span className="lbl">Our Recommendation</span>
                  <span className="val">For sites requiring both PM and gas control.</span>
                </li>
                <li>
                  <span className="lbl">What We Solve</span>
                  <span className="val">The full spectrum: PM + CO + HC.</span>
                </li>
                <li>
                  <span className="lbl">Ideal Application</span>
                  <span className="val">Stringent dual-pollutant requirements.</span>
                </li>
                <li>
                  <span className="lbl">Compliance</span>
                  <span className="val">CPCB compliant</span>
                </li>
                <li>
                  <span className="lbl">Maintenance</span>
                  <span className="val">Predictive, sensor-guided.</span>
                </li>
                <li>
                  <span className="lbl">PM Removal</span>
                  <span className="val">Up to 95%</span>
                </li>
                <li>
                  <span className="lbl">CO / HC Reduction</span>
                  <span className="val">Up to 90%</span>
                </li>
                <li>
                  <span className="lbl">Pressure Drop</span>
                  <span className="val">Low (1.5–2.5 kPa)</span>
                </li>
                <li>
                  <span className="lbl">Monitoring System</span>
                  <span className="val">Dual differential pressure sensors (ΔP inlet + outlet)</span>
                </li>
              </ul>
              {" "}
              <a className="btn btn-primary" href="/carbonfree-recd/carbonfree-advanced-catalyst-plus">
                View Product{" "}
                <span className="arr">→</span>
              </a>
              {" "}
            </div>
          </div>
          <div className="dg-solution-foot">
            <p>
              Not sure which system fits your requirement? Our engineers will assess your DG set’s emission profile and compliance needs, then recommend the right solution, at no cost.
            </p>
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
      <section className="dg-whyus" id="why-us">
        <div className="dg-whyus-inner">
          <div className="dg-whyus-header reveal">
            <div className="kicker">
              <span className="num">04</span>
              <span className="sep">/</span>
              <span className="label">Why Us</span>
            </div>
            <h2>Why Our Clients Chose Us</h2>
            <p>There are multiple vendors in the market. Here’s why leading operators choose us.</p>
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
              <h3>Consistent Performance</h3>
              <p>
                We don’t believe in clogging. Our systems deliver the same efficiency in year five as they did on day one.
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
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </div>
              <h3>Built for Scale</h3>
              <p>
                Our modular platform is engineered for any capacity, ensuring faster deployment for your entire facility.
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
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
              </div>
              <h3>Complete Emission Coverage</h3>
              <p>
                We are your single partner for all pollutants- PM, CO, HC, and NOx. No need to juggle multiple vendors.
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
                  <path d="M3 12h4l2-5 4 12 2-7h6" />
                  <circle cx="20" cy="6" r="2" />
                </svg>
              </div>
              <h3>Smart Monitoring Built In</h3>
              <p>
                We build OBD-integrated tracking into our units, so you get automated alerts before a small issue becomes a compliance failure.
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
                <span className="num">05</span>
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
                <h3>CPCB Phase 2 — what it actually means for genset operators in 2026</h3>
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
              <span className="num">05</span>
              <span className="sep">/</span>
              <span className="label">Get Off The Filter Treadmill</span>
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
            <form className="dg-form" id="dgForm" data-form-source="dg-recd" noValidate>
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
