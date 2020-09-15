const factorial = (number) => {
  if (number <= 1){
    return 1; 
  } else {
  let answer = 1;
  for(let i=2; i<=number; i++){
    answer = answer * i;
  }
  return answer;
  }
  }
  module.exports = factorial;