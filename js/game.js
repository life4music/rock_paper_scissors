//panel gry
const game = {
  playerChoice: "",
  aiChoice: "",
}

//panel wyników
const gameSummary = {
  games: 0,
  wins: 0,
  losses: 0,
  draws: 0
}

//zagranie gracza
const options = document.querySelectorAll('.select img'); //[papier, kamień, nożyce]
options.forEach(option => {
  option.addEventListener('click', () => {
      game.playerChoice = option.dataset.option;
      options.forEach(option => option.style.boxShadow = "");
      option.style.boxShadow = "0 0 0 4px darkgoldenrod";
  });
});

//zagranie komputera
function computerChoice() {
  const index =  Math.floor(Math.random() * options.length);
  return options[index].dataset.option;
}

//sprawdzenie wyniku
function checkResult(player, ai) {
  switch(player){
      case "papier":
          if(ai === "papier"){
              return "draw";
          } else if (ai === "kamień"){
              return "win";
          } else {
              return "lose";
          }
          break;
      case "kamień":
          if(ai === "kamień"){
              return "draw";
          } else if (ai === "papier"){
              return "lose";
          } else {
              return "win";
          }
          break;
      case "nożyczki":
          if(ai === "nożyczki"){
              return "draw";
          } else if (ai === "kamień"){
              return "lose";
          } else {
              return "win";
          }
          break;
  }
}

//publikacja wyników
function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  document.querySelector('p.numbers span').textContent = ++gameSummary.games;

  if(result === 'draw') {
      document.querySelector('[data-summary="who-win"]').textContent = "Remis";
      document.querySelector('p.draws span').textContent = ++gameSummary.draws;
  } else if (result === 'win') {
      document.querySelector('[data-summary="who-win"]').textContent = "Zwycięstwo!";
      document.querySelector('p.wins span').textContent = ++gameSummary.wins;
  } else {
      document.querySelector('[data-summary="who-win"]').textContent = "Przegrana";
      document.querySelector('p.losses span').textContent = ++gameSummary.losses;
  }
}

//reset po zakończeniu gry
function endGame() {
  document.querySelector(`[data-option="${game.playerChoice}"]`).style.boxShadow = "";
  game.playerChoice = "";
  game.aiChoice = "";
}

//funkcja sterująca
function startGame() {
  if(!game.playerChoice) return alert("Wybierz jedną z opcji!");

  scrollTo(0,document.body.scrollHeight);
  game.aiChoice = computerChoice();
  const gameResult = checkResult(game.playerChoice, game.aiChoice);
  publishResult(game.playerChoice, game.aiChoice, gameResult);
  endGame();
}

document.querySelector('.start').addEventListener('click', startGame);