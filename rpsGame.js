let playerScore= 0, computerScore = 0, tie = 0;
let computerSelection;

function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function score() {
    document.getElementById('total').innerHTML = `Your score: ${playerScore}<br>
            Computer Score: ${computerScore}<br>Tie: ${tie}`;
}

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();

    if(playerSelection == computerSelection) {
        return tie++;
    }
    else if(playerSelection == 'rock') {
        if(computerSelection == 'paper') {
            return computerScore++;  
        }
        else{
            return playerScore++;
        }
    }

    else if(playerSelection == 'scissors') {
        if(computerSelection == 'paper') {
            return playerScore++;
        }
        else{
            return computerScore++;
        }
    }

    else if(playerSelection == 'paper'){
        if(computerSelection == 'rock') {
            return playerScore++;
        }
        else {
            return computerScore++;
        }
    }
}

function buttonClick() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
        game(button.id);
        });
    });
}

function game(playerSelection) {
    let result = playRound(playerSelection, computerSelection);
    score(result);
}

buttonClick();