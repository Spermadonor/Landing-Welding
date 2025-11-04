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
  event.preventDefault();
  const button = event.target.querySelector('.form-button');
  const buttonText = button.querySelector('.button-text');
  const spinner = button.querySelector('.button-spinner');

  // Показываем спиннер и скрываем текст
  buttonText.style.display = 'none';
  spinner.style.display = 'inline-block';
  button.disabled = true;

  // Имитация отправки формы (замените на реальную отправку)
  setTimeout(() => {
    // Скрываем спиннер и показываем текст
    spinner.style.display = 'none';
    buttonText.style.display = 'inline';
    button.disabled = false;

    // Показываем модальное окно
    document.getElementById('successModal').style.display = 'flex';
    event.target.reset();
  }, 2000);
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
