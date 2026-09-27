/* Section 3: tabs (WAI-ARIA tabs pattern, automatic activation) and a
   before/after compare slider per tab (role="slider"). Pointer, touch
   and keyboard. No motion under prefers-reduced-motion. */
(function () {
  var root = document.querySelector('[data-shift]');
  if (!root) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
  var panels = root.querySelectorAll('[role="tabpanel"]');

  /* Tabs */
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function (p) {
      p.hidden = p.id !== tab.getAttribute('aria-controls');
    });
    if (focus) tab.focus();
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(tab, false); });
    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') next = tabs[0];
      else if (e.key === 'End') next = tabs[tabs.length - 1];
      if (!next) return;
      e.preventDefault();
      select(next, true);
    });
  });

  /* Compare sliders */
  root.querySelectorAll('[data-compare]').forEach(function (compare) {
    var handle = compare.querySelector('[role="slider"]');
    var value = 50;
    var dragging = false;

    function set(v, stepping) {
      value = Math.max(0, Math.min(100, Math.round(v)));
      compare.classList.toggle('is-stepping', !!stepping && !reduceMotion.matches);
      compare.style.setProperty('--pos', value + '%');
      handle.setAttribute('aria-valuenow', String(value));
    }

    function fromPointer(e) {
      var box = compare.getBoundingClientRect();
      set(((e.clientX - box.left) / box.width) * 100, false);
    }

    /* Mouse and pen move the split at once. Touch waits for a clear
       horizontal move, so a vertical scroll that starts here still
       scrolls the page. */
    var pending = null;
    function begin(e) {
      dragging = true;
      compare.setPointerCapture(e.pointerId);
      fromPointer(e);
      handle.focus({ preventScroll: true });
    }
    compare.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      if (e.pointerType === 'touch') {
        pending = { id: e.pointerId, x: e.clientX, y: e.clientY };
        return;
      }
      begin(e);
    });
    compare.addEventListener('pointermove', function (e) {
      if (dragging) { fromPointer(e); return; }
      if (!pending || pending.id !== e.pointerId) return;
      var dx = Math.abs(e.clientX - pending.x);
      var dy = Math.abs(e.clientY - pending.y);
      if (dx > 6 && dx > dy) { pending = null; begin(e); }
      else if (dy > 6) { pending = null; }
    });
    function end(e) {
      var tapped = pending && pending.id === e.pointerId && e.type === 'pointerup';
      pending = null;
      if (tapped) { fromPointer(e); return; } /* a tap moves the split there */
      if (!dragging) return;
      dragging = false;
      if (compare.hasPointerCapture && compare.hasPointerCapture(e.pointerId)) {
        compare.releasePointerCapture(e.pointerId);
      }
    }
    compare.addEventListener('pointerup', end);
    compare.addEventListener('pointercancel', end);

    handle.addEventListener('keydown', function (e) {
      var v = null;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') v = value - 10;
      else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') v = value + 10;
      else if (e.key === 'PageDown') v = value - 25;
      else if (e.key === 'PageUp') v = value + 25;
      else if (e.key === 'Home') v = 0;
      else if (e.key === 'End') v = 100;
      if (v === null) return;
      e.preventDefault();
      set(v, true);
    });

    set(50, false);
  });
})();
