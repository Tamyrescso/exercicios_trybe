const upperCase = (string => string.toUpperCase());

const firstLetter = (string => string.slice(0, 1));

const joinWords = ((first, second) => `${first}${second}`);


module.exports = {
    upperCase,
    firstLetter,
    joinWords
}
