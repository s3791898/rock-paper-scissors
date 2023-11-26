function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissor";
    default:
      return "Invalid choice";
  }
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (playerChoice === "rock" && computerChoice === "scissor") {
    return "You Win! Rock beats Scissor";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerChoice === "scissor" && computerChoice === "paper") {
    return "You Win! Scissor beats Paper";
  } else {
    return `You Lose! ${capitaliseFirstLetter(
      computerChoice
    )} beats ${capitaliseFirstLetter(playerChoice)}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  const validChoices = ["rock", "paper", "scissor"];

  for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt(
      "Enter your choice (rock, paper, or scissor):"
    ).toLowerCase();

    // Validate user input
    while (!validChoices.includes(playerSelection)) {
      alert("Invalid choice! Please enter rock, paper or scissor.");
      playerSelection = prompt(
        "Enter your choice (rock, paper, or scissor):"
      ).toLowerCase();
    }

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result.includes("You Win!")) {
      playerScore++;
      alert("You Won this round!");
    } else if (result.includes("You Lose!")) {
      computerScore++;
      alert("You Lost this round...");
    } else {
      alert("This round was a Tie!");
    }
  }

  console.log("Game Over!");
  console.log(`Player's Score: ${playerScore}`);
  console.log(`Computer's Score: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("Congratulations You Won!");
  } else if (playerScore < computerScore) {
    console.log("You Lost, Better Luck Next Time!");
  } else {
    console.log("It's a Tie!");
  }
}

game();
