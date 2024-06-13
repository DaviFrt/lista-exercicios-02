const prompt = require("prompt-sync")();

function jokenpo() {
  const options = ["pedra", "papel", "tesoura"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  let userChoice = prompt(
    "Escolha entre pedra, papel e tesoura: "
  ).toLowerCase();

  while (!options.includes(userChoice)) {
    userChoice = prompt("Escolha entre pedra, papel e tesoura: ").toLowerCase();
  }

  if (userChoice === computerChoice) {
    console.log(`Empate!`);
  } else if (
    (userChoice === "pedra" && computerChoice === "tesoura") ||
    (userChoice === "papel" && computerChoice === "pedra") ||
    (userChoice === "tesoura" && computerChoice === "papel")
  ) {
    console.log(`O computador escolheu: ${computerChoice}, você ganhou!`);
  } else {
    console.log(`O computador escolheu: ${computerChoice}, você perdeu!`);
  }
}

jokenpo();
