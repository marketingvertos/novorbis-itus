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
