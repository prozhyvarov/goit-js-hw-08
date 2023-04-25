import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form.feedback-form'),
  userEmail: document.querySelector('form input'),
  userMessage: document.querySelector('form textarea'),
}
const STORAGE_KEY = 'feedback-form-state';


let formData = {
  email: '',
  message: '',
};

populateForm();

refs.userEmail.addEventListener(
  'input',
  throttle(() => {
    formData.email = refs.userEmail.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

refs.userMessage.addEventListener(
  'input',
  throttle(() => {
    formData.message = refs.userMessage.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

refs.form.addEventListener('submit', onFormSubmit);

function populateForm() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  
  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    formData.email = parsedFormData.email;
    formData.message = parsedFormData.message;
    refs.userEmail.value = formData.email;
    refs.userMessage.value = formData.message;
  } else {
    return
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.userEmail.value && refs.userMessage.value) {
    localStorage.clear();
    evt.currentTarget.reset();
    console.log(formData);
    formData = {
      email: '',
      message: '',
    };
  } else {
    alert('Please make sure all fields are filled!');
  }
}
