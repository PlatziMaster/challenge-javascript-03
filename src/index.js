const factorial = (number) => {
  let acum = 1;
  for (let i = 1; i <= number; i++) {
    acum = acum * i;
  }
  // console.log(acum);
  return acum;
};

factorial(5);

module.exports = factorial;
