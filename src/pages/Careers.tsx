import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/careers.css";

const meta: PageMeta = {
  "title": "Careers | Join Novorbis",
  "tags": [
    {
      "name": "description",
      "content": "Join Novorbis Itus — filterless electrostatic and catalyst-based emission control for diesel generators, boilers, kilns and crematoriums, engineered entirely in India."
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
      "content": "Careers | Join Novorbis"
    },
    {
      "property": "og:description",
      "content": "Help us make clean air a reality. Engineering, production, field service and industrial sales roles at Novorbis."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/careers.html"
    },
    {
      "property": "og:image",
      "content": "https://novorbisitus.com/assets/images/diesel-generators/RECD-3-web-1200.webp"
    },
    {
      "name": "twitter:card",
      "content": "summary_large_image"
    },
    {
      "name": "twitter:title",
      "content": "Careers | Join Novorbis"
    },
    {
      "name": "twitter:description",
      "content": "Build the machines that clean the air. Engineering, production, field service and industrial sales roles at Novorbis."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/diesel-generators/RECD-3-web-1200.webp"
    }
  ],
  "canonical": "https://novorbisitus.com/careers.html",
  "jsonLd": []
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js",
  "/js/forms.js",
  "/js/careers.js",
  "https://challenges.cloudflare.com/turnstile/v0/api.js"
];

