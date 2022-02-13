const calc = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') reject(new Error('Informe apenas números'));
    const result = ((num1 + num2) * num3);

    if(result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  })
  return promise;
}

const resultCalc = () => {
  const num1 = Math.floor(Math.random() * 100 + 1);
  const num2 = Math.floor(Math.random() * 100 + 1);
  const num3 = Math.floor(Math.random() * 100 + 1);
  calc(num1, num2, num3)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message))
}

const asyncCalc = async () => {
  const num1 = Math.floor(Math.random() * 100 + 1);
  const num2 = Math.floor(Math.random() * 100 + 1);
  const num3 = Math.floor(Math.random() * 100 + 1);
 
  try {
    const result = await calc(num1, num2, num3)
    console.log(result)
  } catch (err) {
    console.error(err.message)
  }

}

resultCalc()
asyncCalc()