const getUsername = document.querySelector('input#name-input');
const displayUsername = document.querySelector('span#name-output');

getUsername.addEventListener('input', event => {
  if (getUsername.value.trim() === '') {
    displayUsername.textContent = 'Anonymous';
  } else {
    displayUsername.textContent = getUsername.value.trim();
  }
});
