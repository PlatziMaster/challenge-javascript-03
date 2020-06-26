const factorial = (number) => {

    if (number == 0)
    {
      return 1;
    }
    else
    {
      factorial = number * factorial(number -1);
      return factorial;
    }
  }

  module.exports = factorial;