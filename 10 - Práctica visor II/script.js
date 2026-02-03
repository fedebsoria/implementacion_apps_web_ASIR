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

    const img = document.createElement('img');
    img.src = images[actualIndex];
    img.className = 'miniature';

    const arrowL = document.createElement('img');
    arrowL.className = 'arrow';
    arrowL.id = 'arrowL';
    arrowL.src = visorParts[2];

    const arrowR = document.createElement('img');
    arrowR.className = 'arrow';
    arrowR.id = 'arrowR';
    arrowR.src = visorParts[3];

    const dotEmpty = document.createElement('img');
    dotEmpty.className = 'dotEmpty';
    dotEmpty.src =visorParts[0];

    const dotFull = document.createElement('img');
    dotFull.className = 'dotFull';
    dotFull.id = 'dotFull';
    dotFull.src = visorParts[1];

    visor.appendChild(arrowL);
    visor.appendChild(img);
    visor.appendChild(arrowR);

});