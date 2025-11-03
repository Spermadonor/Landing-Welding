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

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  console.log('Form submitted');
  event.preventDefault();
  document.getElementById('successModal').style.display = 'flex';
  event.target.reset();
}
const modalButton = document.querySelector('.modal-button');
modalButton.addEventListener('click', closeModal);
function closeModal() {
  document.getElementById('successModal').style.display = 'none';
}

// Закрытие по клику вне модального окна
window.onclick = function(event) {
  const modal = document.getElementById('successModal');
  if (event.target === modal) {
    closeModal();
  }
}
