const factorial = (number) => {
  let fac = 1;
  let a = 1;
  for (let i = 0; i < number; i++) {
    fac = (i + 1) * a;
    a = fac;
  }
  return fac;
};

module.exports = factorial;
