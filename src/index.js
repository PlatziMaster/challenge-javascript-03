const factorial = (number) => {
  // let j = 1;
  // for (i = 1; i <= number; i++) {
  //   j *= i;
  // }
  // return j;
  if (number <= 1) return 1;
  return number * factorial(number - 1);
}

module.exports = factorial;