const openBtnEl = document.querySelector('[data-action="open"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const closeActionEls = document.querySelectorAll('[data-action="close"]');
const mobileMenuLinkEls = document.querySelectorAll('[data-menu-link]');

if (openBtnEl && burgerMenuEl) {
  const openMenu = () => {
    burgerMenuEl.dataset.visible = 'open';
    burgerMenuEl.setAttribute('aria-hidden', 'false');
    openBtnEl.setAttribute('aria-expanded', 'true');
    document.body.dataset.lock = 'true';
  };

  const closeMenu = () => {
    burgerMenuEl.dataset.visible = 'close';
    burgerMenuEl.setAttribute('aria-hidden', 'true');
    openBtnEl.setAttribute('aria-expanded', 'false');
    document.body.dataset.lock = 'false';
  };

  openBtnEl.addEventListener('click', openMenu);
  closeActionEls.forEach(element => element.addEventListener('click', closeMenu));
  mobileMenuLinkEls.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && burgerMenuEl.dataset.visible === 'open') {
      closeMenu();
    }
  });
}
