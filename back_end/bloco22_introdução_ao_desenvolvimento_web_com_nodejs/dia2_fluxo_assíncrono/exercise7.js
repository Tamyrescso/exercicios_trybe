const readline = require('readline-sync');
const fs = require('fs').promises;

const replaceWords = async () => {
  const chosenArchive = readline.question('Qual arquivo você deseja ler? ');

  const oldPhrase = await fs.readFile(chosenArchive, 'utf-8')
    try {
      const oldWord = readline.question('Qual palavra será substituída? ');
      const newWord = readline.question('Qual palavra entrará no lugar? ');
      const newArchive = readline.question('Qual o nome do novo arquivo? ');

      const newPhrase = oldPhrase.replace(new RegExp(oldWord, 'g'), newWord);

      await fs.writeFile(newArchive, newPhrase)
      console.log(newPhrase)
    } catch {
      console.error('Arquivo Inexistente')
    }

  return;
}

replaceWords();