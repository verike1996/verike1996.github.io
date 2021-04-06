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

function changeColor(e) {
    if (choice == 'custom') {
        e.target.style.backgroundColor = customColor;
    } else if (choice == 'grey') {
        e.target.style.backgroundColor = 'grey';
    } else if (choice == 'white') {
        e.target.style.backgroundColor = 'white';
    } else {
        e.target.style.backgroundColor = 'black';
    }
    
}

function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function changeGridSize() {
    let newSize;
    newSize = prompt('Pick a new canvas size between 1-100!');
    if (newSize < 1 || newSize > 100 || newSize == NaN) {
        alert('Pick a new canvas size between 1-100');
        changeGridSize();
    } else {
        clearGrid();
        createNewGrid(newSize);
    }
}

function whatColor() {
   
}

function userColorSelection(event) {
    customColor = event.target.value;
    choice = 'custom';
}

const canvas = document.getElementById('canvas');
const changeButton = document.getElementById('changeButton');

const greyChoice = document.getElementById('greyChoice');
const blackChoice = document.getElementById('blackChoice');
const whiteChoice = document.getElementById('whiteChoice');
const colorPicker = document.getElementById('colorPicker');

let color = 'black';
let customColor;
let choice;

window.addEventListener('load', defaultGrid);
changeButton.addEventListener('click', changeGridSize);
colorPicker.addEventListener('change', userColorSelection, false)

//need to add a function that lets you change the color you draw with
// need to add a function that changes the size of the grid