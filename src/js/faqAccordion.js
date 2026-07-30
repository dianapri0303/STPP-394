const faqList = document.getElementById('faq-list');

const buttons = faqList.querySelectorAll('[data-faq-button]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const currentItem = button.closest('[data-faq-item]');
    const currentAnswer = currentItem.querySelector('[data-faq-answer]');
    const isOpen = currentItem.classList.contains('active');

    faqList.querySelectorAll('[data-faq-item]').forEach(item => {
      item.classList.remove('active');
      item.querySelector('[data-faq-answer]').style.display = 'none';
    });

    if (!isOpen) {
      currentItem.classList.add('active');
      currentAnswer.style.display = 'block';
    }
  });
});