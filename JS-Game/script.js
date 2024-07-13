let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const compChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIndx= Math.floor(Math.random() *3);
    return option[randIndx];

}

const drawGame = () =>{
    msg.innerText="game was draw! Play again!";
    msg.style.backgroundColor = "#0a2039";
}

const showWinner = (userWin) =>{
    if(userWin)
        {   userScore++;
            userScorepara.innerText = userScore;
            msg.innerText = "You Win!"
            msg.style.backgroundColor = "green";
        }
        else{
            compScore++;
            compScorepara.innerText = compScore;
            msg.innerText = "You lose";
            msg.style.backgroundColor = "red";
        }
}

const playgame = (userChoice) =>{
 

  const comp = compChoice();
  

  if(userChoice === comp)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
            {
              userWin = comp === "paper" ? false: true;  
            }
            else if(userChoice === "paper")
                {
                    userWin = comp === "scissors" ? false: true;
                }
                else{
                    userWin = comp === "rock" ? false: true;
                }
                showWinner(userWin);
    }
}


choices.forEach((choice) =>{
   choice.addEventListener("click", () =>{
      const userChoice= choice.getAttribute("id");
      playgame(userChoice);
   })
})