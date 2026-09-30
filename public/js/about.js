// NOTE: nav auto-hide + nav .light swap now live in js/global.js
// (the sections #story, #recognition, #contact all carry the .light class,
// so the global selector-based watcher handles them automatically).

// NOTE: the hero dotted world map is now a static SVG (assets/images/about/map.svg)
// rendered directly via an <img> tag — no canvas, no JS needed.

// ============================================================
// STORY — click-driven tab timeline
// ============================================================
(function () {

  // ── Image map with per-image captions ───────────────────────
  const BASE = 'assets/images/About us/Photos for website (about us)/';
  const CHAPTER_IMAGES = {
    'origin': [
      { src: BASE + 'Origin 1.jpg',              caption: 'The Accident That Started It All, Nov 2017' },
      { src: BASE + 'the Origin picture 2.jpg',  caption: 'The Founding Three, Indore'                  },
    ],
    'problem': [
      { src: BASE + 'the problem picture 1.jpg', caption: 'The Diesel Generator Problem'         },
      { src: BASE + 'the problem picture 2.jpg', caption: 'AQI Survey, Indore Streets'           },
    ],
    'idea': [
      { src: BASE + 'IDEA.jpg',                  caption: 'Ionic Deposition Technology'          },
    ],
    'first-proof': [
      { src: BASE + 'The-first-proof-AICTE-1.jpg',       caption: 'AICTE Recognition, 2019'          },
      { src: BASE + 'The-first-proof-AICTE-2.jpg',       caption: 'Top 5 Innovators, Govt. of India'  },
      { src: BASE + 'The first proof south korea.jpg',   caption: 'South Korea Exchange Program'      },
    ],
    'india-noticed': [
      { src: BASE + 'The-india-noticed-UNDP.-NITI-Aayog.jpeg',              caption: 'UNDP & Niti Aayog National Win'     },
      { src: BASE + 'the india noticed ASSOCHAM Startup launch pad.jpg',    caption: 'ASSOCHAM Startup Launchpad'         },
      { src: BASE + 'the-india-noticed-EO-GSEA-Regionals-Indore.jpg',       caption: 'EO-GSEA Regionals, Indore'          },
    ],
    'commercial': [
      { src: BASE + 'the commercial launch NGIS AND Pontaq.jpg', caption: 'Pre-Seed B: NGIS & Pontaq' },
    ],
    'scaling': [
      { src: BASE + 'Scaling-up-section-ARAI-approvals.jpg', caption: 'ARAI Type Approval, Oct 2024' },
    ],
    'today': [
      { src: BASE + 'Today.jpg', caption: 'Novorbis, Today' },
    ],
  };

  const TOTAL = 8;

  const milestones    = [...document.querySelectorAll('.story-milestone')];
  const stack         = document.getElementById('storyStack');
  const chapterCounter= document.getElementById('storyChapterCounter');
  const chapterTabs   = [...document.querySelectorAll('.year-tab')];

  if (!milestones.length || !stack) return;

  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  // ── MOBILE: swipeable carousels ─────────────────────────────
  if (isMobile()) {
    milestones.forEach(ms => {
      const slug = ms.dataset.chapter;
      const imgs = CHAPTER_IMAGES[slug] || [];
      if (!imgs.length) return;

      const wrap  = document.createElement('div');
      wrap.className = 'story-carousel-wrap';

      const track = document.createElement('div');
      track.className = 'story-carousel';

      imgs.forEach(({ src }) => {
        const slide = document.createElement('div');
        slide.className = 'story-carousel-slide';
        slide.style.backgroundImage = `url('${src}')`;
        track.appendChild(slide);
      });
      wrap.appendChild(track);

      if (imgs.length > 1) {
        const dotsEl = document.createElement('div');
        dotsEl.className = 'story-carousel-dots';
        const dots = imgs.map((_, i) => {
          const dot = document.createElement('button');
          dot.className = 'story-carousel-dot' + (i === 0 ? ' is-active' : '');
          dot.setAttribute('aria-label', 'Image ' + (i + 1));
          dot.addEventListener('click', () => {
            track.scrollTo({ left: i * track.offsetWidth, behavior: 'smooth' });
          });
          dotsEl.appendChild(dot);
          return dot;
        });
        track.addEventListener('scroll', () => {
          const idx = Math.round(track.scrollLeft / (track.offsetWidth || 1));
          dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
        }, { passive: true });
        wrap.appendChild(dotsEl);
      }

      ms.appendChild(wrap);
    });
    return;
  }

  // ── DESKTOP ─────────────────────────────────────────────────

  // Preload first chapter immediately; lazy-load rest after first interaction
  const firstChapterImgs = CHAPTER_IMAGES[Object.keys(CHAPTER_IMAGES)[0]] || [];
  const allImgs          = Object.values(CHAPTER_IMAGES).flat();
  const imgTotal         = firstChapterImgs.length;
  let   imgLoaded        = 0;
  let   restLoaded       = false;

  if (window.pageLoader) window.pageLoader.set(0.05);

  firstChapterImgs.forEach(({ src }) => {
    const img = new Image();
    img.onload = img.onerror = function () {
      imgLoaded++;
      if (window.pageLoader) {
        window.pageLoader.set(0.05 + (imgLoaded / imgTotal) * 0.95);
        if (imgLoaded >= imgTotal) window.pageLoader.done();
      }
    };
    img.src = src;
  });

  // Lazy-load remaining chapters after first tab click or 2s idle
  function loadRestChapters() {
    if (restLoaded) return;
    restLoaded = true;
    allImgs.forEach(({ src }) => { const i = new Image(); i.src = src; });
  }
  setTimeout(loadRestChapters, 2000);
  document.addEventListener('click', loadRestChapters, { once: true, passive: true });

  // ── Build schedule ───────────────────────────────────────────
  const schedule = milestones.map((ms, idx) => {
    const slug = ms.dataset.chapter;
    const imgs = CHAPTER_IMAGES[slug] || [{}];
    return { slug, idx, imgs };
  });

  // ── Single shared image card ─────────────────────────────────
  const imgCard = document.createElement('div');
  imgCard.className = 'story-img-card';
  imgCard.setAttribute('aria-hidden', 'true');
  stack.appendChild(imgCard);

  // Caption text below the stack
  const captionEl = document.createElement('div');
  captionEl.className = 'story-img-caption';
  stack.parentElement.appendChild(captionEl);

  // Nav row: prev arrow · dots · next arrow
  const navRow = document.createElement('div');
  navRow.className = 'story-img-nav';
  stack.appendChild(navRow);

  const prevBtn = document.createElement('button');
  prevBtn.className = 'story-img-arrow story-img-prev';
  prevBtn.setAttribute('aria-label', 'Previous image');
  prevBtn.innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3L5 8l5 5"/></svg>';
  navRow.appendChild(prevBtn);

  const dotsRow = document.createElement('div');
  dotsRow.className = 'story-img-dots';
  navRow.appendChild(dotsRow);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'story-img-arrow story-img-next';
  nextBtn.setAttribute('aria-label', 'Next image');
  nextBtn.innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3l5 5-5 5"/></svg>';
  navRow.appendChild(nextBtn);

  // ── State ────────────────────────────────────────────────────
  let activeChapterIdx = -1;
  let activeChapterSlug = null;
  let activeImgIdx = 0;
  let activeDots = [];

  // ── showImage ────────────────────────────────────────────────
  function showImage(chapter, imgIdx) {
    const imgs = CHAPTER_IMAGES[chapter] || [];
    const item = imgs[imgIdx];
    if (!item) return;

    activeChapterSlug = chapter;
    activeImgIdx = imgIdx;

    captionEl.textContent = item.caption || '';

    // Dots
    const multiImg = imgs.length > 1;
    navRow.style.display = multiImg ? 'flex' : 'none';
    if (multiImg) {
      if (activeDots.length !== imgs.length) {
        dotsRow.innerHTML = '';
        activeDots = imgs.map((_, i) => {
          const dot = document.createElement('span');
          dot.className = 'story-img-dot';
          dotsRow.appendChild(dot);
          return dot;
        });
      }
      activeDots.forEach((d, i) => d.classList.toggle('is-active', i === imgIdx));

      // Arrow states
      prevBtn.disabled = imgIdx === 0;
      nextBtn.disabled = imgIdx === imgs.length - 1;
    } else {
      activeDots = [];
    }

    imgCard.style.backgroundImage = `url('${item.src}')`;
    imgCard.style.transition = 'none';
    imgCard.style.transform  = 'translateX(100%)';
    imgCard.style.opacity    = '0';
    imgCard.getBoundingClientRect();
    imgCard.style.transition = 'transform 1.0s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease';
    imgCard.style.transform  = 'translateX(0)';
    imgCard.style.opacity    = '1';
  }

  // ── Arrow clicks ─────────────────────────────────────────────
  prevBtn.addEventListener('click', () => {
    if (activeChapterSlug && activeImgIdx > 0) {
      showImage(activeChapterSlug, activeImgIdx - 1);
    }
  });
  nextBtn.addEventListener('click', () => {
    const imgs = CHAPTER_IMAGES[activeChapterSlug] || [];
    if (activeChapterSlug && activeImgIdx < imgs.length - 1) {
      showImage(activeChapterSlug, activeImgIdx + 1);
    }
  });

  // ── setChapter ───────────────────────────────────────────────
  function setChapter(slug, idx) {
    if (idx === activeChapterIdx) return;
    activeChapterIdx = idx;

    milestones.forEach((ms, i) => ms.classList.toggle('is-active', i === idx));

    if (chapterCounter) {
      chapterCounter.textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(TOTAL).padStart(2, '0');
    }

    // Tabs: active state + solid progress bar on active, clear on others
    chapterTabs.forEach(t => {
      const isActive = t.dataset.chapter === slug;
      t.classList.toggle('is-active', isActive);
      t.style.setProperty('--tab-progress', isActive ? 1 : 0);
    });

    // Update chapter nav arrows + label
    const chPrevEl  = document.getElementById('storyChPrev');
    const chNextEl  = document.getElementById('storyChNext');
    const chLabelEl = document.getElementById('storyChLabel');
    if (chLabelEl) {
      chLabelEl.textContent = chapterTabs[idx] ? chapterTabs[idx].textContent : '';
    }
    if (chPrevEl) chPrevEl.disabled = idx === 0;
    if (chNextEl) chNextEl.disabled = idx === TOTAL - 1;
  }

  // ── Tab clicks ───────────────────────────────────────────────
  chapterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const slug = tab.dataset.chapter;
      const ch   = schedule.find(s => s.slug === slug);
      if (!ch) return;
      setChapter(slug, ch.idx);
      showImage(slug, 0);
    });
  });

  // ── Chapter prev/next arrows ─────────────────────────────────
  const chPrevBtn = document.getElementById('storyChPrev');
  const chNextBtn = document.getElementById('storyChNext');

  if (chPrevBtn) {
    chPrevBtn.addEventListener('click', () => {
      if (activeChapterIdx > 0) {
        const ch = schedule[activeChapterIdx - 1];
        setChapter(ch.slug, ch.idx);
        showImage(ch.slug, 0);
      }
    });
  }
  if (chNextBtn) {
    chNextBtn.addEventListener('click', () => {
      if (activeChapterIdx < TOTAL - 1) {
        const ch = schedule[activeChapterIdx + 1];
        setChapter(ch.slug, ch.idx);
        showImage(ch.slug, 0);
      }
    });
  }

  // ── Initialise with first chapter ───────────────────────────
  const first = schedule[0];
  setChapter(first.slug, first.idx);
  showImage(first.slug, 0);

}());

// ============================================================
// HERO STATS — count-up on scroll (ported from js/index.js,
// which the About page does not load)
// ============================================================
(function heroCounters() {
  const els = document.querySelectorAll('.hero-stats [data-count]');
  if (!els.length) return;

  const setFinal = (el) => {
    const v = parseFloat(el.dataset.count);
    el.textContent = (v % 1 === 0) ? Math.round(v).toLocaleString() : v.toFixed(1);
  };

  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach(setFinal);
    return;
  }

  function animate(el) {
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

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = '1';
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  els.forEach(el => io.observe(el));
}());
