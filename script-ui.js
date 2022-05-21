// Element HTML in JavaScript
// - BUTTONS -
const rockBtn = document.querySelector(".rock.emoji");
const paperBtn = document.querySelector(".paper.emoji");
const scissorsBtn = document.querySelector(".scissors.emoji");

// - TEXT -
const scoreInfo = document.querySelector(".main h2");
const scoreResult = document.querySelector(".main h3");

// Click e succedono cose
rockBtn.addEventListener("click", playerRock);
paperBtn.addEventListener("click", playerPaper);
scissorsBtn.addEventListener("click", playerScissors);

// Scelta del player: Rock
function playerRock() {
  let computer = computerPlay();
  let resultInfo = "";
  let resultScore = "";

  switch (computer) {
    case "rock":
      resultInfo = "It's a tie!";
      resultScore = "Rock ties with Rock";
      break;

    case "paper":
      resultInfo = "You lost!";
      resultScore = "Rock is beaten by Paper";
      break;

    case "scissors":
      resultInfo = "You won!";
      resultScore = "Rock beats Scissors";
      break;
  }

  scoreInfo.innerText = resultInfo;
  scoreResult.innerText = resultScore;
  console.log(resultInfo);
}

// Scelta del player: Paper
function playerPaper() {
  let computer = computerPlay();
  let resultInfo = "";
  let resultScore = "";

  switch (computer) {
    case "rock":
      resultInfo = "You won!";
      resultScore = "Rock beats Paper";
      break;

    case "paper":
      resultInfo = "It's a tie!";
      resultScore = "Paper ties with Paper";
      break;

    case "scissors":
      resultInfo = "You lost!";
      resultScore = "Paper is beaten by Scissors";
      break;
  }

  scoreInfo.innerText = resultInfo;
  scoreResult.innerText = resultScore;
  console.log(resultInfo);
}

// Scelta del player: Scissors
function playerScissors() {
  let computer = computerPlay();
  let resultInfo = "";
  let resultScore = "";

  switch (computer) {
    case "rock":
      resultInfo = "You lost!";
      resultScore = "Scissors is beaten by Rock";
      break;

    case "paper":
      resultInfo = "You won!";
      resultScore = "Scissors beats Paper";
      break;

    case "scissors":
      resultInfo = "It's a tie!";
      resultScore = "Scissors ties with Scissors";
      break;
  }

  scoreInfo.innerText = resultInfo;
  scoreResult.innerText = resultScore;
  console.log(resultInfo);
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
