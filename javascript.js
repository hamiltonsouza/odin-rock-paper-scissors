function getComputerChoice() {

    const computerOptions = ["rock","paper","scissors"];
    const computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelection;

}

function getPlayerChoice() {

    const playerSelection = prompt("Choose: Rock, Paper or Scissors!");
    return playerSelection.toLowerCase();

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
       return "It's a Draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection}!`;
    } else {
        return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.substring(1)} beats ${playerSelection}!`;
    }

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));