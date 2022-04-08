function computerPlay() {
  let computerTurn = Math.random();
  if (computerTurn < 0.333) {
    return "Rock";
  }
  if (computerTurn < 0.666) return "Scissors";
  return "Paper";
}

function playerPlay() {
  let choice = prompt("Paper, Rock or Scissors?");

  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

function playRound(computerChoice, playerChoice) {
  console.log(playerChoice);
  if (computerChoice === playerChoice) {
    console.log("Empate");
    return 0;
  }
  switch (computerChoice) {
    case "Rock":
      if (playerChoice === "Scissors") {
        console.log("Perdeste!");
      } else {
        console.log("Ganhaste!");
      }
      return 1;
    case "Paper":
      if (playerChoice === "Rock") {
        console.log("Perdeste!");
      } else {
        console.log("Ganhaste!");
      }
      return 1;
    case "Scissors":
      if (playerChoice === "Paper") {
        console.log("Perdeste!");
      } else {
        console.log("Ganhaste!");
      }
      return 1;
  }
}

function playGame() {
  for (i = 0; i < 5; i++) playRound(computerPlay(), playerPlay());
}

playGame();
