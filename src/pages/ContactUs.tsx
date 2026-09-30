import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/contact.css";

const meta: PageMeta = {
  "title": "Contact Novorbis | Emission Control Solutions for India",
  "tags": [
    {
      "name": "description",
      "content": "Reach Novorbis Itus for CPCB-certified emission control solutions — diesel generators, industrial boilers, crematoriums. Offices in Pune, Gurugram, Indore."
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
      "content": "Contact Novorbis | Emission Control Solutions for India"
    },
    {
      "property": "og:description",
      "content": "Reach Novorbis Itus for CPCB-certified emission control solutions — diesel generators, industrial boilers, crematoriums."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/contact-us.html"
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
      "content": "Contact Novorbis | Emission Control Solutions for India"
    },
    {
      "name": "twitter:description",
      "content": "Reach Novorbis Itus for CPCB-certified emission control solutions."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/contact-us.html",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Novorbis",
      "description": "Get in touch with Novorbis Itus for emission control solutions.",
      "url": "https://novorbisitus.com/contact-us.html"
    }
  ]
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js",
  "/js/forms.js",
  "https://challenges.cloudflare.com/turnstile/v0/api.js"
];

export default function ContactUs() {
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
      <section className="contact-hero dark" id="hero">
        <div className="contact-hero-inner reveal">
          <div className="contact-hero-eyebrow">Get in Touch</div>
          <h1>
            Let’s Solve Your
            <br />
            <em>Emission Challenge.</em>
          </h1>
          <p className="contact-hero-sub">
            Whether you’re managing compliance, cutting operational costs, building a greener facility or want to grow with us as a partner, the right conversation starts here.
          </p>
          <div className="contact-trust qc-mark">
            {" "}ARAI Certified{" "}
            <span>·</span>
            {" "}CPCB Compliant{" "}
          </div>
        </div>
      </section>
      {" "}
      <section className="contact-strip dark" id="quick-contact">
        <div className="contact-strip-inner stagger">
          {" "}
          {" "}
          <div className="qc-sales-banner">
            <div className="bk bk-tl" />
            <div className="bk bk-tr" />
            <div className="bk bk-bl" />
            <div className="bk bk-br" />
            <div className="qc-sales-header">
              <div className="qc-sales-title">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.48 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.39 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {" "}Sales Enquiry{" "}
              </div>
              <div className="qc-hours">Mon – Sat · 9 AM to 6 PM</div>
            </div>
            <div className="qc-sales-regions">
              <div className="qc-region">
                <div className="qc-region-label">Northern Region</div>
                <div className="qc-region-name">Naveen Sigroha</div>
                <div className="qc-region-number">+91 89566 13976</div>
                {" "}
                <a className="qc-cta" href="tel:+918956613976">
                  {" "}Call{" "}
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 3l3 3-3 3" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              <div className="qc-region-divider" />
              <div className="qc-region">
                <div className="qc-region-label">Western Region</div>
                <div className="qc-region-name">Hitesh Thakher</div>
                <div className="qc-region-number">+91 89566 13975</div>
                {" "}
                <a className="qc-cta" href="tel:+918956613975">
                  {" "}Call{" "}
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 3l3 3-3 3" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              <div className="qc-region-divider" />
              <div className="qc-region">
                <div className="qc-region-label">Southern Region</div>
                <div className="qc-region-name">Divyank Gupta</div>
                <div className="qc-region-number">+91 79742 78581</div>
                {" "}
                <a className="qc-cta" href="tel:+917974278581">
                  {" "}Call{" "}
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 3l3 3-3 3" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
            </div>
          </div>
          {" "}
          {" "}
          <div className="qc-channel-row">
            <div className="qc-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="qc-icon">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 8l10 7 10-7" />
                </svg>
                {" "}
              </div>
              <div className="qc-label">Email Us</div>
              <div className="qc-primary">sales@novorbisitus.com</div>
              <div className="qc-secondary">info@novorbisitus.com</div>
              {" "}
              <a className="qc-cta" href="mailto:sales@novorbisitus.com">
                {" "}Send email{" "}
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 3l3 3-3 3" />
                </svg>
                {" "}
              </a>
              {" "}
            </div>
            <div className="qc-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="qc-icon">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                {" "}
              </div>
              <div className="qc-label">WhatsApp</div>
              <div className="qc-primary">Quick Query?</div>
              <div className="qc-secondary">Message us directly for fast answers on compliance, specs, or pricing.</div>
              {" "}
              <a className="qc-cta" href="https://wa.me/918484062464" target="_blank" rel="noopener">
                {" "}Open WhatsApp{" "}
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 3l3 3-3 3" />
                </svg>
                {" "}
              </a>
              {" "}
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="offices light" id="offices">
        <div className="offices-inner">
          <div className="offices-header reveal">
            <div className="kicker">
              <span className="num">01</span>
              <span className="sep">/</span>
              <span className="label">Our Offices</span>
            </div>
            <h2>
              Pan-India.
              <br />
              <em>Locally Reachable.</em>
            </h2>
          </div>
          <div className="offices-grid stagger">
            {" "}
            {" "}
            <div className="office-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="office-tag">Head Office</div>
              <h3>
                Pune
                <br />
                Maharashtra
              </h3>
              <div className="office-addr">Novorbis Itus Pvt Ltd, 4th floor, Shreyas Eterna, NDA Pashan Rd, Bavdhan, Pune, Maharashtra 411021</div>
              <div className="office-phone">
                +91 84840 62464
                <br />
                +91 79742 78581
              </div>
              {" "}
              <a className="office-directions" href="https://maps.google.com/?q=Shreyas+Eterna+NDA+Pashan+Road+Bavdhan+Pune+411021" target="_blank" rel="noopener">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {" "}Get Directions{" "}
              </a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="office-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="office-tag">Regional Office</div>
              <h3>
                Gurugram
                <br />
                Haryana
              </h3>
              <div className="office-addr">
                Well-Done Tech Park, Cabin 1 & 2, 3rd Floor – Unit 305, Sector 48, Near Subhash Chowk, Sohna Road,
                <br />
                Gurugram – 122018
              </div>
              <div className="office-phone">+91 89566 13976</div>
              {" "}
              <a className="office-directions" href="https://maps.google.com/?q=Well-Done+Tech+Park+Sector+48+Gurugram" target="_blank" rel="noopener">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {" "}Get Directions{" "}
              </a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="office-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="office-tag">Factory Address</div>
              <h3>
                Pune
                <br />
                Maharashtra
              </h3>
              <div className="office-addr">
                Sr. No. 261/1, Industrial Area, Kasurdi Kheba,
                <br />
                Pune, Maharashtra – 412205
              </div>
              <div className="office-phone">
                +91 84840 62464
                <br />
                +91 79742 78581
              </div>
              {" "}
              <a className="office-directions" href="https://maps.google.com/?q=Kasurdi+Kheba+Bhor+Pune" target="_blank" rel="noopener">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {" "}Get Directions{" "}
              </a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="office-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="office-tag">Indore Office</div>
              <h3>
                Indore
                <br />
                Madhya Pradesh
              </h3>
              <div className="office-addr">
                EA-230, Sector A, Scheme No. 94, Ring Road, Vijay Nagar,
                <br />
                Indore – 452010
              </div>
              <div className="office-phone">+91 88893 16380</div>
              {" "}
              <a className="office-directions" href="https://maps.google.com/?q=EA-230+Vijay+Nagar+Indore" target="_blank" rel="noopener">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {" "}Get Directions{" "}
              </a>
              {" "}
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="contact-form-section light" id="enquiry">
        <div className="cf-inner">
          <div className="cf-left reveal">
            <div className="kicker">
              <span className="num">02</span>
              <span className="sep">/</span>
              <span className="label">Enquiry</span>
            </div>
            <h2>
              Tell Us What
              <br />
              <em>You Need.</em>
            </h2>
            <p>We’ll reach out to you as soon as we can. For urgent compliance queries, call us directly.</p>
          </div>
          <form className="cf-form reveal" id="contactForm" data-form-source="contact-us" noValidate>
            {" "}
            <span className="bk bk-tl" />
            <span className="bk bk-tr" />
            {" "}
            <span className="bk bk-bl" />
            <span className="bk bk-br" />
            {" "}
            <div className="cf-row">
              <div className="cf-field">
                <label htmlFor="cf-name">Full Name</label>
                <input type="text" id="cf-name" name="name" placeholder="Rajesh Kumar" autoComplete="name" required />
              </div>
              <div className="cf-field">
                <label htmlFor="cf-phone">Phone</label>
                <input type="tel" id="cf-phone" name="phone" placeholder="+91 98765 43210" autoComplete="tel" required />
              </div>
            </div>
            <div className="cf-field">
              <label htmlFor="cf-email">Work Email</label>
              <input type="email" id="cf-email" name="email" placeholder="rajesh@company.com" autoComplete="email" required />
            </div>
            <div className="cf-field">
              <label htmlFor="cf-company">Company</label>
              <input type="text" id="cf-company" name="company" placeholder="Company name" autoComplete="organization" />
            </div>
            <div className="cf-field">
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
            <div className="cf-row">
              <div className="cf-field">
                <label htmlFor="cf-city">City</label>
                <input type="text" id="cf-city" name="city" placeholder="Mumbai" />
              </div>
              <div className="cf-field">
                <label htmlFor="cf-state">State</label>
                <input type="text" id="cf-state" name="state" placeholder="Maharashtra" />
              </div>
            </div>
            <div className="cf-field">
              <label htmlFor="cf-msg">
                Message{" "}
                <span style={{ opacity: "0.45", fontWeight: "400" }}>(optional)</span>
              </label>
              <textarea id="cf-msg" name="message" placeholder="Tell us about your equipment, capacity, current compliance status..." />
            </div>
            <div className="cf-turnstile-wrap">
              <div className="cf-turnstile" data-sitekey="0x4AAAAAADWTNNKphv_pLG73" data-theme="light" />
            </div>
            <div className="cf-submit">
              {" "}
              <button type="submit" className="btn btn-primary">
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
