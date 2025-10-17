// Below function gets a random number between 0 and 2, and returns rock, paper, or scissors when function calculates 0, 1, or 2.

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else
        return "scissors";
    };
// Creates variable to display the above function's result in the DOM. Will be redefined every time getComputerChoice is run on button click.
let computerChoiceDisplay;
// Global variables for user's score and computer's score.

let userScore = 0;
let computerScore = 0;

// Adds event listeners for the rock, paper, and scissors buttons. Each button runs the playRound function and passes "rock", "paper", or "scissors" as a string into the playRound function so it can be compared to the string returned by the getComputerChoice function.

// Rock button event listeners
let userAnswerRock = document.getElementById("rock");

userAnswerRock.addEventListener("click", () => {
    computerChoiceDisplay = getComputerChoice();
    console.log(playRound("rock", computerChoiceDisplay))
});
userAnswerRock.addEventListener("click", () => {
    document.getElementById("youChose").textContent = "You chose rock!";
});
userAnswerRock.addEventListener("click", () => {
    document.getElementById("computerChose").textContent = "The computer chose " + computerChoiceDisplay + "!";
});
// Paper button event listeners
let userAnswerPaper = document.getElementById("paper");
userAnswerPaper.addEventListener("click", () => {
    console.log(playRound("paper"));
});
userAnswerPaper.addEventListener("click", () => {
    document.getElementById("youChose").textContent = "You chose paper!";
});
// Scissor button event listeners
let userAnswerScissors = document.getElementById("scissors");
userAnswerScissors.addEventListener("click", () => {
    console.log(playRound("scissors"));
});
userAnswerScissors.addEventListener("click", () => {
    document.getElementById("youChose").textContent = "You chose scissors!";
});

// playRound compares the user's choice, based on the button they clicked, to the choice made by the computer. Depending on the comparison, either the user or the computer wins the game.

function playRound(userButtonClick, computerAnswer) {
    const userSelection = userButtonClick;
    const computerSelection = computerAnswer;
    console.log(userSelection);
    console.log(computerSelection);
    let winner = "You win this round!";
    let loser = "You lose this round!";
    if (userSelection === computerSelection) {
        return "No winner this round. It's a tie!";
    } else if (userSelection === "rock" && computerSelection === "scissors") {
        return winner + " Rock beats scissors. Your total score is " + ++userScore + ".";
    } else if (userSelection === "paper" && computerSelection === "rock") {
        return winner + " Paper beats rock. Your total score is " + ++userScore + ".";
    } else if (userSelection === "scissors" && computerSelection === "paper") {
        return winner + " Scissors beats paper. Your total score is " + ++userScore + ".";
    } else if (userSelection === "rock" && computerSelection === "paper") {
        return loser + " Paper beats rock. The computer's total score is " + ++computerScore + ".";
    } else if (userSelection === "paper" && computerSelection === "scissors") {
        return loser + " Scissors beats paper. The computer's total score is " + ++computerScore + ".";
    } else if (userSelection === "scissors" && computerSelection === "rock") {
        return loser + " Rock beats scissors. The computer's total score is " + ++computerScore + ".";
    }
};

// Play 5 rounds by calling playRound 5 times.

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//        console.log(playRound()); 
//        }
// }

// Returns the total winner 

function announceWinner() {
    if (userScore === 0 && computerScore === 0){
        return "Get ready to play some Rock, Paper, Scissors! Choose Rock, Paper, or Scissors by clicking the corresponding button."
    } else if (userScore > computerScore) {
        return "You won, great job!";
    } else if (computerScore > userScore) {
        return "You lost! Better luck next time."
    } else 
        return "No winners. You and the computer tied!";
};

console.log(announceWinner());