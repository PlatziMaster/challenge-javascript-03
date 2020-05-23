const factorial = number => {
  var res =1
  if(number > 1) {
    for(let i=number; i>0; i--)
      res *= i
  }
  return res
}

module.exports = factorial

/*
Este codigo tambien pasó el test pero después lo reducí con un for

var res = 1
if(number > 1) {
  do{
    res *= number
    number--
  }while(number !=0)
}
return res
*/