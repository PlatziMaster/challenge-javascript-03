const factorial = (number) => {
  suma = 1;
  for (i = number; i > 0; i--) {
    suma *= i;
  }
  return suma;
};

module.exports = factorial;
