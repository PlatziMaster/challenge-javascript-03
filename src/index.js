const factorial = (number) => {
    if(number == 1 || number == 0){
      return 1;
    } else {
      return factorial(number-1) * number; 
    }
  }

  module.exports = factorial;