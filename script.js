const startBtn = document.getElementById("start-button");
const mainPage = document.getElementById("main-page");
const gamePage = document.getElementById("game-page");
const newGameBtn = document.getElementById("new-game-btn");
const playerHandOptionsDiv = document.getElementById("player-hand-options");
const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const gameCounterEl = document.getElementById("game-counter");
const startBtnClickSound = new Audio("start-btn-clicked-sound.mp3");
const newGameBtnClickSound = new Audio("new-game-btn-clicked-sound.mp3");
const handWhooshSound = new Audio("whoosh.mp3");
const gongSound = new Audio("gong.mp3");

function invertColor() {
  if (startBtn.style.backgroundImage === 'url("start_button.png")') {
    startBtn.style.backgroundImage = 'url("start_button_colors_inverted.png")';
  } else {
    startBtn.style.backgroundImage = 'url("start_button.png")';
  }
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
let hasNotChosen = true;
function playerHandOptionsAnimation(topValue, userChoice) {
  if (hasNotChosen) {
    newGameBtnClickSound.play();
    for (let i = topValue - 1; i < topValue + 1; i++) {
      playerHandOptionsDiv.style.top = `${i}%`;
    }
    if (userChoice) {
      hasNotChosen = false;
      rockPaperScissors(userChoice);
    }
  }
}
function rockPaperScissors(userChoice) {
  playerHand.src = "rock_hand.png";
  computerHand.src = "rock_hand.png";
  const choicesArr = ["rock", "paper", "scissor"];
  const computerChoice = choicesArr[Math.trunc(Math.random() * 3)];
  const handAnimationRepeat = setInterval(handAnimation, 800);
  setTimeout(() => {
    clearInterval(handAnimationRepeat);
    setTimeout(() => {
      gongSound.play();
      playerHand.src = `${userChoice}_hand.png`;
      computerHand.src = `${computerChoice}_hand.png`;
      doScoring(findWinner(userChoice, computerChoice));
      setTimeout(() => {
        newBtnClickedAnimation(false);
        hasNotChosen = true;
      }, 3000);
    }, 800);
  }, 2400);
}
function newBtnClickedAnimation(isVisible) {
  if (isVisible) {
    newGameBtn.style.width = "0";
    newGameBtn.style.height = "0";
    newGameBtn.style.transform = "rotate(360deg)";
    newGameBtn.style.visibility = "hidden";
  } else {
    newGameBtn.style.width = "344px";
    newGameBtn.style.height = "82px";
    newGameBtn.style.transform = "rotate(-360deg)";
    newGameBtn.style.visibility = "visible";
  }
}
function handAnimation() {
  handWhooshSound.play();
  const [user, computer] = document.getElementsByTagName("img");
  user.style.marginTop = "100px";
  computer.style.marginTop = "100px";
  setTimeout(() => {
    user.style.marginTop = "200px";
    computer.style.marginTop = "200px";
  }, 400);
}
const games = {
  userWin: [
    ["rock", "scissor"],
    ["scissor", "paper"],
    ["paper", "rock"],
  ],
  userLose: [
    ["rock", "paper"],
    ["scissor", "rock"],
    ["paper", "scissor"],
  ],
};
function findWinner(userChoice, computerChoice) {
  const choices = [userChoice, computerChoice];
  let outcome = "userWin";
  checkOutcomeLoop: for (let i = 0; i < 2; i++) {
    for (const game of games[outcome]) {
      if (choices.toString() === game.toString()) break checkOutcomeLoop;
    }
    outcome = i === 0 ? "userLose" : "userTie";
  }
  return outcome;
}
function doScoring(outcome) {
  let [playerScore, computerScore, gameCounter] = [
    Number(playerScoreEl.textContent),
    Number(computerScoreEl.textContent),
    Number(gameCounterEl.textContent),
  ];
  switch (outcome) {
    case "userWin":
      playerScoreEl.textContent = playerScore += 1;
      break;
    case "userLose":
      computerScoreEl.textContent = computerScore += 1;
      break;
  }
  gameCounterEl.textContent = gameCounter += 1;
}
