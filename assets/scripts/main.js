const pokemonList = document.getElementById('pokemonList');


function createPokemonHtml(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}}">
        <span class="pokemon-number">#${pokemon.number}</span>
        <span class="pokemon-name">${pokemon.name}</span>
        <div class="pokemon-details">
            <ol class="pokemon-types">
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.img}" alt="${pokemon.name}">
        </div>
    </li>
    `
}
pokeApi.getPokemonList()
.then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(createPokemonHtml).join('');
})
