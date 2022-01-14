//Exerício 1
const factorial = n => (n === 1)? 1 : n*(factorial(n-1));
factorial(4);

//Exercício 2
const biggestWord = phrase => {
    const words = phrase.split(' ');
    let bigWord = words[0];
    for (word of words) {
        (bigWord.length > word.length)? bigWord = bigWord : bigWord = word;
    }
    return bigWord;
}
biggestWord("Antônio foi no banheiro e não sabemos o que aconteceu");

//Exercício 4
const phrase = 'Tryber x aqui!';
const stringReplacer = input => phrase.replace(/x/i, input);

const skills = ['Git', 'HTML', 'CSS', 'JavaScript', 'DOM'];
const finalPhrase = (previousFunction) => `${previousFunction} Minhas cinco principais habilidades são: ${skills.sort().join(', ')}`;

finalPhrase(stringReplacer('Carolzinha'));