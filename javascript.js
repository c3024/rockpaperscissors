function getComputerChoice() {
    let index = Math.floor(Math.random() * 3) + 1;
    return index == 1 ? 'rock' : index == 2 ? 'paper' : 'scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 0;
        //`Tie!`;
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection ==='paper' && computerSelection === 'rock') {
            return 1;
            //`You win! ${playerSelection} beats ${computerSelection}`;
        }
    else {
        return -1;
        //`You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let count = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Input your choice');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        count += result;
        console.log(`Round ${i + 1} :`);
        if (result === 0) {
            console.log('Tie');
        }
        else if (result < 0) {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
        else {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
    }
    if (count === 0) {
        console.log('Game tied');
    }
    else if (count > 0) {
        console.log('You win!');
    }
    else {
        console.log('Computer wins!');
    }
}