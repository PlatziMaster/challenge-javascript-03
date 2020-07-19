const factorial = (number) => {
  // number = 5
  // 5 = 5 * 4 * 3 * 2 = 120
  // n = (n-i) * (n-i) * (n-i) * (n-i)
  // n = (n-(n)) * (n-(n-1)) * (n-(n-2)) * (n-i)
  if(number <= 1) {
    return 1
  }
  else {
    return number * factorial(number - 1)
  }
}
  module.exports = factorial;
