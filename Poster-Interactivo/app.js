//1. capturar variables
const moneda = document.querySelectorAll('.viktor');
const counter = document.querySelector('.contador');
const corazon = document.querySelectorAll('.coco');
let i = 0;

console.log(moneda);
console.log(counter);
console.log(corazon);

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

coco.forEach(Item => {
    Item.addEventListener('click', () => {
        Item.style.filter = "grayscale(1 )";
    }) })



//3. llamar eventos