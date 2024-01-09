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

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return "It's a Draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        playerScore = playerScore + 1;
        return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection}!`;
    } else {
        computerScore = computerScore + 1;
        return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.substring(1)} beats ${playerSelection}!`;
    }

}

function game() {
    while (playerScore < 3 && computerScore < 3) {
        console.log(playRound(playerSelection,computerSelection));
    }

    if (playerScore === 3) {
        return `Congratulations! You've won the game! ${playerScore} to ${computerScore}`
    } else {
        return `Too bad! You lost to the computer ${computerScore} to ${playerScore}`
    }
}

let playerSelection = '';
let playerScore = 0;
let computerSelection = '';
let computerScore = 0;
console.log(game());