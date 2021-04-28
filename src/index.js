const factorial = (number) => {
  if (number >= 0) {
    let factorial = 1;
    for (let index = 2; index <= number; index++) {
      factorial = factorial * index;
    }
    return factorial;
  } else {
    return 0;
  }    
}

module.exports = factorial;