const factorial = (number) => {
  let result = 1, i = number;
  for (let i = number; i >= 2; i--) result = result * i;
  return result;
}

module.exports = factorial;