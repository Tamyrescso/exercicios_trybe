const assert = require('assert');

const greaterThanTen = (array) => {
    let newArray = [];
    for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
        newArray.push(array[index]);
    }
}
return newArray;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);