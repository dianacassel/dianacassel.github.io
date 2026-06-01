(function () {
  const html = document.documentElement;
  const buttons = document.querySelectorAll('[data-lang-btn]');

  const saved = localStorage.getItem('diana-lang');
  const initial = saved || (navigator.language.startsWith('en') ? 'en' : 'pt');
  setLang(initial);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.langBtn));
  });

  function setLang(lang) {
    html.setAttribute('data-lang', lang);
    html.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    buttons.forEach(b => {
      b.setAttribute('aria-current', b.dataset.langBtn === lang ? 'true' : 'false');
    });
    localStorage.setItem('diana-lang', lang);
  }
})();
