const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const loadFormDataFromLocalStorage = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
};

loadFormDataFromLocalStorage();

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const isFormValid = () => {
  return formData.email.trim() !== '' && formData.message.trim() !== '';
};

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!isFormValid()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
