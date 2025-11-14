const infoComic = document.querySelector (".info-comic")
const listaCapitulos = document.querySelector (".lista-capitulos")

console.log (infoComic)
console.log (listaCapitulos)

//Modificar el contenido de info general del comic

infoComic.innerHTML = `
        <p>${comic.year}</p> 
        <h1>${comic.nombreComic}</h1>
        <p>${comic.sinopsi}</p>
        <p>Genero: ${comic.genero.join (", ")}</p>
        <p>Autores: ${comic.autores.join (", ")}</p>
`


