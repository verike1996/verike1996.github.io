function createDiv() {
    let newDiv = document.createElement('div');
    newDiv.classList = 'gridElement';
    canvas.appendChild(newDiv);
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        createDiv();
    }
}

const canvas = document.getElementById('canvas');
const resetButton = document.getElementById('resetButton');