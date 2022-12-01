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

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[choice];
  return computerChoice;
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    return (score = 0);
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    return (score = 1);
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    return (score = 1);
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    return (score = 1);
  } else {
    return (score = -1);
  }
  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  // Otherwise human loses (aka set score to -1)
  // return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  let thisdiv = document.getElementById("result");
  let thisdiv2 = document.getElementById("player-score");
  let thisdiv1 = document.getElementById("hands");
  if (score == 1) {
    thisdiv2.textContent = `${Number(thisdiv2.textContent) + score}`;
    thisdiv1.textContent = `Human: ${playerChoice} vs Computer: ${computerChoice}`;
    thisdiv.textContent = "You win!";
  }
  if (score == 0) {
    thisdiv2.textContent = `${Number(thisdiv2.textContent) + score}`;
    thisdiv1.textContent = `Human: ${playerChoice} vs Computer: ${computerChoice}`;
    thisdiv.textContent = "Its a Draw!";
  }
  if (score == -1) {
    thisdiv2.textContent = `${Number(thisdiv2.textContent) + score}`;
    thisdiv1.textContent = `Human: ${playerChoice} vs Computer: ${computerChoice}`;
    thisdiv.textContent = "You Lose!";
  }
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice();
  let score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  let buttons = document.querySelectorAll(".rpsButton");
  // use querySelector to select all RPS Buttons
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  buttons.forEach((button) => {
    button.onclick = () => onClickRPS(button);
  });
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click
  let endbutton = document.querySelector("#endGameButton");
  endbutton.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let result = document.querySelector("#result");
  let hands = document.querySelector("#hands");
  let playerscore = document.querySelector("#player-score");
  result.textContent = "";
  hands.textContent = "";
  playerscore.textContent = "";
}

playGame();
