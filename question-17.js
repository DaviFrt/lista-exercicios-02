const prompt = require("prompt-sync")();

function filterMinors() {
  const names = [];
  const ages = [];

  for (let i = 0; i < 9; i++) {
    let name = prompt("Digite o nome da pessoa: ");
    let age = parseInt(prompt("Digite a idade da pessoa: "));

    while (name === "" || isNaN(age)) {
      name = prompt("Digite o nome da pessoa: ");
      age = parseInt(prompt("Digite a idade da pessoa: "));
    }

    names.push(name);
    ages.push(age);
  }

  console.log("Pessoas menores de idade: ");
  for (let i = 0; i < 9; i++) {
    if (ages[i] < 18) {
      console.log(`${names[i]} - ${ages[i]} ${ages[i] === 1 ? "ano" : "anos"}`);
    }
  }
}

filterMinors();
