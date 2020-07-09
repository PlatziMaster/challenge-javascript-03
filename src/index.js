const factorial = (number) => {
    var accumulator = 1;
    for(var i = number; i > 0; i--){
      accumulator *= i;
    }
    return accumulator;
}

  module.exports = factorial;