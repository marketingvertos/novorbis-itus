import PageShell, { type PageMeta } from "@/components/PageShell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/legacy/blogs.css";
import "@/styles/legacy/legal.css";

const meta: PageMeta = {
  "title": "Privacy Policy | Novorbis",
  "tags": [
    {
      "name": "description",
      "content": "How Novorbis Itus Pvt Ltd collects, uses, and protects personal data submitted through novorbisitus.com, in line with India's Digital Personal Data Protection Act, 2023."
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
      "content": "Privacy Policy | Novorbis"
    },
    {
      "property": "og:description",
      "content": "How Novorbis Itus Pvt Ltd collects, uses, and protects personal data submitted through novorbisitus.com."
    },
    {
      "property": "og:url",
      "content": "https://novorbisitus.com/privacy-policy"
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
      "content": "Privacy Policy | Novorbis"
    },
    {
      "name": "twitter:description",
      "content": "How Novorbis Itus Pvt Ltd collects, uses, and protects personal data submitted through novorbisitus.com."
    },
    {
      "name": "twitter:image",
      "content": "https://novorbisitus.com/assets/images/homepage/hero-3-1-poster.jpg"
    }
  ],
  "canonical": "https://novorbisitus.com/privacy-policy",
  "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy",
      "description": "How Novorbis Itus Pvt Ltd collects, uses, and protects personal data submitted through novorbisitus.com.",
      "url": "https://novorbisitus.com/privacy-policy"
    }
  ]
};

// Page behaviour (animations, sliders, forms) runs from these scripts in public/js.
const scripts = [
  "/js/global.js"
];

export default function PrivacyPolicy() {
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
      <section className="legal-hero dark">
        <div className="legal-hero-inner">
          <div className="kicker">
            <span>Legal</span>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          <h1>Privacy Policy</h1>
          <p className="legal-subtitle">
            How we collect, use, and protect the information you share with us through novorbisitus.com and our other official channels.
          </p>
          <p className="legal-updated">Effective date: 20 August 2026 · Last updated: 20 August 2026</p>
        </div>
      </section>
      {" "}
      <section className="legal-section light">
        <div className="legal-layout">
          <article className="article-body">
            <p>
              This policy applies to{" "}
              <a href="https://novorbisitus.com">novorbisitus.com</a>
              {" "}(the “Website”) and describes how Novorbis Itus Pvt Ltd (“Novorbis,” “we,” “us,” or “our”) treats information collected through the Website. It applies to current and prospective customers, job applicants, and anyone who contacts us through the Website, email, phone, or WhatsApp.
            </p>
            <p>
              Novorbis Itus Pvt Ltd is an Indian company with its registered office at 4th Floor, Shreyas Eterna, NDA Pashan Rd, Bavdhan, Pune, Maharashtra 411021, and is the Data Fiduciary responsible for the personal data described in this policy under India’s Digital Personal Data Protection Act, 2023 (“DPDP Act”).
            </p>
            <h2>Information We Collect</h2>
            <p>
              <strong>Contact information:</strong>
              {" "}Name, email address, phone number, company name, city, and state — collected when you submit an enquiry, a diesel-generator specification, or a careers application form.
            </p>
            <p>
              <strong>Payment and billing information:</strong>
              {" "}We do not collect any payment, billing, or card details through this Website. Novorbis does not process online payments here.
            </p>
            <p>
              <strong>Information you post:</strong>
              {" "}Any message, cover letter, product-interest details, or equipment specifications you type into a form field, and, for job applications, your LinkedIn or portfolio link and your resume file.
            </p>
            <p>
              <strong>Other information:</strong>
              {" "}Standard technical data such as IP address, browser type, and pages visited may be logged by our hosting infrastructure as part of ordinary server operation. This Website does not use cookies or browser local storage of its own to identify or track individual visitors.
            </p>
            <h2>Collection Methods</h2>
            <p>
              <strong>Direct collection:</strong>
              {" "}Information you provide when you fill out an enquiry, DG specification, or careers form, or when you contact us by phone, email, or WhatsApp.
            </p>
            <p>
              <strong>Passive collection:</strong>
              {" "}This Website uses Google Tag Manager (GTM), a tag-management tool from Google, to manage scripts on our pages. GTM itself does not collect personal data, but it can be used to load tags (for example, analytics tags) that may process technical data such as IP address, device, and browsing behaviour, per Google’s own privacy policy. We do not currently combine any such technical data with the personal data you submit through our forms.
            </p>
            <p>
              <strong>Third-party sources:</strong>
              {" "}If you use the live chat widget available on some pages, information you type into it (such as your name, contact details, and message) is processed by that third-party provider on our behalf, so we can respond to you.
            </p>
            <h2>Use of Personal Information</h2>
            <p>
              We use the information you provide to respond to your enquiry, prepare quotations and technical specifications, evaluate job or general applications submitted through our careers page, maintain records of business and service communications, and comply with applicable legal, regulatory, or contractual obligations. We do not sell your personal data, and we do not use it for unrelated marketing without your consent.
            </p>
            <h2>Sharing of Information with Third Parties</h2>
            <p>
              We share personal data only with service providers who process form submissions and route them to our team on our behalf (workflow-automation and email-delivery services), with the live chat provider referenced above if you use that feature, and where required by law, regulation, or a valid order from a court or government authority. Some of these service providers may process or store data on servers located outside India; where this happens, we take reasonable steps to keep your data protected in line with this policy.
            </p>
            <h2>Your Rights Under the DPDP Act</h2>
            <p>
              You have the right to access the personal data we hold about you, request correction or erasure of it, withdraw consent at any time, nominate another individual to exercise these rights on your behalf in the event of your death or incapacity, and raise a grievance about how your data has been handled. To exercise any of these rights, use the contact details below.
            </p>
            <h2>Email Opt-Out</h2>
            <p>
              If you no longer want to be contacted about an enquiry or hiring pipeline you’re part of, email{" "}
              <a href="mailto:info@novorbisitus.com">info@novorbisitus.com</a>
              {" "}and we will remove your details from future outreach. This does not apply to replies needed to complete an active enquiry, quotation, or job application already in progress.
            </p>
            <h2>Third Party Sites</h2>
            <p>
              This Website may link to third-party sites, such as Google Maps, LinkedIn, or YouTube. This policy does not apply to those sites, and we encourage you to review their own privacy policies independently.
            </p>
            <h2>Grievance Officer</h2>
            <p>
              {" "}Novorbis Itus Pvt Ltd
              <br />
              {" "}4th Floor, Shreyas Eterna, NDA Pashan Rd, Bavdhan, Pune, Maharashtra 411021, India
              <br />
              {" "}Email:{" "}
              <a href="mailto:info@novorbisitus.com">info@novorbisitus.com</a>
              {" "}
            </p>
            <p>
              We will make reasonable efforts to acknowledge and address your request within a reasonable timeframe, as required under applicable law.
            </p>
            <h2>Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The “Last updated” date at the top of this page indicates when it was last revised, and material changes will be posted on this page.
            </p>
            <h2>Jurisdiction</h2>
            <p>
              This policy is governed by the laws of India. Any disputes relating to it are subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
            </p>
            <div className="legal-cta">
              <p>Questions about this policy?</p>
              {" "}
              <a href="/contact-us" className="btn btn-primary">
                Contact Us{" "}
                <span className="arr">→</span>
              </a>
              {" "}
            </div>
            <div className="article-divider" />
          </article>
        </div>
      </section>
      <SiteFooter />
      {" "}
    </PageShell>
  );
}
