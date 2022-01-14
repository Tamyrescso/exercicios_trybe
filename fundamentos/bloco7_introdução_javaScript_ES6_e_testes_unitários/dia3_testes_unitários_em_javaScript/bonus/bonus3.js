const assert = require('assert');

const removeMiddle = (arrWords) => {
    const { length } = arrWords;
    const middleIndex = (length - 1) / 2;
    const middleItem = [arrWords[middleIndex]];
    arrWords.splice(middleIndex, 1);
    return middleItem;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);