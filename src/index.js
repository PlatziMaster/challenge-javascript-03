const factorial = (number) => {
  let x = 1
  for (let i = 1; i <= number; i++) { //Doesn´t execute when number = 0 (i <= number is false at first time)
    x = x * i
  }
  return x
}

module.exports = factorial;