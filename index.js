///need to generate columns and rows in loop

//grab container element
//grab number for grid
//loop # times
    //create row container
    //loop # times
        //create tile
        //add tile to row container
    //add row container to container
//add container to document.body

let container = document.querySelector('.container');

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

container.addEventListener('mouseover', (e) => {
    e.target.classList.remove('hoverOut');
    e.target.classList.add('hoverIn');
});

container.addEventListener('mouseout', (e) => {
    e.target.classList.remove('hoverIn');
    e.target.classList.add('hoverOut');
});