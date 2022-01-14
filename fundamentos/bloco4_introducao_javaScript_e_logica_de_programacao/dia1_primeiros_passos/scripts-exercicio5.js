let anguloUm = 80;
let anguloDois = 70;
let anguloTres = 60;
let somaAngulos = anguloUm + anguloDois + anguloTres;

if (anguloUm > 0 && anguloDois > 0 && anguloTres > 0) {
    if (somaAngulos == 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log ("ERRO: ângulo(s) inválido(s).");
}