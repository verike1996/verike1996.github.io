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
    e.target.style.backgroundColor = 'black';
}

function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

const canvas = document.getElementById('canvas');
const resetButton = document.getElementById('resetButton');

let color = 'black';

window.addEventListener('load', defaultGrid);

// still need to add a function that clears the grid so you can change the size
//need to add a function that lets you change the color you draw with
// need to add a function that changes the size of the grid