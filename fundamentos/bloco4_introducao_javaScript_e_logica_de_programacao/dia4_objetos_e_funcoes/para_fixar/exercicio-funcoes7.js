function conceito (nota) {
    if (nota >= 90 && nota <= 100) {
        return "Conceito A";
    } else if (nota >= 80 && nota < 90) {
        return "Conceito B";
    } else if (nota >= 70 && nota < 80) {
        return "Conceito C";
    } else if (nota >= 60 && nota < 70) {
        return "Conceito D";
    } else if (nota >= 50 && nota < 60) {
        return "Conceito E";
    } else if (nota < 50 && nota >= 0) {
        return "Conceito F";
    } else {
        return "ERRO: nota inválida";
    }
}
console.log(conceito(83));