// import throttle from 'lodash.throttlqe';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');
const btn = document.querySelector('button');

form.addEventListener('input', formValue);

function formValue(evt) {
  const { email, message } = evt.currentTarget;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: email.value, message: message.value })
  );
}

const inputs = JSON.parse(localStorage.getItem('feedback-form-state'));

if (inputs.email ?? inputs.message) {
  input.value = inputs.email;
  message.value = inputs.message;
}

btn.addEventListener('click', evt => {
  evt.preventDefault();
  console.log(inputs);

  localStorage.clear();
  input.value = '';
  message.value = '';
});
