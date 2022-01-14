const assert = require('assert');

const greetPeople = (people) => {
let greeting = 'Hello';
const greetingArr = [];

for (const person in people) {
    greetingArr.push(`${greeting} ${people[person]}`);
}
return greetingArr;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);