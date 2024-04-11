let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ( ) => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";  
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //Generate computer choice -> modular way programming.
    const compChoice = genCompChoice();
    //Compare the two choices.

    if(userChoice === compChoice){
        drawGame();
    } else{
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true; 
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            //paper, rock
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin , userChoice, compChoice);

    }
}

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})