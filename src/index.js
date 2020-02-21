const factorial = number => {
  let rta = 1;
  for (i = number; i > 0; i--) {
    rta *= i;
  }
  return rta;
};

module.exports = factorial;
