const factorial = (number) => {
  let facto = 1;
  if (number <= 0) {
    return facto;
  } else {
    for (let i = 1; i <= number; i++) {
      facto = facto * i;
    }
    return facto;
  }
};

module.exports = factorial;
