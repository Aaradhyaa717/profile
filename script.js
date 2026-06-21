// Theme toggle: defaults to system preference, lets the visitor override
// for the current session. No localStorage — keeps things simple and
// avoids any persistence/privacy questions for a static résumé site.

(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function isDarkNow() {
    if (root.classList.contains('dark')) return true;
    if (root.classList.contains('light')) return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function setTheme(dark) {
    root.classList.remove('dark', 'light');
    root.classList.add(dark ? 'dark' : 'light');
  }

  function toggleTheme() {
    setTheme(!isDarkNow());
  }

  if (toggle) {
    toggle.addEventListener('click', toggleTheme);
  }

  document.addEventListener('keydown', function (e) {
    var target = e.target;
    var typing = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
    if (!typing && (e.key === 'd' || e.key === 'D')) {
      toggleTheme();
    }
  });
})();
