/* One primary CTA per viewport. The nav CTA stays outlined while any
   in-page primary CTA is on screen, and turns blue once none is. */
(function () {
  var navCta = document.querySelector('.nav-cta');
  var primaries = document.querySelectorAll('main .btn-primary');
  if (!navCta || !primaries.length || !('IntersectionObserver' in window)) return;

  var onScreen = new Set();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) onScreen.add(entry.target);
      else onScreen.delete(entry.target);
    });
    navCta.classList.toggle('is-quiet', onScreen.size > 0);
  });

  primaries.forEach(function (el) { observer.observe(el); });
})();
