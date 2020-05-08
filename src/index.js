const factorial = (number) => {
  let n = 1;

  for (let i = 1; i <= number; i++) {
    n = n * i;
  }
  return n;
};

module.exports = factorial;
