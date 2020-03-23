const factorial = (number) => {
    if(number == 0 || number == 1) return 1;
    else{
      var f=1;
      for(let i=2; i<=number; ++i){
        f=f*i;
      }
      return f;
    }
  }

  module.exports = factorial;