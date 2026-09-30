(() => {
  const canvas = document.getElementById('smoke');
  const ctx = canvas.getContext('2d', { alpha: false });
  const section = document.getElementById('manifesto');
  const cursorRing = document.getElementById('cursorRing');

  // ── config ──
  const DOT_PITCH = 4;
  const FLOW_SPEED = 26;
  const NOISE_SCALE = 0.016;
  const CUTOFF = 0.34;        // a bit thinner than the demo so headline reads
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
    const w = rect.width;
    const h = rect.height;
    cols = Math.max(2, Math.floor(w / DOT_PITCH));
    rows = Math.max(2, Math.floor(h / DOT_PITCH));
    canvas.width = cols;
    canvas.height = rows;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    // Source: bottom-left, slightly off-canvas so the plume billows in
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
  resize();
  window.addEventListener('resize', resize);

  // ── pointer ──
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

  // ── visibility (pause when offscreen for performance) ──
  const visObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => { isVisible = entry.isIntersecting; });
  }, { threshold: 0.05 });
  visObs.observe(section);

  // ── value noise ──
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
  requestAnimationFrame(frame);
})();
