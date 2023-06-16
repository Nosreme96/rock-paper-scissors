let pscore = 0;
let cscore = 0;
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
    if(pscore<5 && cscore <5)
    {
    if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK")
    {
        var results = document.getElementsByClassName("result");  
        for(var i = 0; i < results.length; i++){
        results[i].innerText="Player: "+ playerSelection+"\nComputer: " + computerSelection + "\n\nYou Lose! " + computerSelection+" beats "+ playerSelection; 
        }; 
        cscore++;
        printScore();
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "SCISSORS" && computerSelection == "PAPER" || playerSelection == "ROCK" & computerSelection == "SCISSORS")
    {
        var results = document.getElementsByClassName("result");  
        for(var i = 0; i < results.length; i++){
        results[i].innerText = "Player: "+ playerSelection+"\nComputer: " + computerSelection + "\n\nYou Win! " + playerSelection+" beats "+ computerSelection; 
         };
        pscore++;
        printScore();
    }
    else if (playerSelection == computerSelection){
        var results = document.getElementsByClassName("result");  
        for(var i = 0; i < results.length; i++){
        results[i].innerText = "Player: "+ playerSelection+"\nComputer: " + computerSelection + "\n\nIt's a tie!"; 
         }; 
    }}
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
   
}

function printScore()
{
var score = document.getElementsByClassName("score");
for(var i = 0; i < score.length; i++ ){
    score[i].innerText = "Player score: " + pscore + "\nComputer Score:  " + cscore;
}
};

