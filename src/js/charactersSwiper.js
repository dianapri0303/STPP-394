const trackEl = document.querySelector('[data-characters-track]');

if (trackEl) {
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;

  trackEl.addEventListener('mousedown', event => {
    isDown = true;
    trackEl.classList.add('is-dragging');
    startX = event.pageX;
    scrollStart = trackEl.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    isDown = false;
    trackEl.classList.remove('is-dragging');
  });

  window.addEventListener('mousemove', event => {
    if (!isDown) return;
    event.preventDefault();
    trackEl.scrollLeft = scrollStart - (event.pageX - startX);
  });
}
