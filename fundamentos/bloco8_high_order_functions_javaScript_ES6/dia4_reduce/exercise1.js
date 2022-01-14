const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
    const newArr = arrays.reduce((total, current) => {
        return total.concat(current);
    }, []);
    return newArr;
};

console.log(flatten());


assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
