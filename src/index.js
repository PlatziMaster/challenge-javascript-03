const factorial = (number) => {
    console.log(number);
    var factorial = 1;
    
    for (let i = 1; i <= number; i++) {
      factorial = factorial * i;  
    }

    return factorial;
  }

  module.exports = factorial;