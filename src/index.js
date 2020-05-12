const factorial = (number) => {
  let result = 1;
  while (number > 0) {
    result *= number;
    number--;
  }
  return result;
}

module.exports = factorial;