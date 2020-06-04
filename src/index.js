const factorial = (number) => {

  return factorialFormule(number);

  function factorialFormule(f){
    if(!this.cache){
      this.cache = {}
    }

    if(this.cache[f]){
      return this.cache[f]
    }

    if(f <= 1){
      return 1;
    }
    else{
      this.cache[f] = f * factorialFormule(f-1);
      return this.cache[f];
    }
  }
}

  module.exports = factorial;