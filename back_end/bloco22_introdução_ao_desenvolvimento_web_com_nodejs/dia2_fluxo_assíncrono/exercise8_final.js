const fizzBuzz = (number) => {
  return new Promise((resolve, reject) => {
    if(number % 3 === 0 && number % 5 === 0) {
      return resolve("FizzBuzz");
    }
    if(number % 3 === 0) return resolve("Fizz");
    if(number % 5 === 0) return resolve("Buzz");
  
    return reject(number);
  })
}

fizzBuzz(15)
  .then((r) => console.log(r))
  .catch((err) => console.error(err))

