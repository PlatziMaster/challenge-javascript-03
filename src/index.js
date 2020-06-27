const factorial = (number) => {
  let result = number
  if(number === 1 || number === 0){
    return 1
  } else {
    for (let i = number; i > 1; i--) {
      result *= (i - 1)
    }
  }
  return result
}

  module.exports = factorial;