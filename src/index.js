const factorial = (number) => {
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial = factorial * i;
  }
  console.log(factorial);
};

factorial(8);

module.exports = factorial;
