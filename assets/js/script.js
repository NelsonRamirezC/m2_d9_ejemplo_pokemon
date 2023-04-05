let tituloPrincipal = document.getElementById("tituloPrincipal");

tituloPrincipal.innerHTML = "<strong>Guía Pokémon</strong>"

function cambiarColor(elemento, color){
    //elemento.style.color = color;
    //elemento.style.cssText = "color: red; font-size:60px"
    elemento.classList.add("seleccionado")
    elemento.style.color = color;
}

function quitarColor(elemento){
    //elemento.style.color = "black";
    //elemento.style.cssText = "color: black; font-size:50px"
    elemento.classList.remove("seleccionado")
    elemento.style.color = "black";
}



let formPokemon = document.getElementById("formPokemon");

formPokemon.addEventListener("submit", /* async */ function(event){
    event.preventDefault();
    let pokemon = document.getElementById("formPokemonNombre").value;
    console.log(pokemon);

    let url= "https://pokeapi.co/api/v2/pokemon/"+pokemon

    /* let response = await fetch(url);
    let data = await response.json()
    console.log(data) */

    fetch(url)
    .then(response => response.json())
    .then(data => {

        
        let nombrePokemon = data.name;
        let imagenPokemon = data.sprites.front_default;

        let contenedorImagen = document.querySelector(".seccionInfo img");
        contenedorImagen.setAttribute("src", imagenPokemon )

        let titulo = document.querySelector(".seccionInfo .card-title")
        titulo.innerText = nombrePokemon;
        
        let contenedorStats = document.getElementById("pokemonStats");
        contenedorStats.innerHTML = "";

        let acumulador ="";
        data.stats.forEach(stat => {
            let elemento = `<p>${stat.stat.name}: ${stat.base_stat}</p>`
            acumulador += elemento;
        })
        contenedorStats.innerHTML = acumulador
    })
    .catch(error => alert("Ha ocurrido un error al buscar el pokémon"))
})



















/* 
let subtitulosTag = document.getElementsByTagName("h2")
let subtitulos = document.querySelectorAll("h2");

let footer = document.querySelector("footer");
console.log(footer)
footer.innerHTML = "<h2>Es un subtitulo</h2>"


console.log(subtitulosTag)
console.log(subtitulos)
 */