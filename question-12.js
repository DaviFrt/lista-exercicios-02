function firstTenFibonacciNumbers() {
  let firstNumber = 1;
  let secondNumber = 1;

  console.log(firstNumber);
  console.log(secondNumber);

  for (let i = 3; i <= 10; i++) {
    const nextNumber = firstNumber + secondNumber;

    console.log(nextNumber);

    firstNumber = secondNumber;
    secondNumber = nextNumber;
  }
}

firstTenFibonacciNumbers();
