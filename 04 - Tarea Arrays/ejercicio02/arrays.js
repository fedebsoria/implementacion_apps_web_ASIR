// 2.Diseñar un array, con 5 imágenes. Se pregunta al usuario, cual desea imprimir, una vez que
// se teclea el nombre de la imagen, aparece en el documento.

document.addEventListener('DOMContentLoaded', () => {
// Se pide por pantalla el número de celdas de la tabla o Array

 let animales = ["img/gato.png", "img/panda.png", "img/perro.png", "img/pez.png", "img/tortuga.png"];
 const inputAnimal = document.getElementById("animal");
 const botonImprimir = document.getElementById("btnPrint");
 const animalImg = document.getElementById("animal-img");

 botonImprimir.addEventListener("click", function(evento){
    //Evita que el elemento envíe y la web recargue
    evento.preventDefault();
    //Guarda el texto escrito en el formulario por el user
    const textoGuardado = inputAnimal.value;

    //comprueba el texto escrito y aplica la imagen correspondiente.
    switch (textoGuardado) {
        case "gato":
            animalImg.src = animales[0];
            break;
        case "panda":
            animalImg.src = animales[1];
            break;
        case "perro":
            animalImg.src = animales[2];
            break;
        case "pez":
            animalImg.src = animales[3];
            break;
        case "tortuga":
            animalImg.src = animales[4];
            break;
        default:
            alert("NO ES UN ANIMAL DE LA LISTA");
    }
 }
 )
}
);