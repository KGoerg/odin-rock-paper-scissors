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
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else
        return "Scissors";
    }

//"Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs. Hint: Use the prompt method to get the user’s input.""

// User will need a prompt telling them, "Enter your selection: Rock, Paper, or Scissors."
// If the user enters "Rock or rock", return "Rock".
// If the user enters "Paper or paper", return "Paper".
// If the user enters "Scissors or scissors", return "Scissors".

//Below code works but want to try something
// function getHumanChoice () {
//     let userAnswer = prompt("Enter your selection: Rock, Paper, or Scissors");
//     if (userAnswer === "Rock") {
//         return "Rock";
//     } else if (userAnswer === "rock") {
//         return "Rock";
//     } else if (userAnswer === "Paper") {
//         return "Paper";
//     } else if (userAnswer === "paper") {
//         return "Paper";
//     } else if (userAnswer === "Scissors") {
//         return "Scissors";
//     } else
//         return "Scissors";
//     }

// I wanted to experiment because the below code is what I envisioned initially, and the above version is what I had to settle with when this didn't work. I had the right idea with using ||, but writing "Rock" || "rock" wouldn't work because I needed to explicitly tell the computer "userAnswer ==== "Rock" || userAnswer === "rock". Including the variable was the important piece I was missing.
function getHumanChoice() {
    let userAnswer = prompt("Enter your selection: Rock, Paper, or Scissors");
    if (userAnswer === "Rock" || userAnswer === "rock") {
        return "Rock";
    } else if (userAnswer === "Paper" || userAnswer === "paper") {
        return "Paper";
    } else
        return "Scissors";
    }

console.log(getHumanChoice(""));

//Declare the players score variables

const humanScore = 0;
const computerScore = 0;

//Write a function that calls the user's choice and the computer's choice, compares them (plays a round), adds + 1 to the winner's score, and announces the winner.
// Rock beats scissors
// Paper beats rock 
// Scissors beats paper 

//I'm apparently supposed to make getHumanChoice case-insensitive within playRound???
function playRound (humanChoice, computerChoice) {
    return humanSelection && computerSelection;
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));