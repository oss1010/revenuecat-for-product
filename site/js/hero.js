/* Hero loop: Design, Test, Roll out. About 8 seconds, each beat about
   2.5 seconds, starting on load and looping with no idle gap.
   1. Design: the cursor changes "Featured plan" to Monthly; the phone
      updates.
   2. Test: the cursor starts the test; two labeled lines draw in (A
      red, B green), the phone alternates A and B, then "B leads".
   3. Roll out: the cursor clicks "Roll out B"; the card shows
      "Published. No app release." and the phone locks to B.
   Pauses off-screen, on hover and in background tabs. Under
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
  var rollBtn = stage.querySelector('[data-hl-roll]');
  var sparkClip = stage.querySelector('.hl-spark-clip');
  var lineLabels = stage.querySelectorAll('.hl-line-lbl');
  var chips = stage.querySelectorAll('.hl-chip [data-step]');
  var cursor = stage.querySelector('.hl-cursor');

  var BEAT = 2600;
  var LOOP_MS = BEAT * 3; /* about 8 seconds */
  var timers = [];
  var running = false;
  var visible = true; /* start immediately; the observer corrects this */
  var hovered = false;
  var sparkFrame = null;

  function later(fn, ms) { timers.push(window.setTimeout(fn, ms)); }
  function clear() {
    timers.forEach(window.clearTimeout);
    timers = [];
    if (sparkFrame) window.cancelAnimationFrame(sparkFrame);
  }
  function setPaywall(v) { if (window.Tidelark) window.Tidelark.set(screen, v); }

  function activate(name) {
    Object.keys(cards).forEach(function (k) { cards[k].classList.toggle('is-active', k === name); });
    loop.setAttribute('data-step', name);
    chips.forEach(function (c) { c.hidden = c.getAttribute('data-step') !== name; });
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
  function showLineLabels(on) { lineLabels.forEach(function (l) { l.style.opacity = on ? '1' : '0'; }); }

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
  }

  function reset() {
    setPaywall('a');
    designValue.textContent = designValue.getAttribute('data-before');
    sparkClip.setAttribute('width', '0');
    showLineLabels(false);
    cards.test.classList.remove('is-leading');
    cards.rollout.classList.remove('is-done');
  }

  function cycle() {
    clear();
    reset();
    activate('design');
    /* 1. Design, 0 to 2.6s */
    click(designValue, 800, function () {
      designValue.textContent = designValue.getAttribute('data-after');
      setPaywall('b');
    });
    /* 2. Test, 2.6 to 5.2s */
    later(function () { activate('test'); }, BEAT);
    click(chart, BEAT + 700, function () {
      drawSpark(800);
      showLineLabels(true);
      setPaywall('a');
    });
    later(function () { setPaywall('b'); }, BEAT + 1200);
    later(function () { setPaywall('a'); }, BEAT + 1650);
    later(function () { setPaywall('b'); cards.test.classList.add('is-leading'); }, BEAT + 2050);
    /* 3. Roll out, 5.2 to 7.8s */
    later(function () { activate('rollout'); }, BEAT * 2);
    click(rollBtn, BEAT * 2 + 800, function () {
      cards.rollout.classList.add('is-done');
      setPaywall('b');
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
