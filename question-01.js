const prompt = require("prompt-sync")();

function calculateSmokerLifeYears() {
  let cigarretesSmokedPerDay = parseInt(
    prompt("Quantos cigarros você fuma por dia? ")
  );
  let yearsSmoking = parseInt(prompt("Há quantos anos você fuma? "));

  while (
    isNaN(cigarretesSmokedPerDay) ||
    isNaN(yearsSmoking) ||
    cigarretesSmokedPerDay < 0 ||
    yearsSmoking < 0
  ) {
    cigarretesSmokedPerDay = parseInt(
      prompt("Quantos cigarros você fuma por dia? ")
    );

    yearsSmoking = parseInt(prompt("Há quantos anos você fuma? "));
  }

  const minutesLostPerDay = 10 * cigarretesSmokedPerDay;
  const totalMinutesLost = minutesLostPerDay * (yearsSmoking * 365);
  const totalDaysLost = totalMinutesLost / 1440;

  console.log(`Você perderá ${totalDaysLost.toFixed(2)} dias de vida.`);
}

calculateSmokerLifeYears();
