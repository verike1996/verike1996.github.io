function createDiv() {
    let newDiv = document.createElement('div');
    newDiv.classList = 'gridElement';
    newDiv.addEventListener('mouseover', changeColor);
    canvas.appendChild(newDiv);
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        createDiv();
    }
}

function setGridSize(size) {
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function createNewGrid(size) {
    clearGrid();
    setGridSize(size);
    fillGrid(size);
    canvasSize.textContent = `${size} x ${size}`
}

function defaultGrid() {
    createNewGrid(16);
}

function whatColor() {
    if (color == 'custom') {
        colorChoice = customColor;
    } else if (color == 'grey') {
        colorChoice = 'grey';
    } else if (color == 'white') {
        colorChoice = 'white';
    } else {
        colorChoice = 'black';
    }
}

function changeColor(e) {
    whatColor();
    e.target.style.backgroundColor = colorChoice;
}

function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function changeGridSize() {
    newSize = prompt('Pick a new canvas size between 1-100!');
    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
            alert('Pick a new canvas size between 1-100');
            changeGridSize();
        } else {
            clearGrid();
            createNewGrid(newSize);
        }
    }
}

function userColorSelection(e) {
    customColor = e.target.value;
    color = 'custom';
    whatColor();
    displayColor.style.backgroundColor = colorChoice;
}

function eraseAll(e) {
    e.style.backgroundColor = 'white';
}

const canvas = document.getElementById('canvas');
const changeButton = document.getElementById('changeButton');
const clearButton = document.getElementById('clearButton');
const canvasSize = document.getElementById('canvasSize');

const greyChoice = document.getElementById('greyChoice');
const blackChoice = document.getElementById('blackChoice');
const whiteChoice = document.getElementById('whiteChoice');
const colorPicker = document.getElementById('colorPicker');
const displayColor = document.getElementById('displayColor');

let color = 'black';
let colorChoice = 'black';
let customColor;

window.addEventListener('load', defaultGrid);
changeButton.addEventListener('click', changeGridSize);

colorPicker.addEventListener('change', userColorSelection, false)
colorPicker.addEventListener('click', userColorSelection, false)
blackChoice.addEventListener('click', () => {
    color = 'black';
    whatColor();
    displayColor.style.backgroundColor = colorChoice;
})
whiteChoice.addEventListener('click', () => {
    color = 'white';
    whatColor();
    displayColor.style.backgroundColor = colorChoice;
})
greyChoice.addEventListener('click', () => {
    color = 'grey';
    whatColor();
    displayColor.style.backgroundColor = colorChoice;
})
clearButton.addEventListener('click', () => {
    let canvasChildrenArray = Array.from(document.getElementById('canvas').children);
    canvasChildrenArray.forEach(eraseAll);
})
