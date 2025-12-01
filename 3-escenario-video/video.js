import { comic } from "./bd.js";

//URLSearchParams(window.location.search)
//const parametros = new URLSearchParams("id");
const param = new URLSearchParams(window.location.search);
const id = param.get("id"); //<---- Añadir parseInt()

const personaje = comic.episodios.find(p => p.id === id)
const contenedor = document.querySelector(".contenedor")

contenedor.innerHTML = `
<div class="pantalla">
    <video width="800" height="500" controls>
  <source src="./video/movie.mp4" type="video/mp4">
 
</video>
</div>

<div class="descripcion"><h1>
    Epi 1: Las Primeras Civilizaciones
</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amet voluptatum temporibus quia velit. Omnis dolores modi harum placeat quibusdam nihil molestias, labore quod, dolorem repellendus reprehenderit optio assumenda magni.</p>
</div>
`