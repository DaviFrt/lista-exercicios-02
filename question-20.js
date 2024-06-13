const prompt = require("prompt-sync")();

function payroll() {
  const employees = [];

  for (let i = 0; i < 2; i++) {
    const registration = prompt("Digite a matrícula do funcionário: ");
    const name = prompt("Digite o nome do funcionário: ");
    const grossSalary = prompt("Digite o salário bruto do funcionário: ");
    const inssDeduction = grossSalary * 0.12;
    const netSalary = grossSalary - inssDeduction;
    console.log("====================================");

    employees.push({
      registration,
      name,
      grossSalary,
      inssDeduction,
      netSalary,
    });
  }

  console.log("Contracheques: ");
  employees.forEach((employees) => {
    console.log("====================================");
    console.log(`Matrícula: ${employees.registration}`);
    console.log(`Nome: ${employees.name}`);
    console.log(`Salário Bruto: ${employees.grossSalary}`);
    console.log(`Desconto INSS: ${employees.inssDeduction}`);
    console.log(`Salário Líquido: ${employees.netSalary}`);
    console.log("====================================");
  });
}

payroll();
