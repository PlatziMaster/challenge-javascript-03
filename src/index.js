var prompt = require('prompt');
var factorial = require('./_test_/utils/factorial')

prompt.start();
console.log('Ingresa un número que desees saber su factorial: ')
prompt.get(['number'], function (err, result) {
  console.log('  Número: ' + result.number);
  console.log('  factorial: ' + factorial(result.number));
});