// Your code here
"use script";

const dodger = document.getElementById("dodger");

dodger.style.bottom = "70px";

dodger.style.left = "70px";

// LEFT
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
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

  dodger.style.left = `${left + 10}px`;
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

  dodger.style.bottom = `${bottom + 10}px`;
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

  dodger.style.bottom = `${bottom - 10}px`;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});





// SOUND

const movementSound = document.getElementById("movementSound");

// SOUND ADDED TO JS
function playSoundOnMovement() {
    movementSound.currentTime = 0;
    movementSound.play();
}

// SOUND LEFT
function moveDodgerLeft() {
  playSoundOnMovement();

  const left = parseInt(dodger.style.left, 10);
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

// SOUND RIGHT
function moveDodgerRight() {
  playSoundOnMovement();

  const left = parseInt(dodger.style.left, 10);
  dodger.style.left = `${left + 10}px`;
}

// SOUND UP
function moveDodgerUp() {
  playSoundOnMovement();

  const bottom = parseInt(dodger.style.bottom, 10);
  dodger.style.bottom = `${bottom + 10}px`;
}

// SOUND DOWN
function moveDodgerDown() {
  playSoundOnMovement();

  const bottom = parseInt(dodger.style.bottom, 10);
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 10}px`;
  }
}
  