let container = document.querySelector(".container");
let changeGridSizeButton = document.querySelector(".change-grid-size");

changeGridSizeButton.addEventListener("click", changeGridSize);

buildGrid(50);

function buildGrid(size = 16) {
  for(let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 1; j <= size; j++) {
      let newSquare = document.createElement("div");
      newSquare.id = size * i + j;
      newSquare.style.height = `${1 / size * 960}px`;
      newSquare.style.width = `${1 / size * 960}px`;
      newSquare.addEventListener("mouseover", () => {
        newSquare.classList.add("hovered");
      })
      row.appendChild(newSquare);
    }
    container.appendChild(row);
  }
}

function changeGridSize() {
  let size = prompt("Select new size (max. 100)");
  if(!size || size > 100) size = 16;

  clearGrid();
  buildGrid(size);
}

function clearGrid() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}