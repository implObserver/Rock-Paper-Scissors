const longGame = 5;

console.log(game());

function getPlayerChoise() {
    let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
    return playerSelection;
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

function game() {
    let computerCounter = 0;
    let playerCounter = 0;
    for (let i = 0; i < longGame; i++) {
        let result = playOneRound(getComputerChoise(), getPlayerChoise());
        if (result.includes('Win')) {
            playerCounter += 1;
        } else if (result.includes('Lose')) {
            computerCounter += 1;
        }
        console.log(result);
    }

    return computerCounter === playerCounter
        ? 'Result game: draw'
        : computerCounter > playerCounter
            ? `You lose by a score of ${computerCounter} - ${playerCounter}`
            : `You won by a score of ${playerCounter} - ${computerCounter}`;
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