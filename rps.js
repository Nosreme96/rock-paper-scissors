function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0:{
            return "Rock";
            break;
        }
        case 1:{
            return "Paper";
            break;
        }
        case 2:{
            return "Scissors";   
            break;
        }
    }
}
function eval(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase()
    if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK" )
    {
        return "You Lose! " + computerSelection+" beats "+ playerSelection;
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "SCISSORS" && computerSelection == "PAPER" || playerSelection == "ROCK" & computerSelection == "SCISSORS")
    {
        return "You Win! " + playerSelection+" beats "+ computerSelection;
    }
    else{
        return "It's a tie!";
    }
}
console.log(eval("rock", "paper"));
console.log(eval("rock", "scissors"));
console.log(eval("rock", "rock"));

