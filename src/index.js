const factorial = (number) => {
  if(number < 0) throw new Error('El numero debe ser positivo');

  let result = 1;
  for (let index = number; index > 0; index--) {
    result *= index;
  }

  return result;
}

module.exports = factorial;