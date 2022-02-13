const readline = require('readline-sync');
const fs = require('fs').promises;

const readArchive = async () => {
  const chosenArchive = readline.question('Qual arquivo você deseja ler? ');

  await fs.readFile(chosenArchive, 'utf-8')
    .then((result) => console.log(result))
    .catch(() => console.error('Arquivo Inexistente'))
  return;
}

readArchive();