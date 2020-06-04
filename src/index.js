const factorial = (number) => {
  fact = 1;
  while (number > 0) {
    fact = number * fact
    number--;
  }
  return fact;
}

module.exports = factorial;