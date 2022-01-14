const file = require('../src/randomNumberFile');

it('test the implementations on randomNumber function', () => {
    const spy = jest.spyOn(file, 'randomNumber');
    spy.mockImplementation((a, b, c) => {
        return a * b * c;
    })
    expect(spy(2,3,5)).toBe(30);
    expect(spy(1,2,4)).toBe(8);

    spy.mockReset();
    spy.mockImplementation((a) => a * 2);

    expect(spy(4)).toBe(8);
    expect(spy(10)).toBe(20);
})  
