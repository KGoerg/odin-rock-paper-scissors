// // Pseudocode:
// "Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”"

// Hint was given to use Math.random to return a random number >= 0 and < 1. 

// Math.random returns a random number between 0 and .9999999. Make it so that Math.random spits out 1-3. We need to multiply Math.random by 3, then round that answer with Math.floor. This should get us 1-3? -- It actually gives us 0-2 but that's still 3 numbers and makes sense! --

// From the output of randomNumber:
// Tie "rock" variable to 0.
// Tie "paper" variable to 1.
// Tie "scissors" variable to 2.

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "ROCK";
    } else if (randomNumber === 1) {
        return "PAPER";
    } else
        return "SCISSORS";
    }

// console.log(getComputerChoice())

//"Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs. Hint: Use the prompt method to get the user’s input.""

// User will need a prompt telling them, "Enter your selection: Rock, Paper, or Scissors."
// If the user enters "Rock or rock", return "ROCK".
// If the user enters "Paper or paper", return "PAPER".
// If the user enters "Scissors or scissors", return "SCISSORS".

function getHumanChoice() {
    let userAnswer = prompt("Enter your selection: Rock, Paper, or Scissors");
    userAnswer = userAnswer.toUpperCase();
    return userAnswer;
    }

// console.log(getHumanChoice());

// //Declare the players score variables

let humanScore = 0;
let computerScore = 0;

// //Write a function that calls the user's choice and the computer's choice, compares them (plays a round), adds + 1 to the winner's score, and announces the winner.
// // Rock beats scissors
// // Paper beats rock 
// // Scissors beats paper 

function playRound() {
    const humanSelection = getHumanChoice();
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

// console.log(playRound(humanSelection, computerSelection));

// Write a function that plays 5 rounds of playRound, keeps track of the scores, and announces a winner at the end.
// "Move your playRound function and score variables so that they’re declared inside of the new playGame function"
// "Play 5 rounds by calling playRound 5 times."

function playGame() {
    for (let i = 0; i < 5; i++) {
       console.log(playRound()); 
       }
}

function announceWinner() {
    if (humanScore > computerScore) {
        return "You won, great job!";
    } else if (computerScore > humanScore) {
        return "You lost! Better luck next time."
    } else 
        return "";
}

playGame();
// announceWinner();

console.log(humanScore);
console.log(computerScore);