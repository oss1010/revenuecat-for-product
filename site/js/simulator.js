/* Section 5: experiment simulator.
   All copy lives in index.html (data attributes and labels). This file
   only moves state: the toggle, the winner flip, the confirm dialog,
   the rollout and the toast. Motion is skipped under
   prefers-reduced-motion. */
(function () {
  var root = document.querySelector('[data-sim]');
  if (!root) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var radios = root.querySelectorAll('input[name="sim-metric"]');
  var cards = root.querySelectorAll('[data-variant]');
  var status = root.querySelector('[data-status]');
  var rolloutBtn = root.querySelector('[data-rollout]');
  var dialog = root.querySelector('[data-dialog]');
  var dialogVariant = root.querySelector('[data-dialog-variant]');
  var plans = root.querySelectorAll('[data-plans]');
  var toast = root.querySelector('[data-toast]');
  var toastText = root.querySelector('[data-toast-text]');

  var TOAST_MS = 5000;
  var SWAP_MS = 120;
  var toastTimer = null;
  var clearTimer = null;
  var metric = 'conversion';

  function reduced() { return reduceMotion.matches; }

  function checkedRadio() {
    return root.querySelector('input[name="sim-metric"]:checked');
  }

  function winner() {
    return checkedRadio().getAttribute('data-winner');
  }

  function metricLabel() {
    return root.querySelector('label[for="' + checkedRadio().id + '"]').innerHTML;
  }

  /* Keeps compounds like "12-month" on one line, as in the markup. */
  function keepCompounds(text) {
    var escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return escaped.replace(/(\d+-[a-z]+)/g, '<span class="nowrap">$1</span>');
  }

  function swapText(el, text) {
    if (reduced()) {
      el.textContent = text;
      return;
    }
    el.classList.add('is-swapping');
    window.setTimeout(function () {
      el.textContent = text;
      el.classList.remove('is-swapping');
    }, SWAP_MS);
  }

  function pop(card) {
    if (reduced()) return;
    card.classList.remove('is-popping');
    void card.offsetWidth; /* restart the animation */
    card.classList.add('is-popping');
  }

  function render() {
    var lead = winner();
    var label = metricLabel();
    cards.forEach(function (card) {
      var isWinner = card.getAttribute('data-variant') === lead;
      var wasWinner = card.classList.contains('is-winner');
      swapText(card.querySelector('[data-value]'), card.getAttribute('data-' + metric));
      card.querySelector('[data-metric-label]').innerHTML = label;
      card.classList.toggle('is-winner', isWinner);
      if (isWinner && !wasWinner) pop(card);
    });
    status.innerHTML = keepCompounds(status.getAttribute('data-' + metric));
  }

  function hideToast() {
    toast.classList.remove('is-visible');
    window.clearTimeout(clearTimer);
    clearTimer = window.setTimeout(function () {
      toastText.textContent = '';
    }, reduced() ? 0 : 300);
  }

  function showToast() {
    window.clearTimeout(toastTimer);
    window.clearTimeout(clearTimer);
    toast.classList.remove('is-visible');
    toastText.textContent = '';
    void toast.offsetWidth; /* replay the entrance and the cat hop */
    toastText.textContent = toast.getAttribute('data-text');
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(hideToast, TOAST_MS);
  }

  function rollOut(variant) {
    plans.forEach(function (list) {
      list.hidden = list.getAttribute('data-plans') !== variant;
    });
    showToast();
  }

  radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      if (!radio.checked) return;
      metric = radio.value;
      render();
    });
  });

  rolloutBtn.addEventListener('click', function () {
    var lead = winner();
    dialogVariant.textContent = lead;
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.returnValue = '';
      dialog.showModal();
    } else if (window.confirm(root.querySelector('[data-dialog-title]').textContent)) {
      rollOut(lead);
    }
  });

  if (dialog) {
    dialog.addEventListener('close', function () {
      if (dialog.returnValue === 'confirm') rollOut(winner());
      rolloutBtn.focus();
    });
  }

  /* Browsers can restore a checked radio on reload. Sync to it. */
  if (checkedRadio().value !== metric) {
    metric = checkedRadio().value;
    render();
  }
})();
