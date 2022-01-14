const getUserName = require('../src/usersById');

describe('testing the promise findUserById', () => {
    it('returns the user name', () => {
        return expect(getUserName(1)).resolves.toBe('Mark');
    })
    it('returns an error', () => {
        expect(getUserName(3)).rejects.toEqual(new Error('User with 3 not found.'));
    })
})