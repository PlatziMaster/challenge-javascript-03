const factorial = (number) => {
  var numFactorial = 1;
  for (var i = 0; i <= number; i++) {
    if (i === 0) {
      numFactorial = 1
    } else {
      numFactorial = (i + 1) * numFactorial;
    }
  }
  return numFactorial;
}

module.exports = factorial;