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
        if (trigger === true && oneColor === false) {
            this.style.backgroundColor = random_rgba();
        }
        if (trigger === true && oneColor === true) {
            this.style.backgroundColor = color;
        }
    };

    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener("mousemove", coloring, false);
    };
};

gridSize = 16;
makeRows(gridSize, gridSize);

function rmvColor() {
    let gridItems = document.getElementsByClassName("grid-item");
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = "white";
    };
}

let color = random_rgba();

function random_rgba() {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

let oneColor = false;

function ChooseOneColor() {
    color = random_rgba();
    oneColor = true;
}

function ChooseMultColor() {
    oneColor = false;
}

function setGrid() {
    gridSize = Number(window.prompt("How many pixels do you want?", "A number between 1 and 100"));
    if (gridSize === 0) {
        return;
    }
    else if (gridSize > 100) {
        alert("Choose again, please choose a number below 100.");
        setGrid();
    }

    else {
        makeRows(gridSize, gridSize);
        rmvColor();
    }
};