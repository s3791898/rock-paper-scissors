function game() {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  // Function to start playing the game
  function playGame() {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesLeft");
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const computerChoiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerChoiceNumber];

        // Function to check who wins
        winner(this.innerText, computerChoice);

        if (moves == 10) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  }

  // Function to decide the winner
  function winner(player, computer) {
    const result = document.querySelector(".result");
    const playerScoreCount = document.querySelector(".p-count");
    const computerScoreCount = document.querySelector(".c-count");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.textContent = "Draw";
    } else if (player == "rock") {
      if (computer == "paper") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreCount.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreCount.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreCount.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreCount.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreCount.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreCount.textContent = playerScore;
      }
    }
  }

  // Function to run when the game is over
  function gameOver(playerOptions, movesLeft) {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");

    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    chooseMove.innerText = "Game Over";
    chooseMove.style.fontSize = "24px";
    movesLeft.style.display = "none";

    if (playerScore > computerScore) {
      result.innerText = "Congratulations You Won!";
      result.style.color = "#308D46";
      result.style.fontSize = "24px";
    } else if (playerScore < computerScore) {
      result.innerText = "Unfortunately You Lost...";
      result.style.color = "red";
      result.style.fontSize = "24px";
    } else {
      result.innerText = "Draw";
      result.style.color = "grey";
      result.style.fontSize = "24px";
    }
    reloadBtn.innerText = "Restart";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", function () {
      window.location.reload();
    });
  }

  playGame();
}

game();
