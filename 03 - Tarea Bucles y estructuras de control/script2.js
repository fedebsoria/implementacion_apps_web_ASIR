/*Prácticas Bucles
2. Imprimir los números del 1-100, en intervalos de 10 en 10.
*/

let num;

const container = document.createElement('div');
document.body.appendChild(container);

for (num = 0; num <= 100; num+=10) {
    container.innerHTML += num + '<br>';
}