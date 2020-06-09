const factorial = (number) => {
  let factorialNumber = 1;
  for (let i = 1; i <= number; i++) {
    number === 0
      ? factorialNumber = 1
      : factorialNumber *= i;
  }

  return factorialNumber;
}

module.exports = factorial;