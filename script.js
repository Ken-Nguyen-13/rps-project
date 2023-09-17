const startBtn = document.getElementById("start-button");
const mainPage = document.getElementById("main-page");
const gamePage = document.getElementById("game-page");
const startBtnClickSound = new Audio("start-btn-clicked-sound.mp3");
const playerHandOptionsDiv = document.getElementById("player-hand-options");
const newGameBtn = document.getElementById("new-game-btn");
const newGameBtnClickSound = new Audio("new-game-btn-clicked-sound.mp3");

function invertColor() {
  if (startBtn.style.backgroundImage === 'url("start_button.png")') {
    startBtn.style.backgroundImage = 'url("start_button_colors_inverted.png")';
  } else {
    startBtn.style.backgroundImage = 'url("start_button.png")';
  }
  // btnColorChangeSound.play();
  // btnColorChangeSound.currentTime = 0;
}
const invertColorInterval = setInterval(invertColor, 500);

function startBtnClicked() {
  mainPage.style.display = "none";
  gamePage.classList.remove("notVisible");
  startBtnClickSound.play();
  clearInterval(invertColorInterval);
}
function playBtnClickSound() {
  newGameBtnClickSound.play();
}
function playerHandOptionsAnimation(topValue) {
  newGameBtnClickSound.play()
  for (let i = topValue - 1; i < topValue + 1; i++) {
    playerHandOptionsDiv.style.top = `${i}%`;
  }
}
function newBtnClickedAnimation() {
  newGameBtn.style.width = "0";
  newGameBtn.style.height = "0";
  newGameBtn.style.transform = "rotate(360deg)";
  setTimeout(function () {
    newGameBtn.style.visibility = "hidden";
    newGameBtn.style.width = "344px";
    newGameBtn.style.height = "82px";
  }, 900);
}
