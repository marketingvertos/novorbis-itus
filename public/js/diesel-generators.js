// ── DG Hero scroll-scrub: lerped scroll → video scrub + smoke fade + reveal + parallax ──
  (function dgHeroScrub() {
    const stage = document.getElementById('dgHeroStage');
    const smoke = document.getElementById('dgHeroSmoke');
    const video = document.getElementById('dgHeroVideo');
    const root  = document.getElementById('hero');
    if (!root || !stage) return;

    // Cache reveal targets
    const headline = root.querySelector('.dg-hero-headline');
    const sub      = root.querySelector('.dg-hero-side > p');
    const actions  = root.querySelector('.dg-hero-actions');
    const certs    = root.querySelector('.dg-hero-certs');

    // Reveal schedule (in smoothed scroll-progress 0–1).
    const reveals = [
      { el: sub,     start: 0.22, end: 0.42, entry: 24, parallax: -22 },
      { el: actions, start: 0.40, end: 0.58, entry: 22, parallax: -32 },
      { el: certs,   start: 0.58, end: 0.76, entry: 20, parallax: -42 },
    ];
    const headlineParallax = -14;

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scroll lerping — raw scroll feeds targetP, smoothP interpolates toward it each frame.
    let targetP = 0;
    let smoothP = 0;
    const LERP = 0.14;       // 0..1, higher = snappier, lower = smoother (more lag)
    const EPS  = 0.0008;     // stop the rAF when we're effectively at the target
    let raf = null;

    // Lock viewport height — only update when width changes (orientation flip).
    // iOS URL bar show/hide fires resize with height-only change; ignoring keeps
    // scroll progress stable and prevents video from jumping mid-scroll.
    let vpH = window.innerHeight;
    let vpW = window.innerWidth;

    function readScroll() {
      const r = root.getBoundingClientRect();
      const scrollable = r.height - vpH;
      return scrollable > 0 ? Math.min(1, Math.max(0, -r.top / scrollable)) : 0;
    }

    function apply(p) {
      // Smoke fade
      if (smoke) smoke.style.setProperty('--smoke-opacity', (1 - p).toFixed(3));
      // Video scrub
      if (video && video.duration && !isNaN(video.duration)) {
        const t = p * video.duration;
        if (Math.abs(video.currentTime - t) > 0.02) {
          try { video.currentTime = t; } catch (_) {}
        }
      }
      if (reduced) return;
      // Headline parallax (no fade — anchors page at load)
      if (headline) {
        headline.style.transform = `translate3d(0, ${(p * headlineParallax).toFixed(2)}px, 0)`;
      }
      // Side block staggered reveal + parallax
      for (const r of reveals) {
        if (!r.el) continue;
        const fp = Math.max(0, Math.min(1, (p - r.start) / (r.end - r.start)));
        const entryY = (1 - fp) * r.entry;
        const parallaxY = p * r.parallax;
        r.el.style.opacity = fp.toFixed(3);
        r.el.style.transform = `translate3d(0, ${(entryY + parallaxY).toFixed(2)}px, 0)`;
      }
    }

    function tick() {
      const delta = targetP - smoothP;
      if (Math.abs(delta) > EPS) {
        smoothP += delta * LERP;
        apply(smoothP);
        raf = requestAnimationFrame(tick);
      } else {
        // Snap to exact target and stop the loop until next scroll
        smoothP = targetP;
        apply(smoothP);
        raf = null;
      }
    }

    function onScroll() {
      targetP = readScroll();
      if (raf === null) raf = requestAnimationFrame(tick);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function() {
      const newW = window.innerWidth;
      if (newW !== vpW) { vpW = newW; vpH = window.innerHeight; }
      onScroll();
    });
    // Initial paint — no lerp needed for first frame
    targetP = readScroll();
    smoothP = targetP;
    apply(smoothP);
  })();

// ── Testimonial Swiper ──────────────────────────────────────────
  (function initTestiSwiper() {
    if (typeof Swiper === 'undefined') return;
    const wrap = document.querySelector('.testi-card-wrap');
    if (!wrap) return;
    new Swiper(wrap.querySelector('.testi-swiper'), {
      loop: true,
      speed: 500,
      navigation: {
        prevEl: wrap.querySelector('.testi-arrow.prev'),
        nextEl: wrap.querySelector('.testi-arrow.next')
      },
      pagination: {
        el: document.querySelector('.testimonial-inner .testi-dots'),
        clickable: true,
        bulletClass: 'dot',
        bulletActiveClass: 'active',
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        }
      }
    });
  })();
