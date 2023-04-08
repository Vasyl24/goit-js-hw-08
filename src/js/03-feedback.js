import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(formValue, 500));
form.addEventListener('submit', submitForm);

let inputs = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
const { email, message } = form.elements;
reloadPage();

function formValue() {
  inputs = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputs));
}

function reloadPage() {
  if (inputs) {
    email.value = inputs.email || '';
    message.value = inputs.message || '';
  }
}

function submitForm(evt) {
  evt.preventDefault();

  if (!email.value || !message.value) {
    return alert('Заповніть усі поля!');
  }
  console.log(inputs);
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
  inputs = {};
}
