(function(){
      "use strict";
      // Reference: Copernicus / ESA Indicators of Global Climate Change 2025.
      // Long-term human-induced warming was 1.37C in 2025, rising ~0.27C/decade.
      // At that rate the 1.5C long-term threshold is projected around 2030.
      var EPOCH = new Date("2025-07-01T00:00:00Z").getTime();
      var EPOCH_VALUE = 1.37;
      var RATE_PER_YEAR = 0.027;
      var THRESHOLD = 1.5;
      var DAY_MS = 24 * 3600 * 1000;
      var YEAR_MS = 365.25 * DAY_MS;
      var yEl = document.getElementById("ccY");
      var dEl = document.getElementById("ccD");
      var hEl = document.getElementById("ccH");
      var mEl = document.getElementById("ccM");
      var sEl = document.getElementById("ccS");
      if (!yEl || !dEl || !hEl || !mEl || !sEl) { return; }
      function currentEstimate(now){
        var years = (now - EPOCH) / YEAR_MS;
        return EPOCH_VALUE + years * RATE_PER_YEAR;
      }
      var v0 = currentEstimate(Date.now());
      var yearsLeft0 = Math.max(0, (THRESHOLD - v0) / RATE_PER_YEAR);
      var TARGET = Date.now() + yearsLeft0 * YEAR_MS;
      function pad(n){ return (n < 10 ? "0" : "") + n; }
      function render(){
        var diff = TARGET - Date.now();
        if (diff < 0) diff = 0;
        var totalSeconds = Math.floor(diff / 1000);
        var totalDays = Math.floor(totalSeconds / 86400);
        var years = Math.floor(totalDays / 365.25);
        var days = Math.floor(totalDays - years * 365.25);
        var hours = Math.floor((totalSeconds % 86400) / 3600);
        var minutes = Math.floor((totalSeconds % 3600) / 60);
        var seconds = totalSeconds % 60;
        yEl.textContent = years;
        dEl.textContent = pad(days);
        hEl.textContent = pad(hours);
        mEl.textContent = pad(minutes);
        sEl.textContent = pad(seconds);
      }
      render();
      setInterval(render, 1000);

      // Keep the clock bar visually locked to the navbar: the site's nav
      // script toggles .nav-hidden on #nav (scroll direction), so mirror
      // that one class onto the bar and let CSS do the fade/slide. Watching
      // the class costs nothing between toggles, and the bar translates by
      // its OWN height rather than the nav's, so it clears fully.
      var navEl = document.getElementById("nav") || document.querySelector(".site-nav");
      var barEl = document.getElementById("climate-clock");
      if (navEl && barEl) {
        var syncHidden = function () {
          barEl.classList.toggle("cc-hidden", navEl.classList.contains("nav-hidden"));
        };
        syncHidden();
        new MutationObserver(syncHidden)
          .observe(navEl, { attributes: true, attributeFilter: ["class"] });
      }
    })();
