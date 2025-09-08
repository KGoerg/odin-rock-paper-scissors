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
    if (randomNumber = 0) {
        return "Rock";
    } else if (randomNumber = 1) {
        return "Paper";
    } else (randomNumber = 2)
        return "Scissors";
    }

console.log(getComputerChoice())

// }
// function sum(a, b) {
//     return (a + b);
// }

// console.log(sum(18,4));