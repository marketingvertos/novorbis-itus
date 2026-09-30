import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/technology.css";

const meta: PageMeta = {
  "title": "Filterless Electrostatic Precipitator (ESP) | Novorbis Itus",
  "tags": [
    {
      "name": "description",
      "content": "Explore Novorbis Itus Electrostatic Precipitator (ESP), a filterless electrostatic emission control system designed for high-efficiency PM capture with zero clogging."
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
      "content": "Filterless Electrostatic Precipitator (ESP) | Novorbis Itus"
    },
    {
      "property": "og:description",
      "content": "Explore Novorbis Itus Electrostatic Precipitator (ESP), a filterless electrostatic emission control system designed for high-efficiency PM capture with zero clogging."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/technology.html"
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
      "content": "Filterless Electrostatic Precipitator (ESP) | Novorbis Itus"
    },
    {
      "name": "twitter:description",
      "content": "Explore Novorbis Itus Electrostatic Precipitator (ESP), a filterless electrostatic emission control system designed for high-efficiency PM capture with zero clogging."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/technology.html",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "name": "Novorbis Emission Control Technology",
      "description": "Electrostatic precipitation and wet scrubbing for industrial emission control — no filters, no clogging, continuous operation.",
      "url": "https://novorbisitus.com/technology.html"
    }
  ]
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js",
  "/js/technology.js",
  "/js/forms.js",
  "https://challenges.cloudflare.com/turnstile/v0/api.js"
];

