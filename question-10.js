const prompt = require("prompt-sync")();

function receiveMultipleNumbers() {
  let sumOfNumbers = 0;
  let numberOfEntries = 0;
  let smallestNumber = 0;
  let numberOfPairs = 0;
  let currentNumber = 0;

  do {
    currentNumber = parseFloat(prompt("Digite um número: "));

    while (isNaN(currentNumber)) {
      currentNumber = parseFloat(prompt("Digite um número válido: "));
    }

    sumOfNumbers += currentNumber;
    numberOfEntries++;

    if (numberOfEntries === 1) {
      smallestNumber = currentNumber;
    } else if (currentNumber < smallestNumber) {
      smallestNumber = currentNumber;
    }

    if (currentNumber % 2 === 0) {
      numberOfPairs++;
    }

    const wantToContinue = prompt("Deseja continuar? (S/N): ").toLowerCase();

    if (wantToContinue !== "s") {
      break;
    }
  } while (true);

  console.log(`O somatório dos números é: ${sumOfNumbers}`);
  console.log(`O menor valor digitado foi: ${smallestNumber}`);
  console.log(`A média dos números é: ${sumOfNumbers / numberOfEntries}`);
  console.log(`A quantidade de números pares é: ${numberOfPairs}`);
}

receiveMultipleNumbers();
