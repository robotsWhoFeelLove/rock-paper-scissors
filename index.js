const display = document.querySelector("#display");
let user;
let userScore = 0;
let computerScore = 0;


function getComputerChoice() {
   let getRandomNum = Math.floor(Math.random()*3)+1;
   (getRandomNum === 1) ? result = "Rock":
   (getRandomNum === 2) ? result = "Paper":
    result = "Scissors";

   console.log(result);
   return(result);
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click",() => {
        let choice =(button.id);
        user = choice.slice(0,1).toUpperCase() + choice.slice(1).toLowerCase();
       console.log(user);
       playRound(user);
    });
});


function playRound(user){
    let computer = getComputerChoice();

   if (user === computer){
        gameResult = "You tied... womp womp 😬";
        ;                                             
        }
        else if (user === "Rock" && computer != "Paper"){
        gameResult = "You win this round! 🫡";
        ++userScore;
        } else if (user === "Paper" && computer != "Scissors"){
        gameResult = "You win this round! 😃";
        ++userScore;
        } else if (user === "Scissors" && computer != "Rock"){
        gameResult = "You win this round! 🥳";
        ++userScore;
        } else {
        gameResult = "You lose this round! 😫";
        ++computerScore;
        }
        const roundResult = 
        "Computer chooses " + computer + " and you chose "  
        + user + ". <br> <br> " + gameResult + ". <br> <br> Computer's score: " + 
        computerScore + "<br> Your score: " + userScore;
        display.innerHTML=roundResult;
        checkGameStatus()
}

function checkGameStatus(){

    if (userScore > 4 || computerScore > 4){
        endResult();
        } 
    console.log("User: "+userScore+"Computer: "+computerScore)
}
function endResult(){
   if(userScore>computerScore){
        finalResult = "Congratulations!!! You win! \r Final Score: <br> <br>Computer Score: " + 
        computerScore +"<br> Your Score: " + userScore;
        } else {
        finalResult ="You Lost! Too bad <br> <br> Final Score: <br> <br>Computer Score: " + 
        computerScore +"<br> Your Score: " + userScore +
        "<br> <br> <br> Select Rock, Paper, or Scissors to Play Again!";
        }
        userScore = 0;
        computerScore = 0;
      
    display.innerHTML=finalResult;
} 





