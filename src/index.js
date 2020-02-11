const prompt = require('prompt');

const prompt_attributes = [
  {
    name: 'number',
    validator: /^[0-9]*$/,
    warning: 'Inavalid data, please enter a number'
  },
  
]

prompt.start()

const factorial = (n) => {
    if(n === 1 || n === 0) {
      return 1
    }
    return n * factorial(n-1)
  }

prompt.get(prompt_attributes, (err, result)=>{

  if(err) {
    console.log(err)
    return null
  } else {
    console.log('the factorial is: ');

    let number = result.number;
    const response = factorial(number)
    console.log(response)
  }
})

  module.exports = factorial;