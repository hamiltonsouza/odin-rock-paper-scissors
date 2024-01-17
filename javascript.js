function getComputerChoice() {

    const computerOptions = ["rock","paper","scissors"];
    const computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelection;

}

function playRound(playerSelection, computerSelection) {

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

function roundResult() {
    resultsDivDisplay.textContent = playRound(playerSelection,computerSelection);
}

function currentScore() {
    scoreDivDislay.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function finalWinner() {
    if (playerScore === 5) {
        winnerDivDislay.textContent = `Congratulations! You've won the game! The final score is ${playerScore} to ${computerScore}!`;
        resetScore();
    }
    if (computerScore === 5) {
        winnerDivDislay.textContent = `Too bad! You lost to the computer! The final score is ${computerScore} to ${playerScore}!`;
        resetScore();
    }
    else {
        return '';
    }
}

let playerSelection = '';
let playerScore = 0;
let computerSelection = '';
let computerScore = 0;

const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => {
    playerSelection = 'rock';
    roundResult();
    currentScore();
    finalWinner();
});

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => {
    playerSelection = 'paper';
    roundResult();
    currentScore();
    finalWinner();
});

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    roundResult();
    currentScore();
    finalWinner();
});

const resultsDiv = document.querySelector('.results');
const resultsDivDisplay = document.createElement('p');
resultsDiv.appendChild(resultsDivDisplay);

const scoreDiv = document.querySelector('.score');
const scoreDivDislay = document.createElement('p');
scoreDiv.appendChild(scoreDivDislay);

const winnerDiv = document.querySelector('.winner');
const winnerDivDislay = document.createElement('p');
winnerDiv.appendChild(winnerDivDislay);
