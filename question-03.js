const prompt = require("prompt-sync")();

function calculateTicketPrice() {
  let desiredDistance = parseInt(prompt("Qual a distância da viagem em km? "));

  while (desiredDistance < 0 || isNaN(desiredDistance)) {
    desiredDistance = parseInt(prompt("Qual a distância da viagem em km? "));
  }

  let ticketPrice = 0;

  if (desiredDistance <= 200) {
    ticketPrice = 0.5 * desiredDistance;
  } else {
    ticketPrice = 0.45 * desiredDistance;
  }

  console.log(`O preço da passagem é R$ ${ticketPrice.toFixed(2)}`);
}

calculateTicketPrice();
