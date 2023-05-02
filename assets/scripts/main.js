const pokemonList = document.getElementById('pokemonList');

function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function createPokemonHtml(pokemon) {
    return `
    <li class="pokemon">
        <span class="pokemon-number">#${pokemon.order}</span>
        <span class="pokemon-name">${pokemon.name}</span>
        <div class="pokemon-details">
            <ol class="pokemon-types">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
    </li>
    `
}
pokeApi.getPokemonList()
.then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(createPokemonHtml).join('');
})
