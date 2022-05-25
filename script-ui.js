/*=============
        UI
=============*/

// - BUTTONS -
const rockBtn = document.querySelector(".rock.emoji");
const paperBtn = document.querySelector(".paper.emoji");
const scissorsBtn = document.querySelector(".scissors.emoji");

// - TEXT AND ICON -
const scoreInfo = document.querySelector(".main h2");
const scoreResult = document.querySelector(".main h3");
const playerEmoji = document.querySelector(".emoji.player");
const computerEmoji = document.querySelector(".emoji.computer");
const scorePlayer = document.querySelector("#score-player");
const scoreComputer = document.querySelector("#score-computer");

// - MODAL -
const modal = document.querySelector("#modal");
const modalResult = document.querySelector("#result");
const btnAgain = document.querySelector("#again");

// Click e succedono cose
rockBtn.addEventListener("click", () => fiveGame("rock"));
paperBtn.addEventListener("click", () => fiveGame("paper"));
scissorsBtn.addEventListener("click", () => fiveGame("scissors"));
btnAgain.addEventListener("click", newGame);

window.addEventListener("keydown", noEscape);

/*============
  FUNCTIONS
============*/

// Global Score
let playerScore = 0;
let computerScore = 0;

// Non si può uscire dal game over
function noEscape(e) {
  if (e.keyCode === 27) {
    e.preventDefault();
  }
}

// 5 Partite
function fiveGame(player) {
  if (player === "rock") {
    game("rock");
  } else if (player === "paper") {
    game("paper");
  } else {
    game("scissors");
  }

  if (playerScore === 5 || computerScore === 5) {
    stop();
  }
}

// New Game
function newGame() {
  scoreInfo.innerText = "Rock, Paper or Scissors?";
  scoreResult.innerText = "First to score 5 points wins the game";
  playerEmoji.innerText = "❔";
  computerEmoji.innerText = "❔";
  scorePlayer.innerText = "0";
  scoreComputer.innerText = "0";
  modal.close();

  playerScore = 0;
  computerScore = 0;
}

// Stop all
function stop() {
  if (playerScore === 5) {
    modalResult.innerText = "You Won!";
  } else if (computerScore === 5) {
    modalResult.innerText = "You lost...";
  }

  modal.showModal();
}

// One game
function game(player) {
  let computer = computerPlay();

  switch (player) {
    case "rock":
      playerEmoji.innerText = "👊🏻";

      if (computer === "rock") {
        tie("Rock", "Rock");
        computerEmoji.innerText = "👊🏻";
      } else if (computer === "paper") {
        lose("Rock", "Paper");
        computerEmoji.innerText = "✋🏻";
      } else if (computer === "scissors") {
        win("Rock", "Scossors");
        computerEmoji.innerText = "✌🏻";
      }
      break;

    case "paper":
      playerEmoji.innerText = "✋🏻";

      if (computer === "rock") {
        win("Paper", "Rock");
        computerEmoji.innerText = "👊🏻";
      } else if (computer === "paper") {
        tie("Paper", "Paper");
        computerEmoji.innerText = "✋🏻";
      } else if (computer === "scissors") {
        lose("Paper", "Scissors");
        computerEmoji.innerText = "✌🏻";
      }
      break;

    case "scissors":
      playerEmoji.innerText = "✌🏻";

      if (computer === "rock") {
        lose("Scissors", "Rock");
        computerEmoji.innerText = "👊🏻";
      } else if (computer === "paper") {
        win("Scissors", "Paper");
        computerEmoji.innerText = "✋🏻";
      } else if (computer === "scissors") {
        tie("Scissors", "Scissors");
        computerEmoji.innerText = "✌🏻";
      }
      break;
  }
}

// What appen when you choose?
function win(player, computer) {
  scoreInfo.innerText = "You won!";
  scoreResult.innerText = `${player} beats ${computer}`;
  playerScore++;
  scorePlayer.innerText = playerScore;
}

function tie(player, computer) {
  scoreInfo.innerText = "It's a tie!";
  scoreResult.innerText = `${player} ties with ${computer}`;
}

function lose(player, computer) {
  scoreInfo.innerText = "You lost!";
  scoreResult.innerText = `${player} is beaten by ${computer}`;
  computerScore++;
  scoreComputer.innerText = computerScore;
}

// Scelta Random del computer
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  result = "";

  switch (random) {
    case 0:
      result = "rock";
      break;

    case 1:
      result = "paper";
      break;

    default:
      result = "scissors";
  }

  return result;
}
