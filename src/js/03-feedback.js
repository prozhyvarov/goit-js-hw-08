import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('form.feedback-form'),
    userEmail: document.querySelector('form input'),
    userMessage: document.querySelector('form textarea'),
}

populateForm();

let formData = {
  email: '',
  message: '',
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...formData,
      email: refs.userEmail.value,
      message: refs.userMessage.value,
    })
  );
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.userEmail.value && refs.userMessage.value) {
    refs.form.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    formData.email = '';
    formData.message = '';
  } 
}

function populateForm() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    refs.userEmail.value = parsedFormData.email;
    refs.userMessage.value = parsedFormData.message;
  } else {
    refs.userEmail.value = '';
    refs.userMessage.value = '';
  }
}
