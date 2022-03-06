const rockButton = $("#rock");
const paperButton = $("#paper");
const scissorsButton = $("#scissors");
let player = $("#players-turn");
let computer = $("#computers-turn");
const play = $("button");
let WINNER = $("#winner");
let computerWinCount = 0;
let playerWinCount = 0;

play.on("click", (button) => {
  player.html(button.currentTarget.textContent);
  randomizer();
  winner();
});

function randomizer() {
  const randomNumber = Math.floor(Math.random() * play.length);
  computer.html(play[randomNumber].innerText);
}

function winner() {
  let playerTurn = player.text();
  let computerTurn = computer.text();

  switch (true) {
    case computerTurn == playerTurn:
      printer("DRAW!!!");
      break;

    case (computerTurn == "SCISSORS" && playerTurn == "PAPER") ||
      (computerTurn == "ROCK" && playerTurn == "SCISSORS") ||
      (computerTurn == "PAPER" && playerTurn == "ROCK"):
      printer("COMPUTER");
      break;

    case (computerTurn == "PAPER" && playerTurn == "SCISSORS") ||
      (computerTurn == "SCISSORS" && playerTurn == "ROCK") ||
      (computerTurn == "ROCK" && playerTurn == "PAPER"):
      printer("PLAYER");
      break;
  }
}

function printer(result) {
  // console.log($("#win-count-player").html(computerWinCount + 1));
  WINNER.html(result);
  // $("#win-count-computer");
  // WINNER == "PLAYER" ? $("#win-count-player").html(playerWinCount + 1) : null;
  // WINNER == "COMPUTER"
  //   ? $("#win-count-computer").html(computerWinCount + 1)
  //   : null;
}
