/*
Práctica Condicionales
Se pide por pantalla un número entero.
-Se comprueba que es un número positivo y distinto de cero
-Si además es de dos cifras, calculamos si es par o impar
-Si es de tres cifras mostramos el resto de dividir el número entre 2
-Si no se cumplen las condiciones anteriores, mostramos un mensaje por la
consola(console.log("Error"));
*/

console.log("Qué tipo de número es tu número \n");

let userInput = prompt("Ingrese un número entero: \n");
let userNumber = parseInt(userInput);

if (isNaN(userNumber)) {
    console.log("Lo que escribió no es un número");
} else if (userNumber > 0){
    console.log("El número es mayor y distinto a cero.");
    if (userNumber >= 1 && userNumber < 10){
        console.log("Use un número mayor a 9 para ver algo sorprendente.")
    } else if (userNumber > 9 && userNumber <= 99) {
        let oddOReven = userNumber % 2;
            if (oddOReven == 0) {
            console.log("El número es par");
            } else {
                console.log("El número es inpar")
            }
    } else if (userNumber > 99) {
        let modUserNumber = userNumber % 2
        console.log(`El resto de dividir  ${userNumber} por 2 es igual a ${modUserNumber}`)
    } else {
        console.log("Error")
    }
} else {
    console.log("Error")
}


