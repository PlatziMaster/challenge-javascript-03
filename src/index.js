const factorial = (number) => {
  let count = 1;
  for (let i = 1; i<=number; i++) {
      count *= i;
  }
  return count;
}

module.exports = factorial;