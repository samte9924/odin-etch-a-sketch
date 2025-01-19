let isRandomBackground = false;

let container = document.querySelector(".container");
let changeGridSizeButton = document.querySelector(".change-grid-size");
let toggleRandomColorButton = document.querySelector(".toggle-random-color");
let resetGridButton = document.querySelector(".reset-grid");

changeGridSizeButton.addEventListener("click", changeGridSize);
toggleRandomColorButton.addEventListener("click", toggleRandomBackground);
resetGridButton.addEventListener("click", () => {
  clearGrid();
  buildGrid();
})

buildGrid();

function buildGrid(size = 16) {
  for(let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 1; j <= size; j++) {
      let newSquare = document.createElement("div");
      newSquare.id = size * i + j;
      newSquare.style.height = `${1 / size * 960}px`;
      newSquare.style.width = `${1 / size * 960}px`;
      newSquare.addEventListener("mouseover", () => changeDivBackgroundColor(newSquare));
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

function changeDivBackgroundColor(div) {
  let isColored = div.style.backgroundColor !== "";
  if(!isColored) {
    div.style.backgroundColor = isRandomBackground ? getRandomRGB() : "aquamarine";
  }
}

function getRandomRGB() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function toggleRandomBackground() {
  isRandomBackground = !isRandomBackground;
}