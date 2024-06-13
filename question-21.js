const prompt = require("prompt-sync")();

function idealWeight() {
  let height = parseFloat(prompt("Digite sua altura em cm: "));
  let sex = prompt("Digite seu sexo (M/F): ").toUpperCase();

  while (isNaN(height) || height <= 0) {
    height = parseFloat(prompt("Digite sua altura em cm: "));
  }

  while (sex !== "M" && sex !== "F") {
    sex = prompt("Digite seu sexo (M/F): ").toUpperCase();
  }

  height = height / 100;

  if (sex === "M") {
    console.log(`Seu peso ideal é ${(72.7 * height - 58).toFixed(2)}kg`);
  } else {
    console.log(`Seu peso ideal é ${(62.1 * height - 44.7).toFixed(2)}kg`);
  }
}

idealWeight();
