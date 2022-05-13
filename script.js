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

  console.log(result);
  return result;
}

//Funzione che determina un singolo round di gioco.
//Per ora non sono riuscito a creare una Regular Expression
//per essere case sensitive rendo tutta l'ipotetica stringa
//in lowercase così so quale sarà la stringa che riceveremo

function singleRound(player, pc) {
  let result = "";

  //TODO: RISOLVILO CON UNA REGEXP DI MER* credo si usi .match

  //Cosa succede se il player sceglie "rock"?
  if (player === "rock") {
    if (pc === "Paper") {
      result = "You Lose! Paper beats Rock";
    } else if (pc === "Scissor") {
      result = "You Win! Rock beats Paper";
    } else {
      result = "You Tie! Rock vs Rock is a tie";
    }
    //Cosa succede se il player sceglie "paper"?
  } else if (player === "paper") {
    if (pc === "Paper") {
      result = "You Tie! Paper vs Paper is a tie";
    } else if (pc === "Scissor") {
      result = "You Lose! Scissor beats Paper";
    } else {
      result = "You Win! Paper beats Rock";
    }
    //Cosa succede se il player sceglie "scissor"?
  } else if (player === "scissor") {
    if (pc === "Paper") {
      result = "You Win! Scissor beats Paper";
    } else if (pc === "Scissor") {
      result = "You Tie! Scissor vs Scissor is a tie";
    } else {
      result = "You Lose! Rock beats Scissor";
    }
    //Cosa succede se il player inserisce cose strane?
  } else {
    result = "Please, choose only between: Rock, Paper and Scissor";
  }

  console.log(result);
  return result;
}

//Definiamo alcuni parametri che passeremo
//alla funzione come le scelte effettuate

let playerSelection = prompt("Choose").toLowerCase();
let computerSelection = computerPlay();

// function game() {
//   let pcScore = 0;
//   let playerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     singleRound(playerSelection, computerSelection);

//     // if() {
//     //   pcScore++;
//     // }else {
//     //   playerScore++;
//     // }
//   }

//   if (pcScore > playerScore) {
//     return "The Winner is the Player! :D";
//   } else {
//     return "The Winner is the Machine! D:";
//   }
// }

// console.log(game());

/*

serve un counter per le nostre vittore
e un counter per le vittorie del pc
quando uno dei due valori arriva a 5 la partita mostra il vincitore

Come faccio aumentare lo score interno a game?

*/
