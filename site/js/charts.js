/* Section 5: Charts module.
   1. The shared pill tabs (WAI-ARIA tabs, automatic activation):
      click, arrow keys, Home and End.
   2. Line charts in the style of RevenueCat Charts, drawn from data
      attributes in index.html. A hover marker (vertical rule and a dot
      per line) follows the pointer or a touch drag, and the left and
      right arrow keys when the plot has focus; a readout above the plot
      shows that month's values, so nothing covers the lines. The marker
      rests on the latest complete month. Illustrative data. */
(function () {
  var root = document.querySelector('[data-charts]');
  if (!root) return;

  /* ---------- Tabs ---------- */
  var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
  var panels = root.querySelectorAll('[role="tabpanel"]');

  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function (p) { p.hidden = p.id !== tab.getAttribute('aria-controls'); });
    if (focus) tab.focus();
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(tab, false); });
    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') next = tabs[0];
      else if (e.key === 'End') next = tabs[tabs.length - 1];
      if (!next) return;
      e.preventDefault();
      select(next, true);
    });
  });

  /* ---------- Line charts ---------- */
  var SVG = 'http://www.w3.org/2000/svg';
  function el(tag, cls, parent) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (parent) parent.appendChild(node);
    return node;
  }

  root.querySelectorAll('[data-linechart]').forEach(function (chart) {
    var max = +chart.getAttribute('data-max');
    var step = +chart.getAttribute('data-step');
    var prefix = chart.getAttribute('data-prefix') || '';
    var unit = chart.getAttribute('data-unit') || '';
    var decimals = +(chart.getAttribute('data-decimals') || 0);
    var labels = chart.getAttribute('data-labels').split(',');
    var incomplete = chart.hasAttribute('data-incomplete') ? +chart.getAttribute('data-incomplete') : null;
    var key = chart.hasAttribute('data-key') ? chart.getAttribute('data-key').split(',').map(Number) : null; /* series, index */
    var last = labels.length - 1;
    var series = Array.prototype.map.call(chart.querySelectorAll('[data-series]'), function (s) {
      return { name: s.getAttribute('data-series'), tone: s.getAttribute('data-tone'), values: s.getAttribute('data-values').split(',').map(Number) };
    });
    var legend = chart.querySelector('.lc-legend');
    var plot = chart.querySelector('.lc-plot');

    function fmt(v) { return prefix + v.toFixed(decimals) + unit; }
    function X(i) { return i / last * 100; }
    function Y(v) { return 100 - v / max * 100; }

    /* Legend */
    series.forEach(function (s) {
      var li = el('li', 'tone-' + s.tone, legend);
      el('i', '', li);
      li.appendChild(document.createTextNode(s.name));
    });

    /* Grid and axes */
    for (var v = 0; v <= max + 1e-9; v += step) {
      var grid = el('span', 'lc-grid', plot);
      grid.style.top = Y(v) + '%';
      el('span', '', grid).textContent = prefix + v + unit;
    }
    labels.forEach(function (label, i) {
      var tick = el('span', 'lc-xtick', plot);
      tick.style.left = X(i) + '%';
      tick.textContent = label;
    });
    if (incomplete !== null) {
      var band = el('span', 'lc-incomplete', plot);
      band.style.left = X(incomplete - 0.5) + '%';
      el('span', '', band).textContent = 'Incomplete';
    }

    /* Lines: solid, then dashed where the cohort is incomplete */
    var svg = document.createElementNS(SVG, 'svg');
    svg.setAttribute('class', 'lc-svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    plot.appendChild(svg);
    function line(values, from, to, cls) {
      var d = '';
      for (var i = from; i <= to; i++) d += (i === from ? 'M' : 'L') + X(i).toFixed(3) + ' ' + Y(values[i]).toFixed(3) + ' ';
      var path = document.createElementNS(SVG, 'path');
      path.setAttribute('d', d.trim());
      path.setAttribute('class', cls);
      svg.appendChild(path);
    }
    series.forEach(function (s) {
      var solidTo = incomplete === null ? last : incomplete - 1;
      line(s.values, 0, solidTo, 'tone-' + s.tone);
      if (solidTo < last) line(s.values, solidTo, last, 'tone-' + s.tone + ' is-dashed');
    });

    /* The key point: a red emphasis ring with an ink label */
    if (key) {
      var mark = el('span', 'lc-key' + (chart.hasAttribute('data-key-below') ? ' is-below' : ''), plot);
      mark.style.left = X(key[1]) + '%';
      mark.style.top = Y(series[key[0]].values[key[1]]) + '%';
      el('span', 'lc-key-label', mark).textContent = chart.getAttribute('data-key-label');
    }

    /* Hover marker: rule, dots, tooltip, and a live region for keys */
    var rule = el('span', 'lc-rule', plot);
    var dots = series.map(function (s) { return el('span', 'lc-dot tone-' + s.tone, plot); });
    var tip = el('div', 'lc-tip', chart);
    tip.setAttribute('aria-hidden', 'true');
    var live = el('p', 'sr-only', chart);
    live.setAttribute('aria-live', 'polite');
    chart.insertBefore(tip, plot);

    var rest = incomplete === null ? last : incomplete - 1;
    var current = -1;
    function describe(i) {
      return labels[i] + (incomplete !== null && i >= incomplete ? ' (incomplete)' : '') + ': ' +
        series.map(function (s) { return s.name + ' ' + fmt(s.values[i]); }).join(', ');
    }
    function show(i, announce) {
      i = Math.max(0, Math.min(last, i));
      if (i !== current) {
        current = i;
        rule.style.left = X(i) + '%';
        dots.forEach(function (dot, k) {
          dot.style.left = X(i) + '%';
          dot.style.top = Y(series[k].values[i]) + '%';
        });
        tip.innerHTML = '';
        el('p', 'lc-tip-date', tip).textContent = labels[i] + (incomplete !== null && i >= incomplete ? ', incomplete' : '');
        series.forEach(function (s) {
          var row = el('p', 'lc-tip-row tone-' + s.tone, tip);
          el('i', '', row);
          el('span', '', row).textContent = s.name;
          el('b', '', row).textContent = fmt(s.values[i]);
        });
      }
      if (announce) live.textContent = describe(i);
    }
    function fromPointer(e) {
      var r = plot.getBoundingClientRect();
      show(Math.round((e.clientX - r.left) / r.width * last), false);
    }
    plot.addEventListener('pointermove', fromPointer);
    plot.addEventListener('pointerdown', fromPointer);
    plot.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') show(rest, false); });
    plot.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = current + 1;
      else if (e.key === 'ArrowLeft') next = current - 1;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = last;
      if (next === null) return;
      e.preventDefault();
      show(next, true);
    });
    plot.addEventListener('focus', function () { live.textContent = describe(current); });

    show(rest, false);
  });
})();
