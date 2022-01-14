const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.filter((animal) => animal.name === name);

      if (animal.length !== 0) {
        return resolve(animal[0]);
      }

      return reject(new Error('Não possui nenhum animal com esse nome!'));
    }, 100);
  })
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui nenhum animal com essa idade!'));
    }, 200);
  })
);



module.exports = { findAnimalByName, findAnimalByAge };
