const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const email = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  formEl.reset();
};

formEl.addEventListener('submit', onFormSubmit);
