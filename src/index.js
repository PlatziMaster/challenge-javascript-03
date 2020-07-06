const factorial = (number) => {
  let suma = 1;
  if(number < 2) {
    return suma;
  } else {
    while (number > 1) {
      suma = suma * number;
      number = number - 1
    }
  }
  return suma;
}
module.exports = factorial;
