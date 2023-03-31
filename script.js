let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
  }
  
  function compareGuesses(userGuess, computerGuess, targetNumber) {
    const userDiff = Math.abs(targetNumber - userGuess);
    const computerDiff = Math.abs(targetNumber - computerGuess);
    
    if (userDiff <= computerDiff) {
      return true; // Human wins
    } else {
      return false; // Computer wins
    }
  }
  
  function updateScore(winner) {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
  function advanceRound() {
    currentRoundNumber++;
  }