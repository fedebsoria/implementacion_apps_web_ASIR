/*
2. Se pide por pantalla un número entero
a. Se comprueba que es un número positivo y distinto de cero.
i. Si además es de dos cifras, se muestra si es par o impar
ii. Si es de tres cifras se muestra el resto de dividir este número entre 2
b. Si no se cumplen las condiciones, aparece un mensaje de error.
*/

let numUser = parseInt(window.prompt("Ingese un número positivo y distinto a 0: "));
let moduleOf;
let isOddOrEven;

if (numUser != 0 && numUser > 0){
    if (numUser > 9 && numUser < 100){
        isOddOrEven = numUser % 2;
        if (isOddOrEven != 0){
            window.alert("El número es inpar");
        } else {
            window.alert("El número es par");
        }
    } else if (numUser >= 100 && numUser < 1000){
        moduleOf = numUser % 2;
        window.alert(`El resto del ${numUser} dividido por 2 es ${moduleOf}`);
    } else {
        window.alert("ERRO");
    }
} else {
    window.alert("Ingrese un número mayor a 0");
}
