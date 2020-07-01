const factorial = (n) => {
  var resultadoFactorial = 1
  for (let i = 1; i <= n; i++) {
    resultadoFactorial = resultadoFactorial * i;
  };
  console.log(resultadoFactorial);
  
  return resultadoFactorial 
}
factorial();
module.exports = factorial;