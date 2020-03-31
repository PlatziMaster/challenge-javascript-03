const factorial = (number) => {
  let total = 1; 
	for ( let i = 2; i <= number; i++ ) total *= i; 
	return total;     
}

  module.exports = factorial;