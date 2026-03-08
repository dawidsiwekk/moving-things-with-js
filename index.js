// Your code here
"use script";

const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";

dodger.style.left = "0px";

// LEFT
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// RIGHT
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  dodger.style.left = `${left + 1}px`;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

// UP
function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  dodger.style.bottom = `${bottom + 1}px`;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
});

// UP
function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  dodger.style.bottom = `${bottom - 1}px`;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});





  