export default function CoreTechnology() {
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
      <SiteNav active="technology" />
      {" "}
      <section className="tech-hero" id="hero">
        <div className="tech-hero-inner">
          <div className="kicker reveal-line">
            <span className="num">01</span>
            <span className="sep">/</span>
            <span>The Mechanism</span>
          </div>
          <h1 className="tech-hero-headline">
            {" "}
            <span className="line-1">We don’t trap pollution.</span>
            {" "}
            <span className="line-2">
              <em>We remove it at the source.</em>
            </span>
            {" "}
          </h1>
          <p className="tech-hero-sub qc-mark">
            Tired of seeing emission control “solutions” that necessitates more complex interventions, we built a system that cleans itself. Our Electrostatic Precipitator (ESP) uses an electrostatic force to capture particulate matter and unburned hydrocarbon particles directly from the exhaust stream. No filter. No clog. No compromise.
          </p>
        </div>
      </section>
      {" "}
      <section className="tech-problem light" id="problem">
        <div className="tech-problem-inner">
          <div className="tech-problem-header reveal">
            <div className="kicker">
              <span className="num">02</span>
              <span className="sep">/</span>
              <span className="label">Problem · Reality</span>
            </div>
            <h2>Stop Paying for Backpressure.</h2>
            <p>
              Conventional emission control systems naturally lose efficiency over time, every particle they catch brings them closer to a clog. As airflow is restricted, your engine works harder, fuel costs climb, and compliance slips, often without warning.
            </p>
          </div>
          <div className="dg-table-wrap">
            <div className="dg-table-overhead">
              <div />
              <div className="overhead-group">Filter-based ESP: head-to-head with Novorbis’s filterless ESP</div>
            </div>
            <table className="dg-table">
              <thead>
                <tr>
                  <th />
                  <th>
                    <span className="product-tag">Industry Standard</span>
                    Conventional System
                  </th>
                  <th>
                    <span className="product-tag">Novorbis</span>
                    Electrostatic Precipitator (ESP)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>How it captures</th>
                  <td>Physical barrier: blocks particles</td>
                  <td>Electric field: pulls particles out</td>
                </tr>
                <tr>
                  <th>Clogging</th>
                  <td>Inevitable: designed to fill up</td>
                  <td>Not possible: no barrier exists</td>
                </tr>
                <tr>
                  <th>Backpressure on engine</th>
                  <td>High: measurable performance impact</td>
                  <td className="content-updated">{"<0.7kPa: negligible impact on engine performance"}</td>
                </tr>
                <tr>
                  <th>PM & HC capture efficiency</th>
                  <td>Drops as the media fills and ages</td>
                  <td className="qc-mark">Up to 99% efficiency: stable year on year</td>
                </tr>
                <tr>
                  <th>Consumables</th>
                  <td>Filter media needs periodic replacement</td>
                  <td>Zero: nothing to replace, ever</td>
                </tr>
                <tr>
                  <th>Maintenance</th>
                  <td>Filter removal, cleaning, reinstallation</td>
                  <td>Periodic electrode cleaning only</td>
                </tr>
                <tr>
                  <th>Compliance risk over time</th>
                  <td>Grows as the system ages</td>
                  <td>Flat: our performance doesn’t drift</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dg-solution-foot">
            <p>
              The filter approach is a slow tax on your operations. ESP eliminates the tax entirely, same compliance on day 1 and year 10.
            </p>
            {" "}
            <a className="btn btn-primary" href="#capture">
              See how it works{" "}
              <span className="arr">→</span>
            </a>
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <section className="tech-pin" id="capture">
        <div className="tech-stage">
          <canvas className="stage-canvas" id="stageCanvas" />
          {" "}
          {" "}
          <div className="stage-plate">
            {" "}
            <svg viewBox="0 0 1440 700" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}>
              {" "}
              {" "}
              <line x1="180" y1="88" x2="1260" y2="88" stroke="rgba(255,255,255,0.78)" strokeWidth="1.5" />
              {" "}
              {" "}
              <line x1="180" y1="612" x2="1260" y2="612" stroke="rgba(255,255,255,0.78)" strokeWidth="1.5" />
              {" "}
              {" "}
              <path d="M 180 88 C 100 88 100 612 180 612" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
              <path d="M 1260 88 C 1340 88 1340 612 1260 612" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
              {" "}
              {" "}
              <ellipse cx="540" cy="350" rx="6" ry="262" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" strokeDasharray="2 3" />
              <ellipse cx="900" cy="350" rx="6" ry="262" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" strokeDasharray="2 3" />
              {" "}
              {" "}
              <line x1="380" y1="76" x2="380" y2="88" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />
              <line x1="720" y1="76" x2="720" y2="88" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />
              <line x1="1060" y1="76" x2="1060" y2="88" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />
              <line x1="380" y1="612" x2="380" y2="624" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />
              <line x1="720" y1="612" x2="720" y2="624" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />
              <line x1="1060" y1="612" x2="1060" y2="624" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />
              {" "}
              {" "}
              <text x="40" y="58" fontFamily="Inter, system-ui, sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.48)" letterSpacing="2.4">GROUNDED COLLECTION WALL · TOP</text>
              {" "}
              <text x="40" y="654" fontFamily="Inter, system-ui, sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.48)" letterSpacing="2.4">GROUNDED COLLECTION WALL · BOTTOM</text>
              {" "}
              <text x="40" y="346" fontFamily="Inter, system-ui, sans-serif" fontSize="9.5" fill="rgba(61,220,164,0.68)" letterSpacing="2.4">DISCHARGE ELECTRODE · CENTRELINE</text>
              {" "}
            </svg>
            {" "}
          </div>
          {" "}
          {" "}
          <div className="text-panel" id="textPanel">
            {" "}
            <span className="bk bk-tl" />
            <span className="bk bk-tr" />
            {" "}
            <span className="bk bk-bl" />
            <span className="bk bk-br" />
            {" "}
            <div className="text-panel-grid">
              <div className="kicker">
                <span className="num">03</span>
                <span className="sep">/</span>
                <span className="label">How It Works</span>
              </div>
              <div className="stage-block is-visible" data-stage="0">
                <div className="stage-tag">
                  <span className="num">Stage 01</span>
                  <span className="sep">/</span>
                  <span>Intake</span>
                </div>
                <h2>Dusty gas enters the chamber.</h2>
                <p>
                  Partially cleaned gas flows through the inlet duct into the chamber, still carrying microscopic dust particles smaller than PM
                  <sub>10</sub>
                  {" "}that the upstream cyclone filter (Cyclone Separator) cannot capture.
                </p>
              </div>
              <div className="stage-block" data-stage="1">
                <div className="stage-tag">
                  <span className="num">Stage 02</span>
                  <span className="sep">/</span>
                  <span>Corona</span>
                </div>
                <h2>High voltage creates a corona discharge.</h2>
                <p className="content-updated">
                  A central electrode is energised to create a glowing corona electric field, which breaks apart surrounding gas molecules into ions.
                </p>
              </div>
              <div className="stage-block" data-stage="2">
                <div className="stage-tag">
                  <span className="num">Stage 03</span>
                  <span className="sep">/</span>
                  <span>Charge</span>
                </div>
                <h2>Ions attach to dust particles.</h2>
                <p>
                  The ions produced by the corona latch onto passing PM
                  <sub>10</sub>
                  /PM
                  <sub>2.5</sub>
                  , transferring a strong negative electric charge to each particle like static electricity on a rubbed balloon.
                </p>
              </div>
              <div className="stage-block" data-stage="3">
                <div className="stage-tag">
                  <span className="num">Stage 04</span>
                  <span className="sep">/</span>
                  <span>Capture</span>
                </div>
                <h2>Charged particles migrate to the wall.</h2>
                <p>
                  The negatively charged dust is attracted to the grounded outer wall of the ESP tube. Particles drift sideways through the gas and stick firmly to the inner surface. The 360° radial field leaves no dead zones.
                </p>
              </div>
              <div className="stage-block" data-stage="4">
                <div className="stage-tag">
                  <span className="num">Stage 05</span>
                  <span className="sep">/</span>
                  <span>Exit</span>
                </div>
                <h2>Clean gas exits the stack.</h2>
                <p>
                  With fine particles removed, the treated gas flows out through the outlet duct and up the chimney. Emission levels now meet government pollution norms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="tech-flush" id="flush">
        <div className="tech-flush-inner">
          <div className="tech-flush-header">
            <div className="kicker">
              <span className="num">04</span>
              <span className="sep">/</span>
              <span>The Recovery Cycle</span>
            </div>
            <h2>How the system maintains itself.</h2>
            <p>
              Captured particulate doesn’t accumulate forever. On a scheduled cycle, water sweeps the collection plates clean and routes the residue into a closed loop, no filters to swap, no waste to dispose of.
            </p>
          </div>
          <div className="flush-frame" style={{ display: "none" }}>
            {" "}
            <span className="bk bk-tl" />
            <span className="bk bk-tr" />
            {" "}
            <span className="bk bk-bl" />
            <span className="bk bk-br" />
            {" "}
            <svg viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {" "}
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M0,0 L10,5 L0,10 Z" fill="rgb(30,90,180)" />
                </marker>
                {" "}
              </defs>
              {" "}
              {" "}
              <rect x="60" y="60" width="1080" height="420" fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1" strokeDasharray="4 6" />
              {" "}
              <text x="60" y="50" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fontWeight="500" fill="rgba(0,0,0,0.45)" letterSpacing="2">REF. CL.01 / CLOSED-LOOP BOUNDARY</text>
              {" "}
              {" "}
              <rect x="80" y="100" width="280" height="80" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.55)" strokeWidth="1.2" />
              <line x1="80" y1="120" x2="360" y2="120" stroke="rgba(0,0,0,0.20)" strokeWidth="0.75" strokeDasharray="3 4" />
              {" "}
              <text x="90" y="92" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600" fill="rgba(0,0,0,0.78)" letterSpacing="1.5">01 · WATER RESERVOIR</text>
              {" "}
              <text x="90" y="200" fontFamily="Inter, system-ui, sans-serif" fontSize="9.5" fill="rgba(0,0,0,0.50)" letterSpacing="1.5">VOL. 18 L · DI WATER · CIRCULATING</text>
              {" "}
              {" "}
              <circle cx="430" cy="140" r="22" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.55)" strokeWidth="1.2" />
              <line x1="412" y1="140" x2="448" y2="140" stroke="rgba(0,0,0,0.55)" strokeWidth="1.2" />
              <line x1="430" y1="122" x2="430" y2="158" stroke="rgba(0,0,0,0.55)" strokeWidth="1.2" />
              {" "}
              <text x="400" y="79" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600" fill="rgba(0,0,0,0.78)" letterSpacing="1.5">02 · CONTROL VALVE</text>
              {" "}
              <text x="395" y="190" fontFamily="Inter, system-ui, sans-serif" fontSize="9.5" fill="rgba(0,0,0,0.50)" letterSpacing="1.5">CYCLE: EVERY 18 MIN</text>
              {" "}
              {" "}
              <rect x="500" y="130" width="380" height="20" fill="rgba(30,90,180,0.06)" stroke="rgba(0,0,0,0.55)" strokeWidth="1.2" />
              {" "}
              <text x="620" y="96" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600" fill="rgba(0,0,0,0.78)" letterSpacing="1.5">03 · SPRAY MANIFOLD</text>
              {" "}
              {" "}
              <g stroke="rgb(30,100,210)" strokeWidth="1.2">
                <line x1="540" y1="150" x2="540" y2="200" strokeDasharray="2 4" />
                <line x1="600" y1="150" x2="600" y2="200" strokeDasharray="2 4" />
                <line x1="660" y1="150" x2="660" y2="200" strokeDasharray="2 4" />
                <line x1="720" y1="150" x2="720" y2="200" strokeDasharray="2 4" />
                <line x1="780" y1="150" x2="780" y2="200" strokeDasharray="2 4" />
                <line x1="840" y1="150" x2="840" y2="200" strokeDasharray="2 4" />
              </g>
              {" "}
              {" "}
              <rect x="500" y="220" width="380" height="36" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.55)" strokeWidth="1.2" />
              <line x1="500" y1="238" x2="880" y2="238" stroke="rgba(0,0,0,0.22)" strokeWidth="0.75" strokeDasharray="3 4" />
              <g fill="rgba(50,50,70,0.75)">
                <rect x="520" y="226" width="3" height="3" />
                <rect x="546" y="232" width="3" height="3" />
                <rect x="580" y="225" width="3" height="3" />
                <rect x="612" y="234" width="3" height="3" />
                <rect x="640" y="228" width="3" height="3" />
                <rect x="678" y="232" width="3" height="3" />
                <rect x="708" y="225" width="3" height="3" />
                <rect x="744" y="231" width="3" height="3" />
                <rect x="780" y="226" width="3" height="3" />
                <rect x="816" y="232" width="3" height="3" />
                <rect x="848" y="227" width="3" height="3" />
              </g>
              {" "}
              <text x="510" y="285" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600" fill="rgba(0,0,0,0.78)" letterSpacing="1.5">04 · COLLECTION PLATE</text>
              {" "}
              <text x="510" y="305" fontFamily="Inter, system-ui, sans-serif" fontSize="9.5" fill="rgba(0,0,0,0.50)" letterSpacing="1.5">GROUNDED · SS316L · FLUSHED IN-PLACE</text>
              {" "}
              {" "}
              <line x1="500" y1="340" x2="880" y2="340" stroke="rgba(0,0,0,0.55)" strokeWidth="1.2" />
              <line x1="500" y1="360" x2="880" y2="360" stroke="rgba(0,0,0,0.55)" strokeWidth="1.2" />
              {" "}
              <text x="510" y="332" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600" fill="rgba(0,0,0,0.78)" letterSpacing="1.5">05 · DRAIN CHANNEL</text>
              {" "}
              {" "}
              <rect x="900" y="320" width="180" height="120" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.55)" strokeWidth="1.2" />
              <line x1="900" y1="380" x2="1080" y2="380" stroke="rgba(0,0,0,0.22)" strokeWidth="0.75" strokeDasharray="3 4" />
              {" "}
              <text x="908" y="312" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600" fill="rgba(0,0,0,0.78)" letterSpacing="1.5">06 · SETTLING TANK</text>
              {" "}
              <text x="908" y="455" fontFamily="Inter, system-ui, sans-serif" fontSize="9.5" fill="rgba(0,0,0,0.50)" letterSpacing="1.5">SLUDGE · QUARTERLY EMPTY</text>
              {" "}
              {" "}
              <path d="M 900 380 L 80 380 L 80 180" fill="none" stroke="rgb(30,90,180)" strokeWidth="1.2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
              {" "}
              <text x="380" y="372" fontFamily="Inter, system-ui, sans-serif" fontSize="9.5" fontWeight="500" fill="rgb(30,90,180)" letterSpacing="1.5">07 · CLEAN-WATER RETURN · CLOSED LOOP</text>
              {" "}
              {" "}
              <line x1="360" y1="140" x2="408" y2="140" stroke="rgb(30,90,180)" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <line x1="452" y1="140" x2="500" y2="140" stroke="rgb(30,90,180)" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <line x1="880" y1="340" x2="900" y2="340" stroke="rgb(30,90,180)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            </svg>
            {" "}
          </div>
          <div className="flush-cycle stagger">
            <div className="flush-step">
              <div className="num">04A · Trigger</div>
              <h4>Timed Flush Triggers</h4>
              <p>At set intervals, the water flushing cycle activates automatically. No operator needed.</p>
            </div>
            <div className="flush-step">
              <div className="num">04B · Spray</div>
              <h4>Water Washes the Tube Walls</h4>
              <p>Water flows over the cylindrical inner walls, lifting the layer of collected dust off cleanly.</p>
            </div>
            <div className="flush-step">
              <div className="num">04C · Settle</div>
              <h4>Slurry Drains by Gravity</h4>
              <p>Dust mixes with water and flows down into a sludge collection chamber at the bottom.</p>
            </div>
            <div className="flush-step">
              <div className="num">04D · Return</div>
              <h4>Closed-Loop Water System</h4>
              <p>Water is recycled back and used in next cleaning.</p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="tech-compare" id="comparison">
        <div className="tech-compare-inner">
          <div className="tech-compare-header">
            <div className="kicker">
              <span className="num">05</span>
              <span className="sep">/</span>
              <span>What Makes ESP Different</span>
            </div>
            <h2>Solving the three critical limitations of conventional ESPs.</h2>
            <p>
              Electrostatic precipitation has been used for a century, but traditional designs have inherent failure points. We’ve re-engineered conventional ESP geometry to address the limitations that reduce long-term performance.
            </p>
          </div>
          <div className="tech-idt-grid">
            <div className="tech-idt-card">
              <div className="tech-idt-num">01</div>
              <h3>The Electrode Failure</h3>
              <p className="tech-idt-problem">
                <strong>The Problem:</strong>
                {" "}Conventional systems use thin wires that sag, vibrate, and corrode. As the wire moves, the electric field weakens, causing efficiency to drop and requiring frequent replacements.
              </p>
              <p className="tech-idt-fix qc-mark">
                <strong>Our Innovation:</strong>
                {" "}Our patented central electrode geometry is solid, fixed, and permanently centered. It cannot sag or oscillate, ensuring a perfectly consistent field for the life of the system.
              </p>
            </div>
            <div className="tech-idt-card">
              <div className="tech-idt-num">02</div>
              <h3>The Geometry Flaw</h3>
              <p className="tech-idt-problem">
                <strong>The Problem:</strong>
                {" "}Flat-plate designs create “blind spots.” Particles drifting near the edges of the plates pass through weak zones and escape capture entirely, a geometric flaw that can’t be tuned away.
              </p>
              <p className="tech-idt-fix">
                <strong>Our Innovation:</strong>
                {" "}360° Radial Coverage. Our field radiates in every direction from the center to the cylinder wall. With no edges or weak zones, there is nowhere for particles to hide.
              </p>
            </div>
            <div className="tech-idt-card">
              <div className="tech-idt-num">03</div>
              <h3>The Re-Pollution Trap</h3>
              <p className="tech-idt-problem">
                <strong>The Problem:</strong>
                {" "}Standard systems use “mechanical rappers” (hammers) to shake plates clean. The vibration accidentally knocks captured dust back into the exhaust stream, undoing the system’s own work.
              </p>
              <p className="tech-idt-fix">
                <strong>Our Innovation:</strong>
                {" "}Gravity-Led Collection. Our cylindrical walls allow captured particles to simply slide down into a hopper. No hammers, no vibration, zero re-entrainment of pollutants.
              </p>
            </div>
          </div>
          <p className="tech-idt-result qc-mark">
            A system that doesn’t just work better, it works{" "}
            <em>consistently</em>
            {" "}without the maintenance headaches of 100-year-old designs.
          </p>
          <div className="tech-table">
            <div className="tech-row head">
              <div className="tech-cell" />
              <div className="tech-cell us">Our Shell-Pipe Tubular ESP</div>
              <div className="tech-cell">Conventional Plate-Wire ESP</div>
            </div>
            <div className="tech-row">
              <div className="tech-cell feature">Electrode</div>
              <div className="tech-cell us qc-mark">Patented central electrode geometry : no sag, no wear, never replaced</div>
              <div className="tech-cell them">Suspended wire: sags, corrodes, ~2yr replacement</div>
            </div>
            <div className="tech-row">
              <div className="tech-cell feature">Electric field</div>
              <div className="tech-cell us">360° radial corona: zero blind spots</div>
              <div className="tech-cell them">1-D planar: blind spots at plate edges</div>
            </div>
            <div className="tech-row">
              <div className="tech-cell feature">Particle re-entrainment</div>
              <div className="tech-cell us">Negligible: gravity discharge, no rapping</div>
              <div className="tech-cell them">Significant: rappers shake particles back into stream</div>
            </div>
            <div className="tech-row">
              <div className="tech-cell feature">Sealing</div>
              <div className="tech-cell us">Fully sealed cylindrical shell: zero bypass</div>
              <div className="tech-cell them">Bolted flanges: gas leaks around edges</div>
            </div>
            <div className="tech-row">
              <div className="tech-cell feature">Sustained efficiency</div>
              <div className="tech-cell us qc-mark">Up to 99% consistent</div>
              <div className="tech-cell them">Up to 95% average: drops after every rapping cycle</div>
            </div>
            <div className="tech-row">
              <div className="tech-cell feature">Footprint</div>
              <div className="tech-cell us">Compact multi-pipe bundle: minimal civil work</div>
              <div className="tech-cell them">Massive chamber: steel scaffolding required</div>
            </div>
            <div className="tech-row">
              <div className="tech-cell feature">Wet or sticky PM</div>
              <div className="tech-cell us">Cylindrical walls flush clean</div>
              <div className="tech-cell them">Plates corrode and efficiency collapses</div>
            </div>
            <div className="tech-row">
              <div className="tech-cell feature">Lifecycle cost</div>
              <div className="tech-cell us">Lower: no rappers, no wire replacement</div>
              <div className="tech-cell them">Higher: frequent repairs and hardware costs</div>
            </div>
          </div>
          <div className="tech-compare-foot">Field-validated across deployments. Conditions on request.</div>
        </div>
      </section>
      {" "}
      <section className="tech-deploy" id="deploy">
        <div className="tech-deploy-inner">
          <div className="tech-deploy-header">
            <div className="kicker">
              <span className="num">06</span>
              <span className="sep">/</span>
              <span>Deployment Map</span>
            </div>
            <h2>One core technology. Multiple applications.</h2>
            <p>
              Our Electrostatic Precipitator technology is the powerhouse behind our entire lineup, providing unmatched control over particulate matter and unburned hydrocarbons across any industry.
            </p>
          </div>
          <div className="tech-deploy-table">
            <div className="tech-deploy-row head">
              <div>Product</div>
              <div>Application</div>
              <div>What Our ESP Captures</div>
            </div>
            <div className="tech-deploy-row">
              <div>
                <strong>CarbonFree RECD</strong>
                <span>Retrofit Emission Control Device</span>
              </div>
              <div>Diesel generators</div>
              <div>Fine PM, soot, unburned HC particles from DG exhaust</div>
            </div>
            <div className="tech-deploy-row">
              <div>
                <strong>CarbonFree CAPS</strong>
                <span>Crematorium Air Purification System</span>
              </div>
              <div>Crematoriums</div>
              <div>Fine PM, sub-micron particles from cremation flue gas</div>
            </div>
            <div className="tech-deploy-row">
              <div>
                <strong>APCD Hybrid ESP</strong>
                <span>Air Pollution Control Device</span>
              </div>
              <div>Industrial boilers, furnaces, kilns</div>
              <div>Full-range PM from high dust-load industrial processes</div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="tech-holds" id="why-holds">
        <div className="tech-holds-inner">
          <div className="tech-holds-header">
            <div className="kicker">
              <span className="num">07</span>
              <span className="sep">/</span>
              <span>Why It Holds Up</span>
            </div>
            <h2>Engineered for long-term performance.</h2>
          </div>
          <div className="tech-holds-grid">
            <div className="tech-holds-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="tech-holds-icon">
                <img src="/assets/icons/homepage/ICON-1.svg" alt="" />
              </div>
              <h3>360° Total Capture</h3>
              <p>
                Every particle is exposed to the full corona field, leaving zero escape paths or geometric blind spots.
              </p>
            </div>
            <div className="tech-holds-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="tech-holds-icon">
                <img src="/assets/icons/homepage/ICON-2.svg" alt="" />
              </div>
              <h3 className="qc-mark">Technology</h3>
              <p className="qc-mark">
                We eliminated thin-wire failure. Our patented central electrode geometry doesn’t sag or corrode, maintaining a perfectly consistent field from Day 1 to Year 10.
              </p>
            </div>
            <div className="tech-holds-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="tech-holds-icon">
                <img src="/assets/icons/homepage/ICON-3.svg" alt="" />
              </div>
              <h3>Zero Re-Entrainment</h3>
              <p>
                Gravity does the work. Captured particles slide into the hopper without vibration or re-polluting the stream.
              </p>
            </div>
            <div className="tech-holds-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="tech-holds-icon">
                <img src="/assets/icons/homepage/ICON-4.svg" alt="" />
              </div>
              <h3>Invisible Backpressure</h3>
              <p className="content-updated">
                {"Running at <0.7kPa, your equipment operates as if the system isn’t even there, with no hidden fuel costs."}
              </p>
            </div>
            <div className="tech-holds-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="tech-holds-icon">
                <img src="/assets/icons/homepage/ICON-5.svg" alt="" />
              </div>
              <h3>Lifetime Cost: Zero</h3>
              <p>
                No filter media and no replacement parts means zero recurring consumable expenses for the entire lifecycle.
              </p>
            </div>
            <div className="tech-holds-card">
              {" "}
              <span className="bk bk-tl" />
              <span className="bk bk-tr" />
              <span className="bk bk-bl" />
              <span className="bk bk-br" />
              {" "}
              <div className="tech-holds-icon">
                <img src="/assets/icons/homepage/ICON-6.svg" alt="" />
              </div>
              <h3>Certified Authority</h3>
              <p>
                ARAI Type Approved and CPCB Listed up to 771 kW, offering deeper validation than standard registration.
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
                <span className="num">08</span>
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
              <span className="num">08</span>
              <span className="sep">/</span>
              <span className="label">Get a Consultation</span>
            </div>
            <h2>Get a Technical Consultation</h2>
            <p>
              Submit your details below. Our engineering team will reach out to know more about your emission profile and design a custom solution.
            </p>
          </div>
          <form className="contact-form" data-form-source="technology" noValidate>
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
