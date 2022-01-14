const assert = require('assert');
const { title } = require('process');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


function containsA() {
    const namesTogether = names.join('').toLowerCase().split('');
    return namesTogether.reduce((acc, current) => current === 'a'? acc + 1 : acc, 0);
};

assert.deepStrictEqual(containsA(), 20);
