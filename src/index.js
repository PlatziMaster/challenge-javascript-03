const factorial = (number) => number > 1 ? number * factorial(number -1) : number

module.exports = factorial;
