function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0:{
            return "ROCK";
            break;
        }
        case 1:{
            return "PAPER";
            break;
        }
        case 2:{
            return "SCISSORS";   
            break;
        }
    }
}
/*
function eval(playerSelection, computerSelection){
    
    if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK" )
    {
        prompt("You Lose! " + computerSelection+" beats "+ playerSelection);
        cscore++;
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "SCISSORS" && computerSelection == "PAPER" || playerSelection == "ROCK" & computerSelection == "SCISSORS")
    {
        prompt("You Win! " + playerSelection+" beats "+ computerSelection);
        pscore++;
    }
    else{
        prompt("It's a tie!");

    }
}
*/
function eval(playerSelection, computerSelection){
    
    if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK" )
    {
        console.log("You Lose! " + computerSelection+" beats "+ playerSelection);
        cscore++;
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "SCISSORS" && computerSelection == "PAPER" || playerSelection == "ROCK" & computerSelection == "SCISSORS")
    {
        console.log("You Win! " + playerSelection+" beats "+ computerSelection);
        pscore++;
    }
    else{
        console.log("It's a tie!");

    }
}
let pscore = cscore = 0;
/*function gamePrompt(){
    for(let x = 0; x<5; x++)
    {
        let cont = 0;

        do
        {
            let playerChoice = prompt("Rock, Paper, or Scissors?");
            playerChoice = playerChoice.toUpperCase();
            if(playerChoice.includes("ROCK")|| playerChoice.includes("PAPER") || playerChoice.includes("SCISSORS"))
            {
                eval(playerChoice, getComputerChoice());
                cont = 1;
            }
            else 
            {
                prompt("Invalid input. Try again.");
            }
        }
        while (cont == 0);
    }
    if(cscore>pscore)
    {
        prompt("Player score: "+pscore+"\nComputer Score: "+cscore+"\n You lose!");
    }
    else if(cscore<pscore)
    {
        prompt("Player score: "+pscore+"\nComputer Score: "+cscore+"\n YOU WIN!");
    }
    else if (cscore == pscore)
    {
        prompt("Player score: "+pscore+"\nComputer Score: "+cscore+"\n Tie!");

    }
    else{
        prompt("Player score: "+pscore+"\nComputer Score: "+cscore);
    }
}
*/
function game(){
    for(let x = 0; x<5; x++)
    {
        let cont = 0;

        do
        {
            let playerChoice = prompt("Rock, Paper, or Scissors?");
            playerChoice = playerChoice.toUpperCase();
            if(playerChoice.includes("ROCK")|| playerChoice.includes("PAPER") || playerChoice.includes("SCISSORS"))
            {
                eval(playerChoice, getComputerChoice());
                cont = 1;
            }
            else 
            {
                console.log("Invalid input. Try again.");
            }
        }
        while (cont == 0);
    }
    if(cscore>pscore)
    {
        console.log("Player score: "+pscore+"\nComputer Score: "+cscore+"\n You lose!");
    }
    else if(cscore<pscore)
    {
        console.log("Player score: "+pscore+"\nComputer Score: "+cscore+"\n YOU WIN!");
    }
    else if (cscore == pscore)
    {
        console.log("Player score: "+pscore+"\nComputer Score: "+cscore+"\nTie!");
    }
    else{
        console.log("Player score: "+pscore+"\nComputer Score: "+cscore);
    }
}