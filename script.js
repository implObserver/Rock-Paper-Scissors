let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();

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