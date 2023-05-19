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
            this.style.backgroundColor = "black";
        }
    };

    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener("mousemove", coloring, false);
    };
};

makeRows(16, 16);