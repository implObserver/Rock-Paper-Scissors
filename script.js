let playerScore = 0;
let computerScore = 0;

const buttonRock = document.querySelector('.buttons__button__rock');
const buttonScissors = document.querySelector('.buttons__button__scissors');
const buttonPaper = document.querySelector('.buttons__button__paper');
const overview = document.querySelector('.scorecard__overview');
const score = document.querySelector('.scorecard__score');
const journal = document.querySelector('details');

buttonRock.addEventListener('click', selectRock);
buttonScissors.addEventListener('click', selectScissors);
buttonPaper.addEventListener('click', selectPaper);

function selectRock() {
    game('rock');
}

function selectScissors() {
    game('scissors');
}

function selectPaper() {
    game('paper');
}



function game(playerSelection) {
    if (!isGameOver()) {
        let result = playOneRound(getComputerChoise(), playerSelection);
        outputOverview(result);
        addEntryInJournal(result);
        scoreCount(result);
        outputScore();
    } else {
        gameOver();
    }
}

function isGameOver() {
    if (playerScore === 5) {
        outputOverview(playerCongratulate());
        return true;
    }
    if (computerScore === 5) {
        outputOverview(playerСondolences());
        return true;
    }

    return false;
}

function outputOverview(result) {
    overview.textContent = result;
}

function playerCongratulate() {
    return 'Congratulations, you have WON!!!'
}

function playerСondolences() {
    return 'Sorry, but you\'ve LOST this battle!'
}

function playOneRound(computerSelection, playerSelection) {
    return compareSelections(computerSelection, playerSelection);
}

function compareSelections(computerSelection, playerSelection) {
    switch (computerSelection + playerSelection) {
        case 'Rockpaper':
            return `You Win! Paper beats ${computerSelection}`;
        case 'Rockscissors':
            return `You Lose! ${computerSelection} beats Scissors`;
        case 'Paperrock':
            return `You Lose! ${computerSelection} beats Rock`;
        case 'Paperscissors':
            return `You Win! Scissors beats ${computerSelection}`;
        case 'Scissorsrock':
            return `You Win! Rock beats ${computerSelection}`;
        case 'Scissorspaper':
            return `You Lose! ${computerSelection} beats Papper`;
        default:
            return 'Round result : draw';
    }
}

function getComputerChoise() {
    let choice = Math.floor(Math.random() * 3) + 1;
    return describeTheChoice(choice);
}

function describeTheChoice(choice) {
    switch (choice) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
        default:
            break;
    }
}

function addEntryInJournal(result) {
    let entryInJournal = document.createElement('p');
    entryInJournal.textContent = result;
    journal.appendChild(entryInJournal);
}

function scoreCount(result) {
    if (isWin(result)) {
        playerScore += 1;
    }

    if (isLose(result)) {
        computerScore += 1;
    }
}

function isWin(result) {
    return result.includes('Win');
}

function isLose(result) {
    return result.includes('Lose');
}

function outputScore() {
    score.textContent = `${playerScore} - ${computerScore}`;
}

function gameOver() {
    buttonRock.removeEventListener('click', selectRock);
    buttonScissors.removeEventListener('click', selectScissors);
    buttonPaper.removeEventListener('click', selectPaper);
}