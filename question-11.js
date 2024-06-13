const prompt = require("prompt-sync")();

function showPA() {
  let firstTerm = parseFloat(prompt("Digite o primeiro termo da PA: "));
  let commonDifference = parseFloat(prompt("Digite a razão da PA: "));
  let sumOfTerms = 0;

  while (isNaN(firstTerm)) {
    firstTerm = parseFloat(prompt("Digite o primeiro termo da PA: "));
  }

  while (isNaN(commonDifference)) {
    commonDifference = parseFloat(prompt("Digite a razão da PA: "));
  }

  console.log("Os 10 primeiros termos da PA são:");

  for (let i = 0; i < 10; i++) {
    const newTerm = firstTerm + commonDifference * i;
    sumOfTerms += newTerm;

    console.log(newTerm);
  }

  console.log(`A soma dos 10 primeiros termos da PA é: ${sumOfTerms}`);
}

showPA();
