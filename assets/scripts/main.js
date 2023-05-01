const pokemonList = document.getElementById('pokemonList');

function createPokemonHtml(pokemon) {
    return `
    <li class="pokemon">
        <span class="pokemon-number">#001</span>
        <span class="pokemon-name">${pokemon.name}</span>
        <div class="pokemon-details">
            <ol class="pokemon-types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
    </li>
    `
}
pokeApi.getPokemonList()
.then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemonList.innerHTML += createPokemonHtml(pokemon);
    }
})
