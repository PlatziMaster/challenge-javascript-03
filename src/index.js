const factorial = (number) => {
  let fact = 1
  for (let index = 1; index < number + 1; index++) {
    fact = fact * index
  }
  return fact
  }

  module.exports = factorial;