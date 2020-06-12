const factorial = (number) => {
  let result = number;

  if (number === 0) {
    result = 1;
  } else {
    for (let i = 1; i < number; i++) {
      result *= i;
    }
  }
  return result;
};

module.exports = factorial;
