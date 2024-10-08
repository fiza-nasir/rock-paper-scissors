let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");  // Fixed selector
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw!");
    msg.innerText = "Game was a draw ;)";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win :)");
        msg.innerText = `You win :) your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("You lose :(");
        msg.innerText = `You lose :( ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {  // userChoice is now passed in
   console.log("user choice = ", userChoice);
   const computerChoice = genComputerChoice();
   console.log("computer choice = ", computerChoice);
   
   if(userChoice === computerChoice) {
       drawGame();
   } else {
       let userWin = true;
       if(userChoice == "rock") {
           userWin = computerChoice === "paper" ? false : true;
       } else if(userChoice == "paper") {
           userWin = computerChoice === "scissors" ? false : true;
       } else {
           userWin = computerChoice === "rock" ? false : true;
       }
       showWinner(userWin, userChoice, computerChoice);
   }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");  // Fetch user's choice
        playGame(userChoice);  // Pass user's choice to playGame
    });
});