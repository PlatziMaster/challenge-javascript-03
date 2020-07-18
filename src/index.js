const factorial = (number) => {
  let fact = 1;
  if (number == 0 || number == 1){
    return 1
  } else {
    for (let i = 1; i <= number; i++) {
      fact *= i;
    }
  }
  return fact
}

console.log(factorial(99));

module.exports = factorial;