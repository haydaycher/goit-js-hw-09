const formData = { email: '', message: '' };

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('#emailInput');
const textArea = form.querySelector('#textArea');

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const savedFormData = JSON.parse(savedData);
  formData.email = savedFormData.email || '';
  formData.message = savedFormData.message || '';
  email.value = formData.email;
  textArea.value = formData.message;
}
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
}
