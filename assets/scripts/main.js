
const offset = 0;
const limit = 12;
const URL = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}';

fetch(URL)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.log(error))
