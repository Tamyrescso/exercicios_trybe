const exercise = require('./exercise1.js');

describe('test the encode function', () => {
    it('if it is a function', () => {
        expect(exercise.encode).toBeDefined();
    })
    it('if the vowels are converted to numbers (1,2,3,4,5)', () => {
        expect(exercise.encode('aeiou')).toBe('12345');
    })
    it('if the consonants remains the same', () => {
        expect(exercise.encode('qwsdxc')).toBe('qwsdxc');
    })
    it('if the function returns a string with the same length of the string passed as parameter', () => {
        const myString = 'vamo que vamo!';
        expect(exercise.encode(myString).length).toBe(myString.length);
    })
})

describe('test the decode function', () => {
    it('if it is a function', () => {
        expect(exercise.decode).toBeDefined();
    })
    it('if the numbers (1,2,3,4,5) are converted to vowels', () => {
        expect(exercise.decode('12345')).toBe('aeiou');
    })
    it('if other numbers remains the same', () => {
        expect(exercise.encode('6789')).toBe('6789');
    })
    it('if the function returns a string with the same length of the string passed as parameter', () => {
        const myString = 'vamo que vamo!';
        expect(exercise.encode(myString).length).toBe(myString.length);
    })
})
