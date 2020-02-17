const factorial = number => {
	let factorial = number;
	for (let index = number - 1; index > 1; index--) {
		factorial *= index;
	}
	return number === 0 ? 1 : factorial;
};

module.exports = factorial;
