const factorial = (number) => {
    if(number >1)
      for(i=number; i>1; i--){
        number = number* (i-1);
      }
      else{
        number = 1
        return number;
      }
      return number;
    }
  module.exports = factorial;