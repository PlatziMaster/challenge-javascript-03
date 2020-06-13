const factorial = (number) => {
  let numberFacorial = 1;
  for (let index = 1; index <= number; index++) {
    numberFacorial = numberFacorial * index;
  }
  return numberFacorial;
};

module.exports = factorial;
