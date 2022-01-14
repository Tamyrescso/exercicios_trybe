// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => showJoke(data.joke));
};

function showJoke(joke) {
  const elementJoke = document.getElementById('jokeContainer');
  elementJoke.innerText = joke;
}

window.onload = () => fetchJoke();
