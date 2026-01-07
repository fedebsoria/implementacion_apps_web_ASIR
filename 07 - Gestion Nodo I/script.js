document.addEventListener("DOMContentLoaded", () => {
    const images = document.getElementById("imgs");

    // Asignar estilos CSS a nodo images
    images.style.display = "flex";
    images.style.justifyContent = "clearInterval";
    images.style.gap = "10px"

    // Crear nodos Figure para hacer una galeria
    const figure1 = document.createElement("figure");
    const figure2 = document.createElement("figure");
    const figure3 = document.createElement("figure");

    // Crear nodos de tipo Element Img
    const imgMastiff = document.createElement("img");
    const imgShiba = document.createElement("img");
    const imgHuskie = document.createElement("img");

    // Asignar atributos Img
    imgMastiff.src = "img/img-mastiff.png";
    imgMastiff.alt = "Mastín del pirineos";
    imgMastiff.style.width = "200px";
    imgMastiff.style.height = "auto";

    imgShiba.src = "img/img-shiba.png";
    imgShiba.alt = "Shiba inu";
    imgShiba.style.width = "200px";
    imgShiba.style.height = "auto";

    imgHuskie.src = "img/img-huskie.png";
    imgHuskie.alt = "Husky siberiano";
    imgHuskie.style.width = "200px";
    imgHuskie.style.height = "auto";
    
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

    // Insertar nodos al DOM
    images.appendChild(figure1);
    images.appendChild(figure2);
    images.appendChild(figure3);
    
    figure1.appendChild(imgMastiff);
    figure1.appendChild(enlaceMastiff);

    figure2.appendChild(imgShiba);
    figure2.appendChild(enlaceShiba);

    figure3.appendChild(imgHuskie);
    figure3.appendChild(enlaceHuskie);
});
