const factorial = (number) => number < 2 ? 1 : factorial(number - 1) * number;

module.exports = factorial;