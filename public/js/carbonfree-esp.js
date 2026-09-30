// Lenis, nav auto-hide, nav .light swap, and site-wide reveal/stagger/parallax
  // observers all live in js/global.js. This file only carries page-specific code.

  // ── Hero stage video: play once at 1.25x, then freeze on last frame ──
  (function() {
    const v = document.querySelector('.hero-stage-video');
    if (!v) return;
    v.playbackRate = 1.25;
    // Browsers reset playbackRate when src loads — re-apply on play
    v.addEventListener('play', () => { v.playbackRate = 1.25; }, { once: false });
  })();

  // ── DG Problem accordion (one open at a time) ──
  (function dgAccordion() {
    const items = document.querySelectorAll('#dgAccordion .dg-acc-item');
    if (!items.length) return;
    items.forEach(item => {
      const btn = item.querySelector('.dg-acc-toggle');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        items.forEach(it => {
          it.classList.remove('open');
          const t = it.querySelector('.dg-acc-toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  })();

  // ── DG Hero scroll-scrub: lerped scroll → video scrub + smoke fade + reveal + parallax ──
  (function dgHeroScrub() {
    const stage = document.getElementById('dgHeroStage');
    const smoke = document.getElementById('dgHeroSmoke');
    const video = document.getElementById('dgHeroVideo');
    const root  = document.getElementById('hero');
    if (!root || !stage) return;

    // ── Page loader: track video buffer fill ─────────────────────
    if (video && window.pageLoader) {
      window.pageLoader.set(0.02);
      function updateVideoProgress() {
        if (!video.duration || video.duration === 0) return;
        const buffered = video.buffered;
        let loaded = 0;
        for (let i = 0; i < buffered.length; i++) {
          loaded += buffered.end(i) - buffered.start(i);
        }
        const p = Math.min(1, loaded / video.duration);
        window.pageLoader.set(0.02 + p * 0.98);
        if (p >= 1) window.pageLoader.done();
      }
      video.addEventListener('progress', updateVideoProgress);
      video.addEventListener('loadeddata', function() {
        if (window.pageLoader) window.pageLoader.done();
      }, { once: true });
    }

    // Cache reveal targets
    const headline = root.querySelector('.dg-hero-headline');
    const sideBox  = root.querySelector('.dg-hero-side');
    const sub      = root.querySelector('.dg-hero-side > p');
    const actions  = root.querySelector('.dg-hero-actions');
    const certs    = root.querySelector('.dg-hero-certs');

    // Reveal schedule (in smoothed scroll-progress 0–1).
    // Parallax is applied to the side BOX as a whole (so the glass panel moves as one unit);
    // individual children only get the staggered entry translate + opacity.
    const reveals = [
      { el: sub,     start: 0.22, end: 0.42, entry: 24 },
      { el: actions, start: 0.40, end: 0.58, entry: 22 },
      { el: certs,   start: 0.58, end: 0.76, entry: 20 },
    ];
    const headlineParallax = -14;
    const sideParallax     = -28;

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scroll lerping — raw scroll feeds targetP, smoothP interpolates toward it each frame.
    // Mobile gets a lower LERP so the video scrub feels gradual rather than jumpy.
    const isMobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    let targetP = 0;
    let smoothP = 0;
    const LERP = isMobile ? 0.07 : 0.14;  // 0..1, higher = snappier, lower = smoother
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
      // Side glass panel ΓÇö parallax the whole box as one unit
      if (sideBox) {
        sideBox.style.transform = `translate3d(0, ${(p * sideParallax).toFixed(2)}px, 0)`;
      }
      // Children only get staggered entry translate + opacity (no per-child parallax,
      // otherwise they drift relative to the box padding).
      for (const r of reveals) {
        if (!r.el) continue;
        const fp = Math.max(0, Math.min(1, (p - r.start) / (r.end - r.start)));
        const entryY = (1 - fp) * r.entry;
        r.el.style.opacity = fp.toFixed(3);
        r.el.style.transform = `translate3d(0, ${entryY.toFixed(2)}px, 0)`;
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
