/* Section 6: the funnel lights up step by step, once, when it scrolls
   into view. The markup starts in the final (all lit) state, so no-JS
   and reduced motion show every step completed. */
(function () {
  var flow = document.querySelector('[data-flow]');
  if (!flow) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  var steps = flow.querySelectorAll('.flow-step');
  var STEP_MS = 480;

  /* Reset to the starting state, then play when seen */
  steps.forEach(function (s) { s.classList.remove('is-lit'); });
  flow.classList.add('is-playing');

  function play() {
    steps.forEach(function (s, i) {
      window.setTimeout(function () {
        s.classList.add('is-lit');
        if (i === steps.length - 1) flow.classList.remove('is-playing');
      }, 250 + i * STEP_MS);
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    if (!entries.some(function (e) { return e.isIntersecting; })) return;
    observer.disconnect();
    play();
  }, { threshold: 0.35 });
  observer.observe(flow);
})();
