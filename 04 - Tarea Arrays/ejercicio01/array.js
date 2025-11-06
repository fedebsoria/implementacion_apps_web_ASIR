/*
Práctica Arrays
1. Diseña el siguiente programa:
* Se pide por pantalla el número de celdas de la tabla o Array
* Si hay 10 celdas, cada celda guarda el número correspondiente a su posición.
* Imprimir el array con un bucle for
* Imprimir el array con un bucle while
*/
document.addEventListener('DOMContentLoaded', () => {
// Se pide por pantalla el número de celdas de la tabla o Array
 let input = prompt("Ingrese el número de celdas del Array");
 if (input === null) {
  // El usuario canceló el prompt
  return;
 }
 let tamano = parseInt(input.trim(), 10);
 let celda = [];
 const resultadoFor = document.getElementById("resultado-for");
 const resultadoWhile = document.getElementById("resultado-while");
 let arrayFor = "";
 let arrayWhile = "";

 // Validar por si el usuario no introduce un número
 if (isNaN(tamano) || tamano <= 0) {
  alert("Por favor, introduce un número válido y positivo.");
  return;
 }

 // Verificar que los elementos del DOM existen antes de usarlos
 if (!resultadoFor || !resultadoWhile) {
  console.error('Elementos con id "resultado-for" o "resultado-while" no encontrados en el DOM.');
  alert('Error: no se encontraron los elementos de resultado en la página.');
  return;
 }
    
  // Si hay N celdas, cada celda guarda el número correspondiente a su posición
  // usar i < tamano para evitar off-by-one
  for (let i = 0; i < tamano; i++){
      celda[i] = i;
  }

  //Imprimir el array con un bucle for
  for (let j = 0; j < tamano; j++){
     arrayFor += `${celda[j]} <br>`;
  }

  //Imprimir el array con un bucle while
  let k = 0;
  while (k < tamano) {
     arrayWhile += `${celda[k]}<br>`;
     k++;
  }
 
  resultadoFor.innerHTML = arrayFor;
  resultadoWhile.innerHTML = arrayWhile;
 
});