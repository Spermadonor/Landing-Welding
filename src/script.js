baguetteBox.run('.gallery-grid', {
  animation: 'fadeIn',
  noScrollbars: true,
});

const overlay = document.querySelector('.gallery-grid');

overlay.addEventListener('click', (event) => {
  const imageElement = event.target.closest('.gallery-image');
  if (imageElement) {
    imageElement.querySelector('img').click();
  }
});
