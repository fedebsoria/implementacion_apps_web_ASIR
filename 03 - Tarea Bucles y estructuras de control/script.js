/*Prácticas Bucles
1. Se pide por pantalla el nombre y el número que se desea imprimir.
*/


let nameUser = window.prompt("Ingrese su nombre");
let nameUserRepetittions = parseInt(window.prompt("Ingrese la cantidad de veces a repetir."));
let totalNames = "";
for(let i=0; i < nameUserRepetittions; i++){
    totalNames += `${nameUser}\n`;
}
window.alert(totalNames);