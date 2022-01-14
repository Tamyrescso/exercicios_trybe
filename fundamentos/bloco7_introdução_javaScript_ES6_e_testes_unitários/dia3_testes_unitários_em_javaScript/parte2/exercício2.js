const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths (arr) {
    const newArr = [];
    for (word of arr) {
        let wordLen = word.length;
        newArr.push(wordLen);
    }
    return newArr;
}


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);