const factorial = (number) => {
  let result
    if(number === 0 || number === 1){
      result = 1;
    }
    else{
      result = number
      for (let index = 1; index < number; index++) {
        result *= index;
      }
    }
    return result;
  }

  module.exports = factorial;