const factorial = (number) => {

    for(let i = number-1; i > 0; i--) {
      number *= i;
    }
    return number;
  }

  module.exports = factorial;