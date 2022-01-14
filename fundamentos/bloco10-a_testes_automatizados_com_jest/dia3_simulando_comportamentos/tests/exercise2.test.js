const file = require('../src/randomNumberFile');

test('create an implementation of division', () => {
    file.randomNumber = jest.fn()
    .mockImplementationOnce((a, b) => {
        return a / b;
    })

    expect(file.randomNumber(5,2)).toBe(2.5);
})