const prompt = require("prompt-sync")();

function pointsPerActivity() {
  let hoursOfActivityInAMonth = parseFloat(
    prompt("Quantas horas de atividade física você praticou esse mês? ")
  );

  while (isNaN(hoursOfActivityInAMonth) || hoursOfActivityInAMonth < 0) {
    hoursOfActivityInAMonth = parseFloat(
      prompt("Quantas horas de atividade física você praticou esse mês? ")
    );
  }

  let points = 0;

  if (hoursOfActivityInAMonth < 10) {
    points = hoursOfActivityInAMonth * 2;
  } else if (hoursOfActivityInAMonth >= 10 && hoursOfActivityInAMonth <= 20) {
    points = hoursOfActivityInAMonth * 5;
  } else {
    points = hoursOfActivityInAMonth * 10;
  }

  const totalMoney = points * 0.05;
  console.log(
    `Você acumulou ${points} pontos e ganhou R$${totalMoney.toFixed(2)}`
  );
}

pointsPerActivity();
