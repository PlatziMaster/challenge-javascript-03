const factorial = (number) => {
  let answer=1
  for(let i=1; i<=number; ++i){
    answer*=i
  }
  return answer
}

  module.exports = factorial;