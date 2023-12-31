let container = document.querySelector('.container');

let btn = document.createElement('button');
btn.innerText = 'Set Grid Size';
document.body.insertBefore(btn, container);

let clearBtn = document.createElement('button');
clearBtn.innerText = 'Clear Grid';
document.body.insertBefore(clearBtn, container);

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

    num = prompt('Enter number of rows/columns - Min 0, Max 100');

    while (num < 0 || num > 100 || isNaN(num)) {
        num = prompt('Enter number of rows/columns - Min 0, Max 100');
    }

    etch(num);
})

clearBtn.addEventListener('click', (e) => {
    let tiles = document.getElementsByClassName('tile');

    for(let i = 0; i < tiles.length; i++) {
        tiles[i].classList.remove('hoverIn');
    }
})

etch(16);