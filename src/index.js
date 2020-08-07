const factorial = (number) => {
  var counter = number;
  var factorial = 1
  while (counter > 0) {
    factorial = Math.abs(factorial * counter)
    counter--

  }

  return factorial

}

module.exports = factorial;