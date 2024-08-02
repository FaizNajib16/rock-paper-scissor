function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    
    if(choice == 1){
        return "Rock";
    }
    else if(choice == 2){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

function getHumanChoice(){
    return choice = prompt("Rock, Paper or Scissor?\n 1 - Rock\n 2 - Paper\n 3 - Scissor\n Input the number please." );
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // your code here!
        if(humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissor"){
            ++humanScore;
            return "Human Wins!";
        }
        else if(humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock"){
            ++humanScore;
            return "Human Wins!";
        }
        else if(humanChoice.toLowerCase() == "scissor" && computerChoice.toLowerCase() == "paper"){
            ++humanScore;
            return "Human Wins!";
        }
        else if(humanChoice.toLowerCase() == computerChoice.toLowerCase()){
            return "Tie!";
        }
        else{
            ++computerScore;
            return "Computer Wins!"
        }
    }

    for(let i = 0; i < 5; ++i){
        playRound(getHumanChoice(),getComputerChoice());
        console.log("Human: " + humanScore);
        console.log("computer: " + computerScore);
    }

    if(humanScore > computerScore){
        return "Human Wins the game!"
    }
    else if(humanScore == computerScore){
        return "It's a tie for the game!"
    }
    else{
        return "Computer Wins the game!"
    }
}

console.log(playGame());