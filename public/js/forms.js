/**
 * forms.js  — Novorbis shared form handler
 * - Frontend validation with inline errors + light-red highlights
 * - Required field * markers (reads HTML required attribute, no HTML edits needed)
 * - Success message replaces form content in-place (no page reload)
 * - Cloudflare Turnstile token included in payload for n8n server-side verify
 *
 * Switch WEBHOOK_URL to WEBHOOK_PROD before going live.
 */
(function () {
  'use strict';

  // ── Webhook URLs ──────────────────────────────────────────────────
  var WEBHOOK_TEST = 'https://n8n.migratefromwebflow.com/webhook-test/novorbis-forms';
  var WEBHOOK_PROD = 'https://n8n.migratefromwebflow.com/webhook/novorbis-forms';
  var WEBHOOK_URL  = WEBHOOK_PROD;

  // ── Validation helpers ────────────────────────────────────────────
  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v.trim());
  }
  function isValidPhone(v) {
    var trimmed = v.trim();
    if (!/^[\d\s\+\-\(\)]+$/.test(trimmed)) return false;
    var digits = trimmed.replace(/\D/g, '');
    // Strip a leading India country code (91) or trunk prefix (0) if present,
    // then require exactly a 10-digit number.
    if (digits.length === 12 && digits.indexOf('91') === 0) digits = digits.slice(2);
    else if (digits.length === 11 && digits.indexOf('0') === 0) digits = digits.slice(1);
    return digits.length === 10;
  }

  // ── File type allowlist — extension AND reported MIME must both match ──
  var EXT_MIME = {
    '.pdf':  ['application/pdf'],
    '.doc':  ['application/msword'],
    '.docx': ['application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  };

  function fileTypeAllowed(file, acceptAttr) {
    if (!acceptAttr) return true;
    var exts = acceptAttr.split(',').map(function (s) { return s.trim().toLowerCase(); })
      .filter(function (s) { return s.indexOf('.') === 0; });
    if (!exts.length) return true;

    var fname = file.name.toLowerCase();
    if (!exts.some(function (ext) { return fname.slice(-ext.length) === ext; })) return false;

    var allowedMimes = [];
    exts.forEach(function (ext) { if (EXT_MIME[ext]) allowedMimes = allowedMimes.concat(EXT_MIME[ext]); });
    if (file.type && allowedMimes.length && allowedMimes.indexOf(file.type) === -1) return false;

    return true;
  }

  function showError(field, msg) {
    clearError(field);
    field.classList.add('is-error');
    var err = document.createElement('span');
    err.className = 'field-error';
    err.setAttribute('role', 'alert');
    err.textContent = msg;
    field.parentNode.appendChild(err);
    field.addEventListener('focus', function () { clearError(field); }, { once: true });
  }

  function clearError(field) {
    field.classList.remove('is-error');
    var prev = field.parentNode.querySelector('.field-error');
    if (prev) prev.remove();
  }

  // ── Stamp required fields with * ──────────────────────────────────
  function markRequiredFields(form) {
    form.querySelectorAll('input[required], select[required], textarea[required]').forEach(function (field) {
      // Try label[for=id] first, fall back to sibling label inside same wrapper
      var label = field.id ? form.querySelector('label[for="' + field.id + '"]') : null;
      if (!label) {
        var parent = field.parentNode;
        label = parent ? parent.querySelector('label') : null;
      }
      if (label && !label.querySelector('.req-star') && !/\*\s*$/.test(label.textContent.trim())) {
        var star = document.createElement('span');
        star.className = 'req-star';
        star.setAttribute('aria-hidden', 'true');
        star.textContent = ' *';
        label.appendChild(star);
      }
    });
  }

  // ── POST with upload progress — fetch() can't report upload progress,
  // so file-bearing submissions go through XHR to drive a progress bar.
  // Same request, same payload; only the reporting differs. ────────────
  function postWithProgress(url, body, onProgress) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);

      if (xhr.upload && onProgress) {
        xhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100));
        });
      }

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var data = {};
          try { data = JSON.parse(xhr.responseText); } catch (err) { /* empty body is fine */ }
          resolve(data);
        } else {
          reject(new Error('HTTP ' + xhr.status));
        }
      };
      xhr.onerror   = function () { reject(new Error('Network error')); };
      xhr.onabort   = function () { reject(new Error('Aborted')); };
      xhr.ontimeout = function () { reject(new Error('Timeout')); };

      xhr.send(body);
    });
  }

  // ── Progress bar under the submit row ─────────────────────────────
  function getProgressBar(form) {
    var row = form.querySelector('.submit-row') || form.querySelector('.cf-submit') || form;
    var bar = row.querySelector('.form-progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'form-progress';
      bar.innerHTML = '<span class="form-progress-fill"></span>';
      row.appendChild(bar);
    }
    return bar;
  }

  function setProgress(form, pct) {
    var bar  = getProgressBar(form);
    var fill = bar.querySelector('.form-progress-fill');
    bar.classList.add('is-active');
    if (fill) fill.style.width = pct + '%';
  }

  function clearProgress(form) {
    var bar = form.querySelector('.form-progress');
    if (bar) bar.remove();
  }

  // ── Submission ID — client-generated, carried through the payload so
  // it's easy to look up in Sheets/Data Table and easy to quote back to
  // whoever submitted the form ─────────────────────────────────────────
  function generateSubmissionId() {
    var d      = new Date();
    var date   = d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
    var rand   = Math.random().toString(36).slice(2, 6).toUpperCase();
    return 'NV-' + date + '-' + rand;
  }

  // ── In-place success message ──────────────────────────────────────
  function showSuccessMessage(form, submissionId) {
    // Remove all form children except the .bk corner decorators (keep card frame)
    Array.from(form.children).forEach(function (el) {
      var cls = el.className || '';
      if (cls.indexOf('bk') === -1) el.remove();
    });

    var msg = document.createElement('div');
    msg.className = 'form-success-msg';
    msg.innerHTML =
      '<div class="form-success-icon">' +
        '<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<circle cx="26" cy="26" r="24" stroke="currentColor" stroke-width="2"/>' +
          '<path d="M14 26.5l8 8 16-17" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>' +
      '</div>' +
      '<h3>Enquiry Received!</h3>' +
      '<p>We’ve got your details and will get back to you within a few hours. For urgent queries, call us directly.</p>' +
      (submissionId ? '<p class="form-success-ref">Reference: <strong>' + submissionId + '</strong></p>' : '');
    form.appendChild(msg);
  }

  // ── Serialize all named fields into a plain object ────────────────
  function serialize(form) {
    var data  = {};
    var skip  = new Set(['kva[]', 'genset_count[]', 'cf-turnstile-response']);
    var kvaEl = form.querySelectorAll('input[name="kva[]"]');
    var cntEl = form.querySelectorAll('input[name="genset_count[]"]');

    var els = form.elements;
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (!el.name || skip.has(el.name) || el.tagName === 'BUTTON' || el.type === 'file') continue;
      data[el.name] = el.value;
    }

    if (kvaEl.length) {
      var parts = [];
      for (var j = 0; j < kvaEl.length; j++) {
        var kva = kvaEl[j].value.trim();
        var cnt = cntEl[j] ? cntEl[j].value.trim() : '';
        if (kva || cnt) parts.push((kva ? kva + ' KVA' : '?') + (cnt ? ' × ' + cnt : ''));
      }
      if (parts.length) data.gensets = parts.join(', ');
    }

    return data;
  }

  // ── Attach submit + blur handlers to a form ───────────────────────
  function attachForm(form) {
    markRequiredFields(form);

    // Real-time email feedback on blur
    var emailEl = form.querySelector('[name="email"]');
    if (emailEl) {
      emailEl.addEventListener('blur', function () {
        if (!emailEl.value.trim()) return; // empty — let submit handle it
        if (!isValidEmail(emailEl.value)) {
          showError(emailEl, 'Please enter a valid email address.');
        } else {
          clearError(emailEl);
        }
      });
    }

    // Real-time size + type feedback on file selection
    form.querySelectorAll('input[type="file"]').forEach(function (fileEl) {
      fileEl.addEventListener('change', function () {
        if (!fileEl.files || !fileEl.files.length) return;
        var file    = fileEl.files[0];
        var maxSize = parseInt(fileEl.getAttribute('data-max-size'), 10);
        if (maxSize && file.size > maxSize) {
          showError(fileEl, 'That file is larger than ' + Math.round(maxSize / 1024 / 1024) + ' MB — please attach a smaller file.');
          fileEl.value = '';
        } else if (!fileTypeAllowed(file, fileEl.getAttribute('accept'))) {
          showError(fileEl, 'That file type isn\'t supported — please attach a ' + fileEl.getAttribute('accept') + ' file.');
          fileEl.value = '';
        } else {
          clearError(fileEl);
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var source    = form.getAttribute('data-form-source') || 'unknown';
      var btn       = form.querySelector('[type="submit"]');
      var origLabel = btn ? btn.innerHTML : '';

      // ── Validate all required fields ──────────────────────────
      var valid = true;

      form.querySelectorAll('[required]').forEach(function (field) {
        var val = field.value.trim();
        var n   = field.name;

        if (n === 'email') {
          if (!val) {
            showError(field, 'Please enter your email address.');
            valid = false;
          } else if (!isValidEmail(val)) {
            showError(field, 'Please enter a valid email address.');
            valid = false;
          }
        } else if (n === 'phone') {
          if (!val) {
            showError(field, 'Please enter your phone number.');
            valid = false;
          } else if (!isValidPhone(val)) {
            showError(field, 'Please enter a valid 10-digit phone number.');
            valid = false;
          }
        } else if (field.type === 'file') {
          var labelEl = field.id ? form.querySelector('label[for="' + field.id + '"]') : null;
          if (!labelEl) labelEl = field.closest('.field, .cf-field, .dg-field') && field.closest('.field, .cf-field, .dg-field').querySelector('label');
          var fieldName = labelEl ? labelEl.textContent.replace('*', '').trim() : (field.placeholder || n);
          if (!field.files || !field.files.length) {
            showError(field, 'Please attach your ' + fieldName.toLowerCase() + '.');
            valid = false;
          } else {
            var maxSize = parseInt(field.getAttribute('data-max-size'), 10);
            if (maxSize && field.files[0].size > maxSize) {
              showError(field, 'That file is larger than ' + Math.round(maxSize / 1024 / 1024) + ' MB — please attach a smaller file.');
              valid = false;
            } else if (!fileTypeAllowed(field.files[0], field.getAttribute('accept'))) {
              showError(field, 'That file type isn\'t supported — please attach a ' + field.getAttribute('accept') + ' file.');
              valid = false;
            }
          }
        } else {
          if (!val) {
            // Derive a friendly label from the associated <label>, placeholder, or name
            var labelEl = field.id ? form.querySelector('label[for="' + field.id + '"]') : null;
            if (!labelEl) labelEl = field.closest('.field, .cf-field, .dg-field') && field.closest('.field, .cf-field, .dg-field').querySelector('label');
            var fieldName = labelEl ? labelEl.textContent.replace('*', '').trim()
                          : field.placeholder || n;
            showError(field, 'Please enter your ' + fieldName.toLowerCase() + '.');
            valid = false;
          }
        }
      });

      if (!valid) {
        // Scroll first error into view
        var firstErr = form.querySelector('.is-error');
        if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // ── Disable controls + lock button ────────────────────────
      var allControls = Array.from(form.querySelectorAll('input, select, textarea, button'));
      allControls.forEach(function (ctrl) { ctrl.disabled = true; });
      var prevErr = form.querySelector('.form-submit-error');
      if (prevErr) prevErr.remove();

      // ── Wait for Turnstile token (managed mode may be invisible) ──
      var tokenEl    = form.querySelector('[name="cf-turnstile-response"]');
      var maxWait    = 5000; // ms
      var pollEvery  = 100;
      var waited     = 0;

      function doSubmit(token) {
        if (btn) btn.innerHTML = 'Submitting…';
        var submissionId            = source === 'careers-general' ? generateSubmissionId() : null;
        var payload                 = serialize(form);
        if (submissionId) payload.submission_id = submissionId;
        payload.form_source         = source;
        payload.submitted_at        = new Date().toISOString();
        payload.page_url            = location.href;
        payload.cf_turnstile_token  = token;

        // Forms with a file field post multipart so the attachment rides
        // along with it — everything else keeps the plain JSON payload.
        var fileFields = Array.from(form.querySelectorAll('input[type="file"]'))
          .filter(function (f) { return f.files && f.files.length; });

        var request;
        if (fileFields.length) {
          // Multipart so the attachment rides along, via XHR for progress.
          var body = new FormData();
          Object.keys(payload).forEach(function (key) { body.append(key, payload[key]); });
          fileFields.forEach(function (f) { body.append(f.name, f.files[0], f.files[0].name); });

          setProgress(form, 0);
          request = postWithProgress(WEBHOOK_URL, body, function (pct) {
            setProgress(form, pct);
            // At 100% the bytes are sent but the server is still working —
            // say so rather than sitting on a stalled "100%".
            if (btn) btn.innerHTML = pct < 100 ? 'Uploading… ' + pct + '%' : 'Almost done…';
          });
        } else {
          request = fetch(WEBHOOK_URL, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify(payload)
          }).then(function (res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json().catch(function () { return {}; });
          });
        }

        request
        .then(function () {
          clearProgress(form);
          showSuccessMessage(form, submissionId);
        })
        .catch(function () {
          clearProgress(form);
          allControls.forEach(function (ctrl) { ctrl.disabled = false; });
          if (btn) btn.innerHTML = origLabel;
          resetTurnstile(form);
          var prevSubErr = form.querySelector('.form-submit-error');
          if (!prevSubErr) {
            var errMsg = document.createElement('p');
            errMsg.className = 'form-submit-error';
            errMsg.textContent = 'Submission failed — please try again or call us directly.';
            var row = form.querySelector('.submit-row') || form.querySelector('.cf-submit');
            if (row) row.appendChild(errMsg);
            else form.appendChild(errMsg);
          }
        });
      }

      function pollToken() {
        var token = tokenEl ? tokenEl.value : '';
        if (token) {
          doSubmit(token);
          return;
        }
        waited += pollEvery;
        if (waited >= maxWait) {
          // Timed out — re-enable and tell user
          allControls.forEach(function (ctrl) { ctrl.disabled = false; });
          if (btn) btn.innerHTML = origLabel;
          showTurnstileError(form, 'Security check timed out — please refresh and try again.');
          return;
        }
        if (btn) btn.innerHTML = 'Verifying…';
        setTimeout(pollToken, pollEvery);
      }

      pollToken();
    });
  }

  // ── Turnstile helpers ─────────────────────────────────────────────
  function resetTurnstile(form) {
    if (!window.turnstile) return;
    var widget = form.querySelector('.cf-turnstile');
    if (widget) turnstile.reset(widget);
  }

  function showTurnstileError(form, msg) {
    var prev = form.querySelector('.turnstile-error');
    if (prev) prev.remove();
    var widget = form.querySelector('.cf-turnstile');
    if (!widget) return;
    var err = document.createElement('span');
    err.className = 'turnstile-error field-error';
    err.setAttribute('role', 'alert');
    err.textContent = msg;
    widget.parentNode.insertBefore(err, widget.nextSibling);
  }

  // ── Init ──────────────────────────────────────────────────────────
  function init() {
    document.querySelectorAll('form[data-form-source]').forEach(attachForm);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
