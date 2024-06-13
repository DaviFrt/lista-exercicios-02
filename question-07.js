const prompt = require("prompt-sync")();

function rentalPrice() {
  let desiredModel = prompt(
    "Qual o modelo do carro desejado? (Popular ou luxo) "
  ).toLowerCase();
  let rentalDays = parseInt(prompt("Quantos dias você ficará com o carro? "));
  let kmTraveled = parseInt(
    prompt("Quantos quilômetros você pretende rodar? ")
  );

  while (desiredModel !== "popular" && desiredModel !== "luxo") {
    desiredModel = prompt(
      "Qual o modelo do carro desejado? (Popular ou luxo) "
    ).toLowerCase();
  }

  while (isNaN(rentalDays) || rentalDays <= 0) {
    rentalDays = parseInt(prompt("Quantos dias você ficará com o carro? "));
  }

  while (isNaN(kmTraveled) || kmTraveled <= 0) {
    kmTraveled = parseInt(prompt("Quantos quilômetros você pretende rodar? "));
  }

  let pricePerDay, pricePerKm;

  if (desiredModel === "popular") {
    pricePerDay = 90;

    if (kmTraveled <= 100) {
      pricePerKm = 0.2;
    } else {
      pricePerKm = 0.1;
    }
  } else {
    pricePerDay = 150;

    if (kmTraveled <= 200) {
      pricePerKm = 0.3;
    } else {
      pricePerKm = 0.25;
    }
  }

  const totalPrice = pricePerDay * rentalDays + pricePerKm * kmTraveled;
  console.log(`O preço total do aluguel é de R$${totalPrice.toFixed(2)}.`);
}

rentalPrice();
