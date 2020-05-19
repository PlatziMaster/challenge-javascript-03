const factorial = (number) => {
	let factor = 1
	for (let i = 1; i <= number; i++) {
    if (i < 2) {
      factor = 1
    } else {
	    factor = factor * i
    }
	}
	return factor
}

  module.exports = factorial;