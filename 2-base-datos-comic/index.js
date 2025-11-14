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
<h1> CENIZAS DE HONOR</h1>
<div>${comic.sinopsis}</div>
<button>Ver Comic</button>
`

infoInformacion.innerHTML = `
<p>Genero: ${comic.genero.join (", ")}</p>
<p>${comic.year}</p>
<p>Autores: ${comic.autores.join (", ")}</p>
`

InfoPersonajes.innerHTML = `
<h3>PERSONAJES</h3>

<div> <img src="./img/caballero.png" alt="">
    <p>${comic.personajes}</p></div>

<div> <img src="./img/elvira.png" alt="">
    <p>${comic.personajes1}</p></div>

<div> <img src="./img/ninove.png" alt="">
    <p>${comic.personajes2}</p></div>

<div> <img src="./img/brujas.png" alt="">
    <p>${comic.personajes3}</p></div>

<div> <img src="./img/rey.png" alt="">
    <p>${comic.personajes4}</p></div>

<div> <img src="./img/reina.png" alt="">
    <p>${comic.personajes5}</p></div>

 <div> <img src="./img/sirvienta.png" alt="">
    <p>${comic.personajes6}</p></div>

 <div> <img src="./img/consejero.png" alt="">
    <p>${comic.personajes7}</p></div>
`

infoEpisodios.innerHTML = `
<h3>SIGUIENTES EPISODIOS</h3>

<div> <img src="./img/era 1.png" alt=""><p>
 Epi 1: Titulo del Capitulo</p></div>
<div> <img src="./img/era 3.png" alt=""><p>
 Epi 2: Titulo del Capitulo</p></div>
<div> <img src="./img/era 2.png" alt=""><p>
 Epi 3: Titulo del Capitulo</p></div>
<div> <img src="./img/era 5.png" alt=""><p>
 Epi 4: Titulo del Capitulo</p></div>
<div> <img src="./img/era 4.png" alt=""><p>
 Epi 5: Titulo del Capitulo</p></div>
 
`