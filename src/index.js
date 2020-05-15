const factorial = (number) => {
    var number;
    let y = 1;
    for (let i = number; i >= 1 ; i--) {
      if ((number == 0) || (number == 1)) {
        return 1;
        ;
      } else {
        y = y * i;
      }
      
    } 
    return y;
  }

factorial(9);


  module.exports = factorial;