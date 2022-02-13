/* 
Random pokemon picker.
currently as of writing this there are 1118 pokemon the pokemon api supports.
lets just have a button that just when clicked picks a random pokemon.

*/
//Math.floor(Math.random() * 1118) + 1; //This line of code picks a random pokemon in the range i have set
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
let currentPokemon 
const pokemonList = "https://pokeapi.co/api/v2/pokemon/"
fetch(target).then(result=>result.json()).then(letsTry=>currentPokemon=letsTry);

//Define all things that need to be changed.
/*
<h2 id="name">Not defined yet</h2>
<img id = 'pokeimg' alt="Not defined yet">
<h3 id="Type">Type: </h3>
<p id="types">unkownType</p>
<h3 id="abillityH3">Possible Abillities</h3>
<p id="abillities">Missing info</p>
<button id="randomize">New Pokemon</button> 
*/
//Shiny Check code Math.floor(Math.random()* 8192)+1; display shiny version instead.
function resetPoke()
{
    document.querySelector('#name').textContent = '';
    document.querySelector('#pokeimg').src = '';
    document.querySelector('#types').textContent = '';
    while(document.querySelector('#types').hasChildNodes())
    {
        document.querySelector('#types').removeChild(0)
    }
    
}

function displayPokemon(pokemon)
{   
    let y = document.querySelector('#types');
    for(let x of pokemon.types)
    {
        let temp = document.createElement('a')
        temp.textContent = x.type.name.charAt(0).toUpperCase() + x.type.name.slice(1)+" ";
        y.appendChild(temp)
    }
    let z = document.querySelector('#name');
    z.textContent = pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1)
    let w=document.querySelector('#pokeimg');
    let shinyCheck
    shinyCheck = Math.floor(Math.random()* 8192);
    if(shinyCheck===0 || forcedShiny == true){
        w.src = pokemon.sprites.front_shiny;
    }
    else
    {
        w.src = pokemon.sprites.front_default;
    }
}
function pickPokemon()
{
    let target = pokemonList + String(Math.floor(Math.random() * 1118) + 1);
    fetch(target).then(result=>result.json()).then(letsTry=>currentPokemon=letsTry);
    resetPoke();
    displayPokemon(currentPokemon);
}
forcedShiny=false
randomizerButton = document.querySelector('#randomize');
randomizerButton.addEventListener('click', pickPokemon);