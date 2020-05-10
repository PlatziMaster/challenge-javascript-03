const values = [0, 1, 5, 8, 10];

// const factorial = (number) => {
//   if(number === 0) {
//     return 1;
//   };
//   else {
//     return number * factorial(number - 1); // recursivity 
//   };
// };

const factorial = number => number === 0? 1 : number * factorial(number - 1) // cleanest way

factorial(values.length);

module.exports = factorial;