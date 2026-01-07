document.addEventListener("DOMContentLoaded", () => {
    const images = document.getElementById("imgs");

    // Crear nodos de tipo Element Img
    const imgMastiff = document.createElement("img");
    const imgShiba = document.createElement("img");
    const imgHuskie = document.createElement("img");

    // Asignar atributos Img
    imgMastiff.src = "img/img-mastiff.png";
    imgMastiff.alt = "Mastín del pirineos"

    imgShiba.src = "img/img-shiba.png";
    imgShiba.alt = "Shiba inu";

    imgHuskie.src = "img/img-huskie.png";
    imgHuskie.alt = "Husky siberiano";
    
    // Crear nodo de tipo "a"
    const enlaceMastiff = document.createElement('a');
    const enlaceShiba = document.createElement('a');
    const enlaceHuskie= document.createElement('a');

    // Asignar atributos "a"
    enlaceMastiff.href = "https://es.wikipedia.org/wiki/Mast%C3%ADn_del_Pirineo";
    enlaceMastiff.textContent = "Mastín de Pirineo"
    enlaceMastiff.target = "_blank";

    enlaceShiba.href = "https://es.wikipedia.org/wiki/Shiba_inu";
    enlaceShiba.textContent = "Shiba inu"
    enlaceShiba.target = "_blank";

    enlaceHuskie.href = "https://es.wikipedia.org/wiki/Husky_siberiano";
    enlaceHuskie.textContent = "Husky siberiano"
    enlaceHuskie.target = "_blank";
});
