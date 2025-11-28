import { comic } from "./bd.js"

const infoPortada = document.querySelector (".letra")
const infoInformacion = document.querySelector (".letras")
const InfoPersonajes = document.querySelector (".personajes")
const infoEpisodios = document.querySelector (".esos")

console.log(infoPortada)
console.log(infoInformacion) 
console.log(InfoPersonajes)
console.log(infoEpisodios)

//Modificar el contenido de info general del comic

infoPortada.innerHTML = `  
<h1>${comic.nombreComic}</h1>
<div>${comic.sinopsis}</div>
<button>Ver Comic</button>

`
infoInformacion.innerHTML = `
<p>Genero: ${comic.genero.join (", ")}</p>
<p>${comic.year}</p>
<p>Autores: ${comic.autores.join (", ")}</p>
`
/* InfoPersonajes.innerHTML = `
<div> <img src="./img/caballero.png" alt="">
    <p>${comic.personajes}</p></div>

<div> <img src="./img/elvira.png" alt="">
    <p>${comic.personajes}</p></div>

<div> <img src="./img/ninove.png" alt="">
    <p>${comic.personajes}</p></div>

<div> <img src="./img/brujas.png" alt="">
    <p>${comic.personajes}</p></div>

<div> <img src="./img/rey.png" alt="">
    <p>${comic.personajes}</p></div>

<div> <img src="./img/reina.png" alt="">
    <p>${comic.personajes}</p></div>

 <div> <img src="./img/sirvienta.png" alt="">
    <p>${comic.personajes}</p></div>

 <div> <img src="./img/consejero.png" alt="">
    <p>${comic.personajes}</p></div>
` */ 


//Aqui vamos a mostrar las tarjetas de escenas

comic.episodios.forEach(epi => {
    const miCard = document.createElement("div")
    miCard.innerHTML = `
    <a class="capitulo" href="../3-escenario-video/capitulo.html?id=
    ${epi.id}">

    <img src ="${epi.imagen}"/>
    <p>${epi.nombre}</p>

    </a>
    `
     infoEpisodios.appendChild(miCard)
    console.log(epi.nombre)
});

comic.personajes.forEach(perso => {
    const miCard = document.createElement("div")
/*     miCard.classList.add("tarjeta-cap")*/    
    miCard.innerHTML = `
    <a class="personaje" href="../3-escenario-personaje/personaje.html?id=
    ${perso.id}">

    <img src ="${perso.imagen}"/>
    <p>${perso.nombre}</p>

    </a>
    `
     InfoPersonajes.appendChild(miCard)
    console.log(perso.nombre)
});
///////////////////////////////////////


/* infoEpisodios.innerHTML = `
<div> <img src="./img/era 1.png" alt=""><p>
${comic.episodios}</p></div>

<div> <img src="./img/era 3.png" alt=""><p>
${comic.episodios}</p></div>

<div> <img src="./img/era 2.png" alt=""><p>
${comic.episodios}</p></div>

<div> <img src="./img/era 5.png" alt=""><p>
${comic.episodios}</p></div>

<div> <img src="./img/era 4.png" alt=""><p>
${comic.episodios}</p></div>
` */