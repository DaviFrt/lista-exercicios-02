const prompt = require("prompt-sync")();

function calculateSalaryBySex() {
  let mensTotalSalary = 0;
  let womensTotalSalary = 0;

  while (true) {
    const salary = parseFloat(prompt("Digite o salário do funcionário: "));
    const sex = prompt("Digite o sexo do funcionário (M/F): ").toLowerCase();

    while (isNaN(salary) || salary < 0) {
      salary = parseFloat(prompt("Digite o salário do funcionário: "));
    }

    while (sex !== "m" && sex !== "f") {
      sex = prompt("Digite o sexo do funcionário (M/F): ").toLowerCase();
    }

    if (sex === "m") {
      mensTotalSalary += salary;
    } else {
      womensTotalSalary += salary;
    }

    const wantToContinue = prompt("Deseja continuar? (S/N): ").toLowerCase();

    if (wantToContinue !== "s") {
      break;
    }
  }

  console.log(
    `A soma dos salários dos homens é R$${mensTotalSalary.toFixed(2)}`
  );
  console.log(
    `A soma dos salários das mulheres é R$${womensTotalSalary.toFixed(2)}`
  );
}

calculateSalaryBySex();
