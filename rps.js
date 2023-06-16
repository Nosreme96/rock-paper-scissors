let pscore = cscore = 0;
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

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', game)
    });

function game(e){
    
        let playerChoice = e.srcElement.className.toUpperCase();
        eval(playerChoice, getComputerChoice());
    
    if (pscore == 5 || cscore == 5){
        var winner = document.getElementsByClassName("winner");
        for(var i = 0; i < winner.length; i++){
            if(pscore<cscore)
            winner[i].innerText="COMPUTER WINS";
            else
            winner[i].innerText="YOU WIN!!!";
            }; 
    }
}

function eval(playerSelection, computerSelection){
    if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK" )
    {
        var results = document.getElementsByClassName("result");  
        for(var i = 0; i < results.length; i++){
        results[i].innerText="You Lose! " + computerSelection+" beats "+ playerSelection; 
        }; 
        cscore++;
        printScore();
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "SCISSORS" && computerSelection == "PAPER" || playerSelection == "ROCK" & computerSelection == "SCISSORS")
    {
        var results = document.getElementsByClassName("result");  
        for(var i = 0; i < results.length; i++){
        results[i].innerText = "You Win! " + playerSelection+" beats "+ computerSelection; 
         };
        pscore++;
        printScore();
    }
    else if (playerSelection == "RESET"){
        var results = document.getElementsByClassName("result");  
        var score = document.getElementsByClassName("score");
        var winner = document.getElementsByClassName("winner");
        for(var i = 0; i < results.length; i++){
        results[i].innerText = "";
        score[i].innerText ="";
        winner[i].innerText=""; 
        pscore = 0;
        cscore = 0;
        };
    }
    else{
        var results = document.getElementsByClassName("result");  
        for(var i = 0; i < results.length; i++){
        results[i].innerText = "It's a tie!"; 
         }; 
    }
}

function printScore()
{
var score = document.getElementsByClassName("score");
for(var i = 0; i < score.length; i++ ){
    score[i].innerText = "Player score: " + pscore + "\nComputer Score:  " + cscore;
}
};

