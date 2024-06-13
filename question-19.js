const prompt = require("prompt-sync")();

function validateTime(time) {
  const [hours, minutes, seconds] = time.split(":");

  if (
    hours >= 0 &&
    hours <= 23 &&
    minutes >= 0 &&
    minutes <= 59 &&
    seconds >= 0 &&
    seconds <= 59
  ) {
    return true;
  } else {
    return false;
  }
}

function receiveTime() {
  const times = [];

  for (let i = 0; i < 5; i++) {
    let time = prompt("Digite um horário (HH:MM:SS): ");

    while (!validateTime(time)) {
      time = prompt("Digite um horário (HH:MM:SS): ");
    }

    times.push(time);
  }

  console.log("Horários válidos: ");
  console.log(times);
}

receiveTime();
