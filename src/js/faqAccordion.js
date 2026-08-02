const faqList = document.getElementById('faq-list');

if (faqList) {
  faqList.querySelectorAll('[data-faq-button]').forEach(button => {
    button.addEventListener('click', () => {
      const currentItem = button.closest('[data-faq-item]');
      const isOpen = currentItem.dataset.open === 'true';

      faqList.querySelectorAll('[data-faq-item]').forEach(item => {
        item.dataset.open = 'false';
      });

      if (!isOpen) {
        currentItem.dataset.open = 'true';
      }
    });
  });
}