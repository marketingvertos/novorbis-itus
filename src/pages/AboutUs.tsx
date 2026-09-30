import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/about.css";

const meta: PageMeta = {
  "title": "About Novorbis Itus | India's Filterless Emission Control Systems",
  "tags": [
    {
      "name": "description",
      "content": "Learn about Novorbis Itus, the Indian clean-tech company engineering filterless emission control systems for DG sets, heavy industries, and crematoriums."
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
      "content": "About Novorbis Itus | India's Filterless Emission Control Systems"
    },
    {
      "property": "og:description",
      "content": "Learn about Novorbis Itus, the Indian clean-tech company engineering filterless emission control systems for DG sets, heavy industries, and crematoriums."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/about-us.html"
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
      "content": "About Novorbis Itus | India's Filterless Emission Control Systems"
    },
    {
      "name": "twitter:description",
      "content": "Learn about Novorbis Itus, the Indian clean-tech company engineering filterless emission control systems for DG sets, heavy industries, and crematoriums."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/about-us.html",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Novorbis",
      "description": "Learn about Novorbis and our mission to eliminate industrial air pollution across India.",
      "url": "https://novorbisitus.com/about-us.html"
    }
  ]
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js",
  "/js/about.js",
  "/js/forms.js",
  "https://challenges.cloudflare.com/turnstile/v0/api.js"
];

