const prompt = require("prompt-sync")();

function registerEmployee() {
  const employee = {};

  employee.name = prompt("Digite o nome do funcionário: ");
  while (employee.name === "") {
    employee.name = prompt("Digite o nome do funcionário: ");
  }

  employee.position = prompt("Digite o cargo do funcionário: ");
  while (employee.position === "") {
    employee.position = prompt("Digite o cargo do funcionário: ");
  }

  employee.wage = parseFloat(prompt("Digite o salário do funcionário: "));
  while (isNaN(employee.wage) || employee.wage < 0) {
    employee.wage = parseFloat(prompt("Digite o salário do funcionário: "));
  }

  console.log("Ficha do funcionário: ");
  console.log(`Nome: ${employee.name}`);
  console.log(`Cargo: ${employee.position}`);
  console.log(`Salário: R$${employee.wage.toFixed(2)}`);
}

registerEmployee();
