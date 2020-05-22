const factorial = (number) => {
  response = 1;
  if (number > 1) {
    for (let index = number; index > 0; index--) {
      response *= index;
    }
  }
  return response;
};

module.exports = factorial;
