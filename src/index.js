const factorial = (number) => {
  return fact(number)
}

function fact(number){
  if (number > 0){
    return number * fact(number - 1);
  }else{
    return 1;
  }
}

  module.exports = factorial;