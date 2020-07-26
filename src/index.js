const factorial = (number) => {
    let numbers = []
    for (i=1; i<=number; i++)
    numbers.push(i)
    const reducer = (acum, numbers) => acum * numbers
    factor = numbers.reduce(reducer,1)
    return factor
  }

  module.exports = factorial;

