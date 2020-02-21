const factorial = (number) => {
  const n = number;
  let total = 1;
  for(i=1; i<=n; i++) {
      total = total*i
    }
    return total;
  }

  module.exports = factorial;