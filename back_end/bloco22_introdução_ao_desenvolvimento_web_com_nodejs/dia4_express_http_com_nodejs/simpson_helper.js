const fs = require('fs').promises;

const getSimpsons = async () => {
  const readSimpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(readSimpsons);
  return simpsons;
}

module.exports = getSimpsons;