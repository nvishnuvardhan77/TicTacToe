let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const compChoiceIdx = Math.floor(Math.random() * 3);
  return options[compChoiceIdx];
};

const drawGame = () => {
  msg.innerText = "Game was draw";
  msg.style.backgroundColor = "#081b31";
  msg.textColor = "white";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    msg.innerText = `You Win, ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreDisplay.innerText = compScore;
    msg.innerText = `You Lose, ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "stone") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