export default function Careers() {
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
      <SiteNav active="careers" />
      <main>
        {" "}
        {" "}
        <section className="cr-hero dark">
          <div className="cr-hero-inner">
            <div className="kicker dark reveal">
              {" "}
              <span className="num">01</span>
              {" "}
              <span className="sep">/</span>
              {" "}
              <span className="label">Careers at Novorbis</span>
              {" "}
            </div>
            <h1 className="reveal">
              Help us make{" "}
              <span className="accent">clean air</span>
              {" "}a reality.
            </h1>
            <div className="cr-hero-sub reveal">
              <p>
                We believe everyone should have access to clean air. We're working towards making that a reality through our products, which cut down harmful emissions to under safe limits.
              </p>
              <p>
                Since our founding in 2019, we've completed over 1000 installations and we're gearing up to do more. Join us on our mission to solve India's air pollution problem.
              </p>
            </div>
            <div className="cr-hero-cta reveal">
              {" "}
              <a className="btn btn-primary" href="#roles">
                See open roles{" "}
                <span className="arr">→</span>
              </a>
              {" "}
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="cr-life dark" id="life">
          <div className="cr-life-inner">
            <div className="cr-life-header reveal">
              <div className="kicker dark">
                {" "}
                <span className="num">02</span>
                {" "}
                <span className="sep">/</span>
                {" "}
                <span className="label">Life at Novorbis</span>
                {" "}
              </div>
              <h2>A look at life here</h2>
            </div>
            <div className="cr-life-gallery stagger">
              <figure>
                <picture>
                  <source type="image/webp" srcSet="/assets/images/About%20us/Team%20Photos/Group%20photo-640.webp 640w, /assets/images/About%20us/Team%20Photos/Group%20photo-1200.webp 1200w" sizes="320px" />
                  {" "}
                  <img src="/assets/images/About%20us/Team%20Photos/Group%20photo.jpeg" alt="Novorbis team at the foundation anniversary" loading="lazy" decoding="async" />
                  {" "}
                </picture>
              </figure>
              <figure>
                <picture>
                  <source type="image/webp" srcSet="/assets/images/About%20us/Team%20Photos/team%20photo%201-640.webp 640w, /assets/images/About%20us/Team%20Photos/team%20photo%201-1200.webp 1200w" sizes="320px" />
                  {" "}
                  <img src="/assets/images/About%20us/Team%20Photos/team%20photo%201.jpeg" alt="Team members at the Pune office" loading="lazy" decoding="async" />
                  {" "}
                </picture>
              </figure>
              <figure>
                <picture>
                  <source type="image/webp" srcSet="/assets/images/About%20us/Photos%20for%20website%20(about%20us)/Scaling-up-section-ARAI-approvals-640.webp 640w, /assets/images/About%20us/Photos%20for%20website%20(about%20us)/Scaling-up-section-ARAI-approvals-1200.webp 1200w" sizes="320px" />
                  {" "}
                  <img src="/assets/images/About%20us/Photos%20for%20website%20(about%20us)/Scaling-up-section-ARAI-approvals.jpg" alt="Receiving ARAI type approval" loading="lazy" decoding="async" />
                  {" "}
                </picture>
              </figure>
              <figure>
                <picture>
                  <source type="image/webp" srcSet="/assets/images/About%20us/Team%20Photos/our%20team%206-640.webp 640w, /assets/images/About%20us/Team%20Photos/our%20team%206-1200.webp 1200w" sizes="320px" />
                  {" "}
                  <img src="/assets/images/About%20us/Team%20Photos/our%20team%206.jpeg" alt="The wider Novorbis team" loading="lazy" decoding="async" />
                  {" "}
                </picture>
              </figure>
              <figure>
                <picture>
                  <source type="image/webp" srcSet="/assets/images/About%20us/Team%20Photos/team%20photo%202-640.webp 640w, /assets/images/About%20us/Team%20Photos/team%20photo%202-1200.webp 1200w" sizes="320px" />
                  {" "}
                  <img src="/assets/images/About%20us/Team%20Photos/team%20photo%202.jpeg" alt="Team members at work" loading="lazy" decoding="async" />
                  {" "}
                </picture>
              </figure>
              <figure>
                <picture>
                  <source type="image/webp" srcSet="/assets/images/About%20us/Team%20Photos/team%203-640.webp 640w, /assets/images/About%20us/Team%20Photos/team%203-1200.webp 1200w" sizes="320px" />
                  {" "}
                  <img src="/assets/images/About%20us/Team%20Photos/team%203.jpeg" alt="The Novorbis engineering team" loading="lazy" decoding="async" />
                  {" "}
                </picture>
              </figure>
              <figure>
                <picture>
                  <source type="image/webp" srcSet="/assets/images/About%20us/Team%20Photos/Our%20team%205-640.webp 640w, /assets/images/About%20us/Team%20Photos/Our%20team%205-1200.webp 1200w" sizes="320px" />
                  {" "}
                  <img src="/assets/images/About%20us/Team%20Photos/Our%20team%205.jpeg" alt="The Novorbis team" loading="lazy" decoding="async" />
                  {" "}
                </picture>
              </figure>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="cr-work dark">
          <div className="cr-work-inner">
            <div className="kicker dark reveal">
              {" "}
              <span className="num">03</span>
              {" "}
              <span className="sep">/</span>
              {" "}
              <span className="label">What we're here to do</span>
              {" "}
            </div>
            <div className="cr-pillars stagger">
              <div className="cr-pillar">
                {" "}
                <span className="bk bk-tl" />
                <span className="bk bk-tr" />
                {" "}
                <span className="bk bk-bl" />
                <span className="bk bk-br" />
                {" "}
                <div className="cr-pillar-icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3a15 15 0 0 1 0 18M3 12h18M3.6 7.5h16.8M3.6 16.5h16.8" />
                  </svg>
                  {" "}
                </div>
                <div className="cr-pillar-tag">Global Vision</div>
                <h3>To be the global frontrunner for absolute clean air.</h3>
                <p>
                  To be the global frontrunner for absolute clean air with environmental sustainability, one certified installation at a time.
                </p>
              </div>
              <div className="cr-pillar">
                {" "}
                <span className="bk bk-tl" />
                <span className="bk bk-tr" />
                {" "}
                <span className="bk bk-bl" />
                <span className="bk bk-br" />
                {" "}
                <div className="cr-pillar-icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  {" "}
                </div>
                <div className="cr-pillar-tag">Engineering Mission</div>
                <h3>Eliminating pollution at the source.</h3>
                <p>
                  Across diesel generators, heavy industries, and public utilities, we deploy certified, field-proven systems that prove both performance and environment.
                </p>
              </div>
              <div className="cr-pillar">
                {" "}
                <span className="bk bk-tl" />
                <span className="bk bk-tr" />
                {" "}
                <span className="bk bk-bl" />
                <span className="bk bk-br" />
                {" "}
                <div className="cr-pillar-icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21V9l9-6 9 6v12H3z" />
                    <path d="M9 21V12h6v9" />
                  </svg>
                  {" "}
                </div>
                <div className="cr-pillar-tag">National Commitment</div>
                <h3>Aligned with Bharat's Zero-Carbon Policy.</h3>
                <p>
                  Dynamically aligned with Bharat's Zero-Carbon Policy to systematically reduce urban PM levels, champion a circular economy, and drive long-term societal equity.
                </p>
              </div>
            </div>
            <div className="cr-values">
              <div className="cr-values-heading">
                <h3>Our Values</h3>
              </div>
              <div className="cr-values-grid stagger">
                <div className="cr-value">
                  <h4>Stay curious</h4>
                </div>
                <div className="cr-value">
                  <h4>Think big</h4>
                </div>
                <div className="cr-value">
                  <h4>Play the long game</h4>
                </div>
                <div className="cr-value">
                  <h4>Act with integrity</h4>
                </div>
                <div className="cr-value">
                  <h4>Chase the mission</h4>
                </div>
                <div className="cr-value">
                  <h4>Set the pace</h4>
                </div>
                <div className="cr-value">
                  <h4>Be kind and direct</h4>
                </div>
                <div className="cr-value">
                  <h4>Insist on the highest standards</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="cr-open" id="roles">
          <div className="cr-open-inner">
            <div className="kicker dark reveal">
              {" "}
              <span className="num">04</span>
              {" "}
              <span className="sep">/</span>
              {" "}
              <span className="label">Open roles</span>
              {" "}
            </div>
            <div className="cr-open-header reveal">
              <h2>We're hiring across multiple functions</h2>
              <div className="cr-open-count" id="crRoleCount" />
            </div>
            <div className="cr-filters reveal">
              <div className="cr-filter-row">
                {" "}
                <span className="cr-filter-label">Dept</span>
                {" "}
                <div id="crDeptChips" />
              </div>
              <div className="cr-filter-row">
                {" "}
                <span className="cr-filter-label">Location</span>
                {" "}
                <div id="crLocChips" />
              </div>
            </div>
            <div className="cr-jobs stagger" id="crRoleList" />
            <div className="cr-show-more">
              {" "}
              <button type="button" className="btn btn-ghost-dark" id="crShowMore" hidden />
              {" "}
            </div>
            <div className="cr-role-empty" id="crRoleEmpty" hidden>
              <h3>No roles match that filter.</h3>
              <p>Clear the filters, or send us your profile anyway. We hire ahead of postings.</p>
            </div>
            {" "}
            {" "}
            <div className="cr-general reveal" id="general">
              <div className="cr-general-copy">
                {" "}
                <span className="cr-general-applying-for" id="crApplyingFor" hidden />
                {" "}
                <h3>Don't see your role?</h3>
                <p>
                  Send us what you've built and which part of this problem interests you. Engineering, production, field service, sales, compliance — if you can make the case, we'll read it.
                </p>
                <p className="cr-general-note">We reply to every application, usually within a week.</p>
              </div>
              <form data-form-source="careers-general" className="contact-form cr-form" noValidate>
                {" "}
                <span className="bk bk-tl" />
                <span className="bk bk-tr" />
                {" "}
                <span className="bk bk-bl" />
                <span className="bk bk-br" />
                {" "}
                {" "}
                <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", opacity: "0", pointerEvents: "none" }} aria-hidden="true" />
                {" "}
                <div className="field-row">
                  <div className="field">
                    {" "}
                    <label htmlFor="cr-name">Name *</label>
                    {" "}
                    <input type="text" id="cr-name" name="name" required placeholder="Your name" />
                    {" "}
                  </div>
                  <div className="field">
                    {" "}
                    <label htmlFor="cr-email">Email *</label>
                    {" "}
                    <input type="email" id="cr-email" name="email" required placeholder="you@email.com" />
                    {" "}
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    {" "}
                    <label htmlFor="cr-phone">Phone *</label>
                    {" "}
                    <input type="tel" id="cr-phone" name="phone" required placeholder="9876543210" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} />
                    {" "}
                  </div>
                  <div className="field">
                    {" "}
                    <label htmlFor="cr-role">Role you're after *</label>
                    {" "}
                    <input type="text" id="cr-role" name="role" required placeholder="e.g. Design Engineer" />
                    {" "}
                  </div>
                </div>
                <div className="field">
                  {" "}
                  <label htmlFor="cr-link">LinkedIn or portfolio *</label>
                  {" "}
                  <input type="url" id="cr-link" name="portfolio" required placeholder="https://" />
                  {" "}
                </div>
                <div className="field">
                  {" "}
                  <label htmlFor="cr-resume">Resume *</label>
                  {" "}
                  <input type="file" id="cr-resume" name="resume" accept=".pdf,.doc,.docx" required data-max-size="5242880" />
                  {" "}
                  <span className="field-hint">PDF or Word, up to 5 MB.</span>
                  {" "}
                </div>
                <div className="field">
                  {" "}
                  <label htmlFor="cr-why">Cover letter *</label>
                  {" "}
                  <textarea id="cr-why" name="message" rows={4} required placeholder="A few lines is plenty." />
                  {" "}
                </div>
                <div className="cf-turnstile-wrap">
                  <div className="cf-turnstile" data-sitekey="0x4AAAAAADWTNNKphv_pLG73" data-theme="dark" />
                </div>
                <div className="submit-row">
                  {" "}
                  <button type="submit" className="btn btn-primary">
                    Send application{" "}
                    <span className="arr">→</span>
                  </button>
                  {" "}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      {" "}
      <SiteFooter />
      {" "}
    </PageShell>
  );
}
