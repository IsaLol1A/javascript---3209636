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
`
//Aqui vamos a mostrar las tarjetas de escenas

console.log(comic.episodios)

comic.episodios.forEach(episodios => {
    const miCard = document.createElement("div")
    miCard.classList.add("tarjeta-cap")
    miCard.innerHTML = `
    <img src ="${episodios.imageno}" />
    <p>${episodios.nombri}</p>
    `
    infoEpisodios.appendChild(miCard)

    console.log(episodios.nombri)
    
});

infoEpisodios.innerHTML = `
<div> <img src="./img/era 1.png" alt=""><p>
${comic.episodios}</p></div>

<div> <img src="./img/era 3.png" alt=""><p>
${comic.episodios1}</p></div>

<div> <img src="./img/era 2.png" alt=""><p>
${comic.episodios2}</p></div>

<div> <img src="./img/era 5.png" alt=""><p>
${comic.episodios3}</p></div>

<div> <img src="./img/era 4.png" alt=""><p>
${comic.episodios4}</p></div>
`

