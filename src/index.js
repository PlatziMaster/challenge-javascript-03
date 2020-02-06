const factorial = (number) => {
  let factoriaNumber = 1;
  for (let index = 1; index <= number; index++) {
    factoriaNumber = factoriaNumber * index;
  }
  return factoriaNumber;
}

module.exports = factorial;