const grid = document.querySelector(".grid");
let currentShooterIndex = 202;
let width = 15;

const squares = [];

for (let i = 0; i < 225; i++) {
  const square = document.createElement("div");
  squares.push(square);
  grid.appendChild(square);
}

const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];

function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.add("invader");
  }
}

draw();

function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove("invader");
  }
}

squares[currentShooterIndex].classList.add("shooter");

function moveShooter(e) {
  squares[currentShooterIndex].classList.remove("shooter");
  switch (e.key) {
    case "ArrowLeft":
      if (currentShooterIndex % width !== 0) currentShooterIndex--;
      break;
    case "ArrowRight":
      if (currentShooterIndex % width !== width - 1) currentShooterIndex++;
  }
  squares[currentShooterIndex].classList.add("shooter");
}
document.addEventListener("keydown", moveShooter);

function moveInvaders() {
  remove();

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i]++;
  }

  draw();
}

setInterval(moveInvaders, 500);
