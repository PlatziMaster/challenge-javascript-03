const factorial = (number) => {
    const factorialnNumber = number ; 
    var returnFactorial = 1; 
    for (let x =1; x <= factorialnNumber; x ++){
      returnFactorial *=x;
    }
    return returnFactorial; 
    
  }


  module.exports = factorial;