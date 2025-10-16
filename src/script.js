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

const label = document.querySelector('.contact-form-checkbox .label');
const policyDescription = document.querySelector('.policy-description');

label.addEventListener('click', () => {
  policyDescription.classList.toggle('active');
});