export default function AboutUs() {
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
      <SiteNav active="about" />
      {" "}
      <section className="about-hero dark" id="hero">
        <div className="about-hero-inner">
          <div className="hero-eyebrow">Clean-tech Engineers</div>
          <h1 className="about-hero-title">
            {" "}Engineering India's
            <br />
            <em>Zero-Emission</em>
            {" "}Future.{" "}
          </h1>
          <p className="about-hero-sub">
            {" "}We are India's pioneering clean-tech engineers rewriting the rules of emission control. Through field-tested, and certified technologies, we transform heavy industrial pollution into compliance, restoration, and renewal.{" "}
          </p>
          <div className="about-hero-actions">
            {" "}
            <a className="btn btn-primary" href="#story">
              Read Our Story{" "}
              <span className="arr">↓</span>
            </a>
            {" "}
            <a className="btn btn-ghost-dark" href="#contact">
              Partner With Us{" "}
              <span className="arr">→</span>
            </a>
            {" "}
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">
          {" "}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          {" "}Scroll{" "}
        </div>
        <div className="hero-map-wrap">
          <picture className="hero-dot-pic" aria-hidden="true">
            <source type="image/webp" srcSet="/assets/images/About us/new-world-640.webp 640w, /assets/images/About us/new-world-1200.webp 1200w, /assets/images/About us/new-world-1920.webp 1920w" sizes="100vw" />
            {" "}
            <img className="hero-dot-map" src="/assets/images/About us/new-world-1200.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
            {" "}
          </picture>
        </div>
        <div className="about-hero-grad" aria-hidden="true" />
        <div className="hero-stats stagger">
          <div className="hero-stat">
            <div className="hs-num">
              <span data-count="500">0</span>
              <span className="hs-unit">+</span>
            </div>
            <div className="hs-label">DG sets retrofitted</div>
          </div>
          {" "}
          <span className="hs-div" aria-hidden="true" />
          {" "}
          <div className="hero-stat">
            <div className="hs-num">
              <span className="hs-pre">Up to</span>
              <span data-count="95">0</span>
              <span className="hs-unit">%</span>
            </div>
            <div className="hs-label">Average carbon reduction</div>
          </div>
          {" "}
          <span className="hs-div" aria-hidden="true" />
          {" "}
          <div className="hero-stat">
            <div className="hs-num">
              <span data-count="10498">0</span>
            </div>
            <div className="hs-label">
              Tonnes CO
              <sub>2</sub>
              {" "}averted
            </div>
          </div>
          {" "}
          <span className="hs-div" aria-hidden="true" />
          {" "}
          <div className="hero-stat">
            <div className="hs-num">
              <span data-count="50">0</span>
              <span className="hs-unit">+</span>
            </div>
            <div className="hs-label">Cities operational</div>
          </div>
        </div>
      </section>
      {" "}
      <section className="foundation dark" id="foundation">
        <div className="foundation-inner">
          <div className="foundation-header reveal">
            <div className="kicker">
              <span className="num">01</span>
              <span className="sep">/</span>
              <span className="label">Foundation</span>
            </div>
            <h2>
              Driven by Purpose.
              <br />
              <em>Anchored in Engineering.</em>
            </h2>
            <p>
              Every environmental solution we build is engineered to enforce strict regulatory compliance, restore industrial air quality, and safeguard public health.
            </p>
          </div>
          <div className="foundation-pillars stagger">
            {" "}
            {" "}
            <div className="pillar-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="pillar-icon">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" color="var(--green-deep)">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3a15 15 0 0 1 0 18M3 12h18M3.6 7.5h16.8M3.6 16.5h16.8" />
                </svg>
                {" "}
              </div>
              <h3>Global Vision</h3>
              <p>
                To be the global frontrunner for absolute clean air with environmental sustainability, one certified installation at a time.
              </p>
            </div>
            {" "}
            {" "}
            <div className="pillar-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="pillar-icon">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" color="var(--green-deep)">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                {" "}
              </div>
              <h3>Engineering Mission</h3>
              <p>
                Eliminating pollution at the source. Across diesel generators, heavy industries, and public utilities, we deploy certified, field-proven systems that prove both performance and environment.
              </p>
            </div>
            {" "}
            {" "}
            <div className="pillar-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="pillar-icon">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" color="var(--green-deep)">
                  <path d="M3 21V9l9-6 9 6v12H3z" />
                  <path d="M9 21V12h6v9" />
                </svg>
                {" "}
              </div>
              <h3>National Commitment</h3>
              <p>
                Dynamically aligned with Bharat's Zero-Carbon Policy to systematically reduce urban PM levels, champion a circular economy, and drive long-term societal equity.
              </p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="story light" id="story">
        <div className="story-header-wrap">
          <div className="kicker">
            <span className="num">02</span>
            <span className="sep">/</span>
            <span className="label">Our Story</span>
          </div>
          <h2>
            From concept to
            <br />
            <em>Industry Leadership</em>
          </h2>
          <p>
            A decade of engineering breakthroughs, certifications, and partnerships, built from a single audacious idea.
          </p>
        </div>
        {" "}
        {" "}
        <div className="story-track" id="storyTrack">
          {" "}
          {" "}
          <div className="story-body">
            {" "}
            {" "}
            <div className="story-year-tabs" id="storyYearTabs" role="tablist">
              {" "}
              <button className="year-tab is-active" data-chapter="origin" role="tab">Origin</button>
              {" "}
              <button className="year-tab" data-chapter="problem" role="tab">The Problem</button>
              {" "}
              <button className="year-tab" data-chapter="idea" role="tab">The Idea</button>
              {" "}
              <button className="year-tab" data-chapter="first-proof" role="tab">First Proof</button>
              {" "}
              <button className="year-tab" data-chapter="india-noticed" role="tab">India Noticed</button>
              {" "}
              <button className="year-tab" data-chapter="commercial" role="tab">Commercial Launch</button>
              {" "}
              <button className="year-tab" data-chapter="scaling" role="tab">Scaling Up</button>
              {" "}
              <button className="year-tab" data-chapter="today" role="tab">Today</button>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="story-chapter-nav" id="storyChapterNav">
              {" "}
              <button className="story-ch-arrow story-ch-prev" id="storyChPrev" aria-label="Previous chapter">
                {" "}
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 3L5 8l5 5" />
                </svg>
                {" "}
              </button>
              {" "}
              <span className="story-ch-label" id="storyChLabel">Origin</span>
              {" "}
              <button className="story-ch-arrow story-ch-next" id="storyChNext" aria-label="Next chapter">
                {" "}
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
                {" "}
              </button>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="story-left" id="storyLeft">
              {" "}
              {" "}
              <div className="story-img-stack" id="storyStack">
                {" "}
                {" "}
              </div>
              {" "}
              {" "}
              <div className="story-chapter-counter" id="storyChapterCounter">
                {" "}
                <span className="num">01</span>
                <span className="sep">/</span>
                <span className="num">08</span>
                {" "}
                <span className="sep">—</span>
                <span className="label">ORIGIN</span>
                {" "}
              </div>
            </div>
            {" "}
            {" "}
            <div className="story-right" id="storyRight">
              <div className="story-milestone" data-chapter="origin" data-idx="0">
                <div className="ms-meta">
                  <span className="ms-counter" />
                  <span className="ms-date">Nov 2017</span>
                </div>
                <div className="ms-title">It Started With a News Report. And Three Students Who Couldn't Look Away.</div>
                <div className="ms-text">
                  In November 2017, a tragic, smog-induced multi-car pile-up on the Yamuna Expressway caught national headlines. For Indore college students Harsh Neekhra, Divyank Gupta, and Gagan Tripathi, it was a turning point.
                </div>
                <div className="ms-text">
                  Driven by the conviction that India's air pollution was an engineering problem left unsolved, they began prototyping in a small room without any funding or industry contacts. By April 2019, their mission materialized into Novorbis Itus Pvt Ltd, a company built with a single goal: creating emission control technology that actually works in the Indian condition.
                </div>
              </div>
              <div className="story-milestone" data-chapter="problem" data-idx="1">
                <div className="ms-meta">
                  <span className="ms-counter" />
                  <span className="ms-date">2017–2019</span>
                </div>
                <div className="ms-title">The Smog on That Expressway Didn't Come From Nowhere.</div>
                <div className="ms-text">
                  The Yamuna Expressway pile-up exposed a daily, invisible crisis: millions of urban combustion sources, like industrial boilers and diesel generators, releasing fine particulate matter directly at breathing height. To investigate, the founders conducted a survey in Indore and found that average AQI at human breathing level was significantly above safe limits.
                </div>
                <div className="ms-text">
                  India relies on over two million diesel generators for critical backup power. Yet traditional emission controls haven't kept pace. Standard physical filters clog, increase engine backpressure, and demand constant, expensive replacements, leading operators to skip maintenance entirely.
                </div>
                <div className="ms-text">
                  Between 2017 and 2019, the three founders studied this persistent failure pattern. Their conclusion was clear: don't build a better filter: eliminate the filter entirely.
                </div>
              </div>
              <div className="story-milestone" data-chapter="idea" data-idx="2">
                <div className="ms-meta">
                  <span className="ms-counter" />
                  <span className="ms-date">Jul 2019</span>
                </div>
                <div className="ms-title">What If the Exhaust Cleaned Itself?</div>
                <div className="ms-text">
                  The team turned to electrostatics. Instead of physically blocking particles, they used a high-voltage electric field to charge and pull them out of the exhaust stream onto collection electrodes. The result: no filter, no clogging, no backpressure.
                </div>
                <div className="ms-text">
                  While electrostatic precipitation has existed since 1907, conventional designs were built for massive industrial smokestacks, not compact diesel generators. The team re-engineered the geometry into a cylindrical shell with a rigid central spike, creating a 360° electric field with zero dead zones that fits any existing generator without modification.
                </div>
                <div className="ms-text">
                  By July 2019, this core mechanism was finalised as Novorbis's Electrostatic Precipitation Technology, the engine behind every product they build today.
                </div>
              </div>
              <div className="story-milestone" data-chapter="first-proof" data-idx="3">
                <div className="ms-meta">
                  <span className="ms-counter" />
                  <span className="ms-date">Sep 2019</span>
                </div>
                <div className="ms-title">The Government of India Called It One of the Top 5 Innovations in the Country.</div>
                <div className="ms-text">
                  On September 9, 2019, less than five months after founding Novorbis, the team was recognised by the Government of India as one of the country's Top 5 Innovators for their filterless air purifier. AICTE honoured them separately that same year.
                </div>
                <div className="ms-text">
                  This marked the first external confirmation of their breakthrough: the first filterless emission control device of its kind, engineered entirely in India without imported components or copied designs.
                </div>
                <div className="ms-text">
                  By October 2019, Novorbis was selected to represent India twice at the Innovation and Start-up Exchange Program in South Korea, gaining critical international validation and technical exposure.
                </div>
              </div>
              <div className="story-milestone" data-chapter="india-noticed" data-idx="4">
                <div className="ms-meta">
                  <span className="ms-counter" />
                  <span className="ms-date">Dec 2019–2020</span>
                </div>
                <div className="ms-title">UNDP. Niti Aayog. The World Was Paying Attention.</div>
                <div className="ms-text">
                  In December 2019, Novorbis won both the Assocham Startup Launchpad and the Global Student Entrepreneur Awards (GSEA). By early 2020, they advanced to the EO GSEA Global Finals.
                </div>
                <div className="ms-text">
                  Their most meaningful milestone came from home, when they won the National Innovation Challenge by UNDP Youth Co:Lab and Niti Aayog, aligning the company directly with national climate policy. Consequently, Novorbis Itus was appointed Brand Ambassador for the MHRD Innovation Cell.
                </div>
              </div>
              <div className="story-milestone" data-chapter="commercial" data-idx="5">
                <div className="ms-meta">
                  <span className="ms-counter" />
                  <span className="ms-date">Dec 2022–Mar 2024</span>
                </div>
                <div className="ms-title">December 2022. The First Order. The Real Beginning.</div>
                <div className="ms-text">
                  In December 2022, Novorbis secured its first commercial order, marking its transition from R&D to a viable market player.
                </div>
                <div className="ms-text">
                  To fuel expansion, the company closed a Pre-Seed A funding round in May 2023, followed by Pre-Seed B funding from NGIS and PONTAQ in November 2023. This capital enabled operational scale, prompting Novorbis to relocate its headquarters from Indore to Pune in October 2023 to embed itself in India's industrial and manufacturing belt.
                </div>
                <div className="ms-text">
                  By March 2024, the company formalised a landmark partnership with Greaves Cotton, a major industry signal validating their technology alongside one of India's most respected engine manufacturers.
                </div>
              </div>
              <div className="story-milestone" data-chapter="scaling" data-idx="6">
                <div className="ms-meta">
                  <span className="ms-counter" />
                  <span className="ms-date">Oct 2024</span>
                </div>
                <div className="ms-title">Scaling the Solution.</div>
                <div className="ms-text">
                  In October 2024, surging market demand prompted Novorbis to significantly expand its Pune manufacturing facility. This physical growth matched the company's trajectory as it rapidly doubled its annual revenue. During the same pivotal month, Novorbis received TYPE approval from ARAI, proving its product met efficiency and regulatory standards.
                </div>
                <div className="ms-text">
                  Concurrently, the R&D team developed a new product category: the Crematoriums Air Purification System (CarbonFree CAPS). Urban crematoriums faced a unique compliance crisis, including National Green Tribunal (NGT) closure notices and community complaints about visible smoke, with no purpose-built solution available. Novorbis recognised the same regulatory and technological gap they had solved with diesel generators five years earlier and engineered a dedicated system.
                </div>
                <div className="ms-text">
                  Today, Novorbis has retrofitted over 500 diesel generator sets across India. Their client portfolio includes the Indian Army, Google, Tata Projects, and Adani Realty, serving sectors from real estate and data centres to heavy manufacturing.
                </div>
              </div>
              <div className="story-milestone" data-chapter="today" data-idx="7">
                <div className="ms-meta">
                  <span className="ms-counter" />
                  <span className="ms-date">Today</span>
                </div>
                <div className="ms-title">One Technology Platform. Four Products. Every Emission Source in India.</div>
                <div className="ms-text">
                  What began as a single filterless device for diesel generators is now a comprehensive emission control platform. The current Novorbis portfolio includes:
                </div>
                <ul className="ms-list">
                  <li>
                    <strong>CarbonFree ESP:</strong>
                    {" "}Filterless Technology that handles PM compliance for diesel generator sets.
                  </li>
                  <li>
                    <strong>CarbonFree Advanced Catalyst+:</strong>
                    {" "}Eliminates both PM and toxic gases simultaneously.
                  </li>
                  <li>
                    <strong>CarbonFree CAPS:</strong>
                    {" "}Delivers dedicated clean-air technology to urban crematoriums.
                  </li>
                  <li>
                    <strong>APCD Hybrid ESP:</strong>
                    {" "}Manages industrial boilers, furnaces, and kilns at scale.
                  </li>
                </ul>
                <div className="ms-text">
                  Engineered and certified entirely in India, these systems meet strict compliance standards without relying on imported core technology.
                </div>
                <div className="ms-text">
                  Looking ahead, Novorbis is entering its next frontier: active R&D into Carbon Capture, Utilisation, and Storage (CCUS) to remove CO₂ directly from these same exhaust streams.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="recognition light" id="recognition">
        <div className="recognition-inner">
          <div className="recognition-header reveal">
            <div className="kicker">
              <span className="num">03</span>
              <span className="sep">/</span>
              <span className="label">Recognition</span>
            </div>
            <h2>
              Our technology has been
              <br />
              <em>independently validated.</em>
            </h2>
          </div>
          <div className="awards-strip reveal">
            <div className="awards-strip-label">Recognition & Awards</div>
            <div className="awards-list">
              {" "}
              <span className="award-badge">Top 5 Innovators in India, Govt of India, 2019</span>
              {" "}
              <span className="award-badge">AICTE National Innovation Honour, 2019</span>
              {" "}
              <span className="award-badge">Assocham Startup Launchpad Series Winner, 2019</span>
              {" "}
              <span className="award-badge">Global Student Entrepreneur Awards (GSEA) Winner, 2019</span>
              {" "}
              <span className="award-badge">UNDP Youth Co:Lab + Niti Aayog National Innovation Challenge Winner, 2020</span>
              {" "}
              <span className="award-badge">MHRD Innovation Cell Brand Ambassador, Novorbis Itus, 2020</span>
              {" "}
            </div>
          </div>
          <div className="awards-strip reveal">
            <div className="awards-strip-label">Certifications & IP</div>
            <div className="awards-list">
              {" "}
              <span className="award-badge">ARAI TYPE Approval (up to 95% Efficiency), 2024</span>
              {" "}
              <span className="award-badge">ISO Certification</span>
              {" "}
              <span className="award-badge">4 Patents Granted</span>
              {" "}
              <span className="award-badge">4 Patents Filed</span>
              {" "}
              <span className="award-badge">Validated by IIT Bombay</span>
              {" "}
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="team dark" id="team">
        <div className="team-inner">
          <div className="team-header reveal">
            <div className="kicker">
              <span className="num">04</span>
              <span className="sep">/</span>
              <span className="label">Core Team</span>
            </div>
            <h2>Core Team</h2>
            <p>Engineers and visionaries committed to decarbonisation</p>
          </div>
          <div className="team-grid stagger">
            <div className="team-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="team-photo">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/assets/images/About us/Core team/Harsh-640.webp" type="image/webp" />
                  <source srcSet="/assets/images/About us/Core team/Harsh-1200.webp" type="image/webp" />
                  {" "}
                  <img src="/assets/images/About us/Core team/Harsh.jpg" alt="Harsh Neekhra" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {" "}
                </picture>
              </div>
              <div className="team-info">
                <div className="team-dept">Founder</div>
                <div className="team-name">Harsh Neekhra</div>
                <div className="team-role">Founder & CEO</div>
                {" "}
                <a className="team-linkedin" href="https://www.linkedin.com/in/harsh-neekhra/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}LinkedIn{" "}
                </a>
                {" "}
              </div>
            </div>
            <div className="team-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="team-photo">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/assets/images/About us/Core team/Divyank-640.webp" type="image/webp" />
                  <source srcSet="/assets/images/About us/Core team/Divyank-1200.webp" type="image/webp" />
                  {" "}
                  <img src="/assets/images/About us/Core team/Divyank.jpg" alt="Divyank Gupta" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {" "}
                </picture>
              </div>
              <div className="team-info">
                <div className="team-dept">Founder</div>
                <div className="team-name">Divyank Gupta</div>
                <div className="team-role">Director, Sales</div>
                {" "}
                <a className="team-linkedin" href="https://www.linkedin.com/in/divyank-gupta-2275ba15b/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}LinkedIn{" "}
                </a>
                {" "}
              </div>
            </div>
            <div className="team-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="team-photo">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/assets/images/About us/Core team/Gagan-640.webp" type="image/webp" />
                  <source srcSet="/assets/images/About us/Core team/Gagan-1200.webp" type="image/webp" />
                  {" "}
                  <img src="/assets/images/About us/Core team/Gagan.jpg" alt="Gagan Tripathi" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {" "}
                </picture>
              </div>
              <div className="team-info">
                <div className="team-dept">Founder</div>
                <div className="team-name">Gagan Tripathi</div>
                <div className="team-role">Chief Technology Officer</div>
                {" "}
                <a className="team-linkedin" href="https://www.linkedin.com/in/gagan-tripathi-660480128/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}LinkedIn{" "}
                </a>
                {" "}
              </div>
            </div>
            <div className="team-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="team-photo">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/assets/images/About us/Core team/Ashutosh-640.webp" type="image/webp" />
                  <source srcSet="/assets/images/About us/Core team/Ashutosh-1200.webp" type="image/webp" />
                  {" "}
                  <img src="/assets/images/About us/Core team/Ashutosh.jpg" alt="Ashutosh Rangdale" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {" "}
                </picture>
              </div>
              <div className="team-info">
                <div className="team-dept">Core Team</div>
                <div className="team-name">Ashutosh Rangdale</div>
                <div className="team-role">Finance & Operations Manager</div>
                {" "}
                <a className="team-linkedin" href="https://www.linkedin.com/in/ashutoshrangdale/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}LinkedIn{" "}
                </a>
                {" "}
              </div>
            </div>
            <div className="team-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="team-photo">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/assets/images/About us/Core team/Hitesh rawate-640.webp" type="image/webp" />
                  <source srcSet="/assets/images/About us/Core team/Hitesh rawate-1200.webp" type="image/webp" />
                  {" "}
                  <img src="/assets/images/About us/Core team/Hitesh rawate.jpg" alt="Dr Hitesh Rawate" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {" "}
                </picture>
              </div>
              <div className="team-info">
                <div className="team-dept">Core Team</div>
                <div className="team-name">Dr Hitesh Rawate</div>
                <div className="team-role">Deputy General Manager</div>
                {" "}
                <a className="team-linkedin" href="https://www.linkedin.com/in/dr-hitesh-rawate/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}LinkedIn{" "}
                </a>
                {" "}
              </div>
            </div>
            <div className="team-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="team-photo">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/assets/images/About us/Core team/Hitesh thakkar-640.webp" type="image/webp" />
                  <source srcSet="/assets/images/About us/Core team/Hitesh thakkar-1200.webp" type="image/webp" />
                  {" "}
                  <img src="/assets/images/About us/Core team/Hitesh thakkar.jpg" alt="Hitesh Thakker" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {" "}
                </picture>
              </div>
              <div className="team-info">
                <div className="team-dept">Core Team</div>
                <div className="team-name">Hitesh Thakker</div>
                <div className="team-role">Sr. General Sales Manager (West)</div>
              </div>
            </div>
            <div className="team-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="team-photo">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/assets/images/About us/Core team/Navee Sigroha-640.webp" type="image/webp" />
                  <source srcSet="/assets/images/About us/Core team/Navee Sigroha-1200.webp" type="image/webp" />
                  {" "}
                  <img src="/assets/images/About us/Core team/Navee Sigroha.jpg" alt="Naveen Sigroha" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {" "}
                </picture>
              </div>
              <div className="team-info">
                <div className="team-dept">Core Team</div>
                <div className="team-name">Naveen Sigroha</div>
                <div className="team-role">General Sales Manager (North)</div>
                {" "}
                <a className="team-linkedin" href="https://www.linkedin.com/in/naveen-sigroha-22102936/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}LinkedIn{" "}
                </a>
                {" "}
              </div>
            </div>
            <div className="team-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="team-photo">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/assets/images/About us/Core team/Shivank-640.webp" type="image/webp" />
                  <source srcSet="/assets/images/About us/Core team/Shivank-1200.webp" type="image/webp" />
                  {" "}
                  <img src="/assets/images/About us/Core team/Shivank.jpg" alt="Shivank Matele" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {" "}
                </picture>
              </div>
              <div className="team-info">
                <div className="team-dept">Core Team</div>
                <div className="team-name">Shivank Matele</div>
                <div className="team-role">Lead Simulation & Research Manager</div>
                {" "}
                <a className="team-linkedin" href="https://www.linkedin.com/in/shivankmatele/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}LinkedIn{" "}
                </a>
                {" "}
              </div>
            </div>
            <div className="team-card">
              <div className="bk bk-tl" />
              <div className="bk bk-tr" />
              <div className="bk bk-bl" />
              <div className="bk bk-br" />
              <div className="team-photo">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/assets/images/About us/Core team/Pooja Nikam-640.webp" type="image/webp" />
                  <source srcSet="/assets/images/About us/Core team/Pooja Nikam-1200.webp" type="image/webp" />
                  {" "}
                  <img src="/assets/images/About us/Core team/Pooja Nikam.jpg" alt="Pooja Nikam" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {" "}
                </picture>
              </div>
              <div className="team-info">
                <div className="team-dept">Core Team</div>
                <div className="team-name">Pooja Nikam</div>
                <div className="team-role">Government Sales Representative</div>
                {" "}
                <a className="team-linkedin" href="https://www.linkedin.com/in/pooja-nikam-4b5a92256/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}LinkedIn{" "}
                </a>
                {" "}
              </div>
            </div>
          </div>
          {" "}
          {" "}
          <div className="team-hiring">
            <div>
              <h3>We're hiring</h3>
              <p>Join engineers and operators building the future of clean air.</p>
            </div>
            {" "}
            <a className="btn btn-ghost-dark" href="/careers">
              View Careers{" "}
              <span className="arr">→</span>
            </a>
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <section className="contact light" id="contact">
        <div className="contact-inner">
          <div className="contact-copy reveal">
            <div className="kicker">
              <span className="num">05</span>
              <span className="sep">/</span>
              <span className="label">Connect</span>
            </div>
            <h2>Join the clean tech revolution.</h2>
            <p>
              Whether you're a facility manager seeking proven solutions or an investor backing the future of decarbonisation, Novorbis is ready to partner.
            </p>
          </div>
          <form className="contact-form reveal" data-form-source="about" noValidate>
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
