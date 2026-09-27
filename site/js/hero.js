/* Hero loop: Change, Learn, Fit, about 3 seconds each (a 9-second
   loop). The "You" cursor clicks each card and the Tidelark phone
   changes: annual plan featured, then variant B's 7-day trial, then a
   different paywall for users in Germany. Pauses off-screen, on hover
   and in background tabs. Under prefers-reduced-motion the markup's
   static Learn state stays. */
(function () {
  var stage = document.querySelector('[data-hero-loop]');
  if (!stage) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  var loop = stage.querySelector('.hero-loop');
  var phone = stage.querySelector('.hl-phone');
  var rows = phone.querySelectorAll('[data-plan]');
  var cards = stage.querySelectorAll('.hl-card');
  var chips = stage.querySelectorAll('.hl-chip [data-step]');
  var cursor = stage.querySelector('.hl-cursor');
  var toast = stage.querySelector('.hl-toast');

  var STEPS = ['change', 'learn', 'fit'];
  var STEP_MS = 3000;
  var CLICK_MS = 750;
  var ACTIVATE_MS = 870;
  var timers = [];
  var step = 0;
  var running = false;
  var visible = false;
  var hovered = false;

  function later(fn, ms) { timers.push(window.setTimeout(fn, ms)); }
  function clear() { timers.forEach(window.clearTimeout); timers = []; }

  function setPhone(state) {
    var annualFirst = state !== 'base';
    var before = new Map();
    rows.forEach(function (r) { before.set(r, r.getBoundingClientRect().top); });
    loop.setAttribute('data-state', state);
    rows.forEach(function (r) {
      var featured = (r.getAttribute('data-plan') === 'annual') === annualFirst;
      r.classList.toggle('is-featured', featured);
      r.style.order = featured ? '0' : '1';
    });
    phone.classList.toggle('is-dark', state === 'fit');
    if (typeof Element.prototype.animate !== 'function') return;
    rows.forEach(function (r) {
      var dy = before.get(r) - r.getBoundingClientRect().top;
      if (!dy) return;
      r.animate(
        [{ transform: 'translateY(' + dy + 'px)' }, { transform: 'translateY(0)' }],
        { duration: 420, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' }
      );
    });
  }

  function activate(name) {
    cards.forEach(function (c) { c.classList.toggle('is-active', c.getAttribute('data-step') === name); });
    if (name) chips.forEach(function (c) { c.hidden = c.getAttribute('data-step') !== name; });
  }

  function pointAt(card) {
    var box = loop.getBoundingClientRect();
    var r = card.getBoundingClientRect();
    var x = r.left - box.left + 26;
    var y = r.top - box.top + r.height * 0.55;
    cursor.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  }

  function runStep(i) {
    clear();
    step = i;
    var name = STEPS[i];
    var card = stage.querySelector('.hl-card[data-step="' + name + '"]');
    var withCursor = cursor && card && card.offsetParent !== null; /* desktop */

    if (withCursor) {
      cursor.classList.add('is-on');
      pointAt(card);
      later(function () { cursor.classList.add('is-clicking'); }, CLICK_MS);
    }
    later(function () {
      if (withCursor) cursor.classList.remove('is-clicking');
      activate(name);
      setPhone(name);
      if (name === 'change') {
        toast.classList.add('is-visible');
        later(function () { toast.classList.remove('is-visible'); }, 1700);
      }
    }, ACTIVATE_MS);
    if (name === 'fit') {
      /* back to the starting paywall before the loop restarts */
      later(function () { activate(null); setPhone('base'); }, STEP_MS - 400);
    }
    later(function () { runStep((i + 1) % STEPS.length); }, STEP_MS);
  }

  function start() {
    if (running) return;
    running = true;
    runStep(step);
  }

  function stop() {
    if (!running) return;
    running = false;
    clear();
    toast.classList.remove('is-visible');
    if (cursor) cursor.classList.remove('is-on', 'is-clicking');
  }

  function update() {
    if (visible && !hovered && !document.hidden) start();
    else stop();
  }

  /* Leave the static Learn state and begin from the starting paywall. */
  activate(null);
  setPhone('base');
  chips.forEach(function (c) { c.hidden = c.getAttribute('data-step') !== 'change'; });

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
