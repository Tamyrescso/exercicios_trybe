function maior (primeiroNumero,segundoNumero) {

    if (primeiroNumero > segundoNumero) {
        return primeiroNumero + " é maior do que " + segundoNumero
    }
    else {
        return segundoNumero + " é maior do que " + primeiroNumero
    }
}

console.log(maior(78,35));