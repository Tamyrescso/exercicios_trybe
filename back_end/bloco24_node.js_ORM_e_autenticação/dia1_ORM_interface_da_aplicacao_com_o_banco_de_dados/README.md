# Bloco 24 - Node.js: ORM e Autenticação

## ORM - Interface da aplicação com o banco de dados

### Exercícios

### Crie os controllers do seu projeto com as seguintes rotas:

 - GET /books - lista todos os livros;
 - GET /book/:id - pega o livro com o id especificado;
 - POST /book - cria um novo livro;
 - POST /book/:id - sobrescreve o livro com ID selecionado;
 - DELETE /book/:id - deleta um livro;

Em caso de erro, os endpoints devem retornar status code 500 com a mensagem: 'Algo deu errado'.

-   Crie um  `seeder`  usando o  `Sequelize-CLI`  , populando a sua base com pelo menos um livro;
-  Crie uma ordenação no endpoint  `GET /books`  para ordenar por ordem alfabética e por data de criação;
-   Adicione, também, uma data de update nos atributos do livro que se altera sempre que o livro for atualizado.
