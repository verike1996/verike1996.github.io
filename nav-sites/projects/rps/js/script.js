function random() {
    return Math.floor(Math.random() * 1000);
 }

function computerPlay() {
    let play = random();
        if (play % 3 === 0) {
            compterDecision = 'Rock';
            document.getElementById('computerChoiceImg').innerHTML = '<img src="img/rock.svg>"';
        } else if (play % 3 === 1) {
            compterDecision = 'Paper';
        } else {
            compterDecision = 'Scissors';
        }
    computerChoice = compterDecision;
}

function playGame() {
    if (playerScore >= 5 || computerScore >= 5) {
        result = 'The game is over!'
        resetButton.insertAdjacentElement('beforebegin', newGame);
    } else { 
        computerPlay();
        if (playerChoice == 'Rock' && computerChoice == 'Rock') {
            result = `You played ${playerChoice} and the computer played ${computerChoice}! It's a tie!`;
        } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
            result = `You played ${playerChoice} and the computer played ${computerChoice}! You lost!`;
            computerScore += 1;
        } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
            result = `You played ${playerChoice} and the computer played ${computerChoice}! You win!`;
            playerScore += 1;
        } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
            result = `You played ${playerChoice} and the computer played ${computerChoice}! You win!`;
            playerScore += 1;
        } else if (playerChoice == 'Paper' && computerChoice == 'Paper') {
            result = `You played ${playerChoice} and the computer played ${computerChoice}! It's a tie!`;
        } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
            result = `You played ${playerChoice} and the computer played ${computerChoice}! You lost!`;
            computerScore += 1;
        } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
            result = `You played ${playerChoice} and the computer played ${computerChoice}! You lost!`;
            computerScore += 1;
        } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
            result = `You played ${playerChoice} and the computer played ${computerChoice}! You win!`;
            playerScore += 1;
        } else if (playerChoice == 'Scissors' && computerChoice == 'Scissors') {
            result = `You played ${playerChoice} and the computer played ${computerChoice}! It's a tie!`;
        }
    }

    scoreUpdate();

    if (computerScore === 5 || playerScore === 5) {
        result = 'The game is over!'
        document.getElementById('scoreUpdateMessage').innerHTML = result;
        insertComputerPicture();
    } else {
        document.getElementById('scoreUpdateMessage').innerHTML = result;
        insertPicture();
    }
}

function scoreUpdate() {
    if (playerScore < 5 && computerScore < 5) {
        document.getElementById('playerScore').innerHTML = `Player Score: ${playerScore}`;
        document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`;
    } else if (playerScore >= 5) {
        document.getElementById('winMessage').innerHTML = `Congratulations! You win!`;
        document.getElementById('playerScore').innerHTML = `Player Score: 5`;
        return;
    } else if (computerScore >= 5) {
        document.getElementById('winMessage').innerHTML = `The Computer wins. Better luck next time!`;
        document.getElementById('computerScore').innerHTML = `Computer Score: 5`;
        return;
    }
}

function insertComputerPicture() {
    if (computerChoice === 'Rock') {
        document.getElementById('computerChoiceImg').innerHTML = '<img class="insertedPicture" src="img/rock.svg">';
    } else if (computerChoice === 'Paper') {
        document.getElementById('computerChoiceImg').innerHTML = '<img class="insertedPicture" src="img/paper.svg">';
    } else if (computerChoice === 'Scissors') {
        document.getElementById('computerChoiceImg').innerHTML = '<img class="insertedPicture" src="img/scissors.svg">';
    }
}

function insertPlayerPicture() {
    if (playerChoice === 'Rock') {
        document.getElementById('playerChoiceImg').innerHTML = '<img class="insertedPicture" src="img/rock.svg">';
    } else if (playerChoice === 'Paper') {
        document.getElementById('playerChoiceImg').innerHTML = '<img class="insertedPicture" src="img/paper.svg">';
    } else if (playerChoice === 'Scissors') {
        document.getElementById('playerChoiceImg').innerHTML = '<img class="insertedPicture" src="img/scissors.svg">';
    }
}

function insertPicture() {
    insertComputerPicture();
    insertPlayerPicture();
}

function refreshPage() {
    window.location.reload(true);
}

let choiceButtonRock = document.getElementById('isRock');
let choiceButtonPaper = document.getElementById('isPaper');
let choiceButtonScissors = document.getElementById('isScissors');
let executePlayGame = document.getElementsByTagName('button');
let scoreUpdateMessage;

let newGame = document.createElement('button');
newGame.textContent = `Play again`;
newGame.classList.add('button', 'refresh');

let playerScoreHTML = document.getElementById('playerScore');
let computerScoreHTML = document.getElementById('computerScore');
let winMessage = document.getElementById('winMessage');
let resetButton = document.getElementById('resetButton');

let playerChoice;
let result;
let computerChoice;

let computerScore = 0;
let playerScore = 0;

choiceButtonRock.onclick = function() {
    playerChoice = 'Rock';
    playGame();
}

choiceButtonPaper.onclick = function() {
    playerChoice = 'Paper';
    playGame();
}

choiceButtonScissors.onclick = function() {
    playerChoice = 'Scissors';
    playGame();
}

newGame.onclick = function() {
    location.reload();
}