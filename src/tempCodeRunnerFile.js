const factorial = (number) => {
  let numbre = number;
  for (i = 1; i < number; i++) {
    number = number * i;
  }
  console.log(number);
};

factorial(5);