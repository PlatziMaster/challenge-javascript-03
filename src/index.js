const factorial = (number) => {
  let result = 1
  if(number !== 0) {
    for(i = number; i > 0; i--){
      result = i * result
    }
  } else {
    return result = 1
  }
  return result
}
  module.exports = factorial