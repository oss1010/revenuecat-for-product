/* Hero test: ?v=b2 swaps the hero H1 and the closing band.
   Loaded in <head> without defer so the swap happens before first
   paint. The markup holds both lines; CSS shows one. */
(function () {
  try {
    var v = new URLSearchParams(window.location.search).get('v');
    if (v === 'b2') document.documentElement.setAttribute('data-variant', 'b2');
  } catch (e) {
    /* No URLSearchParams: stay on the default, B1. */
  }
})();
