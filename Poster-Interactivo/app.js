//1. capturar variables
const corazon = document.querySelectorAll('.oli ');
const moneda = document.querySelectorAll('.viktor');
const counter = document.querySelector('.contador');
let i = 0;

console.log(corazon);
console.log(moneda);
console.log(counter);

//2. crear las funciones

moneda.forEach(Item => {
   // console.log("Elemento: ", Item);
   
    Item.addEventListener('click', () => {
         // Item.style.filter = "grayscale(1)";
         Item.classList.add('saltar');

    i++;
    counter.textContent = `ESCORE: ${i}`;
    }) })

   /* Item.addEventListener('animationend', () => {
        Item.style.display = "none";
    }, { once: true })*/

corazon.forEach(Item => {

    Item.addEventListener('click', () => {
        Item.style.filter = "grayscale(1)";
    })
})



//3. llamar eventos