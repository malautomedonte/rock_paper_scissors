console.log("I'm in! 😎");

const humanScoreDOM = document.getElementById("human-score");
const computerScoreDOM = document.getElementById("computer-score");
const roundsDOM = document.getElementById("round");

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) return "rock";
  if (computerChoice === 1) return "paper";
  if (computerChoice === 2) return "scissors";
}
// console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice;
  while (!["rock", "paper", "scissors"].includes(humanChoice)) {
    humanChoice = prompt(
      'Please type "rock", "paper" or "scissors" and press ENTER'
    )?.toLowerCase();
    if (!humanChoice) return null;
  }
  return humanChoice;
}

// function getHumanChoice() {
//   const humanChoice = prompt(
//     'Please type "rock", "paper" or "scissors" and press ENTER'
//   );
//   humanChoice.toLowerCase();

//   if (
//     humanChoice === "rock" ||
//     humanChoice === "paper" ||
//     humanChoice === "scissors"
//   ) {
//     return humanChoice;
//   } else {
//     alert("Invalid input!");
//   }
// }
// console.log(getHumanChoice());
let computerScore = 0;
let humanScore = 0;
let rounds = 0;

function results() {
  if (rounds === 5) {
    if (humanScore > computerScore) {
      console.log("You won the match!");
    } else if (computerScore === humanScore) {
      console.log("Tie!");
    } else {
      console.log("You lost the match!");
    }
  }
}

function displayScores() {
  humanScoreDOM.innerText = humanScore;
  computerScoreDOM.innerText = computerScore;
  roundsDOM.innerText = rounds;
  console.log("----------------");
  console.log("Player Score: ", humanScore);
  console.log("Computer Score: ", computerScore);
  console.log("Round nr.: ", rounds);
  results();
  console.log("----------------");
}

function playGame() {
  while (rounds < 5) {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice) humanChoice.toLowerCase();

      if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        console.log("Tie!");
      }

      if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return console.log(`You won. ${humanChoice} beats ${computerChoice}!`);
      } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return console.log(`You lost. ${computerChoice} beats ${humanChoice}!`);
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return console.log(`You won. ${humanChoice} beats ${computerChoice}!`);
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return console.log(`You lost. ${computerChoice} beats ${humanChoice}!`);
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return console.log(`You lost. ${computerChoice} beats ${humanChoice}!`);
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        computerScore++;
        return console.log(`You won. ${humanChoice} beats ${computerChoice}!`);
      }
    }
    rounds++;
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    displayScores();
  }
}

playGame();
