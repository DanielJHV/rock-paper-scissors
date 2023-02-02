let computerPoints = 0;
let userPoints = 0;
let userCount = document.getElementById("user-count");
let computerCount = document.getElementById("computer-count");
let informationalText = document.getElementById("informational-text");
let user;
let rockBtn = document.getElementById("rock-btn");
let paperBtn = document.getElementById("paper-btn");
let scissorsBtn = document.getElementById("scissors-btn");
let userImage = document.getElementById("user-image");
let computerImage = document.getElementById("computer-image");

informationalText.textContent = "Make a choice."
userCount.textContent = "Points: 0"

function playRound() {
    userCount.textContent = "Points: " + userPoints;
    computerCount.textContent = "Points: " + computerPoints;
    informationalText.style.color = "#fff"
    function computerChoice() {
        const options = ["rock", "paper", "scissors"];
        return options[Math.floor(Math.random()*3)]     
    }
    computerChoice();

    let computer = computerChoice();

    if (computer == "scissors" && user == "rock") {
        computerImage.style.backgroundImage = "url(img/red-scissors.png)"
        informationalText.textContent = "You won! Rock beats scissors."; 
        userPoints += 1;
        userCount.textContent = "Points: " + userPoints;
        gameState();
    } else if (computer == "paper" && user == "scissors") {
        computerImage.style.backgroundImage = "url(img/red-paper.png)"
        informationalText.textContent = "You won! Scissors beats paper.";
        userPoints += 1;
        userCount.textContent = "Points: " + userPoints;
        gameState();
    } else if (computer == "rock" && user =="paper") {
        computerImage.style.backgroundImage = "url(img/red-rock.png)"
        informationalText.textContent = "You won! Paper beats rock.";
        userPoints += 1;
        userCount.textContent = "Points: " + userPoints;
        gameState();
    } else if (computer == "scissors" && user == "paper") {
        computerImage.style.backgroundImage = "url(img/red-scissors.png)"
        informationalText.textContent = "You lost! Scissors beats paper.";
        computerPoints += 1; 
        computerCount.textContent = "Points: " + computerPoints;
        gameState();
    } else if (computer == "paper" && user == "rock") {
        computerImage.style.backgroundImage = "url(img/red-paper.png)"
        informationalText.textContent = "You lost! Paper beats rock."
        computerPoints += 1;
        computerCount.textContent = "Points: " + computerPoints;
        gameState();
    } else if (computer == "rock" && user == "scissors") {
        computerImage.style.backgroundImage = "url(img/red-rock.png)"
        informationalText.textContent = "You lost! Rock beats scissors."
        computerPoints += 1;
        computerCount.textContent = "Points: " + computerPoints;
        gameState();
    } else if (computer == "rock" && user == "rock") {
        computerImage.style.backgroundImage = "url(img/red-rock.png)"
        informationalText.textContent = "It's a tie.";
    } else if (computer == "paper" && user == "paper") {
        computerImage.style.backgroundImage = "url(img/red-paper.png)"
        informationalText.textContent = "It's a tie.";
    } else if (computer == "scissors" && user == "scissors") {
        computerImage.style.backgroundImage = "url(img/red-scissors.png)"
        informationalText.textContent = "It's a tie.";
    }

    function gameState() {
        if (userPoints == 5) {
            informationalText.textContent = "Congratulations! You won!";
            informationalText.style.color = "#006efa"
            userPoints = 0;
            computerPoints = 0;
        } else if (computerPoints == 5) {
            informationalText.textContent = "You lost the game. Make a choice to try again.";
            informationalText.style.color = "#ec1c24"
            userPoints = 0;
            computerPoints = 0;
        }
    }
}

rockBtn.addEventListener('click', () => {
    user = "rock";
    userImage.style.backgroundImage = "url(img/blue-rock.png)"
    playRound();
});
 
paperBtn.addEventListener('click', () => {
    user = "paper";
    userImage.style.backgroundImage = "url(img/blue-paper.png)"
    playRound();
});
 
scissorsBtn.addEventListener('click', () => {
    user = "scissors";
    userImage.style.backgroundImage = "url(img/blue-scissors.png)"
    playRound();
});