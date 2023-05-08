const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore');
const popupButton = document.getElementById('pokemon-btn');
//const popup = document.getElementById('pokemon-popup')

const maxRecords = 10;
const limit = 5;
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

loadMoreButton.addEventListener( 'click', () => {
    offset += limit;
    const nextPageCount = offset+limit;
    if(nextPageCount >= maxRecords){
        const newLimit = maxRecords-offset;
        loadPokemonItems(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else{
        loadPokemonItems(offset, limit)
    }
} )

// A partir daqui construir os eventos de click no id: pokemon-popup

popupButton.addEventListener('click', ()=>{
    console.log('eu n aguento mais');
    popup.classList.toggle('visivel', true)
})

function teste(){
    console.log('me clicou');
    popup.style.display = 'block';
}
function teste2(){
    console.log('me clicou');
    popup.style.display = 'none';
}

const popup = document.querySelector('.popup');
function showPopup() {
  popup.classList.add('open');
}
function hidePopup() {
  popup.classList.remove('open');
}