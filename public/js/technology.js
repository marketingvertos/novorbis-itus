// ── Tech hero: GSAP word-by-word clip-mask reveal ──────
  (function techHeroReveal() {
    if (typeof gsap === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Wrap each word in <span class="word"><span class="word-inner">...</span></span>
    const splitWords = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return [];
      // Preserve inner HTML (e.g. <em>) — split by spaces but keep child element wrapped
      const html = el.innerHTML;
      // Crude split — works because line-2 has a single <em>...</em> wrapper
      const wordTokens = html.match(/<[^>]+>.*?<\/[^>]+>|\S+/g) || [];
      el.innerHTML = wordTokens
        .map(t => {
          // If token is an element, wrap its inner content with word-inner
          if (t.startsWith('<')) {
            const m = t.match(/^(<[^>]+>)(.*?)(<\/[^>]+>)$/);
            if (m) {
              const inside = m[2].split(/\s+/).filter(Boolean)
                .map(w => `<span class="word"><span class="word-inner">${w}</span></span>`)
                .join(' ');
              return `${m[1]}${inside}${m[3]}`;
            }
          }
          return `<span class="word"><span class="word-inner">${t}</span></span>`;
        })
        .join(' ');
      return el.querySelectorAll('.word-inner');
    };

    const line1 = splitWords('.tech-hero-headline .line-1');
    const line2 = splitWords('.tech-hero-headline .line-2');
    const kicker = document.querySelector('.tech-hero .reveal-line');
    const sub = document.querySelector('.tech-hero-sub');

    // Set initial hidden states via GSAP (so if GSAP fails earlier, the page
    // stays readable — CSS no longer hides anything).
    if (line1.length) gsap.set(line1, { yPercent: 110 });
    if (line2.length) gsap.set(line2, { yPercent: 110 });
    if (kicker) gsap.set(kicker, { opacity: 0, y: 12 });
    if (sub) gsap.set(sub, { opacity: 0, y: 18 });

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    if (kicker) tl.to(kicker, { opacity: 1, y: 0, duration: 0.7 }, 0);
    if (line1.length) tl.to(line1, { yPercent: 0, duration: 1.1, stagger: 0.07 }, 0.2);
    if (line2.length) tl.to(line2, { yPercent: 0, duration: 1.1, stagger: 0.06 }, 0.55);
    if (sub) tl.to(sub, { opacity: 1, y: 0, duration: 0.9 }, 1.2);
  })();

  // Lenis smooth scroll + site-wide reveal/stagger observers live in js/global.js.

  // ── Cylindrical capture animation — reversible scroll-driven ──
  (function captureAnimation() {
    const canvas = document.getElementById('stageCanvas');
    const pin    = document.querySelector('.tech-pin');
    const textBlocks = document.querySelectorAll('.text-panel .stage-block');
    if (!canvas || !pin) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    let W = 0, H = 0, DPR = 1;
    // Portrait mode: tube runs vertically (top→bottom) instead of horizontally (left→right)
    let isPortrait = false;
    // Lock viewport height — only update when width changes (orientation flip).
    // iOS URL bar show/hide fires resize with height-only change; ignoring prevents
    // scroll progress jumping mid-scroll on mobile.
    let vpH = window.innerHeight;
    let vpW = window.innerWidth;
    function checkPortrait() {
      isPortrait = window.innerWidth < 480 && window.innerHeight > window.innerWidth;
      pin.classList.toggle('is-portrait', isPortrait);
    }
    function resize() {
      const rect = canvas.getBoundingClientRect();
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.round(rect.width);
      H = Math.round(rect.height);
      canvas.width  = Math.round(rect.width  * DPR);
      canvas.height = Math.round(rect.height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      checkPortrait();
      // In portrait: sync stage-plate height to actual canvas pixel height
      if (isPortrait) {
        const plate = pin.querySelector('.stage-plate');
        if (plate) plate.style.height = H + 'px';
      }
    }
    resize();
    // Re-measure after layout settles (sticky positioning can give stale rects)
    requestAnimationFrame(() => { resize(); initParticles(); });
    window.addEventListener('resize', () => { resize(); initParticles(); });

    // ── Geometry helpers — adapt for horizontal vs vertical orientation ──
    // HORIZONTAL (default): top/bottom walls, particles flow left→right
    // VERTICAL (portrait):  left/right walls, particles flow top→bottom

    // "Primary axis" = flow direction; "Cross axis" = wall-to-wall direction
    // In horizontal: primary = X, cross = Y
    // In vertical:   primary = Y, cross = X

    function leftWall()   { return isPortrait ? W * 0.125 : 0; }
    function rightWall()  { return isPortrait ? W * 0.875 : W; }
    function topWall()    { return isPortrait ? 0 : H * 0.125; }
    function bottomWall() { return isPortrait ? H : H * 0.875; }

    // Electrode runs along the center of the cross axis
    function electrodePos()  { return isPortrait ? W * 0.5 : H * 0.5; }
    // Legacy aliases for horizontal mode
    function electrodeY() { return isPortrait ? W * 0.5 : H * 0.5; }

    function coronaMin()  { return electrodePos() - 80; }
    function coronaMax()  { return electrodePos() + 80; }
    // Legacy aliases
    function coronaTop()  { return coronaMin(); }
    function coronaBot()  { return coronaMax(); }
    function bandTop()    { return (isPortrait ? leftWall() : topWall()) + 30; }
    function bandBot()    { return (isPortrait ? rightWall() : bottomWall()) - 30; }

    // Slot positions — where captured grey particles attach to the wall
    function wallSlotNear() { return isPortrait ? leftWall() + 16  : topWall() + 16; }
    function wallSlotFar()  { return isPortrait ? rightWall() - 16 : bottomWall() - 16; }
    // Legacy aliases
    function topSlotY()    { return wallSlotNear(); }
    function bottomSlotY() { return wallSlotFar(); }

    // Responsive particle sizing — circular grey particles, slightly enlarged
    // so the "PM2.5" label stays legible inside the circle.
    function greySize()  { return (W < 720) ? 16 : 24; }
    function whiteSize() { return (W < 720) ? 4 : 6; }

    // 40 particles total — 15 attach to top wall, 15 to bottom wall, 10 escape (3:1 capture ratio)
    const PARTICLE_COUNT = 40;
    const TOP_GREY       = 15;
    const BOTTOM_GREY    = 15;
    const GREY_COUNT     = TOP_GREY + BOTTOM_GREY;  // 30
    const WHITE_COUNT    = 10;
    const PARTICLES = [];

    function initParticles() {
      PARTICLES.length = 0;
      let topGreyIdx = 0, botGreyIdx = 0, whiteIdx = 0;
      // Interleave: every 4 particles → 3 grey, 1 white (rough)
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const isGrey = (i % 4 !== 3) && (topGreyIdx + botGreyIdx < GREY_COUNT);
        const kind = isGrey ? 'grey' : 'white';
        const entryDelay = i / PARTICLE_COUNT * 0.4;  // particles enter staggered through first 40% of scroll
        const flowYJitter = Math.random();
        const p = {
          kind,
          entryDelay,
          flowYJitter,
          flowY: 0, slotX: 0, slotY: 0,
          holdY: 0, holdX: 0, holdSide: 'top',
          _visible: false,
          _inCorona: false,
        };

        if (kind === 'grey') {
          // goNear = attach to near wall (top in horizontal, left in vertical)
          const goNear = (topGreyIdx <= botGreyIdx) && (topGreyIdx < TOP_GREY);
          if (goNear) {
            const subIdx = topGreyIdx;
            const t = TOP_GREY > 1 ? subIdx / (TOP_GREY - 1) : 0.5;
            // slotPrimary: fraction along the flow axis where particle holds
            p.slotPrimary = 0.18 + t * 0.64;
            p.holdSide = 'near';  // top wall (horiz) or left wall (vert)
            p.holdCross = wallSlotNear();
            topGreyIdx++;
          } else {
            const subIdx = botGreyIdx;
            const t = BOTTOM_GREY > 1 ? subIdx / (BOTTOM_GREY - 1) : 0.5;
            p.slotPrimary = 0.18 + t * 0.64;
            p.holdSide = 'far';  // bottom wall (horiz) or right wall (vert)
            p.holdCross = wallSlotFar();
            botGreyIdx++;
          }
          // Legacy aliases for backward compatibility in render
          p.slotX = p.slotPrimary;
          p.holdY = p.holdCross;
          p.holdX = p.slotPrimary;
        } else {
          // white particles — pass through near electrode line, no slot binding
          p.slotPrimary = 0.18 + Math.random() * 0.64;
          p.slotX = p.slotPrimary;
          p.holdSide = 'flow';
          whiteIdx++;
        }
        PARTICLES.push(p);
      }
    }
    initParticles();
    window.addEventListener('resize', initParticles);

    // ── Scroll → progress ──
    let progress = 0;
    function onScroll() {
      const rect = pin.getBoundingClientRect();
      const total = rect.height - vpH;
      const scrolled = -rect.top;
      progress = Math.max(0, Math.min(1, scrolled / total));
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function() {
      const newW = window.innerWidth;
      if (newW !== vpW) { vpW = newW; vpH = window.innerHeight; }
      onScroll();
    });

    // ── Render loop — fully reversible (state is f(progress, time)) ──
    function frame(time) {
      // Clear
      ctx.fillStyle = '#04060a';
      ctx.fillRect(0, 0, W, H);

      // Stage boundaries based on progress (5 stages × 20% each)
      // 0.00 - 0.20 = Stage 01 (Intake — dusty gas enters)
      // 0.20 - 0.40 = Stage 02 (Corona — high voltage creates corona)
      // 0.40 - 0.60 = Stage 03 (Charge — ions attach to particles)
      // 0.60 - 0.80 = Stage 04 (Capture — particles migrate to wall)
      // 0.80 - 1.00 = Stage 05 (Exit — clean gas exits)
      const stage = progress < 0.20 ? 0
                   : (progress < 0.40 ? 1
                   : (progress < 0.60 ? 2
                   : (progress < 0.80 ? 3 : 4)));

      // ── Update stage card ──
      if (stage !== frame._lastStage) {
        frame._lastStage = stage;
        textBlocks.forEach((el, i) => {
          el.classList.toggle('is-visible', i === stage);
        });
      }

      // Corona ramps up across stage 2 (was 0.33–0.53, now 0.20–0.40)
      const chargeOn = Math.max(0, Math.min(1, (progress - 0.20) / 0.20));

      // ── Corona discharge — subtle: dashed electrode line, soft field glow, occasional thin arcs ──
      if (chargeOn > 0.05) {
        const ePos = electrodePos();
        if (isPortrait) {
          // VERTICAL: electrode runs horizontally (top-to-bottom flow, left/right walls)
          const grad = ctx.createLinearGradient(coronaMin(), 0, coronaMax(), 0);
          grad.addColorStop(0,   `rgba(90,167,255,0)`);
          grad.addColorStop(0.5, `rgba(90,167,255,${chargeOn * 0.10})`);
          grad.addColorStop(1,   `rgba(90,167,255,0)`);
          ctx.fillStyle = grad;
          ctx.fillRect(coronaMin(), H * 0.13, coronaMax() - coronaMin(), H * 0.74);

          // Electrode line (vertical: runs top-to-bottom at center X)
          ctx.strokeStyle = `rgba(90,167,255,${0.45 + chargeOn * 0.45})`;
          ctx.lineWidth = 1.4;
          ctx.setLineDash([6, 4]);
          ctx.beginPath();
          ctx.moveTo(ePos, H * 0.13);
          ctx.lineTo(ePos, H * 0.87);
          ctx.stroke();
          ctx.setLineDash([]);

          // Arcs — radiate left/right from vertical electrode
          const arcCount = 3;
          for (let a = 0; a < arcCount; a++) {
            const phase = (time * 0.0012 + a * 1.7) % 1;
            const alpha = chargeOn * Math.max(0, Math.sin(phase * Math.PI)) * 0.55;
            if (alpha < 0.04) continue;
            const seedA = Math.sin(time * 0.0007 + a * 4.1) * 0.5 + 0.5;
            const ay = H * (0.18 + seedA * 0.64);
            const goLeft = (a % 2 === 0);
            const reach = goLeft ? -((coronaMin() - ePos) * 0.6) : ((coronaMax() - ePos) * 0.6);
            ctx.strokeStyle = `rgba(200,225,255,${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(ePos, ay);
            const midX = ePos + reach * 0.45;
            const midY = ay + (Math.sin(time * 0.003 + a) * 8);
            const endX = ePos + reach;
            const endY = ay + (Math.sin(time * 0.004 + a + 2) * 12);
            ctx.lineTo(midX, midY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            ctx.strokeStyle = `rgba(120,180,255,${alpha * 0.35})`;
            ctx.lineWidth = 2.8;
            ctx.stroke();
          }
        } else {
          // HORIZONTAL (original)
          const eY = ePos;
          const grad = ctx.createLinearGradient(0, coronaTop(), 0, coronaBot());
          grad.addColorStop(0,   `rgba(90,167,255,0)`);
          grad.addColorStop(0.5, `rgba(90,167,255,${chargeOn * 0.10})`);
          grad.addColorStop(1,   `rgba(90,167,255,0)`);
          ctx.fillStyle = grad;
          ctx.fillRect(W * 0.13, coronaTop(), W * 0.74, coronaBot() - coronaTop());

          ctx.strokeStyle = `rgba(90,167,255,${0.45 + chargeOn * 0.45})`;
          ctx.lineWidth = 1.4;
          ctx.setLineDash([6, 4]);
          ctx.beginPath();
          ctx.moveTo(W * 0.13, eY);
          ctx.lineTo(W * 0.87, eY);
          ctx.stroke();
          ctx.setLineDash([]);

          const arcCount = 3;
          for (let a = 0; a < arcCount; a++) {
            const phase = (time * 0.0012 + a * 1.7) % 1;
            const alpha = chargeOn * Math.max(0, Math.sin(phase * Math.PI)) * 0.55;
            if (alpha < 0.04) continue;
            const seedA = Math.sin(time * 0.0007 + a * 4.1) * 0.5 + 0.5;
            const ax = W * (0.18 + seedA * 0.64);
            const goUp = (a % 2 === 0);
            const reach = goUp ? -((coronaTop() - eY) * 0.6) : ((coronaBot() - eY) * 0.6);
            ctx.strokeStyle = `rgba(200,225,255,${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(ax, eY);
            const midX = ax + (Math.sin(time * 0.003 + a) * 8);
            const midY = eY + reach * 0.45;
            const endX = ax + (Math.sin(time * 0.004 + a + 2) * 12);
            const endY = eY + reach;
            ctx.lineTo(midX, midY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            ctx.strokeStyle = `rgba(120,180,255,${alpha * 0.35})`;
            ctx.lineWidth = 2.8;
            ctx.stroke();
          }
        }
      }

      // ── Particles ──
      const greyD  = greySize();
      const whiteD = whiteSize();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // Auto-fit "PM2.5" inside the circle: shrink font until it fits the
      // available chord width (~78% of diameter), measured once per frame.
      const PM_LABEL = 'PM2.5';
      let cFontSize = Math.round(greyD * 0.40);
      ctx.font = `700 ${cFontSize}px 'Inter', system-ui, sans-serif`;
      const maxLabelW = greyD * 0.78;
      const measuredW = ctx.measureText(PM_LABEL).width;
      if (measuredW > maxLabelW) cFontSize = Math.max(5, cFontSize * maxLabelW / measuredW);
      const cFont = `700 ${cFontSize}px 'Inter', system-ui, sans-serif`;

      for (let i = 0; i < PARTICLES.length; i++) {
        const p = PARTICLES[i];
        // Entry visibility: starts becoming visible after entryDelay
        if (progress < p.entryDelay) { p._visible = false; continue; }
        p._visible = true;

        // Local progress for this particle (0-1)
        const localT = (progress - p.entryDelay) / (1 - p.entryDelay);

        // Position depends on orientation:
        // HORIZONTAL: flow left→right (X = primary), walls top/bottom (Y = cross)
        // VERTICAL:   flow top→bottom (Y = primary), walls left/right (X = cross)
        const primStart = -0.1;  // fraction before entry
        let x, y;

        if (isPortrait) {
          // ── VERTICAL orientation ──
          const eX = electrodePos();  // center X (electrode)
          if (p.kind === 'grey') {
            const primFlow = Math.min(1, localT * 2);
            const primPos = (primStart + (p.slotPrimary - primStart) * primFlow) * H;
            const captureT = Math.max(0, Math.min(1, (localT - 0.5) * 2.5));
            const streamX = eX + (p.flowYJitter - 0.5) * 80;
            const crossPos = streamX + (p.holdCross - streamX) * captureT;
            x = crossPos;
            y = primPos;
            p._inCorona = (Math.abs(crossPos - eX) < 90) && chargeOn > 0.1;
          } else {
            const primFull = primStart + (1.1 - primStart) * localT;
            y = primFull * H;
            x = eX + (p.flowYJitter - 0.5) * 50 + Math.sin(time * 0.001 + i) * 3;
          }
        } else {
          // ── HORIZONTAL orientation (original) ──
          const eY = electrodePos();  // center Y (electrode)
          if (p.kind === 'grey') {
            const xFlow = Math.min(1, localT * 2);
            const xPos = (primStart + (p.slotX - primStart) * xFlow) * W;
            const captureT = Math.max(0, Math.min(1, (localT - 0.5) * 2.5));
            const streamY = eY + (p.flowYJitter - 0.5) * 80;
            const yPos = streamY + (p.holdY - streamY) * captureT;
            x = xPos;
            y = yPos;
            p._inCorona = (Math.abs(yPos - eY) < 90) && chargeOn > 0.1;
          } else {
            const xFull = primStart + (1.1 - primStart) * localT;
            x = xFull * W;
            y = eY + (p.flowYJitter - 0.5) * 50 + Math.sin(time * 0.001 + i) * 3;
          }
        }

        if (p.kind === 'grey') {
          const r = greyD / 2;
          const localCapture = Math.max(0, Math.min(1, (localT - 0.5) * 2.5));
          // Charge halo while in corona zone and not fully captured
          if (p._inCorona && localCapture < 0.85) {
            const haloAlpha = 0.42 * chargeOn * (1 - localCapture * 0.6);
            ctx.fillStyle = `rgba(90,167,255,${haloAlpha})`;
            ctx.beginPath();
            ctx.arc(x, y, r + 5, 0, Math.PI * 2);
            ctx.fill();
          }
          // Filled dark circle body
          ctx.fillStyle = 'rgba(24,26,30,0.88)';
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
          // White outline
          ctx.strokeStyle = `rgba(220,222,228,${0.85 + localCapture * 0.10})`;
          ctx.lineWidth = 1.25;
          ctx.stroke();
          // "PM2.5" label — centered, auto-fitted font
          ctx.fillStyle = `rgba(240,242,246,${0.92 + localCapture * 0.05})`;
          ctx.font = cFont;
          ctx.fillText(PM_LABEL, x, y + 1);
        } else {
          // small white dot
          ctx.fillStyle = 'rgba(240,242,246,0.78)';
          ctx.beginPath();
          ctx.arc(x, y, whiteD / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      // Reset text baseline
      ctx.textAlign = 'start';
      ctx.textBaseline = 'alphabetic';

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  })();
