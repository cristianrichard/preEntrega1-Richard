// Descomentar el código en cada "programa" para chequear funcionamiento



// Se le pide al usuario que ingrese un texto. Si el texto ingresado es estrictamente igual a Hola, se muestra con un alert, sino se muestra en consola.

let algoritmo = function () {
   let texto = prompt("Ingrese un texto");
   if (texto == "Hola") {
      alert("El texto ingresado es igual a Hola");
   } else {
      console.log("El texto no es estrictamente igual a Hola");
   }
}
// algoritmo();





// CREAR UN ARRAY DE 5 A 0 CON CICLO WHILE

let myArray = [];

let i = 5;


while (i <= 5 && i >= 0) {
   myArray.push(i);
   i--;
}

// console.log(myArray);






// Calculadora usando una function con Switch

function calculadora(nro1, nro2, operacion) {
   switch (operacion) {
      case "+":
         return nro1 + nro2;
         break;

      case "-":
         return nro1 - nro2;
         break;

      case "*":
         return nro1 * nro2;
         break;

      case "/":
         return nro1 / nro2;
         break;

      default:
         return 0;
         break;
   }
}

// console.log(calculadora(10, 20, "+"));
// console.log(calculadora(10, 20, "-"));
// console.log(calculadora(10, 10, "*"));
// console.log(calculadora(100, 2, "/"));
// console.log(calculadora(100, 2, "checkDef"));








//Introducimos el precio del producto, y devuelve su precio más iva (21%) por consola (Arrow functions)

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * .21;

let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento); // Nuevo precio es igual a la resta de (la suma primero de precio y precioXIva) menos el descuento);

// console.log(nuevoPrecio);







// Práctica que realice en el curso de FreeCodeCamp de Javascript

// Consiste en un contador de cartas en Blackjack, donde si el contador es > 0, Holdeamos y si el contador es < 0 apostamos.

// case 2,3,4,5,6 => count++
// case 7,8,9  => count se mantiene igual
// case 10, "J", "Q", "K", "A" count--

let count = 0;
let answer;

function cc(card) {

   switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;
   }

   let holdBet = "";

   if (count > 0) {
      holdBet = "Bet";
   } else {
      holdBet = "Hold";
   }

   return count + " " + holdBet;
}

// console.log(cc(2));
// console.log(cc(2));
// console.log(cc(7));
// console.log(cc(8));
// console.log(cc("A"));
// console.log(cc("K"));
// console.log(cc(5));
// console.log(cc("K"));














// Tenemos una constante => randomGenNumber que contiene justamente números random del 1 al 45, tenemos que generar un array con enteros de longitud 6, que genere todo el tiempo números random que no sean iguales entre si.


const randomGenNumber = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
} //Genera números random entre min y max (pasados como parámetros)


function lottery() {
   result = [];

   while (result.length < 6) {
      const num = randomGenNumber(1, 45);
      if (!result.includes(num))
         result.push(num);
   }
   return result
}

// console.log(lottery());
// console.log(lottery());
// console.log(lottery());
// console.log(lottery());
// console.log(lottery());








