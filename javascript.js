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

// Adds event listeners for the rock, paper, and scissors buttons. Each button runs the playGame function and passes "rock", "paper", or "scissors" as a string into the playGame function so it can be compared to the string returned by the getComputerChoice function.

// Rock button event listeners
let userAnswerRock = document.getElementById("rock");

userAnswerRock.addEventListener("click", () => {
    computerChoiceDisplay = getComputerChoice();
    playGame("rock", computerChoiceDisplay);
    document.getElementById("roundChoices").textContent = `You chose rock, and the computer chose ${computerChoiceDisplay}!`;
});

// Paper button event listeners
let userAnswerPaper = document.getElementById("paper");

userAnswerPaper.addEventListener("click", () => {
    computerChoiceDisplay = getComputerChoice();
    playGame("paper", computerChoiceDisplay);
    document.getElementById("roundChoices").textContent = `You chose paper, and the computer chose ${computerChoiceDisplay}!`;
});
// Scissor button event listeners
let userAnswerScissors = document.getElementById("scissors");

userAnswerScissors.addEventListener("click", () => {
    computerChoiceDisplay = getComputerChoice();
    playGame("scissors", computerChoiceDisplay);
    document.getElementById("roundChoices").textContent = `You chose scissors, and the computer chose ${computerChoiceDisplay}!`;
});

// playGame compares the user's choice, based on the button they clicked, to the choice made by the computer. Depending on the comparison, either the user or the computer wins the round and, ultimately, the game.

function playGame(userButtonClick, computerAnswer) {
    const userSelection = userButtonClick;
    const computerSelection = computerAnswer;
    if (userSelection === computerSelection) {
        document.getElementById("roundWinner").textContent = "No winner this round. It's a tie!";
        //User Wins:
    } else if (userSelection === "rock" && computerSelection === "scissors") {
        document.getElementById("roundWinner").textContent = "Rock beats scissors. You win this round!";
        document.getElementById("userRunningScore").textContent = `Your Score: ${++userScore}`;
    } else if (userSelection === "paper" && computerSelection === "rock") {
        document.getElementById("roundWinner").textContent = "Paper beats rock. You win this round!";
        document.getElementById("userRunningScore").textContent = `Your Score: ${++userScore}`;
    } else if (userSelection === "scissors" && computerSelection === "paper") {
        document.getElementById("roundWinner").textContent = "Scissors beats paper. You win this round!";
        document.getElementById("userRunningScore").textContent = `Your Score: ${++userScore}`;
        //Computer Wins:
    } else if (userSelection === "rock" && computerSelection === "paper") {
        document.getElementById("roundWinner").textContent = "Paper beats rock. You lose this round!";
        document.getElementById("computerRunningScore").textContent = `Computer's Score: ${++computerScore}`;
    } else if (userSelection === "paper" && computerSelection === "scissors") {
        document.getElementById("roundWinner").textContent = "Scissors beats paper. You lose this round!";
        document.getElementById("computerRunningScore").textContent = `Computer's Score: ${++computerScore}`;
    } else if (userSelection === "scissors" && computerSelection === "rock") {
        document.getElementById("roundWinner").textContent = "Rock beats scissors. You lose this round!";
        document.getElementById("computerRunningScore").textContent = `Computer's Score: ${++computerScore}`;
    }
    announceWinner();
    // stopGame(); <-This doesn't work
};

function announceWinner() {
    if (userScore === 5 && computerScore < 5) {
        document.getElementById("winner").textContent = "YOU WIN!!! Refresh the page to play again.";
    } else if (computerScore === 5 && userScore < 5) {
        document.getElementById("winner").textContent = "YOU LOSE!!! Refresh the page to play again.";
    }
};

// This function doesn't work :(
// function stopGame() {
//     if (userScore === 5 || computerScore === 5) {
//         userAnswerRock.addEventListener("click", function(event) {
//             event.preventDefault()
//         });
//     }
// }