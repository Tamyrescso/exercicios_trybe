const service = require('./service');
jest.mock("./service");

describe('Implementa os testes para a função randomNumber', () => {
    it('Testa quantas vezes a função randomNumber foi chamada e o seu retorno', () => {
        service.randomNumber = jest.fn().mockReturnValue(10);
        
        expect(service.randomNumber()).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
    });
    
    it('Testa implementação de divisão na função randomNumber', () => {
        service.randomNumber = jest.fn().mockImplementationOnce((a, b) => {
            return a/b;
        })
        expect(service.randomNumber(4,2)).toBe(2)
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(4,2);
    })
    
    it('Testa implementação de multiplicação de três parâmetros na função randomNumber', () => {
        service.randomNumber = jest.fn().mockImplementation((a, b, c) => {
            return a * b * c;
        })
        expect(service.randomNumber(4,2,3)).toBe(24);
        expect(service.randomNumber).toHaveBeenCalledWith(4,2,3);
        expect(service.randomNumber(1,2,5)).toBe(10);
        expect(service.randomNumber).toHaveBeenCalledWith(1,2,5);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(2);
    })
    
    it('Testa implementação de dobrar um parâmetro na função randomNumber', () => {
        service.randomNumber.mockReset();
        service.randomNumber.mockImplementation((a) => {
            return a * 2;
        })
        expect(service.randomNumber(4)).toBe(8);
        expect(service.randomNumber).toHaveBeenCalledWith(4);
        expect(service.randomNumber(5)).toBe(10);
        expect(service.randomNumber).toHaveBeenCalledWith(5);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(2);
    })
})

test('Testa implementação na função firstLetter', () => {
    service.firstLetter.mockImplementation((string) => {
        return string[string.length-1];
    })
    expect(service.firstLetter('Brasil')).toBe('l');
    expect(service.firstLetter).toHaveBeenCalledWith('Brasil');
    expect(service.firstLetter('GO')).toBe('O');
    expect(service.firstLetter).toHaveBeenCalledWith('GO');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(2);
})

test('Testa implementação na função concat', () => {
    service.concat.mockImplementation((a, b, c) => {
        return `${a} ${b} ${c}`;
    })
    expect(service.concat('vamo', 'que', 'vamo')).toBe('vamo que vamo');
    expect(service.concat).toHaveBeenCalledWith('vamo', 'que', 'vamo');
    expect(service.concat('Luiz', 'Henrique', 'Silva')).toBe('Luiz Henrique Silva');
    expect(service.concat).toHaveBeenCalledWith('Luiz', 'Henrique', 'Silva');
    expect(service.concat).toHaveBeenCalled();
    expect(service.concat).toHaveBeenCalledTimes(2);
})

