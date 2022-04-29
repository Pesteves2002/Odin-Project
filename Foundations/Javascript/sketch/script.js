const container = document.querySelector(".container");
function createGrid(num_rows) {
  for (i = 0; i < num_rows; i++) {
    for (j = 0; j < num_rows; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
    }
  }
  container.style.setProperty(
    "grid-template-columns",
    " repeat(" + num_rows + ", auto)"
  );
  addInteraction();
}

function destroyGrid() {
  while (container.firstChild) container.removeChild(container.firstChild);
}
function addInteraction() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", function (e) {
      square.style.background = "red";
    });
    square.addEventListener("click", function (e) {
      square.style.background = "black";
    });
  });
}
const button_container = document.querySelectorAll("button.size");

button_container.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("10x10")) num_rows = 10;
    else if (button.classList.contains("16x16")) num_rows = 16;
    else num_rows = 20;
    destroyGrid();
    createGrid(num_rows);
  });
});

createGrid(16);
