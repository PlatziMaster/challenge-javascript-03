'use strict'

function getNumber(number) {
  if (number === 0) {
    return 1
  }
  return getNumber(number - 1) * number
}

const factorial = (number) => {
  return getNumber(number)
}

module.exports = factorial;