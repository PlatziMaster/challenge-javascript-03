const factorialRecursive = (number) => {
  if(number===0) return 1
  return number * factorial(number-1)
}

const factorial = (number) => {
  let result = 1
  for(let i = 0;i<number;i++){
    result=result*(i+1)
  }
  return result
}

module.exports = {
  factorial:factorial,
  factorialRecursive:factorialRecursive
};