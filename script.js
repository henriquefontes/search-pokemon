const form = document.querySelector("form");

async function fetchPokemon(pokemonID) {
    const url = `http://pokeapi.co/api/v2/pokemon/${pokemonID}`

    try {

        const loadData = await fetch(url);
        const pokemon = await loadData.json();

        const title = document.querySelector('h1');
        const info = document.querySelector('p');
        const image = document.querySelector('img');

        title.innerHTML = `${pokemon.name}`
        info.innerHTML = `<strong>Weight: </strong> ${pokemon.weight} <br><br> <strong>Height: </strong> ${pokemon.height}`
        image.setAttribute('src', pokemon.sprites.front_default)

    } catch {
        console.log("Pokemon inexistente com esse ID");
    }


}

function submitPokemon() {
    event.preventDefault();

    const input = document.querySelector("#search-input").value;
    const submit = document.querySelector("button");

    if (input) {
        fetchPokemon(input);
    } else {
        alert("White field")
    }

}