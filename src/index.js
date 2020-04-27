const factorial = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
    debugger
  }

  return result;
}

module.exports = factorial;