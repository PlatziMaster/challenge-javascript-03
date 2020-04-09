const factorial = (number) => {
	const array = [];
	for (let index = number; index > 0; index--) {
		array.push(index);
	}

	let x = 1;
	for (let index = 0; index < array.length; index++) {
		x *= array[index];
	}
	return x;
};

factorial(9);

module.exports = factorial;
