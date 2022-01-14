function trianguloOunao (anguloUm,anguloDois,anguloTres) {
    let somaAngulos = anguloUm + anguloDois + anguloTres;

    if (anguloUm > 0 && anguloDois > 0 && anguloTres > 0) {
        if (somaAngulos == 180) {
            return true;
        } else {
            return false;
        }
    } else {
        return "ERRO: ângulo(s) inválido(s).";
    }
}
console.log(trianguloOunao (-1,67,89));