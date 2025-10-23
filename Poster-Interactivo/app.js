//escenario 1
const moneda = document.querySelectorAll('.viktor');
const counter = document.querySelector('.contador');
let i = 0;

console.log(moneda);
console.log(counter);



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



//Escenario 2
const manzana = document.querySelectorAll('.mamoi');

console.log(manzana);

manzana.forEach(Item => {
     
    Item.addEventListener('click', () => {
         Item.classList.add('saltarM'); 
    }) })