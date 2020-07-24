const factorial = (number) => {
	let factorialArray=[];
	var i = number;
	var factorialValue;
    if(i<0){
		console.log(`${number} is not a factorial number`);
	}else if(i===0){
			var factorialValue = 1;
		}else{
				while(i>0){
						factorialArray.push(i);
						i--;
						var factorialValue = factorialArray.reduce(function(acumulador, init){
			acumulador = acumulador * init;
			return acumulador;
			return factorialValue;
					}
				);
			};
	}
	return factorialValue;
  }

console.log(factorial(2));
  module.exports = factorial;
