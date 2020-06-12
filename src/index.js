const factorial = (number) => {
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
};

module.exports = factorial;
