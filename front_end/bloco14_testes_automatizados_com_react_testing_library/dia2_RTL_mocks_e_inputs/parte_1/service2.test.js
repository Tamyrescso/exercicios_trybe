const service = require('./service');

test('Testa implementação na função upperCase', () => {
    expect(service.upperCase('brasil')).toBe('BRASIL')
    const upper = jest.spyOn(service, 'upperCase')
    
    upper.mockImplementation((string) => {
        return string.toLowerCase();
    })
    expect(upper('Brasil')).toBe('brasil');
    expect(upper).toHaveBeenCalledWith('Brasil');
    expect(upper('GO')).toBe('go');
    expect(upper).toHaveBeenCalledWith('GO');
    expect(upper).toHaveBeenCalled();
    expect(upper).toHaveBeenCalledTimes(2);

    service.upperCase.mockRestore();

    expect(service.upperCase('Brasil')).toBe('BRASIL');
})
describe('Testa requisição para API dog pictures', () => {
    service.fetchDog = jest.fn();
    it('se a requisição se resolveu', async () => {
        service.fetchDog.mockResolvedValue('request success');

        service.fetchDog();
        expect(service.fetchDog).toHaveBeenCalled();
        await expect(service.fetchDog()).resolves.toBe('request success');
    })
    it('se a requisição for rejeitada', async () => {
        service.fetchDog.mockRejectedValue('request failed');

        await expect(service.fetchDog()).rejects.toMatch('request failed');
    })
})
    