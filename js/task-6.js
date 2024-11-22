function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const fieldEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy');
const boxes = document.getElementById('boxes');

function createBoxes() {
  boxes.innerHTML = '';

  let boxesNumber = Number(fieldEl.value);

  if (boxesNumber < 1 || boxesNumber > 100) {
    return;
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < boxesNumber; i++) {
    let box = document.createElement('div');
    let boxSize = 30 + i * 10;
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '10px';
    fragment.appendChild(box);
  }

  boxes.appendChild(fragment);

  fieldEl.value = '';
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
