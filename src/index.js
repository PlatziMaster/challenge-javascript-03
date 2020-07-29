const factorial = (number) => {
    var fact = number;
    if(fact === 0 || fact === 1)
    {
      return 1;
    }
    return fact * factorial(fact-1);
  }

  module.exports = factorial;