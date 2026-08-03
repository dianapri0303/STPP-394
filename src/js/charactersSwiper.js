const trackEl = document.querySelector('[data-characters-track]');

if (trackEl) {
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;

  trackEl.addEventListener('dragstart', event => event.preventDefault());

  trackEl.addEventListener('mousedown', event => {
    isDown = true;
    trackEl.dataset.dragging = 'true';
    startX = event.pageX;
    scrollStart = trackEl.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    isDown = false;
    delete trackEl.dataset.dragging;
  });

  window.addEventListener('mousemove', event => {
    if (!isDown) return;
    event.preventDefault();
    trackEl.scrollLeft = scrollStart - (event.pageX - startX);
  });
}
