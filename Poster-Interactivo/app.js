//escenario 1
const moneda = document.querySelectorAll('.viktor');
const counter = document.querySelector('.contador');
const personaje = document.querySelector('.personaje');
const sonidoMoneda = new Audio('./Audios/Moneda.mp3'); 
let i = 0;

console.log(moneda);
console.log(counter);

personaje.addEventListener('click', () => {
    const sonidoOso = new Audio('./Audios/oso.mp3');
    sonidoOso.play();
})

moneda.forEach(Item => {
    // console.log("Elemento: ", Item);

    Item.addEventListener('click', () => {
        // Item.style.filter = "grayscale(1)";
        Item.classList.add('saltar');

        i++;
        counter.textContent = `ESCORE: ${i}`;

        sonidoMoneda.play();
    })
})

/* Item.addEventListener('animationend', () => {
     Item.style.display = "none";
 }, { once: true })*/



//Escenario 2
const counter2 = document.querySelector('.contador2');
const manzana = document.querySelectorAll('.mamoi');
const sonidoManzana = new Audio('./Audios/Manzanas.mp3');
const personaje2 = document.querySelector('.personaje2');
const sonidoKirby = new Audio('./Audios/kirby.mp3');

let j = 0;

console.log(counter2);
console.log(manzana);

personaje2.addEventListener('click', () => {
    sonidoKirby.play();
})

manzana.forEach(Item => {

    Item.addEventListener('click', () => {
        Item.classList.add('saltarM');
        j++;
        counter2.textContent = `ESCORE: ${j}`;

        sonidoManzana.play();
    })
})



//Escenario 3
const diamante = document.querySelectorAll('.julio');
const counter3 = document.querySelector('.contador3');
const sonidoDiamante = new Audio('./Audios/Diamantes.mp3');
const personaje3 = document.querySelector('.personaje3');

let k = 0;

console.log(diamante);
console.log(counter3);

personaje3.addEventListener('click', () => {
    const sonidoSonic = new Audio('./Audios/sonic.mp3');
    sonidoSonic.play();
})

diamante.forEach(Item => {
    Item.addEventListener('click', () => {
        Item.classList.add('saltarD');
        k++;
        counter3.textContent = `ESCORE: ${k}`;

        sonidoDiamante.play();
    })
})


/*Carrusel *////////////////////////////////////////////////////////////////////////////////////////

//1.Variables

const escenario = document.querySelectorAll('.escena');
const siguiente = document.querySelector('.siguiente');
const anterior = document.querySelector('.anterior');
const miniatura = document.querySelectorAll('.poio');

let indice = 0;

console.log(escenario);
console.log(siguiente);
console.log(anterior);
console.log(miniatura);


//2. Funciones
function mostrarEscenario(i) {
    for (let j = 0; j < escenario.length; j++) {
        escenario[j].classList.remove("activa")
    }
    escenario[i].classList.add("activa");

    indice = i;
}

 mostrarEscenario(1); 

 //Boton anterior
 anterior.addEventListener('click', () => {
    indice = indice - 1;
    if(indice < 0){
        indice = escenario.length -1; //Para ir a la ultima imagen
    }
    console.log(indice);
    mostrarEscenario(indice);
})

//Boton siguiente
siguiente.addEventListener('click', () => {
    indice = indice + 1;
    if(indice > 2){
        indice = 0; //Para ir a la primera imagen
    }
    console.log(indice);
    mostrarEscenario(indice);
})

//Funcion miniaturas
miniatura.forEach((miniatura, i) => {
    miniatura.addEventListener('click', () => {
        indice = i;
        mostrarEscenario(indice);
    })
})




