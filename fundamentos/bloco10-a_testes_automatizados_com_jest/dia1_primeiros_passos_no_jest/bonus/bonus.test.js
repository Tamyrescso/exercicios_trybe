const searchEmployee = require('./bonus.js');

test('check if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
})
describe('check if the function returns the correct information about the employee', () => {
    it('with id and firstname', () => {
        expect(searchEmployee('9852-2-2', 'firstName')).toBe('Jeff');
        expect(searchEmployee('4456-4', 'firstName')).toBe('Leila');
    })
    it('with id and lastName', () => {
        expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
        expect(searchEmployee('9852-2-2', 'lastName')).toBe('Cook');
    })
    it('with id and specialities', () => {
        expect(searchEmployee('1256-4', 'specialities')).toEqual( ['Hooks', 'Context API', 'Tailwind CSS']);
        expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
    })
})
test('check if the function throw an error when an inexistent ID is used as a parameter', () => {
    expect(() => {searchEmployee('12234-4', 'lastName')}).toThrowError(new Error('Informação indisponível'));
    expect(() => {searchEmployee('567854-9', 'firstName')}).toThrowError(new Error('Informação indisponível'));
    expect(() => {searchEmployee('78473-2-3', 'specialities')}).toThrowError(new Error('Informação indisponível'));
})