const pokeApi = {}

function convertApiPokemonToModelPokemon(pokeDetail){ 
  const pokemon = new Pokemon;
  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.img = pokeDetail.sprites.other.dream_world.front_default;

  // Trivia: 

  pokemon.height = pokeDetail.height/10;
  pokemon.weight = pokeDetail.weight;

  // Artworks:
  pokemon.base = pokeDetail.sprites.other['official-artwork'].front_default;
  pokemon.shiny = pokeDetail.sprites.other['official-artwork'].front_shiny;

  // Status:
  const stats = pokeDetail.stats.map((stats) => stats.base_stat)

  pokemon.stats = stats;

  return pokemon;
}

pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
  .then((response) => response.json())
  .then(convertApiPokemonToModelPokemon)
};

pokeApi.getPokemonList = (offset = 0, limit = 20) => { 
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
    .then((detailsRequest) => Promise.all(detailsRequest))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.log(error))
}
