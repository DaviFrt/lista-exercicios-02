function fifteenFibonacciNumbers() {
  const fibonacciNumbers = [1, 1];

  for (let i = 2; i < 15; i++) {
    fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
  }

  console.log("Os primeiros 15 números da sequência de Fibonacci são:");
  console.log(fibonacciNumbers);
}

fifteenFibonacciNumbers();
