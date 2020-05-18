const factorial = (number) => {
	if(number === 0){
		return 1
	}
	if (number > 0){
		return factorial(number - 1) * number
	}

  }

  module.exports = factorial;
