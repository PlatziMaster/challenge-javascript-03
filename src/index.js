const factorial = (number) => {
  let result;
  if (number === 0) {
    result = 1;
  } else {
    result = number * factorial(number - 1);
  }
  return result;
}

module.exports = factorial;