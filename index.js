const options = ["Rock","Paper","Scissors"];

function getComputerChoice() {
   let getRandomNum = Math.floor(Math.random()*3)+1;
   (getRandomNum === 1) ? result = "Rock":
   (getRandomNum === 2) ?
    result = "Paper":
    result = "Scissors";

   console.log(result);
   return(result);
}

// getComputerChoice();
// getUserChoice();

function getUserChoice(){ 
    let choice = prompt("Rock, Paper, or Scissors?");
    let result = choice.slice(0,1).toUpperCase() + choice.slice(1).toLowerCase();
    getresult()
    function getresult() {
        while (!options.includes(result)){
            if(!options.includes(result)){
                validation = "Response did not pass validation. ";
            } else {
                validation = ""
            }
            choice = prompt(validation + "Rock Paper or Scissors?");
            result = choice.slice(0,1).toUpperCase() + choice.slice(1).toLowerCase();
        }
    }

        return(result);

    } 
  
    


function playRound(){
    let userScore = 0;
    let computerScore = 0;
    for (i = 1; i <= 5; i++){
    
    let computer = getComputerChoice();
    let user = getUserChoice();
    // console.log("PC Chooses " +computer);
    // console.log("Player Chooses " + user);

    // }
    // if (user === "failedValidation"){
    //     user = getUserChoice();
    if (user === computer){
        gameResult = "You tied... womp womp 😬";i--;
    }
    else if (user === "Rock" && computer != "Paper"){
        gameResult = "You win this round! 🫡";++userScore;
    } else if (user === "Paper" && computer != "Scissors"){
        gameResult = "You win this round! 😃";++userScore;
    } else if (user === "Scissors" && computer != "Rock"){
        gameResult = "You win this round! 🥳";++userScore;
    } else {
        gameResult = "You lose this round! 😫";++computerScore;
    }
    alert("Computer chooses " + computer + " and you chose "  
        + user + ". \n \n" + gameResult + ". \n \n Computer's score: " + 
        computerScore + "\n Your score: " + userScore);
}
   if(userScore>computerScore){
    alert("Congratulations!!! You win! \n Final Score: \n Computer Score: " + computerScore +"\n Your Score: " + userScore);
    playAgain();
   } else {
    alert("You Lost! Too bad \n \n Final Score: \n Computer Score: " + computerScore +"\n Your Score: " + userScore);
    playAgain();
   }
}

playRound();

function playAgain(){
    response = prompt("Play Again? y or n");
    if(response === "y"){
       playRound();
    } else {
        alert(":( Refresh the page if you change your mind.");
    }
}


