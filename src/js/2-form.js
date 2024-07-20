const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');
const inputJs = feedbackForm.elements.email;
const textAreaJs = feedbackForm.elements.message;

const localStorageKey = 'feedback-form-state';

feedbackForm.addEventListener('input', handlerStorage);

function handlerStorage() {
  formData.email = inputJs.value.trim();
  formData.message = textAreaJs.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

feedbackForm.addEventListener('submit', handlerInput);

function handlerInput(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('Fill please all fields');
  }

  console.log({ email, message });
  localStorage.removeItem(localStorageKey);
  form.reset();
}

const getItem = localStorage.getItem(localStorageKey);
const parseItem = JSON.parse(getItem) || {};

inputJs.value = parseItem.email || '';
textAreaJs.value = parseItem.message || '';

formData.email = parseItem.email || '';
formData.message = parseItem.message || '';
