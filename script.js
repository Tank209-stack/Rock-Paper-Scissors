let humanScore = 0;
let computerScore =0;

function getComputerChoice(){
    let arr = "Rock,Paper,Scissor";
    let modArr = arr.split(",")
    let rmChoice = Math.floor(Math.random()*modArr.length)
    console.log(modArr[rmChoice])
    return modArr[rmChoice].toLowerCase()
}
function getHumanChoice(){
    let humanChoice =prompt("Rock Paper Scissor").toLowerCase()
    if (humanChoice === "rock"|| humanChoice === "paper" || humanChoice === "scissor"){
        console.log(humanChoice)
        return humanChoice
    }
    else{
        console.log("Please enter valid Option")
       return  getHumanChoice()
    }
   

}

function playGame(){
    function playRound(humanChoice , computerChoice){

        if (humanChoice === computerChoice){
            console.log("its! a Tie")
        }
        else if (humanChoice ==="rock" && computerChoice === "paper"){
            humanScore+=10
            console.log(" You win rock beats paper")
        }
        else if (humanChoice === "scissor" && computerChoice === "paper"){
            humanScore+=10
            console.log("You Win Scissor Beats Paper")
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 10
            console.log("You Win Paper Beats Rock")
        } else {
            computerScore += 10
            console.log(" You Lose computer win")
        }
    }
    for (let i = 0; i<5; i++){
    let humanSelect = getHumanChoice();
    let computerSelect = getComputerChoice();
        playRound(humanSelect,computerSelect)
    }
console.log(`final human score ${humanScore}`)
console.log(`final computer score ${computerScore}`)
}

playGame()