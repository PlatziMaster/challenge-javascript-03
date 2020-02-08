const factorial = number => {
  let total = number == 0 ? 1 : number;
  for (let i = total - 1; i > 0; i--) {
    total = total * i;
  }
  return total;
};

module.exports = factorial;
