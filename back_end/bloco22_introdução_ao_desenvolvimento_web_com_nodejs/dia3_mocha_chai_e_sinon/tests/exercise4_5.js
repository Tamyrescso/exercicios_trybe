const sinon = require('sinon');
const fs = require('fs');
const funcaoEscrita = require('../exercise4_5');
const { expect } = require('chai');
const CONTEUDO = 'VQV COM TUDO! MESTRE DOS TESTES!'

describe('Testa a escrita em um arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync').returns('ok');
  })
  after(() => {
    fs.writeFileSync.restore();
  })
  it('Quando a escrita ocorre', () => {
    expect(funcaoEscrita('arquivo.txt', CONTEUDO)).to.be.equals('ok');
  })
})