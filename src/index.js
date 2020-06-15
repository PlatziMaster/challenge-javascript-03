const factorial = (number) => {
  let fact = 1;
  for (let i = 1; i < number + 1; i++) {
    fact = fact * i;
  }
  return fact
}

factorial(5)

module.exports = factorial;