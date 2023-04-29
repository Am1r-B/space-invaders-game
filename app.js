const grid = document.querySelector(".grid");

const squares = [];

for (let i = 0; i < 225; i++) {
  const square = document.createElement("div");
  squares.push(square);
  grid.appendChild(square);
}
