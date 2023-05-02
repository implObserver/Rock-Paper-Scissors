let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
let computerSelection = getComputerChoise();

console.log(playOneRound(computerSelection, playerSelection));

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