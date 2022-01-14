let custoProduto = 70;
let valorVenda = 150;

let valorCustoTotal = custoProduto * 1.20;
let lucro = valorVenda - valorCustoTotal;

if (custoProduto < 0) {
    console.log("ERRO: entrada inválida");
 } else {
     console.log(lucro*1000);
 }