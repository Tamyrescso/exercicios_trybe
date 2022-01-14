const fetchPromise = () => {
    const promise = new Promise((resolve, reject) => {
      const randomArray = Array.from(
        { length: 10},
        () => Math.pow(Math.floor(Math.random() * 50) + 1, 2),
      );
      const sum = randomArray.reduce((acc, curr) => acc + curr, 0);
        console.log(sum)
      (sum < 8000) ? resolve(sum) : reject();
    });
  
    promise
    .then((sum) => [2, 3, 5, 10].map((divisor) => (Math.floor(sum / divisor)))
    .then((array) => array.reduce((acc, curr) => acc + curr, 0)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
  };
  
  
  fetchPromise();