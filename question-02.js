const prompt = require("prompt-sync")();

function speedRadar() {
  let speed = parseInt(prompt("Qual a velocidade do carro em km/h? "));

  while (speed < 0 || isNaN(speed)) {
    speed = parseInt(prompt("Qual a velocidade do carro em km/h? "));
  }

  if (speed > 80) {
    console.log(`Você foi multado em R$ ${(speed - 80) * 5}.`);
  }
}

speedRadar();
