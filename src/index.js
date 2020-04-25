const factorial = (number) => {
  let factorial = 1;
  if (number > 0) {
    for (let index = 1; index <= number; index++) {
      factorial *= index
    }
  }
  return factorial;
}

module.exports = factorial;