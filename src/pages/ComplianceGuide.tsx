import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/compliance.css";

const meta: PageMeta = {
  "title": "Compliance Guidance | CPCB, NGT & Emission Regulations | Novorbis",
  "tags": [
    {
      "name": "description",
      "content": "Stay compliant with CPCB, NGT, NCAP and State PCB emission regulations. ARAI type-approved and CPCB-listed solutions for DG sets, boilers, crematoriums and industrial plants across India."
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
      "content": "Compliance Guidance | CPCB, NGT & Emission Regulations | Novorbis"
    },
    {
      "property": "og:description",
      "content": "Stay compliant with CPCB, NGT, NCAP and State PCB emission regulations. ARAI type-approved and CPCB-listed solutions for DG sets, boilers, crematoriums and industrial plants across India."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/compliance.html"
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
      "content": "Compliance Guidance | CPCB, NGT & Emission Regulations | Novorbis"
    },
    {
      "name": "twitter:description",
      "content": "Stay compliant with CPCB, NGT, NCAP and State PCB emission regulations. ARAI type-approved and CPCB-listed solutions for DG sets, boilers, crematoriums and industrial plants across India."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/compliance.html",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "name": "Emission Compliance Guidance — India",
      "description": "CPCB, NGT, NCAP and State PCB compliance requirements for emission control systems. ARAI type-approved and CPCB-listed Novorbis solutions.",
      "url": "https://novorbisitus.com/compliance.html"
    }
  ]
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js"
];

