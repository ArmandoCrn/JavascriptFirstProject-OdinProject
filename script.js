//Funzione che determina la scelta randomica effettuata dal computer

function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  //Mettendo nella moltiplicazione il 3 andremo a dire che
  //i numeri potranno essere da 0 fino a 2

  let result = "";

  switch (random) {
    case 0:
      result = "Rock";
      break;

    case 1:
      result = "Paper";
      break;

    default:
      result = "Scissor";
  }

  return result;
}

//Funzione che determina un singolo round di gioco.
//Per ora non sono riuscito a creare una Regular Expression
//per essere case sensitive rendo tutta l'ipotetica stringa
//in lowercase così so quale sarà la stringa che riceveremo

function singleRound(playerSelection, computerSelection) {
  let result = "";

  playerSelection = playerSelection.toLowerCase();

  //TODO: RISOLVILO CON UNA REGEXP DI MER*

  if (playerSelection === "rock") {
    if (computerSelection === "Paper") {
      result = "You Lose! Paper beats Rock";
    }
  }

  //   ("You Lose! Scissor beats Paper");
  //   ("You Lose! Rock beats Scissor");
  return result;
}

let playerSelection = "rock";
let computerSelection = computerPlay();

console.log(singleRound(playerSelection, computerSelection));
