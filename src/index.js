 const factorial = (number) => {
    
    if (!this.cache) {
      this.cache = {}
    }
    
    if (this.cache[number]) {
      return this.cache[number]
    }

    if (number === 1 || number === 0) {
      return 1
    }    

    this.cache[number] = number * factorial(number - 1)
    return this.cache[number]
  }

  module.exports = factorial;

 