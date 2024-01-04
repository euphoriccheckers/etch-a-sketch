let container = document.querySelector('.container');

let btn = document.createElement('button');
btn.innerText = 'Change Grid Size';
document.body.insertBefore(btn, container);

let isDrawing = false;

function etch (num) {
    for (let i = 0; i < num; i++) {
        row = document.createElement('div');
        row.classList.add('row');
    
        for (let j = 0; j < num; j++) {
            let tile = document.createElement('div');
            tile.classList.add('tile');
            row.appendChild(tile);
        }
        container.appendChild(row);
    }
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

btn.addEventListener('click', (e) => {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }

    num = prompt('Enter number of rows/columns - Max 100');
    
    etch(num);
})