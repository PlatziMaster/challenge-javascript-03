const factorial = (number) => {
  let resultado = 1;
  for(let i = 1; i <= number; i++)
      resultado *= i;

  return resultado;
}

  module.exports = factorial;