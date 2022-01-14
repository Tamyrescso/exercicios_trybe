const stringFunctions = require('../src/stringFunctions');

describe('realiza implementações nas funções do arquivo stringFunctions', () => {
    it('implementa na função upperCase', () => {
        stringFunctions.upperCase = jest.fn()
        .mockImplementation((string) => string.toLowerCase());

        expect(stringFunctions.upperCase('trybe')).toBe('trybe');
        expect(stringFunctions.upperCase('Trybe')).toBe('trybe');
        expect(stringFunctions.upperCase('TRYBE')).toBe('trybe');
    })
    it('implementa na função firstLetter', () => {
        stringFunctions.firstLetter = jest.fn()
        .mockImplementation((string) => string.slice(-1));

        expect(stringFunctions.firstLetter('trybe')).toBe('e');
        expect(stringFunctions.firstLetter('vamo que vamo')).toBe('o');

    })
    it('implementa na função joinWords', () => {
        stringFunctions.joinWords = jest.fn()
        .mockImplementation((a, b, c) => `${a}${b}${c}`);

        expect(stringFunctions.joinWords('eu', '&', 'você')).toBe('eu&você');
        expect(stringFunctions.joinWords('vamo', 'Q', 'vamo')).toBe('vamoQvamo');
    })
})