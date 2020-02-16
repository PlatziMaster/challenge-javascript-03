const factorial = (number) => {
  if (number <= 1){
    return 1;
  }else {
    let acum = 1;
    for (let i=1; i <= number; i++){
      acum *= i;
    }
    return acum;
  }
}

module.exports = factorial;