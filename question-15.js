const prompt = require("prompt-sync")();

function vectorOfPairNumbers() {
  const numbers = [];
  const pairNumbers = [];
  const pairNumbersIndex = [];

  for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Digite um número: "));

    while (isNaN(number)) {
      number = parseInt(prompt("Digite um número: "));
    }

    numbers.push(number);

    if (number % 2 === 0) {
      pairNumbers.push(number);
      pairNumbersIndex.push(i);
    }
  }

  console.log("Números pares: ");
  console.log(pairNumbers);
  console.log("Posição dos números pares: ");
  console.log(pairNumbersIndex);
}

vectorOfPairNumbers();
