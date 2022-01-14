function movimentoXadrez (peçaXadrez) {

    switch (peçaXadrez.toLowerCase()) {
        case "bispo":
            return "Diagonal, sem limite de casas";
            break;
        case "cavalo":
            return "Em L, 3 casas, pode pular sobre as peças";
            break;
        case "peão":
            return "Para frente, 1 casa, no primeiro movimento pode andar 2 casas";
            break;
        case "torre":
            return "Para frente e lados, exceto verticais, sem limite de casas";
            break;
        case "rainha":
            return "Para todos os lados, sem limite de casas";
            break;
        case "peão":
            return "Para todos os lados, 1 casa";
            break;
        default:
            return "ERRO: peça de xadrez não existente";
            break;
    }
}
console.log(movimentoXadrez("Rainha"));