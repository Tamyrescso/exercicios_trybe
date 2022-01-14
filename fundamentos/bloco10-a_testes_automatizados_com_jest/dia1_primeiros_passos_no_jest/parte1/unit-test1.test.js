function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

test('if it is a function', () => {
  expect(sum).toBeDefined();
})
test('if return a sum', () => {
  expect(sum(2,4)).toBe(6);
})
test('if throw an error when a parameter is not a number', () => {
  expect(() => {sum(1,'2')}).toThrow();
})
test('if throw an error when a parameter is not a number with message', () => {
  expect(() => {sum(1,'2')}).toThrowError(new Error('parameters must be numbers'));
})