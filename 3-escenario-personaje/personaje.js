import { comic } from "./bd.js";

//URLSearchParams(window.location.search)
//const parametros = new URLSearchParams("id");
const param = new URLSearchParams(window.location.search);
const id = param.get("id"); //<---- Añadir parseInt()

const personaje = comic.personajes.find(p => p.id === id)
const contenedor = document.querySelector(".contenedor")

contenedor.innerHTML = `
<div class="personaje">
    <img src="./img/Gemini_Generated_Image_kcgaickcgaickcga.png" alt="">
</div>

<div class="informacion">
    <h1></h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi deserunt voluptas temporibus id, enim molestias aspernatur ullam hic voluptatem animi esse quae cupiditate tenetur? Ipsum accusantium at quas voluptas culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
</div>
`