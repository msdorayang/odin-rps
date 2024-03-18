// function to randomly return "rock", "paper", or "scissors".
function getComputerChoice(){
   let computerChoice = Math.floor(Math.random() * 3) + 1
   if (computerChoice === 1) {
    computerChoice = "rock";
   } else if (computerChoice === 2) {
    computerChoice = "paper";
   } else {
    computerChoice = "scissors";
   }
   return computerChoice;
}

//function for users to select their choice
function getUserChoice () {
    let userChoice = prompt ("rock, paper, or scissors?").toLowerCase();
    return userChoice;
}

//function to play single round
function playRound () {
    // variations call the function to save the return value of the call
    var computerChoice = getComputerChoice();
    var userChoice = getUserChoice();
    console.log("You've selected " + userChoice);
    console.log("The computer has selected " + computerChoice);
    // user and computer choosing the same thing
    if (userChoice === "rock" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "paper") {
        result = "It's a tie!";
    } 
    // user wins
    else if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "rock") {
        result = "You win!";
    }
    // user loses
    else if (userChoice === "rock" && computerChoice === "paper" || userChoice === "scissors" && computerChoice === "rock" || userChoice === "paper" && computerChoice === "scissors") {
        result = "You lose!";
    } else {
        result = "invalid entry, try again!";
    }
    console.log(result);
}