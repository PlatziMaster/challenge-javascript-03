const factorialClosure = () => {
  const factorialFunction = (number) => {
    let factoralNumber = 1;
  for(let i=1; i<= number; i++){
    factoralNumber = i * factoralNumber;
    }
    return factoralNumber;
  } 
   return factorialFunction;
  }
  const factorial = factorialClosure();
  factorial(5);
  
  module.exports = factorial;
