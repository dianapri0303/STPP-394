document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.getElementById('header-back-link');
  const navigation = document.getElementById('header-navigation');
  const logo = document.getElementById('header-logo');

  const currentPage = window.location.pathname.split('/').pop();

  const isLegalPage =
    currentPage === 'privacy-policy.html' ||
    currentPage === 'terms-of-service.html';

  if (!isLegalPage) return;

  backButton.dataset.visible = 'true';
  navigation.dataset.visible = 'false';

  if (window.innerWidth < 1440) {
    logo.dataset.visible = 'false';
  }
});