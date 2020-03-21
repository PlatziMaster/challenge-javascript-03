const factorial = (number) => {
  
    let r = 1;
    let m;

    if (number == 0 || number == 1) {

      return 1;

    } else {

      for (let i = 0; i < number; i++) {
        m = r * (i + 1);
        r = m;
      }

      return r;

    }
    
  }

  module.exports = factorial;