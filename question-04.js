const prompt = require("prompt-sync")();

function isPossibleToFormATriangle() {
  let firstSide = parseFloat(
    prompt("Informe o comprimento do primeiro segmento de reta:")
  );
  let secondSide = parseFloat(
    prompt("Informe o comprimento do segundo segmento de reta:")
  );
  let thirdSide = parseFloat(
    prompt("Informe o comprimento do terceiro segmento de reta:")
  );

  while (
    isNaN(firstSide) ||
    isNaN(secondSide) ||
    isNaN(thirdSide) ||
    firstSide <= 0 ||
    secondSide <= 0 ||
    thirdSide <= 0
  ) {
    firstSide = parseFloat(
      prompt("Informe o comprimento do primeiro segmento de reta:")
    );
    secondSide = parseFloat(
      prompt("Informe o comprimento do segundo segmento de reta:")
    );
    thirdSide = parseFloat(
      prompt("Informe o comprimento do terceiro segmento de reta:")
    );
  }

  if (
    firstSide < secondSide + thirdSide &&
    secondSide < firstSide + thirdSide &&
    thirdSide < firstSide + secondSide
  ) {
    console.log(
      "É possível formar um triângulo com os segmentos de reta informados."
    );
  } else {
    console.log(
      "Não é possível formar um triângulo com os segmentos de reta informados."
    );
  }
}

isPossibleToFormATriangle();
