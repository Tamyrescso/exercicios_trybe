const stringFunctions = require('../src/stringFunctions');

describe('realiza implementações na função upperCase e restaura o original', () => {
    it('implementa na função upperCase', () => {
        const spy = jest.spyOn(stringFunctions, 'upperCase')
        .mockImplementation((string) => string.toLowerCase());

        expect(spy('trybe')).toBe('trybe');
        expect(spy('Trybe')).toBe('trybe');
        expect(spy('TRYBE')).toBe('trybe');
    })

    it('restaura a função upperCase original', () => {
        stringFunctions.upperCase.mockRestore();

        expect(stringFunctions.upperCase('trybe')).toBe('TRYBE');
        expect(stringFunctions.upperCase('Trybe')).toBe('TRYBE');
        expect(stringFunctions.upperCase('TRYBE')).toBe('TRYBE');
    }) 
})