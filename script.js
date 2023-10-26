let result = "";
const youWin = "You win! "
const youLose = "You lose! "
let beater = "";
let beaten = "";
let playerScore = 0;
let computerScore = 0;
let validation = true;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function winner(player, computer){
    result = youWin;
    beater = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    beaten = computer.charAt(0).toUpperCase() + computer.slice(1).toLowerCase();
    playerScore++;
    invalid = false;
}

function loser(player, computer){
    result = youLose;
    beater = computer.charAt(0).toUpperCase() + computer.slice(1).toLowerCase();
    beaten = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    computerScore++;
    invalid = false;
}

function playRound(playerSelect, computerSelect){
    playerSelect = playerSelect.toLowerCase();

    if(playerSelect === computerSelect){
        return "Draw!";
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
            winner(playerSelect, computerSelect);
        }
    }else if(playerSelect === "paper"){
        if(computerSelect === "rock"){
            winner(playerSelect, computerSelect);
        }else if(computerSelect === "scissors"){
            winner(playerSelect, computerSelect)
        }
    }else{
        invalid = true;
        return "Invalid choice, try again";
    }
    return result + beater + " beats " + beaten;
}

function game(){
    for(let i = 0; i < 5; i++){
        do{
            console.log( playRound( prompt("Rock, Paper or Scissors!"), getComputerChoice()) );
        }
        while(invalid);
        console.log("PlayerScore: " + playerScore + ", ComputerScore: " + computerScore);
    }

    if(playerScore > computerScore){
        return "You won!";
    }else{
        return "Computer won. :(";
    }
}

console.log(game());