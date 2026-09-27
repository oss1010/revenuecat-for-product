/* Section 5: experiment simulator v4.
   Copy and the illustrative model live in index.html (labels, data
   attributes). This file computes the model's outputs (cumulative
   revenue, crossover, LTV), draws the chart and moves state: the judge
   toggle, the forecast reveal, the winner flip, the phone's traffic
   split, the two-step "Roll out winner" button, the rollout pulse, the
   inline toast, "Reset demo" and a one-time cursor demo that runs the
   whole sequence. Under reduced motion nothing animates and the LTV
   view is shown statically, ready for the reader to roll out. */
(function () {
  var root = document.querySelector('[data-sim]');
  if (!root) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function reduced() { return reduceMotion.matches; }

  var q = function (s) { return root.querySelector(s); };
  var qa = function (s) { return root.querySelectorAll(s); };

  var radios = qa('input[name="sim-metric"]');
  var cards = qa('[data-variant]');
  var status = q('[data-status]');
  var stateEl = q('.sim-state');
  var stateText = q('[data-state-text]');
  var rolloutBtn = q('[data-rollout]');
  var resetBtn = q('[data-reset]');
  var toast = q('[data-toast]');
  var toastText = q('[data-toast-text]');
  var cursor = q('[data-cursor]');
  var screen = q('.sim-phone [data-paywall]');
  var split = q('[data-split]');
  var pulse = q('.sim-pulse');
  var chart = q('[data-forecast]');

  /* ---------- Model ---------- */
  function variantModel(key) {
    var el = chart.querySelector('[data-model="' + key + '"]');
    return {
      enrolled: +el.getAttribute('data-enrolled'),
      paying: +el.getAttribute('data-paying'),
      price: +el.getAttribute('data-price'),
      retention: el.getAttribute('data-retention').split(',').map(Number)
    };
  }
  var M = { a: variantModel('a'), b: variantModel('b') };
  var unit = chart.getAttribute('data-ltv-unit'); /* "customer" or "paying" */

  function cumulative(m) {
    var out = [0];
    var sum = 0;
    m.retention.forEach(function (pct) {
      sum += m.paying * m.price * (pct / 100);
      out.push(sum);
    });
    return out; /* index = month, 0..12 */
  }
  var C = { a: cumulative(M.a), b: cumulative(M.b) };
  function ltv(k) {
    var total = C[k][12];
    return total / (unit === 'paying' ? M[k].paying : M[k].enrolled);
  }

  function money(v, decimals) {
    return '$' + v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }
  function kilo(v) {
    var k = v / 1000;
    return '$' + (k >= 100 ? Math.round(k) : Math.round(k * 10) / 10) + 'K';
  }

  /* Fill model-derived numbers into the markup */
  function fill(sel, fn) { qa(sel).forEach(function (el) { el.textContent = fn(el.getAttribute('data-k')); }); }
  fill('[data-out="conversion"]', function (k) { return (M[k].paying / M[k].enrolled * 100).toFixed(1) + '%'; });
  fill('[data-out="ltv"]', function (k) { return money(ltv(k), 2); });
  fill('[data-out="end"]', function (k) { return kilo(C[k][12]); });

  /* ---------- Chart ---------- */
  var svg = chart.querySelector('.fc-svg');
  var maxY = Math.ceil(Math.max(C.a[12], C.b[12]) / 50000) * 50000;
  function X(month) { return month / 12 * 100; }
  function Y(v) { return 100 - v / maxY * 100; }
  function at(series, month) { /* value at a fractional month */
    var i = Math.floor(month);
    return i >= 12 ? series[12] : series[i] + (series[i + 1] - series[i]) * (month - i);
  }
  function path(series, from, to) {
    var d = '';
    for (var m = from; m <= to; m++) d += (m === from ? 'M' : 'L') + X(m).toFixed(3) + ' ' + Y(series[m]).toFixed(3) + ' ';
    return d.trim();
  }
  svg.querySelector('.fc-a.fc-obs').setAttribute('d', path(C.a, 0, 1));
  svg.querySelector('.fc-b.fc-obs').setAttribute('d', path(C.b, 0, 1));
  svg.querySelector('.fc-a.fc-dash').setAttribute('d', path(C.a, 1, 12));
  svg.querySelector('.fc-b.fc-dash').setAttribute('d', path(C.b, 1, 12));
  svg.querySelector('.fc-divider').setAttribute('x1', X(1));
  svg.querySelector('.fc-divider').setAttribute('x2', X(1));
  var revealRect = svg.querySelector('.fc-reveal');
  revealRect.setAttribute('x', X(1));

  /* Grid lines and y labels at 0, half and max */
  qa('[data-grid]').forEach(function (el) {
    var frac = +el.getAttribute('data-grid');
    el.style.top = Y(maxY * frac) + '%';
    var label = el.querySelector('span');
    if (label) label.textContent = kilo(maxY * frac).replace('$0K', '$0');
  });
  qa('[data-xtick]').forEach(function (el) { el.style.left = X(+el.getAttribute('data-xtick')) + '%'; });

  function place(el, month, value) {
    if (!el) return;
    el.style.left = X(month) + '%';
    el.style.top = Y(value) + '%';
  }
  /* Crossover: first month where B passes A, interpolated */
  var cross = null;
  for (var m = 1; m < 12; m++) {
    var d0 = C.a[m] - C.b[m];
    var d1 = C.a[m + 1] - C.b[m + 1];
    if (d0 > 0 && d1 <= 0) {
      var t = d0 / (d0 - d1);
      cross = { month: m + t, value: C.a[m] + (C.a[m + 1] - C.a[m]) * t, label: m + 1 };
      break;
    }
  }
  var crossEl = chart.querySelector('.fc-cross');
  if (cross) {
    place(crossEl, cross.month, cross.value);
    var cl = crossEl.querySelector('[data-cross-month]');
    if (cl) cl.textContent = String(cross.label);
  }
  place(chart.querySelector('.fc-end-a'), 12, C.a[12]);
  place(chart.querySelector('.fc-end-b'), 12, C.b[12]);
  place(chart.querySelector('.fc-obs-a'), 1, C.a[1]);
  place(chart.querySelector('.fc-obs-b'), 1, C.b[1]);
  /* The why, written on the lines. B's label ends at month 7.5, above B,
     which only falls to the left of it. A's starts at month 5, below A,
     which only rises to the right of it. */
  place(chart.querySelector('.fc-why-b'), 7.5, at(C.b, 7.5));
  place(chart.querySelector('.fc-why-a'), 5, at(C.a, 5));
  chart.querySelector('.fc-region-obs').style.left = X(0.5) + '%';
  chart.querySelector('.fc-region-pred').style.left = X(6.5) + '%';

  var revealFrame = null;
  function reveal(show) {
    var full = 100 - X(1);
    if (revealFrame) window.cancelAnimationFrame(revealFrame);
    chart.classList.toggle('is-forecast', show);
    if (!show || reduced()) { revealRect.setAttribute('width', show ? full : 0); return; }
    var start = null;
    var from = +revealRect.getAttribute('width') || 0;
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / 900);
      var e = 1 - Math.pow(1 - p, 3);
      revealRect.setAttribute('width', from + (full - from) * e);
      if (p < 1) revealFrame = window.requestAnimationFrame(frame);
    }
    revealFrame = window.requestAnimationFrame(frame);
  }

  /* ---------- Judge toggle ---------- */
  function checkedRadio() { return q('input[name="sim-metric"]:checked'); }
  function winner() { return checkedRadio().getAttribute('data-winner'); }

  function keepCompounds(text) {
    var escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return escaped.replace(/(\d+-[a-z]+)/g, '<span class="nowrap">$1</span>');
  }
  function pop(card) {
    if (reduced()) return;
    card.classList.remove('is-popping');
    void card.offsetWidth;
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
    reveal(judge === 'ltv');
    var line = keepCompounds(status.getAttribute('data-' + judge));
    if (status.innerHTML !== line) status.innerHTML = line;
    if (armed) arm(); /* the confirm label follows the current winner */
  }
  function select(value) {
    q('input[name="sim-metric"][value="' + value + '"]').checked = true;
    render();
  }
  radios.forEach(function (radio) {
    radio.addEventListener('change', function () { if (radio.checked) render(); });
  });

  /* ---------- Phone: traffic split while the test runs ---------- */
  var live = null; /* null while running, else "A" or "B" */
  var splitTimer = null;
  var splitSide = 'a';
  var phoneVisible = false;

  function showSplit(side) {
    splitSide = side;
    if (window.Tidelark) window.Tidelark.set(screen, side);
    split.textContent = split.getAttribute('data-' + side);
  }
  function updateSplit() {
    window.clearInterval(splitTimer);
    splitTimer = null;
    if (live || reduced() || !phoneVisible || document.hidden) return;
    splitTimer = window.setInterval(function () { showSplit(splitSide === 'a' ? 'b' : 'a'); }, 2000);
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      phoneVisible = entries.some(function (e) { return e.isIntersecting; });
      updateSplit();
    }, { threshold: 0.2 }).observe(q('.sim-phone'));
  } else {
    phoneVisible = true;
  }
  document.addEventListener('visibilitychange', updateSplit);

  /* ---------- Toast ---------- */
  var toastTimer = null;
  function hideToast() {
    toast.classList.remove('is-visible');
    toastText.textContent = '';
  }
  function showToast() {
    window.clearTimeout(toastTimer);
    hideToast();
    void toast.offsetWidth;
    toastText.textContent = toast.getAttribute('data-text');
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(hideToast, 6000);
  }

  /* ---------- Rollout: "Roll out winner", then "Confirm: roll out B to 100%" ---------- */
  var armed = false;
  function arm() {
    armed = true;
    rolloutBtn.classList.add('is-armed');
    rolloutBtn.textContent = rolloutBtn.getAttribute('data-confirm-label').replace('{v}', winner());
  }
  function disarm() {
    if (!armed) return;
    armed = false;
    rolloutBtn.classList.remove('is-armed');
    if (!rolloutBtn.disabled) rolloutBtn.textContent = rolloutBtn.getAttribute('data-label');
  }

  function lockPhone(variant) {
    if (window.Tidelark) window.Tidelark.set(screen, variant.toLowerCase());
    split.textContent = split.getAttribute('data-live').replace('{v}', variant);
    split.classList.add('is-live');
  }

  function travelPulse(done) {
    if (reduced() || !pulse || typeof pulse.animate !== 'function') { done(); return; }
    var box = root.getBoundingClientRect();
    var a = rolloutBtn.getBoundingClientRect();
    var b = q('.sim-phone .phone').getBoundingClientRect();
    var x0 = a.left - box.left + a.width / 2;
    var y0 = a.top - box.top + a.height / 2;
    var x1 = b.left - box.left + b.width / 2;
    var y1 = b.top - box.top + Math.min(b.height / 2, 160);
    pulse.hidden = false;
    var anim = pulse.animate([
      { transform: 'translate(' + x0 + 'px, ' + y0 + 'px) scale(0.6)', opacity: 0 },
      { transform: 'translate(' + x0 + 'px, ' + y0 + 'px) scale(1)', opacity: 1, offset: 0.12 },
      { transform: 'translate(' + x1 + 'px, ' + y1 + 'px) scale(1)', opacity: 1, offset: 0.85 },
      { transform: 'translate(' + x1 + 'px, ' + y1 + 'px) scale(2.6)', opacity: 0 }
    ], { duration: 820, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });
    /* Lock the phone when the pulse lands. A timer backs up the finish
       event, which background tabs can throttle. */
    var landed = false;
    function land() {
      if (landed) return;
      landed = true;
      anim.cancel();
      pulse.hidden = true;
      done();
    }
    anim.onfinish = land;
    window.setTimeout(land, 900);
  }

  function rollOut(variant, moveFocus) {
    live = variant; /* the phone stops alternating now */
    window.clearInterval(splitTimer);
    splitTimer = null;
    armed = false;
    rolloutBtn.classList.remove('is-armed');
    rolloutBtn.disabled = true;
    rolloutBtn.textContent = rolloutBtn.getAttribute('data-done-label');
    resetBtn.hidden = false;
    stateText.textContent = stateText.getAttribute('data-done');
    stateEl.classList.remove('is-running');
    showToast();
    travelPulse(function () { lockPhone(variant); });
    if (moveFocus) resetBtn.focus(); /* the rollout button is now disabled */
  }

  rolloutBtn.addEventListener('click', function () {
    if (rolloutBtn.disabled) return;
    if (armed) rollOut(winner(), true);
    else arm();
  });
  rolloutBtn.addEventListener('keydown', function (e) { if (e.key === 'Escape') disarm(); });
  rolloutBtn.addEventListener('blur', disarm);

  var initialJudge = 'conversion';
  function reset() {
    window.clearTimeout(toastTimer);
    hideToast();
    live = null;
    split.classList.remove('is-live');
    showSplit('a');
    updateSplit();
    armed = false;
    rolloutBtn.classList.remove('is-armed');
    select(initialJudge);
    stateText.textContent = stateText.getAttribute('data-running');
    stateEl.classList.add('is-running');
    rolloutBtn.disabled = false;
    rolloutBtn.textContent = rolloutBtn.getAttribute('data-label');
    resetBtn.hidden = true;
    rolloutBtn.focus();
  }
  resetBtn.addEventListener('click', reset);

  /* ---------- One-time cursor demo: the whole sequence ----------
     Flip to predicted 12-month LTV, click "Roll out winner", confirm,
     and the phone goes live. It never moves focus. Any click, key press
     or focus inside the simulator stops it; "Reset demo" hands over. */
  function demo() {
    if (reduced()) {
      select('ltv');
      initialJudge = 'ltv';
      return;
    }
    if (!cursor || !('IntersectionObserver' in window)) return;
    var toggleLabel = q('label[for="sim-ltv"]');
    var cancelled = false;
    var finished = false;
    var timers = [];
    function later(fn, ms) { timers.push(window.setTimeout(fn, ms)); }
    function stop() {
      cancelled = true;
      timers.forEach(window.clearTimeout);
      cursor.classList.remove('is-on', 'is-clicking');
      qa('.is-pressed').forEach(function (el) { el.classList.remove('is-pressed'); });
    }
    ['pointerdown', 'keydown', 'focusin'].forEach(function (type) {
      root.addEventListener(type, function (e) { if (!finished && e.isTrusted) stop(); });
    });
    function pointAt(el, dx, dy) {
      var box = root.getBoundingClientRect();
      var r = el.getBoundingClientRect();
      cursor.style.transform = 'translate(' + (r.left - box.left + r.width * 0.5 + dx) + 'px, ' + (r.top - box.top + r.height * 0.5 + dy) + 'px)';
    }
    function press(el, atMs, fn) {
      later(function () { cursor.classList.add('is-clicking'); el.classList.add('is-pressed'); }, atMs - 150);
      later(function () {
        cursor.classList.remove('is-clicking');
        el.classList.remove('is-pressed');
        fn();
      }, atMs);
    }
    function run() {
      if (cancelled || live) { finished = true; return; }
      cursor.style.transition = 'none';
      pointAt(toggleLabel, 40, 140);
      void cursor.offsetWidth;
      cursor.style.transition = '';
      cursor.classList.add('is-on');
      later(function () { pointAt(toggleLabel, 0, 0); }, 50);
      press(toggleLabel, 1100, function () { select('ltv'); });
      later(function () { pointAt(rolloutBtn, 0, 0); }, 2300);
      press(rolloutBtn, 3300, arm);
      press(rolloutBtn, 4500, function () { rollOut(winner(), false); });
      later(function () { cursor.classList.remove('is-on'); finished = true; }, 5600);
    }
    var observer = new IntersectionObserver(function (entries) {
      if (!entries.some(function (e) { return e.isIntersecting; })) return;
      observer.disconnect();
      later(run, 500);
    }, { threshold: 1, rootMargin: '0px 0px -20% 0px' });
    observer.observe(q('.sim-toggle'));
  }

  showSplit('a');
  render();
  demo();
})();
