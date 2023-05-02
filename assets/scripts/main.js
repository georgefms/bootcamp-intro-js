const pokemonList = document.getElementById('pokemonList');
const loadMoreButtom = document.getElementById('loadMore');
const maxRecords = 151;
const limit = 12;
let offset = 0;


function loadPokemonItems(offset, limit){
    pokeApi.getPokemonList(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `
        <li class="${pokemon.type} pokemon">
            <span class="pokemon-number">#${pokemon.number}</span>
            <span class="pokemon-name">${pokemon.name}</span>
            <div class="pokemon-details">
                <ol class="pokemon-types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.img}" alt="${pokemon.name}">
            </div>
        </li>
    `).join('');
    pokemonList.innerHTML += newHtml;
})
}

loadPokemonItems(offset, limit);

loadMoreButtom.addEventListener( 'click', () => {
    offset += limit;
    const nextPageCount = offset+limit;
    if(nextPageCount >= maxRecords){
        const newLimit = maxRecords-offset;
        loadPokemonItems(offset, newLimit);

        loadMoreButtom.parentElement.removeChild(loadMoreButtom)
    }
    else{
        loadPokemonItems(offset, limit)
    }
} )
