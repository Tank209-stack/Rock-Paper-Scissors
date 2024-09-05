document.addEventListener("DOMContentLoaded", ()=>{
    let buttons = document.querySelectorAll("button");
    let result = document.querySelector("#result");
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;
    let end = document.querySelector(".end");
    let endSpan = document.querySelector(".end-span")
    let restartbtn = document.getElementById("restartbtn");
    let gameContainer = document.getElementById("game-container");
    function getComputerChoice(){
        let arr = ["Rock" , "Paper", "Scissor"];
        let modArr = (Math.floor(Math.random()* arr.length));
        return arr[modArr]}

            function restartFn(){
                playerScore = 0;
                computerScore = 0;  
                rounds = 0
                result.textContent = " "              
                gameContainer.style.display = "block";
                end.style.display ="none";
                document.querySelector("#Player-span").textContent = playerScore
                    
                document.getElementById("Computer-span").textContent =computerScore
                
                document.getElementById("Rounds-span").textContent =rounds
            }
            function winner(playerScore , computerScore){
               if (playerScore=== computerScore){
                    endSpan.textContent = "its a tie "
                    endSpan.style.backgroundColor = "yellow";
               }
               else if(playerScore > computerScore){
                endSpan.textContent = "player win "
                endSpan.style.backgroundColor = "green";
                endSpan.style.color = "white";
               }
               else{
                endSpan.textContent = " computer win"
                endSpan.style.backgroundColor = "red";
               }

            }
            function endGame(){
                if (rounds >= 10){
                    gameContainer.style.display = "none";
                    end.style.display= "block";
                    winner(playerScore ,computerScore)
            }
        }
        

        buttons.forEach((button)=>{
            button.addEventListener("click" , (e)=>{
                let playerChoice = e.target.id;
                let computerChoice = getComputerChoice();
                if (playerChoice === computerChoice){
                    result.style.color= "black"
                    result.style.backgroundColor = "Yellow"
                    result.textContent = `You Both Choose ${playerChoice} Its a Tie !`;
                }
                else if (
                    (playerChoice === "Rock" && computerChoice === "Scissor") ||
                    (playerChoice === "Paper" && computerChoice === "Rock") ||
                    (playerChoice === "Scissor" && computerChoice === "Paper")
                ) 
                {
                    playerScore++;
                    result.style.backgroundColor = "green";
                    result.style.color = "white";
                    result.textContent = `You Win ${playerChoice} Beats ${computerChoice}`}

                else{
                    result.style.backgroundColor = "red";
                    result.style.color = "white";
                    computerScore++
                        result.textContent = `Computer Wins ${computerChoice} Beats ${playerChoice}`
                    }
                    rounds++;
                    endGame()
                    document.querySelector("#Player-span").textContent = playerScore
                    
                    document.getElementById("Computer-span").textContent =computerScore
                    
                    document.getElementById("Rounds-span").textContent =rounds
                })
            })  
            restartbtn.addEventListener("click", restartFn)   
})