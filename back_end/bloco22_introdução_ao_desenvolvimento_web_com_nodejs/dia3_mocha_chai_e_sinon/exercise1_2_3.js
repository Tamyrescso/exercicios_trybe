const testNumber = (number) => {
  if(typeof number !== 'number') return 'O valor deve ser um número.';
  if(number === 0) return 'neutro';
  if(number < 0) return 'negativo';
  return 'positivo';
}

module.exports = testNumber;