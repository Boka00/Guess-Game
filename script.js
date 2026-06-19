let randomNum = Math.floor(Math.random() * 20) + 1;
const checkBtn = document.querySelector("#btn");
const againBtn = document.querySelector(".btn");
const input = document.querySelector("#input");
const message = document.querySelector(".message");
const secretNum = document.querySelector(".secret");
const scoreMsg = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");
const background = document.body;
const markBox = document.querySelector(".mark-box");
let score = 20;
let highScore = 0;
function disableGame() {
  checkBtn.disabled = true;
  input.disabled = true;
}
function enableGame() {
  checkBtn.disabled = false;
  input.disabled = false;
}
function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    highScoreElement.textContent = highScore;
  }
}
checkBtn.addEventListener("click", () => {
  let guess = Number(input.value);
  if (!input.value) {
    message.textContent = "⛔ No number!";
  } else if (guess < randomNum) {
    message.textContent = "📉 Too low!";
    score--;
    scoreMsg.textContent = score;
  } else if (guess > randomNum) {
    message.textContent = "📈 Too high!";
    score--;
    scoreMsg.textContent = score;
  } else if (guess === randomNum) {
    background.style.backgroundColor = "#006400";
    message.textContent = "🎉 Correct Number!";
    markBox.style.width = "400px";
    secretNum.textContent = randomNum;
    updateHighScore();
    disableGame();
  }
  if (score <= 0) {
    message.textContent = "💥 You lost the game!";
    background.style.backgroundColor = "#8B0000";
    disableGame();
  }
});

againBtn.addEventListener("click", () => {
  randomNum = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreMsg.textContent = score;
  message.textContent = "Start guessing...";
  background.style.backgroundColor = "";
  secretNum.textContent = "?";
  input.value = "";
  markBox.style.width = "180px";
  enableGame();
  console.log(randomNum);
});
