/* article.js — TOC scroll-spy for article pages */
(function () {
  'use strict';

  var tocLinks = document.querySelectorAll('#tocList a[href^="#"]');
  if (!tocLinks.length) return;

  var headings = Array.from(tocLinks).map(function (a) {
    var id = a.getAttribute('href').slice(1);
    return { el: document.getElementById(id), link: a };
  }).filter(function (h) { return h.el; });

  var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '58', 10);

  function onScroll() {
    var scrollY = window.scrollY + navH + 80;
    var active = null;
    for (var i = headings.length - 1; i >= 0; i--) {
      if (headings[i].el.getBoundingClientRect().top + window.scrollY <= scrollY) {
        active = headings[i].link;
        break;
      }
    }
    tocLinks.forEach(function (a) { a.classList.remove('is-active'); });
    if (active) active.classList.add('is-active');
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
