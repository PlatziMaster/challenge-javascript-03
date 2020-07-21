const factorial = (number) => {
  if(number==0){
    return 1
  }
  if(number< 2){
    return number
  }
    return number * factorial(number - 1)
  }

  module.exports = factorial;
