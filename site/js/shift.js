/* Section 3: tabs (WAI-ARIA tabs pattern, automatic activation) and
   the two small animations that play when a tab opens.
   - Change: a dot travels both tracks at once, slowly Before, quickly
     with RevenueCat, which lands first (CSS, from .is-armed).
   - Learn: dots for paying customers. Before shows week one, A ahead.
     With RevenueCat steps through months 1 to 12 of the simulator's
     illustrative model (read from its data attributes, one dot per 50
     paying customers): A's dots fade faster than B's, then "B wins the
     year".
   The markup and CSS default to the end states, so no-JS and reduced
   motion show them. */
(function () {
  var root = document.querySelector('[data-shift]');
  if (!root) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
  var panels = root.querySelectorAll('[role="tabpanel"]');
  var timers = [];
  function later(fn, ms) { timers.push(window.setTimeout(fn, ms)); }
  function clear() { timers.forEach(window.clearTimeout); timers = []; }

  /* ---------- Learn: dots from the simulator's model ---------- */
  var PER_DOT = 50;
  function model(key) {
    var el = document.querySelector('[data-model="' + key + '"]');
    if (!el) return null;
    return { paying: +el.getAttribute('data-paying'), retention: el.getAttribute('data-retention').split(',').map(Number) };
  }
  var M = { a: model('a'), b: model('b') };
  var sets = Array.prototype.slice.call(root.querySelectorAll('[data-dots]'));
  sets.forEach(function (set) {
    var m = M[set.getAttribute('data-dots')];
    if (!m) return;
    var n = Math.round(m.paying / PER_DOT);
    for (var i = 0; i < n; i++) set.appendChild(document.createElement('i'));
  });
  function showMonth(set, month) {
    var m = M[set.getAttribute('data-dots')];
    if (!m) return;
    var dots = set.children;
    var lit = Math.round(dots.length * m.retention[month - 1] / 100);
    for (var i = 0; i < dots.length; i++) dots[i].classList.toggle('is-off', i >= lit);
  }
  var yearSets = sets.filter(function (s) { return s.hasAttribute('data-over-year'); });
  var monthLabel = root.querySelector('[data-dot-month]');
  var yearVerdict = root.querySelector('[data-year] .is-now .verdict');
  yearSets.forEach(function (s) { showMonth(s, 12); });

  function playYear() {
    var month = 1;
    yearVerdict.classList.add('is-hidden');
    function step() {
      yearSets.forEach(function (s) { showMonth(s, month); });
      monthLabel.textContent = String(month);
      if (month === 12) { yearVerdict.classList.remove('is-hidden'); return; }
      month += 1;
      later(step, month === 2 ? 700 : 260);
    }
    step();
  }

  /* ---------- Change: the race ---------- */
  var race = root.querySelector('[data-race]');
  function playRace() {
    race.classList.remove('is-racing');
    race.classList.add('is-armed');
    void race.offsetWidth;
    race.classList.add('is-racing');
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () { race.classList.remove('is-armed'); });
    });
  }

  function play(panel) {
    clear();
    if (reduced || !panel) return;
    if (panel.querySelector('[data-race]')) playRace();
    if (panel.querySelector('[data-year]')) playYear();
  }

  /* ---------- Tabs ---------- */
  var seen = false;
  function select(tab, focus) {
    var shown = null;
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function (p) {
      p.hidden = p.id !== tab.getAttribute('aria-controls');
      if (!p.hidden) shown = p;
    });
    if (focus) tab.focus();
    if (seen) play(shown);
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { if (tab.getAttribute('aria-selected') !== 'true') select(tab, false); });
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

  /* The first panel plays once, when the module scrolls into view */
  if ('IntersectionObserver' in window && !reduced) {
    var observer = new IntersectionObserver(function (entries) {
      if (!entries.some(function (e) { return e.isIntersecting; })) return;
      observer.disconnect();
      seen = true;
      play(Array.prototype.find.call(panels, function (p) { return !p.hidden; }));
    }, { threshold: 0.5 });
    observer.observe(root.querySelector('.pair') || root);
    /* Before it plays, the Change panel waits at the start */
    race.classList.add('is-armed', 'is-racing');
  } else {
    seen = true;
  }
})();
