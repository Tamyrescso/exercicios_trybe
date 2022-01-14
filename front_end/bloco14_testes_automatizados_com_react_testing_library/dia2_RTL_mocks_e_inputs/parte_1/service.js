const fetch = require('node-fetch');
const randomNumber = () => {
    Math.floor(Math.random() * 100);
}

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const concat = (a, b) => `${a} ${b}`;

async function fetchDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = response.json();
    return data;
}

module.exports = { firstLetter, concat, upperCase, fetchDog};
