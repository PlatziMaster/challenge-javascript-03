const factorial = (number) => {
  let acum = 1;
  for (let i = 1; i <= number; i++) {
    acum = acum * i;
  }
  return acum;
};

module.exports = factorial;
