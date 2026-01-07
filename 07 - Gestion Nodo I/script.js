document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("body");

    // Asignar estilos CSS al nodo body
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.height = "100vh";
    body.style.margin = "0";

    const images = document.getElementById("imgs");

    // Asignar estilos CSS a nodo images
    images.style.display = "flex";
    images.style.justifyContent = "clearInterval";
    images.style.gap = "10px";
    images.style.alignItems = "center";

    // Crear nodos Figure para hacer una galeria
    const figure1 = document.createElement("figure");
    const figure2 = document.createElement("figure");
    const figure3 = document.createElement("figure");

    // asignar estilos CSS a nodos figure
    figure1.style.display = "flex";
    figure1.style.flexDirection = "column";
    figure1.style.alignItems= "center";
    figure1.style.textAlign = "center";

    figure2.style.display = "flex";
    figure2.style.flexDirection = "column";
    figure2.style.alignItems= "center";
    figure2.style.textAlign = "center";

    figure3.style.display = "flex";
    figure3.style.flexDirection = "column";
    figure3.style.alignItems= "center";
    figure3.style.textAlign = "center";

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

    // Bucle for de depuración
    const figuras = [figure1, figure2, figure3];
    for (let i = 0; i < figuras.length; i++) {
        const fig = figuras[i]
        console.group(`Figura #${i}`),
        console.log("Nodo figure: ", fig);
        console.log("Imagen src: ", fig.querySelector("img").src);
        console.log("Enlace href: ", fig.querySelector("a").href);
        console.groupEnd();
    }
});
