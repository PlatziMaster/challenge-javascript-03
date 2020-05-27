const factorial = (number) => {
    let fact = 1;
    for (let i = 2; i <= number; i++) {
        fact *= i;
    }
    return fact;
}

module.exports = factorial;