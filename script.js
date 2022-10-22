/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

let finalScore = { player: 0, computer: 0 }

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const result = Math.floor(Math.random() * choice.length);
  return choice[result]
}


// ** getResult compares playerChoice & computerChoice 

function getResult(playerChoice, computerChoice) {
  // All situations where human draws, set `score` to 0
  // All situations where human wins, set `score` to 1
  // Otherwise human loses (aka set score to -1)
  let score;

  if (playerChoice === computerChoice) {
    score = 0;
  }

  else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  }

  else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  }

  else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  }

  else {
    score = -1
  }

  return score

}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {

  score = getResult(playerChoice, computerChoice)

  const playerScore = document.getElementById("player-score");
  const hands = document.getElementById("hands");
  const gameResult = document.getElementById("result");

  if (score === -1) {
    gameResult.innerText = `You Lose!`;
  }
  else if (score === 0) {
    gameResult.innerText = `Its a Draw!`;
  }
  else {
    gameResult.innerText = `You Win!`;
  }

  finalScore.player += score;
  finalScore.computer -= score;

  playerScore.innerText = `Your Score: ${finalScore.player} Computer Score: ${finalScore.computer}`
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`

  return score
}


// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

  let playersChoice = showResult(getResult(), playerChoice, getComputerChoice())
  return playersChoice
}



function playGame() {
// * Add an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  const btns = document.querySelectorAll(".rpsButton")

  btns.forEach(btn => {
    btn.onclick = () => {
      onClickRPS(btn.value)
    }
  })

  const endGames = document.getElementById("endGameButton");
  endGames.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  const clear = document.getElementById("container")
  clear.remove()
}

playGame()



