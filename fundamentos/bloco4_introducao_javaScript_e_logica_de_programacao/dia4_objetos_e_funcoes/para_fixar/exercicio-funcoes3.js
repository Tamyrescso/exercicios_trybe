function maior (primeiroNumero, segundoNumero, terceiroNumero) {
    if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
        return primeiroNumero + " é o maior número"
    } else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
        return segundoNumero + " é o maior número"
    } else {
        return terceiroNumero + " é o maior número"
    }
}

console.log(maior(35,47,79));