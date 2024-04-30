const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

// Функція для завантаження даних з локального сховища
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

// Перевіряємо наявність даних у локальному сховищі при завантаженні сторінки
loadFormDataFromLocalStorage();

// Відстежуємо подію input в формі
form.addEventListener('input', event => {
  const { name, value } = event.target;

  // Оновлюємо дані в об'єкті formData
  formData[name] = value;

  // Зберігаємо оновлені дані в локальному сховищі
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Функція для перевірки, чи всі поля форми заповнені
const isFormValid = () => {
  return formData.email.trim() !== '' && formData.message.trim() !== '';
};

// Відстежуємо подію відправлення форми
form.addEventListener('submit', event => {
  event.preventDefault();

  // Перевіряємо чи всі поля форми заповнені
  if (!isFormValid()) {
    alert('Fill please all fields');
    return;
  }

  // Якщо всі поля заповнені, виводимо об'єкт formData у консоль
  console.log(formData);

  // Очищаємо дані форми та локального сховища
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
