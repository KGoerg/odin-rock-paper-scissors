// Below function gets a random number between 0 and 2, and returns rock, paper, or scissors when function calculates 0, 1, or 2.

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "ROCK";
    } else if (randomNumber === 1) {
        return "PAPER";
    } else
        return "SCISSORS";
    }


// Global variables for human's score and computer's score.

let humanScore = 0;
let computerScore = 0;

// Adds event listeners for the rock, paper, and scissors buttons. Each button runs the playRound function and passes "ROCK", "PAPER", or "SCISSORS" as a string into the playRound function so it can be compared to the string returned by the getComputerChoice function.

let userAnswerRock = document.getElementById("rock");
userAnswerRock.addEventListener("click", () => {
    console.log(playRound("ROCK"))
});
userAnswerRock.addEventListener("click", () => {
    document.getElementById("youChose").textContent = "You chose rock!";
});
// userAnswerRock.addEventListener("click", () => {
//     document.getElementById("computerChose").textContent = "The computer chose " + computerSelection;
// });
    
let userAnswerPaper = document.getElementById("paper");
userAnswerPaper.addEventListener("click", () => {
    console.log(playRound("PAPER"));
});
userAnswerPaper.addEventListener("click", () => {
    document.getElementById("youChose").textContent = "You chose paper!";
});

let userAnswerScissors = document.getElementById("scissors");
userAnswerScissors.addEventListener("click", () => {
    console.log(playRound("SCISSORS"));
});
userAnswerScissors.addEventListener("click", () => {
    document.getElementById("youChose").textContent = "You chose scissors!";
});

// playRound compares the user's choice, based on the button they clicked, to the choice made by the computer. Depending on the comparison, either the user or the computer wins the game.

function playRound(userAnswerButton) {
    const humanSelection = userAnswerButton;
    const computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    let winner = "You win this round!";
    let loser = "You lose this round!";
    if (humanSelection === computerSelection) {
        return "No winner this round. It's a tie!";
    } else if (humanSelection === "ROCK" && computerSelection === "SCISSORS") {
        return winner + " Rock beats scissors. Your total score is " + ++humanScore + ".";
    } else if (humanSelection === "PAPER" && computerSelection === "ROCK") {
        return winner + " Paper beats rock. Your total score is " + ++humanScore + ".";
    } else if (humanSelection === "SCISSORS" && computerSelection === "PAPER") {
        return winner + " Scissors beats paper. Your total score is " + ++humanScore + ".";
    } else if (humanSelection === "ROCK" && computerSelection === "PAPER") {
        return loser + " Paper beats rock. The computer's total score is " + ++computerScore + ".";
    } else if (humanSelection === "PAPER" && computerSelection === "SCISSORS") {
        return loser + " Scissors beats paper. The computer's total score is " + ++computerScore + ".";
    } else if (humanSelection === "SCISSORS" && computerSelection === "ROCK") {
        return loser + " Rock beats scissors. The computer's total score is " + ++computerScore + ".";
    }
}


// Play 5 rounds by calling playRound 5 times.

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//        console.log(playRound()); 
//        }
// }

// Returns the total winner 

function announceWinner() {
    if (humanScore === 0 && computerScore === 0){
        return "Get ready to play some Rock, Paper, Scissors! Choose Rock, Paper, or Scissors by clicking the corresponding button."
    } else if (humanScore > computerScore) {
        return "You won, great job!";
    } else if (computerScore > humanScore) {
        return "You lost! Better luck next time."
    } else 
        return "No winners. You and the computer tied!";
};

console.log(announceWinner());