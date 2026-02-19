document.addEventListener('DOMContentLoaded', () => {
    const parentDIV = document.getElementById('parent');

    // Objetos
    const zapatillaNike = { 
        img: 'img/nike.jpg',
        marca: 'Nike',
        modelo: 'Air Max Plus',
        talla : 40
    };

    const zapatillaAdidas = {
        img: 'img/adidas.jpg',
        marca: 'Adidas',
        modelo: 'Superstar',
        talla : 50
    };

    const zapatillaPuma = {
        img: 'img/puma.jpg',
        marca: 'Puma',
        modelo: 'Puma',
        talla : 56
    };

    //Array de objetos
    const zapatillas = [ zapatillaNike, zapatillaAdidas, zapatillaPuma ];

    function contenedorZapatilla(zapatilla) {
        const contenedorPrincipal = document.createElement('div');
        contenedorPrincipal.className = 'contenedor-principal-zapatilla';

        const imagenZapatilla = document.createElement('img');
        imagenZapatilla.className = 'img-zapatilla';
        imagenZapatilla.src = zapatilla.img;

        const marcaZapatilla =document.createElement('p');
        marcaZapatilla.className = 'texto-marca-zapatilla';
        marcaZapatilla.innerText = zapatilla.marca;

        const modeloZapatilla =document.createElement('p');
        modeloZapatilla.className = 'texto-zapatilla';
        modeloZapatilla.innerText = 'Modelo: ' + zapatilla.modelo;

        const tallaZapatilla =document.createElement('p');
        tallaZapatilla.className = 'texto-zapatilla';
        tallaZapatilla.innerText = 'Talla: ' + zapatilla.talla;

        //Ensanblar
        contenedorPrincipal.appendChild(imagenZapatilla);
        contenedorPrincipal.appendChild(marcaZapatilla);
        contenedorPrincipal.appendChild(modeloZapatilla);
        contenedorPrincipal.appendChild(tallaZapatilla);

        return contenedorPrincipal;
    };

    function renderWEB () {
        const zapatillaLineaUno = document.createElement('div');
        zapatillaLineaUno.id = 'primera-linea'

        const zapatillaLineaDos = document.createElement('div');
        zapatillaLineaDos.id = 'segunda-linea'
        for (let i = 0; i < zapatillas.length; i++) {
            let contenedorRenderZapatilla = contenedorZapatilla(zapatillas[i]);
            zapatillaLineaUno.appendChild(contenedorRenderZapatilla);
            zapatillaLineaDos.appendChild(contenedorRenderZapatilla.cloneNode(true));
        }

        parentDIV.appendChild(zapatillaLineaUno);
        parentDIV.appendChild(zapatillaLineaDos);
    };

    renderWEB();
});