const { fetchJoke } = require('../src/bonus');
const fetch = require('node-fetch');

jest.mock('node-fetch');

test('testa se a função fetchJoke retorna o resultado específico', async () => {
    expect.assertions(1);

    fetch.mockImplementation(async () => {
        return {
            json: async () => {
                return {
                    'id': '7h3oGtrOfxc',
                    'joke': 'Whiteboards ... are remarkable.',
                    'status': 200
                }
            }
        }
    });
    const getJoke = await fetchJoke();
    expect(getJoke).toBe('Whiteboards ... are remarkable.')
})