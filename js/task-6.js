function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', event => {
  const inputValue = parseInt(input.value);

  if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 100) {
    createEl(inputValue);
    input.value = '';
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', event => {
  destroyEl();
});

function createEl(amount) {
  boxes.innerHTML = '';
  let size = 30;

  for (let index = 0; index < amount; index++) {
    const boxElement = document.createElement('div');
    boxElement.style.width = `${size}px`;
    boxElement.style.height = `${size}px`;
    boxElement.style.backgroundColor = getRandomHexColor();
    boxElement.style.marginBottom = '10px';
    boxes.appendChild(boxElement);

    size += 10;
  }
}

function destroyEl() {
  boxes.innerHTML = '';
}
