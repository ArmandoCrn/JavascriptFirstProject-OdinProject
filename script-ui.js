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

// 5 Partite
function fiveGame(player) {
  if (player === "rock") {
    playerRock();
  } else if (player === "paper") {
    playerPaper();
  } else {
    playerScissors();
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

// Non si può uscire dal game over
function noEscape(e) {
  if (e.keyCode === 27) {
    e.preventDefault();
  }
}

// Scelta del player: Rock
function playerRock() {
  let computer = computerPlay();
  let resultInfo = "";
  let resultScore = "";
  let emojiComputer = "";

  switch (computer) {
    case "rock":
      resultInfo = "It's a tie!";
      resultScore = "Rock ties with Rock";
      emojiComputer = "👊🏻";
      break;

    case "paper":
      resultInfo = "You lost!";
      resultScore = "Rock is beaten by Paper";
      emojiComputer = "✋🏻";
      computerScore++;
      scoreComputer.innerText = computerScore;
      break;

    case "scissors":
      resultInfo = "You won!";
      resultScore = "Rock beats Scissors";
      emojiComputer = "✌🏻";
      playerScore++;
      scorePlayer.innerText = playerScore;
      break;
  }

  scoreInfo.innerText = resultInfo;
  scoreResult.innerText = resultScore;
  playerEmoji.innerText = "👊🏻";
  computerEmoji.innerText = emojiComputer;
}

function game(player) {
  let computer = computerPlay();

  switch (player) {
    case "rock":
      playerEmoji.innerText = "👊🏻";

      if (computer === "rock") {
        tie("Rock", "Rock");
        computerEmoji.innerText = "👊🏻";
      } else if (computer === "paper") {
      } else if (compute === "scissors") {
      }
      break;

    case "paper":
      break;
  }
}

// function win(player, computer) {
//   resultInfo = "You won!";
//   resultScore = `${player} beats ${computer}`;
//   playerScore++;
//   scorePlayer.innerText = playerScore;

// }

function tie(player, computer) {
  scoreInfo.innerText = "It's a tie!";
  scoreResult.innerText = `${player} ties with ${computer}`;
}

// function lose(player, computer) {
//   resultInfo = "You lost!";
//   resultScore = `${player} is beaten by ${computer}`;
//   computerScore++;
//   scoreComputer.innerText = computerScore;
// }

/*

function fiveGame(player) {
  if (player === "rock") {
    game("rock");
  } 
  
  
  
  
  else if (player === "paper") {
    playerPaper();
  } else {
    playerScissors();
  }

  if (playerScore === 5 || computerScore === 5) {
    stop();
  }
}












*/

// // Scelta del player: Paper
// function playerPaper() {
//   let computer = computerPlay();
//   let resultInfo = "";
//   let resultScore = "";
//   let emojiComputer = "";

//   switch (computer) {
//     case "rock":
//       resultInfo = "You won!";
//       resultScore = "Rock beats Paper";
//       emojiComputer = "👊🏻";
//       playerScore++;
//       scorePlayer.innerText = playerScore;
//       break;

//     case "paper":
//       resultInfo = "It's a tie!";
//       resultScore = "Paper ties with Paper";
//       emojiComputer = "✋🏻";
//       break;

//     case "scissors":
//       resultInfo = "You lost!";
//       resultScore = "Paper is beaten by Scissors";
//       emojiComputer = "✌🏻";
//       computerScore++;
//       scoreComputer.innerText = computerScore;
//       break;
//   }

//   scoreInfo.innerText = resultInfo;
//   scoreResult.innerText = resultScore;
//   playerEmoji.innerText = "✋🏻";
//   computerEmoji.innerText = emojiComputer;
//   return resultInfo;
// }

// // Scelta del player: Scissors
// function playerScissors() {
//   let computer = computerPlay();
//   let resultInfo = "";
//   let resultScore = "";
//   let emojiComputer = "";

//   switch (computer) {
//     case "rock":
//       resultInfo = "You lost!";
//       resultScore = "Scissors is beaten by Rock";
//       emojiComputer = "👊🏻";
//       computerScore++;
//       scoreComputer.innerText = computerScore;
//       break;

//     case "paper":
//       resultInfo = "You won!";
//       resultScore = "Scissors beats Paper";
//       emojiComputer = "✋🏻";
//       playerScore++;
//       scorePlayer.innerText = playerScore;
//       break;

//     case "scissors":
//       resultInfo = "It's a tie!";
//       resultScore = "Scissors ties with Scissors";
//       emojiComputer = "✌🏻";
//       break;
//   }

//   scoreInfo.innerText = resultInfo;
//   scoreResult.innerText = resultScore;
//   playerEmoji.innerText = "✌🏻";
//   computerEmoji.innerText = emojiComputer;
//   return resultInfo;
// }

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
