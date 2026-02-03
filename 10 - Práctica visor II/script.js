document.addEventListener('DOMContentLoaded', () => {
    const visor = document.getElementById('image-visor');
    
    const images = [
        'img/foto1.jpg', 'img/foto2.jpg', 
        'img/foto3.jpg', 'img/foto4.jpg', 
        'img/foto5.jpg', 'img/foto6.jpg'
    ];

    let actualIndex = 0;

    const imagesText = [
        'El pueblo amanece nevado.',
        'La nieve cubre todo.',
        'El lago se congela y los pinos se visten de blanco',
        'Nos preparamos para la aventura',
        'Los picos más altos nos saludan con blanco esplendor',
        'El frío no nos detiene'
    ];

        const visorParts = [
        'img/dry-clean.png', 
        'img/new-moon.png', 
        'img/flecha-correcta-izq.png', 
        'img/flecha-correcta-der.png'
    ];
     //Función principal para renderizar el visor
    function renderVisor() {

        // 1 Limpiar el visor para evitar la acumulación de imagenes
        visor.innerHTML = '';
        
        // 2. Crear flecha izq. y su evento
        const arrowL = document.createElement('img');
        arrowL.className = 'arrow';
        arrowL.id = 'arrowL';
        arrowL.src = visorParts[2];
        arrowL.onclick = () => {
            actualIndex--;
            if (actualIndex < 0) { actualIndex = 5;}
            renderVisor(); // Volver a dibujar
        };

        // 3. Crear flecha derecha y su evento
        const arrowR = document.createElement('img');
        arrowR.className = 'arrow';
        arrowR.id = 'arrowR';
        arrowR.src = visorParts[3];
        arrowR.onclick = () => {
            actualIndex++;
            if (actualIndex > 5) { actualIndex = 0};
            renderVisor(); // Volver a dibujar
        }
        
        // 4. Crear Imagen Principal
        const img = document.createElement('img');
        img.src = images[actualIndex];
        img.className = 'miniature';

        // 5. Contenedor de puntos
        const dotsContainer = document.createElement('div');
        dotsContainer.id = 'dotsContainer';

        images.forEach((_, index) => {
            const dot = document.createElement('img');
            // si coincide el indice ponemos un punto lleno si no el pto vacío
            if (index === actualIndex) {
                dot.src = visorParts[1];
                dot.className = 'dotFull';
            } else {
                dot.src = visorParts[0];
                dot.className = 'dotEmpty';
            }
            dotsContainer.appendChild(dot);
        });

        // 5.5 Contenedor de texto
        const textContainer = document.createElement('div');
        textContainer.id = 'textContainer';
        const text = document.createElement('p');
        text.innerText = imagesText[actualIndex];
        textContainer.appendChild(text);


        // 6. Ensamblar todo
        const photoContainer = document.createElement('div');
        photoContainer.id = 'photoContainer';
        photoContainer.appendChild(img);
        photoContainer.appendChild(dotsContainer);
        photoContainer.appendChild(textContainer);

        visor.appendChild(arrowL);
        visor.appendChild(photoContainer);
        visor.appendChild(arrowR);
    };

    //Llamar a la función por primera vez
    renderVisor();
});