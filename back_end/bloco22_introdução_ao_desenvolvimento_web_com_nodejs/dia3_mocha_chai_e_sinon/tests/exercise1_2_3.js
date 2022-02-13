const testNumber = require('../exercise1_2_3');
const { expect } = require('chai');
describe('Testa um número', () => {
  it('Quando ele for positivo', () => {
    expect(testNumber(5)).to.be.equals('positivo');
    expect(testNumber(10)).to.be.equals('positivo');
    expect(testNumber(55)).to.be.equals('positivo');
    expect(testNumber(234)).to.be.equals('positivo');
  })
  it('Quando ele for negativo', () => {
    expect(testNumber(-5)).to.be.equals('negativo');
    expect(testNumber(-10)).to.be.equals('negativo');
    expect(testNumber(-55)).to.be.equals('negativo');
    expect(testNumber(-234)).to.be.equals('negativo');
  })
  it('Quando ele for neutro', () => {
    expect(testNumber(0)).to.be.equals('neutro');
    expect(testNumber(2)).not.to.be.equals('neutro');
    expect(testNumber(-3)).not.to.be.equals('neutro');
  })
  it('Quando ele não for um número', () => {
    expect(testNumber('vqv')).to.be.equals('O valor deve ser um número.');
    expect(testNumber('5')).to.be.equals('O valor deve ser um número.');
  })
});