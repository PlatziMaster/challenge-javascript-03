const factorial = (number) => {
    var res= 1;
    for(var i=1; i<=number; i++){
      res= res*i;
    }  
    return res;
  }

  module.exports = factorial;