const prompt = require("prompt-sync")();

function sevenNames() {
  const names = [];

  for (let i = 0; i < 7; i++) {
    let name = prompt("Digite um nome: ");

    while (name === "") {
      name = prompt("Digite um nome: ");
    }

    names.push(name);
  }

  console.log("Nomes na ordem inversa");

  for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
  }
}

sevenNames();
