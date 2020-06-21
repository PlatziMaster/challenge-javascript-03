const factorial = (number) => {
  let fact = 1
  let i = 1
  while (i <= number) {
    fact = fact * i
    i += 1
  }
  return fact
  }

  module.exports = factorial;