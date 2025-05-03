let humanScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const playAgainButton = document.getElementById("playAgain");
playAgainButton.style.display = "none";

function scoreUpdate() {
    scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

function playRound(humanChoice) {
    resultDiv.textContent = "";
    playAgainButton.style.display = "block";

    const choices  = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const playerMessage = document.createElement('p');
    playerMessage.textContent = `You: ${humanChoice}`;
    resultDiv.appendChild(playerMessage);

    const computerMessage = document.createElement('p');
    computerMessage.textContent = `Computer: ${computerChoice}`;
    resultDiv.appendChild(computerMessage);

    const resultMessage = document.createElement('p');
    if (humanChoice === computerChoice) {
        resultMessage.textContent = `It's a tie. You both chose ${humanChoice}`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage.textContent = `You win: ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    else {
        resultMessage.textContent = `You loose: ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    resultDiv.appendChild(resultMessage);
    scoreUpdate();

    if (humanScore === 5 || computerScore === 5) {
        const finalMessage = document.createElement('p');
        finalMessage.textContent = humanScore > computerScore ? "You won the game." : "Computer won, You lost.";
        resultDiv.appendChild(finalMessage);
        toggleButtons(false);
    }
}

function toggleButtons(enable) {
    document.getElementById("rock").disabled = !enable;
    document.getElementById("paper").disabled = !enable;
    document.getElementById("scissors").disabled = !enable;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultDiv.textContent = "";
    scoreUpdate();
    toggleButtons(true);
    playAgainButton.style.display = "none";
}