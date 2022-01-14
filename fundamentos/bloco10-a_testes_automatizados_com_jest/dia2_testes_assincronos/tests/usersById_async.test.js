const getUserName = require('../src/usersById');

describe('testing with async/await - findUserById', () => {
    it('if returns the user name', async () => {
        await expect(getUserName(1)).resolves.toBe('Mark');
        await expect(getUserName(1)).resolves.not.toBe('Tom');
    })
    it('if returns a specific error when it should', async () => {
        await expect(getUserName(4)).rejects.toEqual(new Error('User with 4 not found.'));
        await expect(getUserName(5)).rejects.not.toEqual(new Error('Not found.'));
    })
})