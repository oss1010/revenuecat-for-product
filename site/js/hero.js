/* Hero loop: Design, Test, Keep (about 10.5 seconds).
   1. Design: the cursor changes the featured plan; the phone updates.
   2. Test: the cursor starts a test; the "A/B test running" chip
      appears, the phone alternates A and B, a forecast line draws in.
   3. Keep: the cursor clicks "Roll out"; the phone locks to B and the
      toast reads "Published. No app release."
   Pauses off-screen, on hover and in background tabs. Under
   prefers-reduced-motion the markup's static Keep state stays. */
(function () {
  var stage = document.querySelector('[data-hero-loop]');
  if (!stage) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var loop = stage.querySelector('.hero-loop');
  var screen = stage.querySelector('.hl-phone [data-paywall]');
  var cards = {};
  stage.querySelectorAll('.hl-card').forEach(function (c) { cards[c.getAttribute('data-card')] = c; });
  var designValue = stage.querySelector('[data-design-value]');
  var startBtn = stage.querySelector('[data-hl-start]');
  var rollBtn = stage.querySelector('[data-hl-roll]');
  var sparkClip = stage.querySelector('.hl-spark-clip');
  var chips = stage.querySelectorAll('.hl-chip [data-step]');
  var cursor = stage.querySelector('.hl-cursor');
  var toast = stage.querySelector('.hl-toast');

  var LOOP_MS = 10500;
  var timers = [];
  var running = false;
  var visible = false;
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
    loop.setAttribute('data-step', name || 'base');
    if (name) chips.forEach(function (c) { c.hidden = c.getAttribute('data-step') !== name; });
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

  function pointAt(el) {
    var box = loop.getBoundingClientRect();
    var r = el.getBoundingClientRect();
    cursor.style.transform = 'translate(' + (r.left - box.left + r.width * 0.5) + 'px, ' + (r.top - box.top + r.height * 0.6) + 'px)';
  }

  function click(el, at, fn) {
    var withCursor = cursor && cursor.offsetParent !== null && el.offsetParent !== null;
    if (withCursor) later(function () { cursor.classList.add('is-on'); pointAt(el); }, at - 800);
    later(function () {
      if (withCursor) { cursor.classList.add('is-clicking'); el.classList.add('is-pressed'); }
    }, at - 100);
    later(function () {
      if (withCursor) { cursor.classList.remove('is-clicking'); el.classList.remove('is-pressed'); }
      fn();
    }, at);
  }

  function reset() {
    activate(null);
    setPaywall('a');
    designValue.textContent = designValue.getAttribute('data-before');
    sparkClip.setAttribute('width', '0');
    toast.classList.remove('is-visible');
  }

  function cycle() {
    clear();
    reset();
    /* 1. Design */
    click(designValue, 900, function () {
      designValue.textContent = designValue.getAttribute('data-after');
      activate('design');
      setPaywall('b');
    });
    /* 2. Test */
    click(startBtn, 3800, function () {
      activate('test');
      drawSpark(900);
    });
    later(function () { setPaywall('a'); }, 4500);
    later(function () { setPaywall('b'); }, 5200);
    later(function () { setPaywall('a'); }, 5900);
    later(function () { setPaywall('b'); }, 6600);
    /* 3. Keep */
    click(rollBtn, 7700, function () {
      activate('keep');
      setPaywall('b');
      toast.classList.add('is-visible');
    });
    later(function () { toast.classList.remove('is-visible'); }, 9900);
    later(function () { if (cursor) cursor.classList.remove('is-on'); }, 8600);
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
  } else {
    visible = true;
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
