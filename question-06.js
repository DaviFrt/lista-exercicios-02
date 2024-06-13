const prompt = require("prompt-sync")();

function guessNumber() {
  const drawnNumber = Math.floor(Math.random() * 5 + 1);
  let guess = parseInt(prompt("Chute um número de 1 a 5: "));

  if (isNaN(guess) || guess < 1 || guess > 5) {
    guess = parseInt(prompt("Chute um número de 1 a 5: "));
  }

  if (drawnNumber === guess) {
    console.log(`Parabéns, você ganhou! O número sorteado foi ${drawnNumber}`);
  } else {
    console.log(`Que pena, você perdeu! O número sorteado foi ${drawnNumber}`);
  }
}

guessNumber();
