function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    
    if(choice == 1){
        return "rock";
    }
    else if(choice == 2){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissor?\n" ).toLowerCase();
    
    while(!(choice == "rock" || choice == "paper" || choice == "scissor")){
        choice = prompt("ERROR! Please provide a valid input.\n So...Rock, Paper or Scissor?\n" ).toLowerCase();
    }

    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    function playRound(humanChoice, computerChoice) {
        // your code here!
        console.log(humanChoice);
        console.log(computerChoice);
        if(humanChoice == "rock" && computerChoice == "scissor"){
            ++humanScore;
            return "Human Wins!";
        }
        else if(humanChoice == "paper" && computerChoice == "rock"){
            ++humanScore;
            return "Human Wins!";
        }
        else if(humanChoice == "scissor" && computerChoice == "paper"){
            ++humanScore;
            return "Human Wins!";
        }
        else if(humanChoice == computerChoice){
            ++tieScore;
            return "Tie!";
        }
        else{
            ++computerScore;
            return "Computer Wins!"
        }
    }

    for(let i = 0; i < 5; ++i){
        console.log(playRound(getHumanChoice(),getComputerChoice()));
    }

    console.log("Human: " + humanScore);
    console.log("computer: " + computerScore);
    console.log("Tie: " + tieScore);

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