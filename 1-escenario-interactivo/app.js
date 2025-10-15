let boton = document.querySelector(".boton")
let titulo = document.querySelector(".body")

boton.addEventListener("click", cambiarColor);

if(titulo.style.backgroundColor == "blue"){
    titulo.style.backgroundColor = "white"
    body.style.color = "black";
}else{
    titulo.style.backgroundColor = "blue"
    body.style.color = "white";
}