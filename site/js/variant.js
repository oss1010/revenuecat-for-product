/* Hero test: ?v=b2 swaps the hero H1 and the closing band.
   Loaded in <head> without defer so the swap happens before first
   paint. The markup holds both lines; the one not shown carries the
   hidden attribute, so screen readers only get the line on screen. */
(function () {
  var v = null;
  try {
    v = new URLSearchParams(window.location.search).get('v');
  } catch (e) {
    /* No URLSearchParams: stay on the default, B1. */
  }
  if (v !== 'b2') return;
  document.documentElement.setAttribute('data-variant', 'b2');
  function swap() {
    document.querySelectorAll('.v-b1').forEach(function (el) { el.hidden = true; });
    document.querySelectorAll('.v-b2').forEach(function (el) { el.hidden = false; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', swap);
  else swap();
})();
