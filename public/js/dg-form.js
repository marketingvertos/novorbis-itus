(function () {
  'use strict';
  var MAX_ROWS = 4;

  function init() {
    var form = document.getElementById('dgForm');
    if (!form) return;

    var rows    = document.getElementById('gensetRows');
    var addBtn  = form.querySelector('.genset-add-row');

    function updateUI() {
      var count = rows.querySelectorAll('.genset-row').length;
      // Hide × on the only remaining row; show on all others
      rows.querySelectorAll('.genset-row').forEach(function (row) {
        row.querySelector('.genset-remove').style.display = count === 1 ? 'none' : '';
      });
      // Hide the Add button when at max
      if (addBtn) addBtn.style.display = count >= MAX_ROWS ? 'none' : '';
    }

    function bindRow(row) {
      row.querySelector('.genset-remove').addEventListener('click', function () {
        row.remove();
        updateUI();
      });
    }

    if (addBtn) {
      addBtn.addEventListener('click', function () {
        var all = rows.querySelectorAll('.genset-row');
        if (all.length >= MAX_ROWS) return;
        var clone = all[0].cloneNode(true);
        clone.querySelectorAll('input').forEach(function (inp) { inp.value = ''; });
        bindRow(clone);
        rows.appendChild(clone);
        updateUI();
      });
    }

    rows.querySelectorAll('.genset-row').forEach(bindRow);
    updateUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
