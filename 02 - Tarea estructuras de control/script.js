/*
1. Realizar con el operador not. Pedir un número por pantalla, y comprobar que es
distinto de cero y mayor que cero.
a. Si se cumple la condición, se calcula si el número es par o impar
b. Si no se cumple la condición, se muestra un mensaje de error
*/

let numUser = parseInt(window.prompt("Ingrese un número: "));

if (numUser !=0 && numUser > 0){
    isOddOrEven = numUser % 2;
    if (isOddOrEven != 0) {
        window.alert("El número es inpar.");
    } else {
        window.alert("El número es par.");
    }
} else {
    window.alert("Erro, el número no es mayor ni distinto a 0.")
}
