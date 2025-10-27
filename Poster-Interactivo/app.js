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





//Escenario 2
const counter2 = document.querySelector('.contador2');
const manzana = document.querySelectorAll('.mamoi');
let j = 0;

console.log(counter2);
console.log(manzana);


manzana.forEach(Item => {
     
    Item.addEventListener('click', () => {
        Item.classList.add('saltarM');
        j++;
        counter2.textContent = `ESCORE: ${j}`;
    }) })



//Escenario 3
const diamante = document.querySelectorAll('.julio');
const counter3 = document.querySelector('.contador3');
let k = 0;

console.log(diamante);
console.log(counter3);

diamante.forEach(Item => {
    Item.addEventListener('click', () => {
        Item.classList.add('saltarD');
        k++;
        counter3.textContent = `ESCORE: ${k}`;
    }) })