export default function ComplianceGuide() {
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
      <SiteNav active="compliance" />
      {" "}
      <section className="hero dark" id="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker">Compliance Guidance</div>
            <h1 className="hero-headline reveal">
              {" "}
              <span className="a">Stay Compliant.</span>
              {" "}
              <span className="b">Avoid Closures. Keep Running.</span>
              {" "}
            </h1>
            <p className="hero-sub reveal">
              {" "}Emission regulations in India are tightening. Understand current CPCB, NGT, NCAP, APCD and State Pollution Board requirements related to emission-control systems and retrofit solutions. Novorbis Itus products are ARAI type-approved and listed by CPCB, ready for DG sets, diesel engines, boilers, furnaces, crematoriums, and kilns across India.{" "}
            </p>
            <div className="hero-actions reveal">
              {" "}
              <a href="#states" className="btn btn-primary">
                Check Compliance{" "}
                <span className="arr">→</span>
              </a>
              {" "}
              <a href="#contact" className="btn btn-ghost-dark">Contact Us</a>
              {" "}
            </div>
            <div className="hero-certs reveal">
              {" "}
              <span className="cert-chip">
                <span className="cert-dot" />
                CPCB Listed
              </span>
              {" "}
              <span className="cert-chip">
                <span className="cert-dot" />
                ARAI Type Approved
              </span>
              {" "}
            </div>
          </div>
          <div className="hero-visual reveal">
            {" "}
            <img src="/assets/icons/homepage/ICON-4.svg" alt="Compliance" width="408" height="408" />
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <section className="framework dark" id="framework">
        <div className="framework-inner">
          <div className="section-header reveal">
            <div className="kicker">
              <span className="num">01</span>
              <span className="sep">/</span>
              <span className="label">Regulatory Framework</span>
            </div>
            <h2 className="section-title">
              Four Authorities. One Direction.
              <br />
              Tougher Standards Every Year.
            </h2>
            <p className="section-subtitle">
              India's emission enforcement operates across four overlapping frameworks. Understanding which ones apply to your equipment and location is the first step to building a defensible compliance position.
            </p>
          </div>
          <div className="framework-grid stagger">
            {" "}
            {" "}
            <div className="framework-card">
              <div className="card-logo">
                <img src="/assets/images/shared/national green tribunal.jpg" alt="National Green Tribunal" />
              </div>
              <h3>National Green Tribunal</h3>
              <p>
                India's apex environmental court. Its orders on DG sets and industrial emissions are legally binding on every state. Non-compliance attracts suo motu action and facility closure directions.
              </p>
              {" "}
              <span className="card-link" style={{ opacity: "0", pointerEvents: "none" }} />
              {" "}
            </div>
            {" "}
            {" "}
            <div className="framework-card">
              <div className="card-logo">
                <img src="/assets/images/shared/NCAP.jpg" alt="NCAP" />
              </div>
              <h3>National Clean Air Programme (NCAP) — MoEF&CC</h3>
              <p>
                The Government of India's national framework for reducing PM pollution. Sets the minimum standards every state action plan must follow.
              </p>
              {" "}
              <a className="card-link" href="https://drive.google.com/open?id=1xDZ52rsckelzzlCRtaS5I2GIQ16Otsxi" target="_blank" rel="noopener">Read the framework →</a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="framework-card">
              <div className="card-logo">
                <img src="/assets/images/shared/CPCB.jpg" alt="CPCB" />
              </div>
              <h3>CPCB — RECD Testing & Certification Procedure</h3>
              <p>
                Defines exactly how emission control devices must be tested, approved, and verified. If your vendor isn't on this list, your installation doesn't count.
              </p>
              {" "}
              <a className="card-link" href="https://drive.google.com/open?id=11pF2KKNPSWq79lCZMvUp66clWcWYD2XJ" target="_blank" rel="noopener">Read the procedure →</a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="framework-card">
              <div className="card-logo">
                <img src="/assets/images/shared/CAQM.jpg" alt="CAQM" />
              </div>
              <h3>CAQM — Commission for Air Quality Management (NCR)</h3>
              <p>
                The enforcement body for Delhi and surrounding states. Issues the most stringent and actively monitored DG and industrial compliance directions in India.
              </p>
              {" "}
              <a className="card-link" href="https://drive.google.com/open?id=1huknRvTsiLu3ifQOG9RAY5jpZiZCBgPp" target="_blank" rel="noopener">Read the directions →</a>
              {" "}
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="states light" id="states">
        <div className="states-inner">
          <div className="states-header reveal">
            <div className="kicker">
              <span className="num">02</span>
              <span className="sep">/</span>
              <span className="label">State Compliance Orders</span>
            </div>
            <h2 className="section-title">Your State Has Already Issued Directions.</h2>
            <p className="section-subtitle">
              Several State Pollution Control Boards mandate emission-control systems and retrofit compliance. Download your state's official circular below. If your state is unlisted, national NCAP and NGT directives still apply.
            </p>
          </div>
          <div className="states-grid reveal">
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1uoQYblRNRE4maHyAqrxCO_IKi8gMD_us" target="_blank" rel="noopener">
                Delhi NCR{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1y9gwbMNHCbu9RtMXKikW-fV56XBUDryV" target="_blank" rel="noopener">
                Arunachal Pradesh{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1QQmHCpVtVtyGFiXkaIxIcVZ8RcnHnt32" target="_blank" rel="noopener">
                Goa{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=13DzJ9V4HTkdFTD9455HRCKNwwZyyE7vP" target="_blank" rel="noopener">
                Gujarat{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1al1h-Uw6CZRErmlJcIm47oR_44TZ5ke6" target="_blank" rel="noopener">
                Haryana{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=17lfBkyxdMU_s2tbDEN_O6s8v9rAXMd0I" target="_blank" rel="noopener">
                Jammu & Kashmir{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1aVoTLArOu0YbQdahlsImmxwL4TbCUCsl" target="_blank" rel="noopener">
                Jharkhand{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=19vmyBKeECxZRYbZxGtDWXQgTKOP9onYk" target="_blank" rel="noopener">
                Karnataka{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1KxDyoYV6UwPS38xkuCEiGXSJySi98nE8" target="_blank" rel="noopener">
                Kerala{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1SNRUVFvyNiZqBKE8aX4EKdcJl6Rf7mwj" target="_blank" rel="noopener">
                Madhya Pradesh{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1IvMa02R--wJtGvi3UZwKX-lZ8WjqW-9G" target="_blank" rel="noopener">
                Maharashtra{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1ISR4z1M_5GcuiHvRhqm7hBXHtchaKzvH" target="_blank" rel="noopener">
                Odisha{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1ACvGASfrXuUy99D8or_wSVVLWsw1VP61" target="_blank" rel="noopener">
                Puducherry{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1SBPcRN9U_wLjRPsT58aLplLoIbqoOnWd" target="_blank" rel="noopener">
                Tamil Nadu{" "}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="state-item">
              <a href="https://drive.google.com/open?id=1oaQ7bNfkT4X0nzz3KHGQ52H6OzlMJAKv" target="_blank" rel="noopener">
                Telangana{" "}
                <span className="arr">→</span>
              </a>
            </div>
          </div>
          <p className="states-note reveal">
            If your state is not listed, national NCAP and NGT directives still apply —{" "}
            <a href="#contact" style={{ color: "var(--blue-deep)", textDecoration: "underline", textUnderlineOffset: "3px" }}>contact us</a>
            {" "}for a scoping call.
          </p>
        </div>
      </section>
      {" "}
      <section className="certs light" id="certifications">
        <div className="certs-inner">
          <div className="reveal">
            <div className="kicker">
              <span className="num">03</span>
              <span className="sep">/</span>
              <span className="label">Novorbis Certifications</span>
            </div>
            <h2 className="section-title">Approved & Certified Solutions.</h2>
            <p className="section-subtitle">
              Novorbis solutions are developed under approved testing and certification procedures aligned with CPCB requirements.
            </p>
          </div>
          <div className="certs-grid stagger">
            {" "}
            {" "}
            <div className="cert-card">
              <div className="card-logo">
                <img src="/assets/images/shared/ARAI.jpg" alt="ARAI" />
              </div>
              <h4>125–250 kVA Approval</h4>
              <p className="cert-desc">ARAI type-approval for Retrofit Emission Control Devices fitted to 125–250 kVA diesel gensets.</p>
              <ul className="cert-links">
                <li>
                  <a href="https://drive.google.com/open?id=1r-G0lTt7MTCILYXmHo5zqHi2o0me6rMm" target="_blank" rel="noopener">125–250 kVA Approval →</a>
                </li>
              </ul>
            </div>
            {" "}
            {" "}
            <div className="cert-card">
              <div className="card-logo">
                <img src="/assets/images/shared/ARAI.jpg" alt="ARAI" />
              </div>
              <h4>500 kVA Approval</h4>
              <p className="cert-desc">ARAI type-approval for Retrofit Emission Control Devices fitted to 500 kVA diesel gensets.</p>
              <ul className="cert-links">
                <li>
                  <a href="https://drive.google.com/open?id=1wsfYgahuYIH-tFMOi6PqIUXy2c8nKFaN" target="_blank" rel="noopener">500 kVA Approval →</a>
                </li>
              </ul>
            </div>
            {" "}
            {" "}
            <div className="cert-card">
              <div className="card-logo">
                <img src="/assets/images/shared/ARAI.jpg" alt="ARAI" />
              </div>
              <h4>750 kVA Approval</h4>
              <p className="cert-desc">ARAI type-approval for Retrofit Emission Control Devices fitted to 750 kVA diesel gensets.</p>
              <ul className="cert-links">
                <li>
                  <a href="https://drive.google.com/open?id=10pjaZI6sWHdi-dPzOk4gph9plwBbmZ-j" target="_blank" rel="noopener">750 kVA Approval →</a>
                </li>
              </ul>
            </div>
            {" "}
            {" "}
            <div className="cert-card">
              <div className="card-logo">
                <img src="/assets/images/shared/CPCB.jpg" alt="CPCB" />
              </div>
              <h4>CPCB Vendor Listing</h4>
              <p className="cert-desc">
                Listed on the CPCB approved vendor list. Directly verifiable by any PCB inspector or procurement officer.
              </p>
              <ul className="cert-links">
                <li>
                  <a href="https://drive.google.com/open?id=14at5Jytr2coz-2Ko-71lOvsvQIM8NkDs" target="_blank" rel="noopener">Listed CPCB Vendor →</a>
                </li>
              </ul>
            </div>
            {" "}
            {" "}
            <div className="cert-card">
              <div className="card-logo">
                <img src="/assets/icons/shared/patent-portfolio.svg" alt="" width="48" height="48" />
              </div>
              <h4>Patent Portfolio</h4>
              <p className="cert-desc">
                4 patents granted and 4 more filed, protecting Novorbis’s core electrostatic precipitation technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="support light" id="support">
        <div className="support-inner reveal">
          <div className="kicker" style={{ justifyContent: "center", marginBottom: "20px" }}>
            <span className="num">04</span>
            <span className="sep">/</span>
            <span className="label">Compliance Support</span>
          </div>
          <h2>Not Sure What Applies to Your Facility?</h2>
          <p className="support-sub">
            Tell us your equipment type and location. We'll confirm which regulations apply, which deadlines are active, and which certified solution covers you.
          </p>
          <div className="support-pills">
            {" "}
            <span className="support-pill">Compliance Scoping</span>
            {" "}
            <span className="support-pill">Retrofit Planning</span>
            {" "}
            <span className="support-pill">APCD Specification</span>
            {" "}
            <span className="support-pill">Regulatory Document Review</span>
            {" "}
            <span className="support-pill">Approved Solution Selection</span>
            {" "}
          </div>
          {" "}
          <a href="#contact" className="btn btn-primary">
            Contact Us{" "}
            <span className="arr">→</span>
          </a>
          {" "}
        </div>
      </section>
      {" "}
      <section className="contact light" id="contact">
        <div className="contact-inner">
          <div className="contact-copy reveal">
            <div className="kicker">
              <span className="num">05</span>
              <span className="sep">/</span>
              <span className="label">Get in Touch</span>
            </div>
            <h2>Get a Technical Consultation</h2>
            <p>
              Submit your details below. Our engineering team will reach out to know more about your emission profile and design a custom solution.
            </p>
          </div>
          <div className="contact-form reveal">
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
                <input type="text" id="cf-name" name="name" placeholder="Rajesh Kumar" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="cf-phone">Phone</label>
                <input type="tel" id="cf-phone" name="phone" placeholder="+91 98765 43210" autoComplete="tel" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input type="email" id="cf-email" name="email" placeholder="rajesh@company.com" autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="cf-company">Company</label>
              <input type="text" id="cf-company" name="company" placeholder="Company name" autoComplete="organization" />
            </div>
            <div className="field">
              {" "}
              <label htmlFor="cf-interest">Interested In</label>
              {" "}
              <select id="cf-interest" name="interest" defaultValue="">
                <option value="" disabled>Select a solution</option>
                <option>Diesel Generator Emission Control (RECD)</option>
                <option>Diesel Engine Emission Control</option>
                <option>Crematorium Air Purification System (CAPS)</option>
                <option>Air Pollution Control Device (APCD)</option>
                <option>Dealer / Distribution Partnership</option>
                <option>Service and AMC</option>
                <option>Not Sure Yet. Help Me Choose.</option>
              </select>
              {" "}
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
          </div>
        </div>
      </section>
      {" "}
      <SiteFooter />
      {" "}
    </PageShell>
  );
}
