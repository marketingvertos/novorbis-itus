# Novorbis — website

Marketing site for **Novorbis Itus Pvt Ltd** (emission control equipment), built on the
Lovable stack: **Vite + React + TypeScript + Tailwind CSS (shadcn/ui ready)**.

It is a faithful port of the original static HTML site: every page keeps the same markup,
design, animations, forms and URLs.

## Run locally

```sh
npm install
npm run dev        # http://localhost:8080
npm run build      # production build in dist/
```

## Project structure

```
index.html                 HTML shell: Google Tag Manager, favicons, font preloads, WhatsApp widget
src/
  App.tsx                  Routes (same URLs as the old site; old *.html links redirect)
  main.tsx                 Entry point
  index.css                Global styles (imports the design system + Tailwind)
  pages/                   One component per page (Home, AboutUs, CarbonfreeEsp, Blog, BlogPost, …)
  components/
    SiteNav.tsx            Header + mobile menu (shared by every page)
    SiteFooter.tsx         Footer (shared by every page)
    PageShell.tsx          Per-page SEO tags (title, description, Open Graph, JSON-LD) + page scripts
    blog/                  Blog card + share icons
  content/blog/            Blog posts (JSON), imported from Ghost
  lib/
    blog.ts                Blog data helpers
    legacy-globals.ts      Lenis, GSAP and Swiper (npm) exposed for the page scripts
    load-scripts.ts        Runs each page's behaviour scripts after it renders
  styles/
    legacy/global.css      Design tokens, typography, nav, footer, buttons (every page)
    legacy/*.css           Page-specific styles, imported by the page that uses them
    preloader.css          Loading screen
public/
  assets/                  Images, icons, videos, PDFs
  fonts/                   Inter, DM Sans, Hempa Sans (woff2)
  js/                      Page behaviour: animations, sliders, accordions, forms, TCO calculator
  blogs/content/images/    Blog images
  sitemap.xml, robots.txt
```

## Design system

See `src/styles/legacy/global.css` for the tokens (colours, fonts, spacing). Brand fonts:
**Inter** (body), **DM Sans**, **Hempa Sans** (display) — all self-hosted in `public/fonts`.
Tailwind's base reset (preflight) is switched off so it doesn't change the existing design;
Tailwind utilities and shadcn/ui components can still be used for new work.

## Editing

- **Text and layout:** edit the page component in `src/pages/`.
- **Menu or footer:** edit `src/components/SiteNav.tsx` / `SiteFooter.tsx` (applies to every page).
- **Styles:** edit the matching file in `src/styles/legacy/`.
- **Behaviour** (animations, sliders, form sending): the scripts in `public/js/`, listed at the
  top of each page component in the order they run.
- Links between pages are normal `<a href>` links (full page loads), which the page scripts rely on.

## Forms

Contact and enquiry forms are sent by `public/js/forms.js` to the n8n webhook at
`n8n.migratefromwebflow.com`, protected by Cloudflare Turnstile. This can later be moved to
Lovable Cloud (a database table plus an email function).

## Blog

Posts live in `src/content/blog/` and are imported from a Ghost backup:

1. Ghost Admin → Settings → Import/Export → **Export** (downloads a `.json` file).
2. Run:
   ```sh
   npm run import:ghost -- path/to/novorbis.ghost.YYYY-MM-DD.json
   ```
   This rewrites the post files, downloads any new images into `public/blogs/content/images/`
   and refreshes the blog URLs in `public/sitemap.xml`.
3. Commit and push.

The blog can later move to Lovable Cloud (posts table + an admin editor) so Ghost is no longer needed.
