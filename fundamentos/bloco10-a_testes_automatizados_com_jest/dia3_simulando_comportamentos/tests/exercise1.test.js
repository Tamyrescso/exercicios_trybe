const file = require('../src/randomNumberFile');

test('if randomNumber returns whats it is expected', () => {
    file.randomNumber = jest.fn()
    .mockReturnValue(10)

    expect(file.randomNumber()).toBe(10);
    expect(file.randomNumber).toHaveBeenCalled();
    expect(file.randomNumber).toHaveBeenCalledTimes(1);
}) 