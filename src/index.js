const factorial = (number) => {
  var numero = number
  var resultado = 1
  for(var i=1; i<=numero; i++){
      resultado = resultado * i
  }
  return resultado;
  }

  module.exports = factorial;