import { cn } from "@/lib/utils";

export type NavSection = "solutions" | "technology" | "about" | "compliance" | "resources" | "careers";

/** Site header + mobile menu. Behaviour (dropdowns, auto-hide) lives in public/js/global.js. */
export default function SiteNav({ active }: { active?: NavSection }) {
  return (
      <nav className="site-nav" id="nav">
        {" "}
        <a className="nav-logo" href="/">
          <img src="/assets/images/shared/novorbis-logo-white.svg" alt="Novorbis" style={{ height: "36px", width: "auto", display: "block" }} />
        </a>
        {" "}
        <ul className="nav-links">
          <li className={cn("has-children", active === "solutions" && "is-active")} tabIndex={0}>
            {" "}
            <span className="label">
              Solutions{" "}
              <svg className="chev" viewBox="0 0 12 12">
                <path d="M3 5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            {" "}
            <div className="nav-dropdown" role="menu">
              <div className="dd-submenu-host">
                {" "}
                <a className="dd-item dd-item-parent" href="/carbonfree-recd">
                  {" "}
                  <span className="dot" />
                  {" "}
                  <div className="dd-item-text">
                    {" "}
                    <strong>Retrofit Emission Control Device (RECD)</strong>
                    {" "}
                    <span>Diesel Generators</span>
                    {" "}
                  </div>
                  {" "}
                  <svg className="dd-chev-side" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M4 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <div className="dd-submenu">
                  <div className="dd-submenu-label">Diesel Generators</div>
                  {" "}
                  <a className="dd-item" href="/carbonfree-recd/carbonfree-esp">
                    {" "}
                    <span className="dot" />
                    {" "}
                    <div className="dd-item-text">
                      {" "}
                      <strong className="content-updated">CarbonFree ESP</strong>
                      {" "}
                      <span>Filterless · Electrostatic</span>
                      {" "}
                    </div>
                    {" "}
                  </a>
                  {" "}
                  <a className="dd-item" href="/carbonfree-recd/carbonfree-advanced-catalyst-plus">
                    {" "}
                    <span className="dot" />
                    {" "}
                    <div className="dd-item-text">
                      {" "}
                      <strong className="content-updated">CarbonFree Advanced Catalyst+</strong>
                      {" "}
                      <span>Advanced Catalyst · DG</span>
                      {" "}
                    </div>
                    {" "}
                  </a>
                  {" "}
                </div>
              </div>
              <div className="dd-divider" />
              {" "}
              <a className="dd-item" href="/carbonfree-caps">
                {" "}
                <span className="dot" />
                {" "}
                <div className="dd-item-text">
                  {" "}
                  <strong className="content-updated">Crematorium Air Purification System</strong>
                  {" "}
                  <span>CarbonFree CAPS</span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a className="dd-item" href="/carbonfree-apcd">
                {" "}
                <span className="dot" />
                {" "}
                <div className="dd-item-text">
                  {" "}
                  <strong>Air Pollution Control Device</strong>
                  {" "}
                  <span>APCD Hybrid ESP · Boilers & Furnaces</span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a className="dd-item" href="/ccus">
                {" "}
                <span className="dot" />
                {" "}
                <div className="dd-item-text">
                  {" "}
                  <strong>Carbon Capture Utilization & Storage</strong>
                  {" "}
                  <span>Novorbis CC · Coming Soon</span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a className="dd-item" href="/carbonfree-ats">
                {" "}
                <span className="dot" />
                {" "}
                <div className="dd-item-text">
                  {" "}
                  <strong>After Treatment System</strong>
                  {" "}
                  <span>CarbonFree ATS · Coming Soon</span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
            </div>
          </li>
          <li className={active === "technology" ? "is-active" : undefined}>
            <a href="/core-technology">Technology</a>
          </li>
          <li className={active === "about" ? "is-active" : undefined}>
            <a href="/about-us">About</a>
          </li>
          <li className={active === "compliance" ? "is-active" : undefined}>
            <a href="/compliance-guide">Compliance</a>
          </li>
          <li className={active === "resources" ? "is-active" : undefined}>
            <a href="/blogs">Blogs</a>
          </li>
          <li className={active === "careers" ? "is-active" : undefined}>
            <a href="/careers">Careers</a>
          </li>
        </ul>
        {" "}
        <a className="nav-cta" href="/contact-us">Contact Us</a>
        {" "}
        <button className="nav-burger" id="navBurger" aria-label="Open menu" aria-expanded="false">
          {" "}
          <span />
          <span />
          <span />
          {" "}
        </button>
        {" "}
        <div className="nav-mobile" id="navMobile" aria-hidden="true">
          <ul className="nm-links">
            <li className="nm-item nm-has-children" id="nmSolutions">
              {" "}
              <button className="nm-label" aria-expanded="false">
                Solutions{" "}
                <svg className="nm-chev" viewBox="0 0 12 12">
                  <path d="M3 4l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              {" "}
              <div className="nm-sub">
                {" "}
                <a className="nm-sub-item nm-parent" href="/carbonfree-recd">Retrofit Emission Control Device (RECD)</a>
                {" "}
                <div className="nm-sub-indent">
                  {" "}
                  <a className="nm-sub-item" href="/carbonfree-recd/carbonfree-esp">
                    <span className="content-updated">CarbonFree ESP</span>
                  </a>
                  {" "}
                  <a className="nm-sub-item" href="/carbonfree-recd/carbonfree-advanced-catalyst-plus">
                    <span className="content-updated">CarbonFree Advanced Catalyst+</span>
                  </a>
                  {" "}
                </div>
                {" "}
                <a className="nm-sub-item" href="/carbonfree-caps">
                  <span className="content-updated">Crematorium Air Purification System</span>
                </a>
                {" "}
                <a className="nm-sub-item" href="/carbonfree-apcd">Air Pollution Control Device</a>
                {" "}
                <a className="nm-sub-item nm-dim" href="/ccus">
                  Carbon Capture Utilization & Storage{" "}
                  <span className="nm-tag">Soon</span>
                </a>
                {" "}
                <a className="nm-sub-item nm-dim" href="/carbonfree-ats">
                  After Treatment System{" "}
                  <span className="nm-tag">Soon</span>
                </a>
                {" "}
              </div>
            </li>
            <li className="nm-item">
              <a href="/core-technology">Technology</a>
            </li>
            <li className="nm-item">
              <a href="/about-us">About</a>
            </li>
            <li className="nm-item">
              <a href="/compliance-guide">Compliance</a>
            </li>
            <li className="nm-item">
              <a href="/blogs">Blogs</a>
            </li>
            <li className="nm-item">
              <a href="/careers">Careers</a>
            </li>
          </ul>
          {" "}
          <a className="nm-cta btn btn-primary" href="/contact-us">Contact Us</a>
          {" "}
        </div>
      </nav>
  );
}
