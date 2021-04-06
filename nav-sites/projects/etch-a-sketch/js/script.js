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

function userColorSelection(event) {
    customColor = event.target.value;
    color = 'custom';
    whatColor();
    displayColor.style.backgroundColor = colorChoice;
}

const canvas = document.getElementById('canvas');
const changeButton = document.getElementById('changeButton');

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

//need to add a function that lets you change the color you draw with
// need to add a function that changes the size of the grid