/* Hero loop: Design, Test, Roll out. About 8 seconds, each beat about
   2.5 seconds, starting on load and looping with no idle gap.
   1. Design: the cursor changes "Featured plan" to Monthly; the phone
      updates.
   2. Test: the cursor starts the test; two labeled lines draw in (A
      red, B green), the phone alternates A and B, then "B leads".
   3. Roll out: the cursor clicks the rollout bar; it fills green from
      "B · 50%" to "B · 100%", then "No app release." and the phone
      locks to B.
   No card is ever empty: each keeps its last finished state until its
   own beat. The mobile caption chip changes at the same moment as the
   phone. Pauses off-screen, on hover and in background tabs. Under
   prefers-reduced-motion the markup's static Roll out state stays. */
(function () {
  var stage = document.querySelector('[data-hero-loop]');
  if (!stage) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var loop = stage.querySelector('.hero-loop');
  var screen = stage.querySelector('.hl-phone [data-paywall]');
  var cards = {};
  stage.querySelectorAll('.hl-card').forEach(function (c) { cards[c.getAttribute('data-card')] = c; });
  var designValue = stage.querySelector('[data-design-value]');
  var chart = stage.querySelector('[data-hl-chart]');
  var bar = stage.querySelector('[data-hl-bar]');
  var barFill = stage.querySelector('.hl-bar-fill');
  var barPct = stage.querySelector('[data-hl-pct]');
  var sparkClip = stage.querySelector('.hl-spark-clip');
  var chip = stage.querySelector('[data-hl-chip]');
  var leads = stage.querySelector('.hl-leads');
  var leadsText = stage.querySelector('.hl-leads-text');
  var cursor = stage.querySelector('.hl-cursor');

  var BEAT = 2600;
  var LOOP_MS = BEAT * 3; /* about 8 seconds */
  var timers = [];
  var running = false;
  var visible = true; /* start immediately; the observer corrects this */
  var hovered = false;
  var sparkFrame = null;
  var barFrame = null;

  function later(fn, ms) { timers.push(window.setTimeout(fn, ms)); }
  function clear() {
    timers.forEach(window.clearTimeout);
    timers = [];
    if (sparkFrame) window.cancelAnimationFrame(sparkFrame);
    if (barFrame) window.cancelAnimationFrame(barFrame);
  }
  function setPaywall(v) { if (window.Tidelark) window.Tidelark.set(screen, v); }

  function activate(name) {
    Object.keys(cards).forEach(function (k) { cards[k].classList.toggle('is-active', k === name); });
    loop.setAttribute('data-step', name);
  }

  function drawSpark(ms) {
    var start = null;
    function frame(t) {
      if (start === null) start = t;
      var p = Math.min(1, (t - start) / ms);
      sparkClip.setAttribute('width', String(120 * p));
      if (p < 1) sparkFrame = window.requestAnimationFrame(frame);
    }
    sparkFrame = window.requestAnimationFrame(frame);
  }
  function setBar(pct) {
    barFill.style.width = pct + '%';
    barPct.textContent = String(Math.round(pct));
  }
  function fillBar(ms, done) {
    var start = null;
    function frame(t) {
      if (start === null) start = t;
      var p = Math.min(1, (t - start) / ms);
      setBar(50 + 50 * (1 - Math.pow(1 - p, 2)));
      if (p < 1) barFrame = window.requestAnimationFrame(frame);
      else done();
    }
    barFrame = window.requestAnimationFrame(frame);
  }

  function pointAt(el) {
    var box = loop.getBoundingClientRect();
    var r = el.getBoundingClientRect();
    cursor.style.transform = 'translate(' + (r.left - box.left + r.width * 0.5) + 'px, ' + (r.top - box.top + r.height * 0.6) + 'px)';
  }

  /* Move the cursor to el, press, then run fn at time `at` (ms into the cycle). */
  function click(el, at, fn) {
    var withCursor = cursor && cursor.offsetParent !== null && el.offsetParent !== null;
    if (withCursor) later(function () { cursor.classList.add('is-on'); pointAt(el); }, Math.max(0, at - 750));
    later(function () {
      if (withCursor) { cursor.classList.add('is-clicking'); el.classList.add('is-pressed'); }
    }, at - 100);
    later(function () {
      if (withCursor) { cursor.classList.remove('is-clicking'); el.classList.remove('is-pressed'); }
      fn();
    }, at);
    /* Step aside so the change it made stays readable */
    if (withCursor) later(function () { cursor.classList.remove('is-on'); }, at + 450);
  }

  /* The mobile chip follows the phone */
  function setChip(key) { chip.textContent = chip.getAttribute('data-chip-' + key); }
  function setLeads(done) {
    cards.test.classList.toggle('is-leading', done);
    leadsText.textContent = leads.getAttribute(done ? 'data-done' : 'data-running');
  }

  /* Only Design starts over; Test and Roll out keep their last result
     until their beats */
  function reset() {
    setPaywall('a');
    setChip('reset');
    designValue.textContent = designValue.getAttribute('data-before');
  }

  function cycle() {
    clear();
    reset();
    activate('design');
    /* 1. Design, 0 to 2.6s */
    click(designValue, 800, function () {
      designValue.textContent = designValue.getAttribute('data-after');
      setPaywall('b');
      setChip('design');
    });
    /* 2. Test, 2.6 to 5.2s */
    later(function () { activate('test'); }, BEAT);
    click(chart, BEAT + 700, function () {
      setLeads(false);
      sparkClip.setAttribute('width', '0');
      drawSpark(800);
      setPaywall('a');
      setChip('running');
    });
    later(function () { setPaywall('b'); }, BEAT + 1200);
    later(function () { setPaywall('a'); }, BEAT + 1650);
    later(function () { setPaywall('b'); setLeads(true); setChip('test'); }, BEAT + 2050);
    /* 3. Roll out, 5.2 to 7.8s */
    later(function () {
      activate('rollout');
      cards.rollout.classList.remove('is-done');
      setBar(50);
    }, BEAT * 2);
    click(bar, BEAT * 2 + 700, function () {
      setPaywall('b');
      setChip('rollout');
      fillBar(900, function () { cards.rollout.classList.add('is-done'); });
    });
    later(cycle, LOOP_MS);
  }

  function start() {
    if (running) return;
    running = true;
    cycle();
  }
  function stop() {
    if (!running) return;
    running = false;
    clear();
    if (cursor) cursor.classList.remove('is-on', 'is-clicking');
  }
  function update() {
    if (visible && !hovered && !document.hidden) start();
    else stop();
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries.some(function (e) { return e.isIntersecting; });
      update();
    }, { threshold: 0.3 }).observe(stage);
  }
  stage.addEventListener('pointerenter', function (e) {
    if (e.pointerType === 'mouse') { hovered = true; update(); }
  });
  stage.addEventListener('pointerleave', function (e) {
    if (e.pointerType === 'mouse') { hovered = false; update(); }
  });
  document.addEventListener('visibilitychange', update);
  update();
})();
