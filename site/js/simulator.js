/* Section 5: experiment simulator v2.
   All copy lives in index.html (data attributes and labels). This file
   only moves state: the judge toggle, the winner flip, the confirm
   dialog, the rollout to the phone, the toast and a one-time cursor
   demo. Under prefers-reduced-motion nothing animates and the LTV view
   is shown statically. */
(function () {
  var root = document.querySelector('[data-sim]');
  if (!root) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var radios = root.querySelectorAll('input[name="sim-metric"]');
  var cards = root.querySelectorAll('[data-variant]');
  var status = root.querySelector('[data-status]');
  var stateText = root.querySelector('[data-state-text]');
  var rolloutBtn = root.querySelector('[data-rollout]');
  var dialog = root.querySelector('[data-dialog]');
  var dialogVariant = root.querySelector('[data-dialog-variant]');
  var toast = root.querySelector('[data-toast]');
  var toastText = root.querySelector('[data-toast-text]');
  var planRows = root.querySelectorAll('[data-plan]');
  var cursor = root.querySelector('[data-cursor]');

  /* Which plan each variant features on the paywall */
  var FEATURED = { A: 'monthly', B: 'annual' };
  var TOAST_MS = 5000;
  var toastTimer = null;
  var clearTimer = null;

  function reduced() { return reduceMotion.matches; }

  function checkedRadio() {
    return root.querySelector('input[name="sim-metric"]:checked');
  }

  function winner() {
    return checkedRadio().getAttribute('data-winner');
  }

  /* Keeps compounds like "12-month" on one line, as in the markup. */
  function keepCompounds(text) {
    var escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return escaped.replace(/(\d+-[a-z]+)/g, '<span class="nowrap">$1</span>');
  }

  function pop(card) {
    if (reduced()) return;
    card.classList.remove('is-popping');
    void card.offsetWidth; /* restart the animation */
    card.classList.add('is-popping');
  }

  function render() {
    var judge = checkedRadio().value;
    var lead = winner();
    root.setAttribute('data-judge', judge);
    cards.forEach(function (card) {
      var isWinner = card.getAttribute('data-variant') === lead;
      var wasWinner = card.classList.contains('is-winner');
      card.classList.toggle('is-winner', isWinner);
      if (isWinner && !wasWinner) pop(card);
    });
    var line = keepCompounds(status.getAttribute('data-' + judge));
    if (status.innerHTML !== line) status.innerHTML = line; /* no re-announce */
  }

  function select(value) {
    root.querySelector('input[name="sim-metric"][value="' + value + '"]').checked = true;
    render();
  }

  /* Phone: reorder the plans so the variant's featured plan leads.
     FLIP animation, skipped under reduced motion. */
  function setPhone(variant) {
    var featured = FEATURED[variant];
    var before = new Map();
    planRows.forEach(function (row) { before.set(row, row.getBoundingClientRect().top); });
    planRows.forEach(function (row) {
      var on = row.getAttribute('data-plan') === featured;
      row.classList.toggle('is-featured', on);
      row.style.order = on ? '0' : '1';
    });
    if (reduced() || typeof Element.prototype.animate !== 'function') return;
    planRows.forEach(function (row) {
      var dy = before.get(row) - row.getBoundingClientRect().top;
      if (!dy) return;
      row.animate(
        [{ transform: 'translateY(' + dy + 'px)' }, { transform: 'translateY(0)' }],
        { duration: 420, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' }
      );
    });
  }

  function hideToast() {
    toast.classList.remove('is-visible');
    window.clearTimeout(clearTimer);
    clearTimer = window.setTimeout(function () {
      toastText.textContent = '';
    }, reduced() ? 0 : 300);
  }

  function showToast() {
    window.clearTimeout(toastTimer);
    window.clearTimeout(clearTimer);
    toast.classList.remove('is-visible');
    toastText.textContent = '';
    void toast.offsetWidth; /* replay the entrance and the cat hop */
    toastText.textContent = toast.getAttribute('data-text');
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(hideToast, TOAST_MS);
  }

  function rollOut(variant) {
    setPhone(variant);
    stateText.textContent = stateText.getAttribute('data-done');
    showToast();
  }

  radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      if (radio.checked) render();
    });
  });

  rolloutBtn.addEventListener('click', function () {
    var lead = winner();
    dialogVariant.textContent = lead;
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.returnValue = '';
      dialog.showModal();
    } else if (window.confirm(root.querySelector('[data-dialog-title]').textContent)) {
      rollOut(lead);
    }
  });

  if (dialog) {
    dialog.addEventListener('close', function () {
      if (dialog.returnValue === 'confirm') rollOut(winner());
      rolloutBtn.focus();
    });
  }

  /* One-time demo: on first scroll into view, the "You" cursor clicks
     "Predicted 12-month LTV", the winner flips, a 2-second pause, then
     the cursor leaves and control returns to the reader. Never repeats.
     Any click, key press or focus inside the simulator cancels it. */
  function demo() {
    if (reduced()) {
      select('ltv');
      return;
    }
    if (!cursor || !('IntersectionObserver' in window)) return;

    var target = root.querySelector('label[for="sim-ltv"]');
    var toggle = root.querySelector('.sim-toggle');
    var cancelled = false;
    var finished = false;
    var timers = [];

    function later(fn, ms) { timers.push(window.setTimeout(fn, ms)); }

    function stop() {
      cancelled = true;
      timers.forEach(window.clearTimeout);
      cursor.classList.remove('is-on', 'is-clicking');
    }

    function onUser(event) {
      if (!finished && event.isTrusted) stop();
    }
    ['pointerdown', 'keydown', 'focusin'].forEach(function (type) {
      root.addEventListener(type, onUser);
    });

    function pointAt(el, dx, dy) {
      var box = root.getBoundingClientRect();
      var r = el.getBoundingClientRect();
      var x = r.left - box.left + r.width * 0.5 + dx;
      var y = r.top - box.top + r.height * 0.5 + dy;
      cursor.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    }

    function run() {
      if (cancelled || checkedRadio().value === 'ltv') { finished = true; return; }
      cursor.style.transition = 'none';
      pointAt(target, 40, 140);
      void cursor.offsetWidth;
      cursor.style.transition = '';
      cursor.classList.add('is-on');
      later(function () { pointAt(target, 0, 0); }, 50);
      later(function () {
        cursor.classList.add('is-clicking');
        target.classList.add('is-pressed');
      }, 1000);
      later(function () {
        cursor.classList.remove('is-clicking');
        target.classList.remove('is-pressed');
        select('ltv');
      }, 1150);
      later(function () {
        cursor.classList.remove('is-on');
        finished = true;
      }, 3150);
    }

    var observer = new IntersectionObserver(function (entries) {
      if (!entries.some(function (e) { return e.isIntersecting; })) return;
      observer.disconnect();
      later(run, 500);
    }, { threshold: 1, rootMargin: '0px 0px -20% 0px' });
    observer.observe(toggle);
  }

  /* Browsers can restore a checked radio on reload. Sync to it. */
  render();
  demo();
})();
