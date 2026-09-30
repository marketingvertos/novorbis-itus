/* ============================================================
   Novorbis — global site JS
   Loaded on every page. Page-specific code stays inline.

   Provides:
     1. Lenis site-wide smooth scroll (guarded — no-op if Lenis CDN absent
        or user prefers-reduced-motion).
     2. Nav auto-hide on scroll down, show on scroll up.
     3. Nav light/dark swap when scrolled over a section with .light.
     4. Site-wide motion observers — .reveal, .stagger, [data-parallax].
   ============================================================ */

(function () {
  'use strict';

  var prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── 1. Lenis site-wide smooth scroll ────────────────────────
  var lenis = (typeof Lenis !== 'undefined' && !prefersReducedMotion)
    ? new Lenis({ lerp: 0.085 })
    : null;

  if (lenis) {
    (function lenisRaf(time) { lenis.raf(time); requestAnimationFrame(lenisRaf); })();
    window.lenis = lenis;

    // Intercept anchor clicks → smooth glide instead of jump
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target);
    });
  }

  // ── Set --nav-h to actual nav height (updates on resize) ────
  (function syncNavHeight() {
    var nav = document.querySelector('nav.site-nav');
    if (!nav) return;
    function update() {
      document.documentElement.style.setProperty('--nav-h', nav.offsetHeight + 'px');
    }
    update();
    window.addEventListener('resize', update);
  })();

  // ── 2. Nav auto-hide on scroll-down, show on scroll-up ──────
  (function navAutoHide() {
    var nav = document.getElementById('nav') || document.querySelector('nav.site-nav');
    if (!nav) return;
    var lastY = window.scrollY;
    var ticking = false;
    var THRESHOLD = 12;   // ignore micro-scrolls
    var HIDE_AFTER = 80;  // don't hide until past this scroll position

    function update() {
      var y = window.scrollY;
      var dy = y - lastY;
      if (Math.abs(dy) > THRESHOLD) {
        if (dy > 0 && y > HIDE_AFTER) nav.classList.add('nav-hidden');
        else if (dy < 0) nav.classList.remove('nav-hidden');
        lastY = y;
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
  })();

  // ── 3. Nav light/dark swap (over .light sections) ───────────
  (function navLightSwap() {
    var navEl = document.getElementById('nav');
    if (!navEl) return;
    function watchLight() {
      var rect = navEl.getBoundingClientRect();
      var cx = window.innerWidth / 2;
      var cy = rect.bottom + 4;
      var el = document.elementFromPoint(cx, cy);
      if (!el) return;
      navEl.classList.toggle('on-light', !!el.closest('.light'));
    }
    window.addEventListener('scroll', watchLight, { passive: true });
    window.addEventListener('resize', watchLight);
    document.addEventListener('DOMContentLoaded', watchLight);
  })();

  // ── 4. Site-wide motion: reveal / stagger / parallax ────────
  (function siteMotion() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal, .stagger').forEach(function (el) {
        el.classList.add('is-in');
      });
      return;
    }

    // Reveal observer — 30% threshold for normal elements;
    // falls back to 5% for elements taller than the viewport (e.g. tall stagger grids on mobile).
    var revealIO30 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealIO30.unobserve(entry.target);
        }
      });
    }, { threshold: 0.30 });
    var revealIO05 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealIO05.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal, .stagger').forEach(function (el) {
      // Use low threshold when element is taller than the viewport
      var io = el.offsetHeight > window.innerHeight * 0.8 ? revealIO05 : revealIO30;
      io.observe(el);
    });

    // Subtle parallax — elements with [data-parallax] (factor in attr value)
    var parallaxEls = document.querySelectorAll('[data-parallax]');
    var scheduled = false;
    function onParallaxScroll() {
      if (scheduled) return;
      var isMobile = window.innerWidth < 768;
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        parallaxEls.forEach(function (el) {
          var rect = el.getBoundingClientRect();
          var factor = (parseFloat(el.dataset.parallax) || 0.12) * (isMobile ? 0.4 : 1);
          if (rect.bottom > -200 && rect.top < window.innerHeight + 200) {
            var raw = (rect.top + rect.height / 2 - window.innerHeight / 2) * factor;
            var maxShift = rect.height * 0.22 * 0.9;
            var offset = Math.max(-maxShift, Math.min(maxShift, raw));
            el.style.setProperty('--parallax-y', (-offset) + 'px');
          }
        });
      });
    }
    if (parallaxEls.length) {
      window.addEventListener('scroll', onParallaxScroll, { passive: true });
      window.addEventListener('resize', onParallaxScroll);
      onParallaxScroll();
    }
  })();

  // ── 5. Mobile nav ───────────────────────────────────────────
  (function mobileNav() {
    var burger = document.getElementById('navBurger');
    var panel  = document.getElementById('navMobile');
    if (!burger || !panel) return;

    function openMenu() {
      burger.classList.add('is-open');
      panel.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      panel.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      burger.classList.remove('is-open');
      panel.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', function () {
      burger.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    // Tap outside (on the backdrop) to close
    panel.addEventListener('click', function (e) {
      if (e.target === panel) closeMenu();
    });

    // Solutions accordion
    var solutionsItem = document.getElementById('nmSolutions');
    if (solutionsItem) {
      var solutionsBtn = solutionsItem.querySelector('.nm-label');
      solutionsBtn.addEventListener('click', function () {
        var isOpen = solutionsItem.classList.toggle('is-open');
        solutionsBtn.setAttribute('aria-expanded', String(isOpen));
      });
    }

    // Auto-close when resizing back to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeMenu();
    });
  })();

  // ── 6. Dropdown active-link highlight ───────────────────────
  (function markActiveDropdownItem() {
    var path = location.pathname;
    // Desktop dropdown
    document.querySelectorAll('.nav-dropdown a.dd-item').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (href && path === href) a.classList.add('is-active');
    });
    // Mobile nav
    document.querySelectorAll('.nm-sub-item').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (href && path === href) a.classList.add('is-active');
    });
  })();

  // ── 7. Last published timestamp (footer) ────────────────────
  (function setPublished() {
    var el = document.getElementById('footerPublished');
    if (!el) return;
    var d = new Date(document.lastModified);
    var pad = function(n) { return String(n).padStart(2, '0'); };
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var build = window.NOVORBIS_BUILD || {};
    var text = 'Last published: ' +
      pad(d.getDate()) + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' · ' +
      pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
    if (build.hash) text += ' · ' + build.hash;
    el.textContent = text;
  })();

  // ── Full-screen preloader overlay ───────────────────────────
  // Skip entirely on blog pages (Ghost-generated, no image sequences).
  (function () {
    var isBlog = /^\/blogs(\/|$)/.test(window.location.pathname);
    if (isBlog) return;

    // Overlay + inner content injected by sync-partials inline — already in DOM.
    // global.js just wires up the API; never overwrites the HTML (avoids
    // logo/bar flash on slow mobile where deferred JS loads late).
    var overlay = document.getElementById('pl-overlay');
    if (!overlay) {
      // Fallback: page somehow missing the inline injection
      overlay = document.createElement('div');
      overlay.id = 'pl-overlay';
      overlay.innerHTML = '<div id="pl-inner"><img src="/assets/images/shared/novorbis-logo-white.svg" id="pl-logo" alt="Novorbis"><div id="pl-track"><div id="pl-fill"></div></div><span id="pl-pct">0%</span></div>';
      document.body.prepend(overlay);
    }

    // Thin top bar (keep for subtle in-page feedback after overlay gone)
    var bar = document.createElement('div');
    bar.id = 'page-loader';
    document.body.prepend(bar);

    var dismissed = false;
    var loaderUsed = false;  // true once set() is called
    var doneTimer = null;
    var fallbackTimer = null;

    function dismiss() {
      if (dismissed) return;
      dismissed = true;
      clearTimeout(fallbackTimer);
      overlay.classList.add('pl-done');
      // Remove from DOM after transition ends
      overlay.addEventListener('transitionend', function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, { once: true });
    }

    // If nothing calls set() within 400ms (no image sequence on this page),
    // auto-dismiss immediately. Otherwise 3s hard cap kicks in.
    fallbackTimer = setTimeout(function () {
      if (!loaderUsed) { dismiss(); return; }
      fallbackTimer = setTimeout(dismiss, 3000);
    }, 400);

    window.pageLoader = {
      set: function (fraction) {
        loaderUsed = true;
        var p = Math.min(1, Math.max(0, fraction));
        var pct = Math.round(p * 100);
        bar.classList.remove('lp-done');
        bar.style.setProperty('--lp', pct.toFixed(1) + '%');
        var fill = document.getElementById('pl-fill');
        var pctEl = document.getElementById('pl-pct');
        if (fill) fill.style.width = pct + '%';
        if (pctEl) pctEl.textContent = pct + '%';
      },
      done: function () {
        bar.style.setProperty('--lp', '100%');
        clearTimeout(doneTimer);
        doneTimer = setTimeout(function () { bar.classList.add('lp-done'); }, 350);
        var fill = document.getElementById('pl-fill');
        var pctEl = document.getElementById('pl-pct');
        if (fill) fill.style.width = '100%';
        if (pctEl) pctEl.textContent = '100%';
        // Small delay so user sees 100% before overlay fades
        setTimeout(dismiss, 300);
      }
    };
  })();
})();

// ── Localhost: append .html to bare slugs so file-based links work ──
(function () {
  var h = location.hostname;
  if (h !== 'localhost' && h !== '127.0.0.1') return;
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      // Skip external, protocol-relative, hash-only, mailto, tel
      if (/^(https?:)?\/\/|^#|^mailto:|^tel:/.test(href)) return;
      // Split off query + hash
      var path = href.split('?')[0].split('#')[0];
      var tail = href.slice(path.length);           // ?query#hash part
      var slug = path.split('/').pop();
      // Skip if already has a file extension or is empty/root
      if (!slug || slug.indexOf('.') !== -1) return;
      a.setAttribute('href', path + '.html' + tail);
    });
  });
})();
