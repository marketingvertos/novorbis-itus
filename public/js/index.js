// ── Site-wide motion: reveals, stagger, stack-up, counters, parallax ──
  // NOTE: Lenis smooth-scroll, nav auto-hide, nav .light swap, and the basic
  // reveal/stagger/parallax observers live in js/global.js. The motion IIFE
  // below stays inline because it also runs Index-specific behaviours
  // (counter animation, lead-paragraph reveal, sticky product/manifesto stack).
  (function siteMotion() {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      document.querySelectorAll('.reveal, .stack-up, .stagger').forEach(el => el.classList.add('is-in'));
      // Set counters to final value immediately
      document.querySelectorAll('[data-count]').forEach(el => {
        const v = parseFloat(el.dataset.count);
        el.textContent = (v % 1 === 0) ? Math.round(v).toLocaleString() : v.toFixed(1);
      });
      return;
    }

    // Reveal observer — 30% threshold
    const revealIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.30 });
    document.querySelectorAll('.reveal, .stagger').forEach(el => revealIO.observe(el));

    // Lead-text — wrap each word in a span, light them up as the section scrolls past
    const leadPara = document.getElementById('leadParagraph');
    const leadBadges = document.getElementById('leadBadges');
    if (leadPara) {
      const words = leadPara.textContent.trim().split(/\s+/).filter(Boolean);
      leadPara.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');
      const wordEls = leadPara.querySelectorAll('.word');
      function updateLeadReveal() {
        const rect = leadPara.getBoundingClientRect();
        const vh = window.innerHeight;
        // Reveal from when paragraph top is at 80% viewport to when it's at 20% viewport
        const start = vh * 0.80;
        const end   = vh * 0.20;
        const progress = (start - rect.top) / (start - end);
        const clamped = Math.max(0, Math.min(1, progress));
        const litCount = Math.round(clamped * (wordEls.length + 1));
        wordEls.forEach((w, i) => w.classList.toggle('is-lit', i < litCount));
        if (leadBadges) leadBadges.classList.toggle('is-in', clamped >= 0.92);
      }
      window.addEventListener('scroll', updateLeadReveal, { passive: true });
      window.addEventListener('resize', updateLeadReveal);
      updateLeadReveal();
    }

    // Sticky stack — when Products covers Manifesto, Manifesto recedes
    const manifesto = document.getElementById('manifesto');
    const products = document.getElementById('products');
    if (manifesto && products) {
      const stackIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // When Products is 25% in viewport, Manifesto is being covered → recede
          manifesto.classList.toggle('is-covered', entry.intersectionRatio > 0.25);
        });
      }, { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });
      stackIO.observe(products);
    }

    // Counter animation — triggers when stat is 50% visible
    function animateCounter(el) {
      const target = parseFloat(el.dataset.count);
      const duration = 1600;
      const startTime = performance.now();
      function tick(now) {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = target * eased;
        el.textContent = (target % 1 === 0)
          ? Math.round(current).toLocaleString()
          : current.toFixed(1);
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = '1';
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.50 });
    document.querySelectorAll('[data-count]').forEach(el => counterIO.observe(el));

    // Subtle parallax — applies to elements with [data-parallax] (factor in attr value)
    const parallaxEls = document.querySelectorAll('[data-parallax]');
    let scheduled = false;
    function onParallaxScroll() {
      if (scheduled) return;
      // Disable on small screens — avoids empty-space gaps on mobile
      if (window.innerWidth < 768) {
        parallaxEls.forEach(el => el.style.setProperty('--parallax-y', '0px'));
        return;
      }
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        parallaxEls.forEach(el => {
          const rect = el.getBoundingClientRect();
          const factor = parseFloat(el.dataset.parallax) || 0.12;
          if (rect.bottom > -200 && rect.top < window.innerHeight + 200) {
            const raw = (rect.top + rect.height / 2 - window.innerHeight / 2) * factor;
            // Clamp to 90% of the ::before bleed (22% of element height) so image never runs out
            const maxShift = rect.height * 0.22 * 0.9;
            const offset = Math.max(-maxShift, Math.min(maxShift, raw));
            el.style.setProperty('--parallax-y', `${-offset}px`);
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

  // ── Home hero: image-sequence scroll scrub (Apple-style) ──
  (function homeHeroSequence() {
    const section = document.getElementById('hero');
    const canvas  = document.getElementById('heroCanvas');
    if (!section || !canvas) return;
    const ctx = canvas.getContext('2d');

    const FRAME_COUNT = 106;
    const framePath = (i) => `assets/images/homepage/hero-frames/f-${String(i).padStart(3, '0')}.webp`;
    const frames = new Array(FRAME_COUNT);
    let firstLoaded = false;
    let lastRendered = -1;

    // Cache viewport height — only update when WIDTH changes (orientation change,
    // desktop resize). iOS Safari fires resize when the URL bar shows/hides (height-only
    // change); ignoring those prevents the canvas from re-scaling mid-scroll.
    let vpH = window.innerHeight;
    let vpW = window.innerWidth;

    function sizeCanvas() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = section.clientWidth;
      const h = vpH;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = w + 'px';
      canvas.style.height = h + 'px';
    }

    function drawFrame(idx) {
      const img = frames[idx];
      if (!img || !img.complete || !img.naturalWidth) return;
      const cw = canvas.width, ch = canvas.height;
      const iw = img.naturalWidth, ih = img.naturalHeight;
      // object-fit: cover behaviour
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale, dh = ih * scale;
      const dx = (cw - dw) / 2, dy = (ch - dh) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
      lastRendered = idx;
    }

    // Load first 20 frames immediately (covers initial viewport scroll range),
    // lazy-load remaining 86 after first scroll interaction.
    const EAGER = 20;
    let framesLoaded = 0;
    if (window.pageLoader) window.pageLoader.set(0.02);

    function loadFrame(i) {
      const img = new Image();
      img.decoding = 'async';
      img.src = framePath(i + 1);
      img.addEventListener('load', function() {
        framesLoaded++;
        if (window.pageLoader && framesLoaded <= EAGER) {
          window.pageLoader.set(0.02 + (framesLoaded / EAGER) * 0.98);
          if (framesLoaded >= EAGER) window.pageLoader.done();
        }
      }, { once: true });
      img.addEventListener('error', function() {
        framesLoaded++;
        if (window.pageLoader && framesLoaded >= EAGER) window.pageLoader.done();
      }, { once: true });
      if (i === 0) {
        img.addEventListener('load', () => {
          firstLoaded = true;
          sizeCanvas();
          drawFrame(0);
          canvas.style.background = '#050608';
        }, { once: true });
      }
      frames[i] = img;
    }

    // Eager: first 20
    for (let i = 0; i < EAGER; i++) loadFrame(i);

    // Lazy: rest after first scroll or 1.5s idle
    let restLoaded = false;
    function loadRestFrames() {
      if (restLoaded) return;
      restLoaded = true;
      for (let i = EAGER; i < FRAME_COUNT; i++) loadFrame(i);
    }
    setTimeout(loadRestFrames, 1500);
    window.addEventListener('scroll', loadRestFrames, { once: true, passive: true });

    // Scroll lerp
    let targetP = 0;
    let smoothP = 0;
    const LERP = 0.18;
    const EPS  = 0.0006;
    let raf = null;

    function readScroll() {
      const r = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - vpH;
      return scrollable > 0 ? Math.min(1, Math.max(0, -r.top / scrollable)) : 0;
    }

    // ── Word-wipe headline transition ────────────────────────
    const wordsIn  = [...document.querySelectorAll('#heroLine1 .hw, #heroLine2 .hw')];
    const wordsOut = [...document.querySelectorAll('#heroLine3 .hw, #heroLine4 .hw')];
    let headlineState = 'a'; // 'a' | 'b'

    // Set initial state — second headline sits below, clipped by overflow:hidden on h1
    gsap.set(wordsOut, { yPercent: 110, opacity: 0 });
    gsap.set(wordsIn,  { yPercent: 0,   opacity: 1 });

    function switchToB() {
      if (headlineState === 'b') return;
      headlineState = 'b';
      const tl = gsap.timeline();
      tl.to(wordsIn, {
        yPercent: -110, opacity: 0,
        duration: 0.45, stagger: 0.055,
        ease: 'power2.in'
      });
      tl.to(wordsOut, {
        yPercent: 0, opacity: 1,
        duration: 0.5, stagger: 0.07,
        ease: 'power3.out'
      }, '-=0.15');
    }

    function switchToA() {
      if (headlineState === 'a') return;
      headlineState = 'a';
      const tl = gsap.timeline();
      tl.to(wordsOut, {
        yPercent: 110, opacity: 0,
        duration: 0.35, stagger: 0.04,
        ease: 'power2.in'
      });
      tl.to(wordsIn, {
        yPercent: 0, opacity: 1,
        duration: 0.45, stagger: 0.055,
        ease: 'power3.out'
      }, '-=0.1');
    }

    function paintForP(p) {
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(p * FRAME_COUNT)));
      if (idx !== lastRendered && frames[idx] && frames[idx].complete && frames[idx].naturalWidth) {
        drawFrame(idx);
      }
      // Trigger headline swap at 80% progress
      if (p >= 0.4) switchToB();
      else switchToA();
    }

    function tick() {
      const delta = targetP - smoothP;
      if (Math.abs(delta) > EPS) {
        smoothP += delta * LERP;
        paintForP(smoothP);
        raf = requestAnimationFrame(tick);
      } else {
        smoothP = targetP;
        paintForP(smoothP);
        raf = null;
      }
    }

    function onScroll() {
      targetP = readScroll();
      if (raf === null) raf = requestAnimationFrame(tick);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      const newW = window.innerWidth;
      if (newW !== vpW) {
        // Width changed → real resize (orientation flip, desktop drag).
        // Update both dimensions.
        vpW = newW;
        vpH = window.innerHeight;
      }
      // Height-only change = URL bar show/hide — keep vpH locked to prevent zoom.
      sizeCanvas();
      lastRendered = -1;
      paintForP(smoothP);
    });

    // Initial size + scroll-position read
    sizeCanvas();
    targetP = readScroll();
    smoothP = targetP;
  })();

  // ── Product tabs + scroll-locked switcher ─────────────
  // 5 panes: 0=recd 1=cac 2=caps 3=ind 4=cc
  // 4 tabs:  0=DG   1=Crematoriums  2=Heavy  3=CC
  // DG tab covers panes 0 + 1 (pill switcher selects between them)
  (function productScrollLock() {
    const section  = document.getElementById('products');
    if (!section) return;
    // Filter out hidden tabs (ATS/CCUS) so they don't steal scroll range
    const tabs     = Array.from(document.querySelectorAll('.products-tabs .tab')).filter(t => t.style.display !== 'none');
    const panes    = Array.from(document.querySelectorAll('.product-pane'));
    if (!tabs.length || !panes.length) return;
    const N = panes.length; // 5 panes total
    const T = tabs.length;  // 3 visible tabs: RECD, CAPS, APCD

    // 3 visible tabs: 0=RECD  1=CAPS  2=APCD
    // 5 panes:        0=recd  1=cac   2=caps  3=ind  4=cc (cc never activated)
    // RECD tab covers panes 0+1 (pill switcher between them)
    // Tab scroll ranges — RECD owns 0.4, CAPS and APCD split remaining 0.6 equally
    const TAB_RANGES = [[0, 0.4], [0.4, 0.7], [0.7, 1.0]];
    // RECD pill ranges within tab 0 — pane 0 (recd)=[0,0.2], pane 1 (cac)=[0.2,0.4]
    const PILL_RANGES = { recd: [0, 0.2], cac: [0.2, 0.4] };

    // Given a scroll progress p (0..1), return active tab index
    function tabIdxFromP(p) {
      for (let i = T - 1; i >= 0; i--) {
        if (p >= TAB_RANGES[i][0]) return i;
      }
      return 0;
    }
    // Given active tab index, return the pane index to display
    const TAB_PANE = [null, 2, 3]; // tab 0 uses pill-driven sub-pane logic
    function paneIdxFromP(p) {
      const ti = tabIdxFromP(p);
      if (ti === 0) {
        // Within RECD: pick pane 0 or 1 based on pill ranges
        return p < PILL_RANGES.cac[0] ? 0 : 1;
      }
      return TAB_PANE[ti];
    }

    function setActive(paneIdx, tabIdx) {
      paneIdx = Math.max(0, Math.min(N - 1, paneIdx));
      tabs.forEach((t, i)  => t.classList.toggle('active', i === tabIdx));
      panes.forEach((p, i) => p.classList.toggle('active', i === paneIdx));

      // Sync active state on all in-pane pill sets
      document.querySelectorAll('.dg-pill').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.pane === panes[paneIdx].dataset.pane);
      });
    }

    // Tab click → scroll to the centre of that tab's range
    tabs.forEach((btn, tabIdx) => {
      btn.addEventListener('click', () => {
        const [s, e] = TAB_RANGES[tabIdx];
        scrollToP((s + e) / 2);
      });
    });

    // Pill clicks (inside any pane) → scroll to the target pane within RECD
    document.querySelectorAll('.dg-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetPane = btn.dataset.pane;
        const range = PILL_RANGES[targetPane];
        if (range) scrollToP((range[0] + range[1]) / 2);
      });
    });

    function scrollToP(p) {
      const r = section.getBoundingClientRect();
      const sectionTop  = r.top + window.scrollY;
      const scrollable  = section.offsetHeight - window.innerHeight;
      if (scrollable > 0) {
        const target = sectionTop + p * scrollable;
        if (window.lenis) window.lenis.scrollTo(target);
        else window.scrollTo({ top: target, behavior: 'smooth' });
      } else {
        setActive(paneIdxFromP(p), tabIdxFromP(p));
      }
    }

    // Only drive via scroll on desktop (≥1025px); mobile = static stack
    const isPinned = () => window.matchMedia('(min-width: 1025px)').matches;

    let raf = false;
    function update() {
      raf = false;
      if (!isPinned()) return;
      const r = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p    = Math.min(0.9999, Math.max(0, -r.top / scrollable));
      const paneIdx = paneIdxFromP(p);
      const tabIdx  = tabIdxFromP(p);
      if (!panes[paneIdx].classList.contains('active') || !tabs[tabIdx].classList.contains('active')) {
        setActive(paneIdx, tabIdx);
      }

      // Update tab progress bars
      tabs.forEach((tab, i) => {
        const [s, e] = TAB_RANGES[i];
        const tp = Math.max(0, Math.min(1, (p - s) / (e - s)));
        tab.style.setProperty('--tab-progress', tp);
      });

      // Update RECD pill progress bars
      document.querySelectorAll('.dg-pill').forEach(pill => {
        const range = PILL_RANGES[pill.dataset.pane];
        if (!range) return;
        const pp = Math.max(0, Math.min(1, (p - range[0]) / (range[1] - range[0])));
        pill.style.setProperty('--pill-progress', pp);
      });
    }
    function onScroll() { if (!raf) { raf = true; requestAnimationFrame(update); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  })();

  // ── Manifesto smoke + soft cursor — ported from manifesto-section.html ──
  (() => {
    const canvas = document.getElementById('smoke');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    const section = document.getElementById('manifesto');
    const cursorRing = document.getElementById('cursorRing');

    const DOT_PITCH = 4;
    const FLOW_SPEED = 26;
    const NOISE_SCALE = 0.016;
    const CUTOFF = 0.34;
    const WARP_AMOUNT = 20;
    const WIND_X = 0.55;
    const WIND_Y = -0.84;

    let cols = 0, rows = 0;
    let srcX = 0, srcY = 0;
    let plumeLength = 0;
    let mouseX = -1e6, mouseY = -1e6;
    let hoverInner = 0, hoverOuter = 0;
    let hoverInner2 = 0, hoverOuter2 = 0;
    let hoverSpan = 0;
    let isVisible = false;

    function resize() {
      const rect = section.getBoundingClientRect();
      const w = rect.width, h = rect.height;
      cols = Math.max(2, Math.floor(w / DOT_PITCH));
      rows = Math.max(2, Math.floor(h / DOT_PITCH));
      canvas.width = cols; canvas.height = rows;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      srcX = cols * 0.08;
      srcY = rows * 1.08;
      plumeLength = Math.hypot(cols, rows) * 1.6;
      const minDim = Math.min(cols, rows);
      hoverInner = minDim * 0.06;
      hoverOuter = minDim * 0.20;
      hoverInner2 = hoverInner * hoverInner;
      hoverOuter2 = hoverOuter * hoverOuter;
      hoverSpan = hoverOuter - hoverInner;
    }
    function init() {
      resize();
      window.addEventListener('resize', resize);
      requestAnimationFrame(frame);
    }
    setTimeout(init, 0);

    function setPointer(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      mouseX = (clientX - rect.left) * (cols / rect.width);
      mouseY = (clientY - rect.top)  * (rows / rect.height);
      cursorRing.style.left = (clientX - rect.left) + 'px';
      cursorRing.style.top  = (clientY - rect.top)  + 'px';
    }
    function clearPointer() { mouseX = -1e6; mouseY = -1e6; }
    section.addEventListener('mousemove', e => setPointer(e.clientX, e.clientY));
    section.addEventListener('mouseleave', clearPointer);
    section.addEventListener('touchmove', e => {
      if (e.touches[0]) setPointer(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    section.addEventListener('touchend', clearPointer);

    const visObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => { isVisible = entry.isIntersecting; });
    }, { threshold: 0.05 });
    visObs.observe(section);

    function hash2(x, y) {
      let h = (x * 374761393 + y * 668265263) | 0;
      h = Math.imul(h ^ (h >>> 13), 1274126177);
      return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
    }
    function smooth(t) { return t * t * (3 - 2 * t); }
    function vnoise(x, y) {
      const xi = Math.floor(x), yi = Math.floor(y);
      const xf = x - xi, yf = y - yi;
      const u = smooth(xf), v = smooth(yf);
      const a = hash2(xi, yi);
      const b = hash2(xi + 1, yi);
      const c = hash2(xi, yi + 1);
      const d = hash2(xi + 1, yi + 1);
      return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
    }
    function fbm(x, y) {
      let v = 0, amp = 0.5, fx = x, fy = y;
      for (let i = 0; i < 4; i++) {
        v += amp * vnoise(fx, fy);
        fx *= 2; fy *= 2;
        amp *= 0.5;
      }
      return v;
    }

    const bayer = new Float32Array([
       0,32, 8,40, 2,34,10,42,
      48,16,56,24,50,18,58,26,
      12,44, 4,36,14,46, 6,38,
      60,28,52,20,62,30,54,22,
       3,35,11,43, 1,33, 9,41,
      51,19,59,27,49,17,57,25,
      15,47, 7,39,13,45, 5,37,
      63,31,55,23,61,29,53,21
    ]);
    for (let i = 0; i < bayer.length; i++) bayer[i] = (bayer[i] + 0.5) / 64;

    const PERP_X = -WIND_Y;
    const PERP_Y =  WIND_X;

    const start = performance.now();

    function frame() {
      if (!isVisible) {
        requestAnimationFrame(frame);
        return;
      }
      const t = (performance.now() - start) * 0.001;
      const img = ctx.createImageData(cols, rows);
      const data = img.data;

      const f1 = t * FLOW_SPEED * 0.55;
      const f2 = t * FLOW_SPEED * 1.0;
      const f3 = t * FLOW_SPEED * 1.65;
      const tw = t * 0.45;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const rx = x - srcX;
          const ry = y - srcY;
          const ds = rx * WIND_X + ry * WIND_Y;
          const dl = rx * PERP_X + ry * PERP_Y;
          let mask = 0;
          if (ds > -10) {
            const halfWidth = 14 + Math.max(0, ds) * 0.85;
            const lateral = Math.exp(-(dl * dl) / (halfWidth * halfWidth));
            const k = Math.max(0, ds) / plumeLength;
            const downstream = Math.exp(-k * 0.55) * Math.max(0, 1 - k * 0.35);
            mask = lateral * downstream;
          }
          if (mask < 0.01) {
            const i = (y * cols + x) * 4;
            data[i] = 0; data[i + 1] = 0; data[i + 2] = 0; data[i + 3] = 255;
            continue;
          }

          const wxn = (vnoise(x * 0.012, y * 0.012 + tw) - 0.5);
          const wyn = (vnoise(x * 0.012 + 71.3, y * 0.012 + tw + 12.1) - 0.5);
          const warpX = wxn * WARP_AMOUNT;
          const warpY = wyn * WARP_AMOUNT;

          const ax = x + warpX;
          const ay = y + warpY;
          const n1 = fbm((ax - WIND_X * f1) * NOISE_SCALE,
                         (ay - WIND_Y * f1) * NOISE_SCALE);
          const n2 = fbm((ax - WIND_X * f2) * NOISE_SCALE * 1.9 + 71.3,
                         (ay - WIND_Y * f2) * NOISE_SCALE * 1.9 + 12.7);
          const n3 = fbm((ax - WIND_X * f3) * NOISE_SCALE * 3.4 + 211.5,
                         (ay - WIND_Y * f3) * NOISE_SCALE * 3.4 + 88.1);
          let n = n1 * 0.55 + n2 * 0.30 + n3 * 0.18;
          n = (n - 0.06) * 1.55;
          if (n < 0) n = 0; else if (n > 1) n = 1;
          n *= Math.pow(mask, 0.78);

          // ── HOVER CLEARANCE — punch a soft hole around the cursor ──
          const dx2 = x - mouseX;
          const dy2 = y - mouseY;
          const md2 = dx2 * dx2 + dy2 * dy2;
          if (md2 < hoverOuter2) {
            if (md2 < hoverInner2) {
              n = 0;
            } else {
              const md = Math.sqrt(md2);
              const tt = (md - hoverInner) / hoverSpan;
              n *= smooth(tt);
            }
          }

          const th = bayer[(y & 7) * 8 + (x & 7)] * 0.45 + CUTOFF;
          let bright = 0;
          if (n > th) {
            bright = 60 + Math.floor((n - th) * 320);
            if (bright > 185) bright = 185;
          }
          const i = (y * cols + x) * 4;
          data[i] = bright;
          data[i + 1] = bright;
          data[i + 2] = bright;
          data[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      requestAnimationFrame(frame);
    }
  })();

// ── Impact Photo Swiper ─────────────────────────────────────────
  (function initProofSwiper() {
    if (typeof Swiper === 'undefined') return;
    const el = document.querySelector('.proof-swiper');
    if (!el) return;
    new Swiper(el, {
      loop: true,
      speed: 1000,
      autoplay: { delay: 4000, disableOnInteraction: false },
      effect: 'fade',
      fadeEffect: { crossFade: true }
    });
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
        el: document.querySelector('.testimonials-inner .testi-dots'),
        clickable: true,
        bulletClass: 'dot',
        bulletActiveClass: 'active',
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        }
      }
    });
  })();
