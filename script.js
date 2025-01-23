console.log("I'm in! 😎");

// DOM Elements
const humanScoreDOM = document.getElementById("human-score");
const computerScoreDOM = document.getElementById("computer-score");
const roundsDOM = document.getElementById("round");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const messagePara = document.querySelector("#message");
const restartButton = document.querySelector("#reset");

// Outcomes Object
const outcomes = {
  rock: { rock: "tie", paper: "lose", scissors: "win" },
  paper: { rock: "win", paper: "tie", scissors: "lose" },
  scissors: { rock: "lose", paper: "win", scissors: "tie" },
};

// Initialize game state
function initializeGame() {
  return {
    computerScore: 0,
    humanScore: 0,
    rounds: 0,
  };
}

// Game state object
let gameState = initializeGame();

// Helper Functions
function getComputerChoice() {
  const rpsArr = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * rpsArr.length);
  return rpsArr[computerChoice];
}

function displayScores() {
  humanScoreDOM.innerText = gameState.humanScore;
  computerScoreDOM.innerText = gameState.computerScore;
  roundsDOM.innerText = gameState.rounds;
}

function displayMessage(message) {
  messagePara.innerText = message;
}

function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

function enableButtons() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}

function displayWinner() {
  const winnerMessage =
    gameState.humanScore > gameState.computerScore
      ? "You won the match!"
      : "You lost the match!";
  displayMessage(
    `${winnerMessage} Final score: ${gameState.humanScore} - ${gameState.computerScore}`
  );
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = outcomes[humanChoice][computerChoice];

  if (result === "win") {
    gameState.humanScore++;
    displayMessage(`You won! ${humanChoice} beats ${computerChoice}!`);
  } else if (result === "lose") {
    gameState.computerScore++;
    displayMessage(`You lost! ${computerChoice} beats ${humanChoice}!`);
  } else {
    gameState.humanScore++;
    gameState.computerScore++;
    displayMessage(`It's a tie! Both chose ${humanChoice}.`);
  }

  gameState.rounds++;
  displayScores();

  if (gameState.rounds === 5) {
    displayWinner();
    disableButtons();
    restartButton.style.display = "block";
  }
}

// Restart Game Functionality
function restartGame() {
  gameState = initializeGame();
  displayMessage("Make your choice!");
  displayScores();
  enableButtons();
  restartButton.style.display = "none";
}

// Event Listeners
rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));
restartButton.addEventListener("click", restartGame);

// Initialize the game
document.addEventListener("DOMContentLoaded", () => {
  gameState = initializeGame();
  displayScores();
  displayMessage("Make your choice!");
  restartButton.style.display = "none";
});
