let userScore = 0;
let computerScore = 0;

const whoWins = document.querySelector("#whowins");
const score = document.querySelector("#score");

//function for possible outcomes 
function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "It\s a tie!";

    } else if (choice1 === "rock") { //if Rock - beats scissor and lizard, defeat by paper and spock
         if (choice2 === "scissors" || choice2 === "lizard") {
            userScore++;
            return "User";
        } else if (choice2 === "paper" || choice2 === "spock") {
            computerScore++;
            return "Computer";
        }
    } else if (choice1 === "paper") { //if Paper - lose to scissor and lizard, win to rock and spock
        if(choice2 === "scissors" || choice2 === "lizard") {
            computerScore++;
            return "Computer";
        } else if (choice2 === "rock" || choice2 === "spock") {
            userScore++;
            return "User";
        }
    } else if (choice1 === "scissors") { //if Scissor - cut paper (win) and lizard (win), lose to rock and spock
        if (choice2 === "paper" || choice2 === "lizard") {
            userScore++;
            return "User";
        } else if (choice2 === "rock" || choice2 === "spock") {
            computerScore++;
            return "Computer"
        }
    } else if (choice1 === "spock") {
        if(choice2 === "scissors" || choice2 === "rock") {
            userScore++;
            return "User";
        } else if (choice2 === "paper" || choice2 === "lizard") {
            computerScore++;
            return "Computer";
        }
    } else if (choice1 === "lizard") {
        if (choice2 === "spock" || choice2 === "paper") {
            userScore++;
            return "User";
        } else if (choice2 === "scissors" || choice2 === "rock") {
            computerScore++;
            return "Computer";
        }
    }
}

//to start game:
function startGame(e) {
    let userChoice = e;
    let computerChoices = ["rock", "paper", "scissors", "lizard", "spock"]; //pc will make its choice
    let computerChoice = computerChoices[Math.floor(Math.random() * 5)];

    let winner = compare(userChoice, computerChoice);
    whoWins.classList = "";

    if (winner == "User") {
        whoWins.innerHTML = winner + " wins";
        whoWins.classList.add("win");
    } else if (winner == "Computer") {
        whoWins.innerHTML = winner + " wins";
        whoWins.classList.add("lose");
    } else {
        whoWins.innerHTML = winner;
        whoWins.classList.add("tie");
    }
    score.innerHTML = `<span class="sides">User: ${userScore}</span><span class="sides">Computer: ${computerScore}</span>`;
}