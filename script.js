const container = document.getElementById("container");
function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < rows * cols; c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }

    let gridItems = document.getElementsByClassName("grid-item");
    let trigger = false;

    this.addEventListener('mousedown', function () {
        trigger = true;
    });

    this.addEventListener('mouseup', function () {
        trigger = false;
    });

    let coloring = function () {
        if (trigger === true) {
            this.style.backgroundColor = color;
        }
    };

    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener("mousemove", coloring, false);
    };
};

function rmvColor() {
    let gridItems = document.getElementsByClassName("grid-item");
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = "white";
    };
}

function random_rgba() {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

const color = random_rgba();

gridSize = 16;
makeRows(gridSize, gridSize);

function setGrid() {
    gridSize = Number(window.prompt("How many pixels do you want?", "choose number between 1 and 100"));
    if (gridSize > 100) {
        alert("choose again, please choose a number below 100");
    }

    else {
        console.log(gridSize);
        makeRows(gridSize, gridSize);
        rmvColor();
    }
};




