document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.getElementById('header-back-link');
  const navigation = document.querySelector('.header-navigation');

  const currentPage = window.location.pathname.split('/').pop();

  const isPolicyPage =
    currentPage === 'privacy-policy.html' ||
    currentPage === 'terms-of-service.html';

  if (isPolicyPage) {
    backButton?.classList.remove('is-hidden');
    navigation?.classList.add('is-hidden');
  }
});