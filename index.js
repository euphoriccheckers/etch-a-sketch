let container = document.querySelector('.container');

let btn = document.createElement('button');
btn.innerText = 'Change Grid Size';
document.body.insertBefore(btn, container);

let isDrawing = false;

for (let i = 0; i < 16; i++) {
    row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
        let tile = document.createElement('div');
        tile.classList.add('tile');
        row.appendChild(tile);
    }
    container.appendChild(row);
}

container.addEventListener('mousedown', (e) => {
    e.target.classList.add('hoverIn');
    isDrawing = true;
});

container.addEventListener('mouseover', (e) => {
    if (isDrawing) {
        e.target.classList.add('hoverIn');
    }
});

container.addEventListener('mouseup', (e) => {
    if (isDrawing) {
        e.target.classList.add('hoverIn');
        isDrawing = false;
    }
})