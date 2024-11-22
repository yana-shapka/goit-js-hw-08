function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('button.change-color');

const onBtnClick = event => {
  const background = document.querySelector('body');
  const colorText = document.querySelector('span.color');

  const randomColor = getRandomHexColor();
  background.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
};

btnEl.addEventListener('click', onBtnClick);
