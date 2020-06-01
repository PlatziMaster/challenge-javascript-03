const factorial = (number) => {
  resultado = 1;
    for (let index = 1; index <= number; index++) {
      resultado = resultado * index;
    }
    return resultado;
  }

  module.exports = factorial;