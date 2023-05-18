const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);

let gridItems = document.getElementsByClassName("grid-item");

let coloring = function () {
    console.log(gridItems);
};

for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('mouseover', coloring, false);
};