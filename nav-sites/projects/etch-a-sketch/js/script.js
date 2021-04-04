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
    setGridSize(size);
    fillGrid(size);
}

function defaultGrid() {
    createNewGrid(16);
}

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

const canvas = document.getElementById('canvas');
const resetButton = document.getElementById('resetButton');

window.addEventListener('load', defaultGrid);