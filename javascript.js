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

// Global variables for user's score, computer's score, and displaying computer's choice. computerChoiceDisplay will be redefined every time getComputerChoice is run on button click.
let userScore = 0;
let computerScore = 0;
let computerChoiceDisplay;
let winner = "You win this round!";
let loser = "You lose this round!";
let userClickRock = "rock";
let userClickPaper = "paper";
let userClickScissors = "scissors";

// Adds event listeners for the rock, paper, and scissors buttons. Each button runs the playRound function and passes "rock", "paper", or "scissors" as a string into the playRound function so it can be compared to the string returned by the getComputerChoice function.

// Rock button event listeners
let userAnswerRock = document.getElementById("rock");

userAnswerRock.addEventListener("click", () => {
    computerChoiceDisplay = getComputerChoice();
    console.log(playRound(userClickRock, computerChoiceDisplay))
    document.getElementById("youChose").textContent = "You chose rock!";
    document.getElementById("computerChose").textContent = "The computer chose " + computerChoiceDisplay + "!";
});

// Paper button event listeners
let userAnswerPaper = document.getElementById("paper");

userAnswerPaper.addEventListener("click", () => {
    computerChoiceDisplay = getComputerChoice();
    console.log(playRound(userClickPaper, computerChoiceDisplay))
    document.getElementById("youChose").textContent = "You chose paper!";
    document.getElementById("computerChose").textContent = "The computer chose " + computerChoiceDisplay + "!";
});
// Scissor button event listeners
let userAnswerScissors = document.getElementById("scissors");

userAnswerScissors.addEventListener("click", () => {
    computerChoiceDisplay = getComputerChoice();
    console.log(playRound(userClickScissors, computerChoiceDisplay))
    document.getElementById("youChose").textContent = "You chose scissors!";
    document.getElementById("computerChose").textContent = "The computer chose " + computerChoiceDisplay + "!";
});

// playRound compares the user's choice, based on the button they clicked, to the choice made by the computer. Depending on the comparison, either the user or the computer wins the game.

function playRound(userButtonClick, computerAnswer) {
    const userSelection = userButtonClick;
    const computerSelection = computerAnswer;
    console.log(userSelection);
    console.log(computerSelection);
    if (userSelection === computerSelection) {
        document.getElementById("whoWins").textContent = "No winner this round. It's a tie!";
    } else if (userSelection === "rock" && computerSelection === "scissors") {
        document.getElementById("whoWins").textContent = "Rock beats scissors. You win this round!";
    } else if (userSelection === "paper" && computerSelection === "rock") {
        document.getElementById("whoWins").textContent = "Paper beats rock. You win this round!";
    } else if (userSelection === "scissors" && computerSelection === "paper") {
        document.getElementById("whoWins").textContent = "Scissors beats paper. You win this round!";
    } else if (userSelection === "rock" && computerSelection === "paper") {
        document.getElementById("whoWins").textContent = "Paper beats rock. You lose this round!";
    } else if (userSelection === "paper" && computerSelection === "scissors") {
        document.getElementById("whoWins").textContent = "Scissors beats paper. You lose this round!";
    } else if (userSelection === "scissors" && computerSelection === "rock") {
        document.getElementById("whoWins").textContent = "Rock beats scissors. You lose this round!";
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