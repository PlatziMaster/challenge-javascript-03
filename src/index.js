const factorial = (number) => {
  let total = 1;
    if(number === 0 || number === 1){
      return 1;
    }
    for(let i = number;i > 0; i--){
      total = total * i;
    }
    return total;
  }

  module.exports = factorial;