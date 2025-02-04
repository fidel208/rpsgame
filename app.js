function getComputerChoice() {
    const choices  = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice;
    choice = prompt("Enter either rock, paper or scissors:").toLowerCase();
    if (["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    }
    else {
        console.log("Invalid choice!");
        return getHumanChoice();
    }
}



function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    if(humanChoice === computerChoice) {
        console.log(`It's a tie. You both chose ${humanChoice}`);
        return "tie";
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win: ${humanChoice} beats ${computerChoice}`);
        return "human";
    }
    else {
        console.log(`You loose: ${computerChoice} beats ${humanChoice}`);
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i<5; i++) {
        console.log(`\nRound ${i + 1}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        if(result === "human") {
            humanScore++;
        }
        else if(result === "computer") {
            computerScore++;
        }
        console.log(`Score: Human: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("\nFinal sore:");
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Game over! The computer wins!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();