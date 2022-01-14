let peçaXadrez = "Rainha";

switch (peçaXadrez.toLowerCase()) {
    case "bispo":
        console.log("Diagonal, sem limite de casas");
        break;
    case "cavalo":
        console.log("Em L, 3 casas, pode pular sobre as peças");
        break;
    case "peão":
        console.log("Para frente, 1 casa, no primeiro movimento pode andar 2 casas");
        break;
    case "torre":
        console.log("Para frente e lados, exceto verticais, sem limite de casas");
        break;
    case "rainha":
        console.log("Para todos os lados, sem limite de casas");
        break;
    case "peão":
        console.log("Para todos os lados, 1 casa");
        break;
    default:
        console.log("ERRO: peça de xadrez não existente");
}