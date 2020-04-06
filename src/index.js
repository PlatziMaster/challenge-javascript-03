const factorial = (number) => number === 0 ? 1 : number > 1 ? number * factorial(number -1) : number;

module.exports = factorial;
