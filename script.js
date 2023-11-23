let result = "";
const youWin = "You win! "
const youLose = "You lose! "
let beater = "";
let beaten = "";
let playerScore = 0;
let computerScore = 0;
let round = 0;
let gameOver = false;

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const resultsDiv = document.querySelector('#results');
const winOutputDiv = document.querySelector('#winOutput');
const playerScoreP = document.querySelector('#playerScore');
const computerScoreP = document.querySelector('#computerScore');

rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice() ));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice() ));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice() ));



function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function winner(player, computer){
    result = youWin;
    beater = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    beaten = computer.charAt(0).toUpperCase() + computer.slice(1).toLowerCase();
    playerScore++;
}

function loser(player, computer){
    result = youLose;
    beater = computer.charAt(0).toUpperCase() + computer.slice(1).toLowerCase();
    beaten = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    computerScore++;
}

function playRound(playerSelect, computerSelect){
    playerSelect = playerSelect.toLowerCase();

    if(gameOver === true){
        playerScoreP.textContent = "You: " + playerScore;
        computerScoreP.textContent = "Computer: " + computerScore;
        winOutputDiv.textContent = "";
        gameOver = false;
    }

    if(playerSelect === computerSelect){
        resultsDiv.textContent = "Draw!";
        return;
    }else if(playerSelect === "rock"){
        if(computerSelect === "scissors"){
            winner(playerSelect, computerSelect);
        }else if(computerSelect === "paper"){
            loser(playerSelect, computerSelect);
        }
    }else if(playerSelect === "scissors"){
        if(computerSelect === "paper"){
            winner(playerSelect, computerSelect);
        }else if(computerSelect === "rock"){
            loser(playerSelect, computerSelect);
        }
    }else if(playerSelect === "paper"){
        if(computerSelect === "rock"){
            winner(playerSelect, computerSelect);
        }else if(computerSelect === "scissors"){
            loser(playerSelect, computerSelect)
        }
    }

    playerScoreP.textContent = "You: " + playerScore;
    computerScoreP.textContent = "Computer: " + computerScore;
    resultsDiv.textContent = result + beater + " beats " + beaten;

    if(computerScore >= 5){
        winOutputDiv.textContent = "Game over. You lose :(";
        computerScore = 0;
        playerScore = 0;
        gameOver = true;
    }else if(playerScore >= 5){
        winOutputDiv.textContent = "Game over. You win!";
        computerScore = 0;
        playerScore = 0;
        gameOver = true;
    }
}