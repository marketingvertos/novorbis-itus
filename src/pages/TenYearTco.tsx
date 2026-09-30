import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/tco-calculator.css";

const meta: PageMeta = {
  "title": "10-Year TCO Calculator · Bag Filter vs Filterless ESP · Novorbis",
  "tags": [
    {
      "name": "description",
      "content": "Compare 10-year total cost of ownership: bag filter vs Novorbis filterless ESP. Enter your plant size and fuel — every assumption is transparent and editable."
    },
    {
      "name": "robots",
      "content": "noindex, nofollow"
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
      "content": "10-Year TCO Calculator · Bag Filter vs Filterless ESP"
    },
    {
      "property": "og:description",
      "content": "Compare 10-year total cost of ownership: bag filter vs Novorbis filterless ESP. Enter your plant size and fuel — every assumption is transparent and editable."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/carbonfree-apcd/10-year-tco"
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
      "content": "10-Year TCO Calculator · Bag Filter vs Filterless ESP"
    },
    {
      "name": "twitter:description",
      "content": "Compare 10-year total cost of ownership: bag filter vs Novorbis filterless ESP."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/Home-APCD.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/carbonfree-apcd/10-year-tco",
  "jsonLd": []
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/inline/carbonfree-apcd--10-year-tco-1.js",
  "/js/global.js"
];

export default function TenYearTco() {
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
      <SiteNav active="solutions" />
      {" "}
      <section className="tco-hero">
        <div className="tco-hero-inner">
          <div className="tco-hero-copy">
            <div className="kicker">
              <span className="num">—</span>
              <span className="sep">/</span>
              <span className="label">Evaluation Tool · 10-Year Cost of Ownership</span>
            </div>
            <h1>
              Bag Filter{" "}
              <span className="vs">vs.</span>
              {" "}Filterless{" "}
              <span className="esp-g">ESP</span>
            </h1>
            <p className="tco-hero-sub">
              Tell us about your plant. The model returns a 10-year TCO and break-even using published engineering correlations — every assumption is shown and editable.
            </p>
          </div>
          <div className="tco-hero-badges">
            {" "}
            <span className="tco-badge">
              <span className="tco-badge-dot" />
              CPCB Compliant
            </span>
            {" "}
            <span className="tco-badge">
              <span className="tco-badge-dot" />
              MGT-9 Certified
            </span>
            {" "}
            <span className="tco-badge">
              <span className="tco-badge-dot" />
              Illustrative model — validate against site quotes
            </span>
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <section className="tco-tool">
        <div className="tco-wrap">
          <div className="print-header" style={{ display: "none" }}>
            <div className="ph-top">
              {" "}
              <img src="/assets/images/shared/novorbis-logo-white.svg" alt="Novorbis" className="ph-logo" style={{ height: "28px", width: "auto", display: "block", flexShrink: "0" }} />
              {" "}
              <div className="ph-meta">
                {" "}
                <span className="ph-date" id="phDate" />
                {" "}
                <span className="ph-label">Confidential · For internal review</span>
                {" "}
              </div>
            </div>
            <div className="ph-title">
              <h1>10-Year Total Cost of Ownership</h1>
              <p>
                Bag Filter vs. Filterless ESP ·{" "}
                <span id="phMode" />
              </p>
            </div>
          </div>
          <div className="modetabs">
            {" "}
            <button className="modetab active" data-mode="dg">Diesel Generator</button>
            {" "}
            <button className="modetab" data-mode="boiler">Boiler / Furnace</button>
            {" "}
          </div>
          <div className="cols">
            <div className="tco-card">
              <h2>Your plant setup</h2>
              <div className="h2note">Five questions. The model fills in the rest from your inputs.</div>
              <div id="plantForm" />
            </div>
            <div className="tco-card">
              <h2>10-year cumulative cost</h2>
              <div className="h2note" id="modeNote">Nominal cash, undiscounted</div>
              <div className="verdict" id="verdict">
                <div className="vi">→</div>
                <div id="verdictText" />
              </div>
              <div className="tcorow">
                <div className="tco bag">
                  <div className="t">Bag filter · 10-yr</div>
                  <div className="v" id="tcoBag">—</div>
                  <div className="sub" id="tcoBagSub" />
                </div>
                <div className="tco esp">
                  <div className="t">Filterless ESP · 10-yr</div>
                  <div className="v" id="tcoEsp">—</div>
                  <div className="sub" id="tcoEspSub" />
                </div>
              </div>
              <div className="stats">
                <div className="stat">
                  <div className="k">Run cost · bag</div>
                  <div className="val" id="rBag">
                    —
                    <small>/hr</small>
                  </div>
                </div>
                <div className="stat">
                  <div className="k">Run cost · ESP</div>
                  <div className="val" id="rEsp">
                    —
                    <small>/hr</small>
                  </div>
                </div>
                <div className="stat">
                  <div className="k">Crossover</div>
                  <div className="val" id="crH">
                    —
                    <small>hrs</small>
                  </div>
                </div>
                <div className="stat">
                  <div className="k">Crossover</div>
                  <div className="val" id="crY">
                    —
                    <small>yrs</small>
                  </div>
                </div>
              </div>
              {" "}
              <svg id="chart" viewBox="0 0 920 440" role="img" />
              {" "}
              <div className="chartcap" id="chartcap" />
            </div>
          </div>
          <div className="assum">
            <div className="assum-head" id="asmToggle">
              <div className="ti">
                Show the assumptions{" "}
                <span>· every derived number, sourced and editable</span>
              </div>
              <div className="chev">▾</div>
            </div>
            <div className="assum-body" id="asmBody">
              <div className="assum-intro">
                {" "}All figures are computed from your inputs using published engineering references.{" "}
                <b>Click any value</b>
                {" "}in the table below to override it with your site data — the chart and totals update instantly.{" "}
                <b>Edited fields</b>
                {" "}are highlighted green.{" "}
              </div>
              <table className="atable">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th className="r">Bag Filter</th>
                    <th className="r">Filterless ESP</th>
                  </tr>
                </thead>
                <tbody id="asmTable" />
              </table>
              <div className="reset-asm">
                Edited{" "}
                <span id="dirtyCount">0</span>
                {" "}assumption(s).{" "}
                <a id="resetAsm">Reset all to defaults</a>
              </div>
            </div>
          </div>
          <div className="tco-card" style={{ marginTop: "18px" }}>
            <div className="bd-header">
              <div>
                <h2>Cost breakdown · nominal over horizon</h2>
                <div className="h2note">Built up from the assumptions above.</div>
              </div>
              <div className="toolbar">
                {" "}
                <span className="tg">
                  <input type="checkbox" id="npv" />
                  <label htmlFor="npv">Discount to NPV</label>
                  {" "}
                  <input className="num" id="disc" defaultValue="10" inputMode="decimal" />
                  <span style={{ color: "var(--green)" }}>% p.a.</span>
                </span>
                {" "}
                <span className="tg">
                  <input type="checkbox" id="stepped" />
                  <label htmlFor="stepped">Show as-incurred steps</label>
                </span>
                {" "}
                <button className="btn-tool" id="printBtn">Save / print</button>
                {" "}
              </div>
            </div>
            <table className="bd">
              <thead>
                <tr>
                  <th>Line</th>
                  <th className="bag-h">Bag Filter</th>
                  <th className="esp-h">Filterless ESP</th>
                </tr>
              </thead>
              <tbody id="bdBody" />
            </table>
            <div className="notes">
              <p>All figures are nominal (undiscounted) unless NPV mode is enabled.</p>
              <p>
                Validate CAPEX and bag-media cost against current supplier quotes — these vary significantly by region and plant configuration.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
      {" "}
    </PageShell>
  );
}
