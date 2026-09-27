/* Shared Tidelark paywall. The markup and copy live once, in
   index.html (template#tl-paywall). This clones it into every
   [data-paywall] mount and offers one call to switch variants.
   Must load before hero.js and simulator.js. */
(function () {
  var tpl = document.getElementById('tl-paywall');
  if (!tpl || !('content' in tpl)) return;

  document.querySelectorAll('[data-paywall]').forEach(function (mount) {
    var node = tpl.content.firstElementChild.cloneNode(true);
    node.setAttribute('data-variant', mount.getAttribute('data-paywall') || 'a');
    mount.appendChild(node);
  });

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  window.Tidelark = {
    /* variant: "a" (weekly featured, 3-day trial) or "b" (monthly
       featured, 7-day trial) */
    set: function (mount, variant) {
      var tl = mount && mount.querySelector('.tl');
      if (!tl || tl.getAttribute('data-variant') === variant) return;
      tl.setAttribute('data-variant', variant);
      if (reduceMotion.matches) return;
      tl.classList.remove('is-changing');
      void tl.offsetWidth; /* restart the highlight */
      tl.classList.add('is-changing');
    }
  };
})();
