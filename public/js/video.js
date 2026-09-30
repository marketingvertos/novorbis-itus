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
