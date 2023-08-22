const startBtn = document.getElementById("start-button");
const mainPage = document.getElementById("main-page");
const gamePage = document.getElementById("game-page");
const btnClickSound = new Audio("btn-click-sound.mp3");
const playerHandOptionsDiv = document.getElementById("player-hand-options");
const playerHandOptionsAnimationStopSound = new Audio(
  "player-hand-options-animation-stop-sound.mp3"
);

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
  btnClickSound.play();
  clearInterval(invertColorInterval);

  // Controls the playerHandOptions animations
  // let topPercent = 99;
  // function playerHandOptionsAnimation() {
  //   if (topPercent !== 34) {
  //     playerHandOptionsDiv.style.top = `${topPercent}%`;
  //     topPercent -= 0.5;
  //   } else {
  //     clearAnimationInterval();
  //   }
  // }
  // const playerHandOptionsAnimationInterval = setInterval(playerHandOptionsAnimation, 13);
  playerHandOptionsDiv.style.removeProperty('top');
  playerHandOptionsDiv.classList.add("player-hand-options-animation");
  function clearAnimationInterval() {
    clearInterval(playerHandOptionsAnimationInterval);
    playerHandOptionsAnimationStopSound.play();
  }
}
//startBtnClicked();