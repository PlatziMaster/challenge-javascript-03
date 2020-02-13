const factorial = (number) => {
  let fact = 1;
  for(number; number > 0; number--){
    fact = fact * number;
  };
  return fact;
}

module.exports = factorial;