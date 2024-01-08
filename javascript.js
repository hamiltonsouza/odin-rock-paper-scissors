function getComputerChoice() {

    const computerOptions = ["rock","paper","scissors"];
    const computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelection;

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
       return "It's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return "You lose";
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));