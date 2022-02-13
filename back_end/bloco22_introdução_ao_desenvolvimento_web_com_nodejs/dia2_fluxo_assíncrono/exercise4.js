const fs = require('fs').promises;
// 4.1
const idAndName = () => {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      return JSON.parse(fileContent);
    })
    .then((r) => r.forEach(({id, name}) => {
    return console.log(`${id} - ${name}`)
  }))
}

idAndName();

// 4.2
const findId = async (idNumber) => {
  const simpson = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content));

  const simpsonById = simpson.filter(({id}) => parseInt(id) === idNumber);

  if(!simpsonById) throw new Error('id não encontrado');

  return simpsonById;
}

findId(2);

// 4.3
const removeCharacters = async () => {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content));

  const afterRemoving = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(afterRemoving));
}

removeCharacters();

// 4.4
const fs = require('fs').promises;
const createSimpsonsFamily = async () => {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content));

  const selectCharacters = simpsons.filter(({id}) => ['1', '2', '3', '4'].includes(id));

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(selectCharacters));
  
}

createSimpsonsFamily();

// 4.5
const fs = require('fs').promises;
const addNelson = async () => {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content));
  
  const family = await fs
    .readFile('./simpsonFamily.json', 'utf-8')
    .then((content) => JSON.parse(content));

  const findNelson = simpsons.filter(({name}) => name === 'Nelson Muntz');

  const newArray = [...family, ...findNelson];

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
}

addNelson();

// 4.6
const fs = require('fs').promises;
const replaceNelsonByMaggie = async () => {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content));
  
  const family = await fs
    .readFile('./simpsonFamily.json', 'utf-8')
    .then((content) => JSON.parse(content));

  const findMaggie = simpsons.filter(({name}) => name === 'Maggie Simpson');
  const withoutNelson = family.filter(({name}) => name !== 'Nelson Muntz');
  withoutNelson.push(findMaggie);

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(withoutNelson));
}

replaceNelsonByMaggie();
