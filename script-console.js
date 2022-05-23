//Funzione che determina la scelta randomica effettuata dal computer
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  //Mettendo nella moltiplicazione il 3 andremo a dire che
  //i numeri potranno essere da 0 fino a 2

  let result = "";

  //Trasformiamo i numeri in parole
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

  console.log(`The PC choose: ${result}`);
  return result;
}

//Funzione che fa partire il gioco
function singleRound(player, pc) {
  let result = "";

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
    //Cosa succede se il player inserisce cose strane
  } else {
    result = "Please, choose only between: Rock, Paper and Scissor";
  }

  console.log(result);
  return result;
}

// Creiamo una partita che dura 5 round;
// function game() {
//   let pcScore = 0;
//   let playerScore = 0;

//   while (pcScore !== 5 && playerScore !== 5) {
//     let playerSelection = prompt("Choose");

//     if (playerSelection === null) {
//       break;
//     }

//     playerSelection = playerSelection.toLocaleLowerCase();

//     let comparison = singleRound(playerSelection, computerPlay());

//     comparison = comparison.slice(0, 8);

//     if (comparison === "You Lose") {
//       pcScore++;
//     } else if (comparison === "You Win!") {
//       playerScore++;
//     }
//     console.log(`Pc Score: ${pcScore} -`, `Player Score: ${playerScore}`);
//   }

//   if (pcScore < playerScore) {
//     console.log("You Win! C:");
//     alert("The Winner is the Player! :D");
//   } else if (pcScore > playerScore) {
//     console.log("You Lose! :C");
//     alert("The Winner is the Machine! D:");
//   }
// }

// game();

//FIXME: CON UNA REGEXP DOVREBBE essere player.match(/^\s*(?:rock|paper|scissors)\s*$/i)

//TODO: Serve per avviare un game singolo.
// singleRound(playerSelection, computerPlay());
