"use strict";
function factorial(number) {
    var counter = 1;
    if (number === 0 || number === 1)
        return counter;
    for (var index = 2; index <= number; index++) {
        counter *= index;
    }
    return counter;
}
module.exports = factorial;
