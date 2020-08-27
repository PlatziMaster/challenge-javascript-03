/**
 * Get the factorial of a number
 * @param number
 * @returns factorial of the number
 */
function factorial(number: number): number {
    if (number === 0 || number === 1) return 1
    return number * factorial(number - 1);
}

// /**
//  * Get the factorial of a number
//  * @param number
//  * @returns factorial of the number
//  */
// function factorial(number: number): number {
//     let counter = 1;
//     if (number === 0 || number === 1) return counter;
//     for (let index = 2; index <= number; index++) {
//         counter *= index;
//     }
//     return counter;
// }

export = factorial;