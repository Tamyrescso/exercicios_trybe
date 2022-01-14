const uppercase = require('../src/uppercase');

describe('testing a callback async', () => {
    it('check if it is a function', () => {
        expect(typeof uppercase).toBe('function');
    })
    it('check if returns the right value', (done) => {
        uppercase('trybe', (result) => {
            try {
                expect(result).toBe('TRYBE');
                done();
            } catch (error) {
                done(error);
            }
        })
    })
})