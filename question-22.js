const prompt = require("prompt-sync")();

function citySearch() {
  let totalWages = 0;
  let sumOfChildren = 0;
  let salariesUpTo350 = 0;
  let highestSalary = 0;
  let totalOfInterviewees = 0;
  let numberOfChildren = 0;
  let currentSalary = 0;

  while (true) {
    currentSalary = parseFloat(prompt("Digite o salário do habitante: "));

    while (isNaN(currentSalary) || currentSalary < 0) {
      currentSalary = parseFloat(prompt("Digite o salário do habitante: "));
    }

    numberOfChildren = parseInt(
      prompt("Digite o número de filhos do habitante: ")
    );

    while (isNaN(numberOfChildren) || numberOfChildren < 0) {
      numberOfChildren = parseInt(
        prompt("Digite o número de filhos do habitante: ")
      );
    }

    if (currentSalary > highestSalary) {
      highestSalary = currentSalary;
    }

    if (currentSalary <= 350) {
      salariesUpTo350++;
      console.log("Cai aqui");
    }

    totalWages += currentSalary;
    sumOfChildren += numberOfChildren;
    totalOfInterviewees++;

    console.log("====================================");
    let wantsToContinue = prompt("Deseja continuar? (s/n): ").toLowerCase();

    while (wantsToContinue !== "s" && wantsToContinue !== "n") {
      wantsToContinue = prompt("Deseja continuar? (s/n): ").toLowerCase();
    }

    if (wantsToContinue === "n") {
      break;
    }

    console.log("====================================");
  }

  const averageSalary = totalWages / totalOfInterviewees;
  const averageChildren = sumOfChildren / totalOfInterviewees;
  const percentageOfSalariesUpTo350 =
    (salariesUpTo350 / totalOfInterviewees) * 100;

  console.log("====================================");
  console.log("Relatório: ");
  console.log(`Média salarial: ${averageSalary.toFixed(2)}`);
  console.log(`Média de filhos: ${averageChildren.toFixed(2)}`);
  console.log(`Maior salário: ${highestSalary.toFixed(2)}`);
  console.log(
    `Porcentagem de pessoas com salário até R$ 350: ${percentageOfSalariesUpTo350.toFixed(
      2
    )}%`
  );
  console.log("====================================");
}

citySearch();
