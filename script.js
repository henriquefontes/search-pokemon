async function FetchPokemon(pokemonID) {
    const url = `http://pokeapi.co/api/v2/pokemon/${pokemonID}`

    try {

        const loadData = await fetch(url);
        const pokemon = await loadData.json();

        const title = document.querySelector('h1');
        const info = document.querySelector('p');
        const image = document.querySelector('img');

        title.innerHTML = `${pokemon.name}`
        info.innerHTML = `Weight: ${pokemon.weight} <br> Height: ${pokemon.height}`
        image.setAttribute('src', pokemon.sprites.front_shiny)

    } catch (err) {
        console.log(err.message)
    }


}

FetchPokemon(37)