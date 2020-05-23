const factorial = (number) => {
  var result = number;

  if (number === 0) {
    return result+1;
  }else{
    for (var i = number-1; i > 0; i--) {

      result = result * (i);
    }
    return result;
  }
}

  module.exports = factorial;