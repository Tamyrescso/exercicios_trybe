// const file = require('../src/dogPictures');


// describe('testa função fetchDogImg', () => {
//     file.fetchDogImg = jest.fn()
//     it('se a requisição se resolveu', async () => {
//         file.fetchDogImg
//         .mockResolvedValue('request success');

//         file.fetchDogImg();
//         expect(file.fetchDogImg).toHaveBeenCalled();
//         const apiDogData = await file.fetchDogImg();
//         expect(apiDogData).resolves.toBe('request success')
//     })
//     it('se a requisição foi rejeitada', async () => {
//         file.fetchDogImg
//         .mockRejectedValue('request failed');

//         const apiDogData = await file.fetchDogImg();
//         expect(apiDogData).rejects.toMatch('request failed')
//     })
// })