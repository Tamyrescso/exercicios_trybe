function lucro (custoProduto, valorVenda) {
let valorCustoTotal = custoProduto * 1.20;

    if (custoProduto < 0) {
        return "ERRO: entrada inválida";
    } else {
        return (valorVenda - valorCustoTotal)*1000
    }
}
console.log(lucro (150, 300));