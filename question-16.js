function generatesAndOrdersNumbers() {
  const numbers = [];

  for (let i = 0; i < 20; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }

  console.log("Números gerados: ");
  console.log(numbers);
  console.log("Números ordenados: ");
  console.log(numbers.sort((a, b) => a - b));
}

generatesAndOrdersNumbers();
