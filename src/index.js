const factorial = (number) => {
  resultado = 1;
  let i = 1;
  while (i <= number) {
    resultado = resultado * i;
    i++;
  }
  return resultado;
};

console.log(factorial(15));
module.exports = factorial;
