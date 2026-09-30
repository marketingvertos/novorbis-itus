/** Site footer (shared by every page). */
export default function SiteFooter() {
  return (
    <footer className="dark">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            {" "}
            <a href="/">
              <img src="/assets/images/shared/novorbis-logo-white.svg" alt="Novorbis" style={{ width: "100%", height: "auto", display: "block", marginBottom: "20px" }} />
            </a>
            {" "}
            <p>Novorbis Itus Pvt Ltd. Emission control, engineered in India.</p>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <ul>
              <li className="footer-sub-label">Retrofit Emission Control Device</li>
              <ul className="footer-sub-list">
                <li>
                  <a href="/carbonfree-recd/carbonfree-esp" className="content-updated">CarbonFree ESP</a>
                </li>
                <li>
                  <a href="/carbonfree-recd/carbonfree-advanced-catalyst-plus" className="content-updated">CarbonFree Advanced Catalyst+</a>
                </li>
              </ul>
              <li>
                <a href="/carbonfree-caps" className="content-updated">Crematorium Air Purification System</a>
              </li>
              <li>
                <a href="/carbonfree-apcd" className="content-updated">Air Pollution Control Device</a>
              </li>
              <li>
                <a href="/carbonfree-ats">
                  After Treatment System
                  <span className="footer-soon">Soon</span>
                </a>
              </li>
              <li>
                <a href="/ccus">
                  Carbon Capture Utilization & Storage
                  <span className="footer-soon">Soon</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="/about-us">About</a>
              </li>
              <li>
                <a href="/core-technology">Technology</a>
              </li>
              <li>
                <a href="/compliance-guide">Compliance</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <div className="contact-block">
              {" "}
              <strong>Office</strong>
              {" "}
              <p>Novorbis Itus Pvt Ltd, 4th floor, Shreyas Eterna, NDA Pashan Rd, Bavdhan, Pune, Maharashtra 411021</p>
            </div>
            <div className="contact-block content-updated">
              {" "}
              <strong>Regional Office</strong>
              {" "}
              <p>
                Well-Done Tech Park, Cabin No. 1 & 2, 3rd Floor – Shri Office (Unit 305), Sector 48, Near Subhash Chowk, Sohna Road, Gurugram (Haryana) – 122018
              </p>
            </div>
            <div className="contact-block">
              {" "}
              <strong>Phone</strong>
              {" "}
              <p>
                +91 79742 78581
                <br />
                +91 84840 62464
              </p>
            </div>
            <div className="contact-block">
              {" "}
              <strong>Email</strong>
              {" "}
              <a className="email" href="mailto:info@novorbisitus.com">info@novorbisitus.com</a>
              {" "}
              <a className="email" href="mailto:sales@novorbisitus.com">sales@novorbisitus.com</a>
              {" "}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          {" "}
          <span>© 2026 Novorbis Itus Pvt Ltd · CPCB-listed · ARAI-certified</span>
          {" "}
          <span className="footer-published" id="footerPublished" />
          {" "}
          <div className="footer-socials">
            {" "}
            <a href="https://www.linkedin.com/company/novorbis-itus" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {" "}
            <a href="#">X</a>
            {" "}
            <a href="https://www.youtube.com/@Novorbis_Itus" target="_blank" rel="noopener noreferrer">YouTube</a>
            {" "}
          </div>
        </div>
      </div>
    </footer>
  );
}
