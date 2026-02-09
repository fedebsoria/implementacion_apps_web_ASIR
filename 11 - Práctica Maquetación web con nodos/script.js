document.addEventListener( 'DOMContentLoaded', () => {
    const parent = document.getElementById('parent');
    const imgs = {
        banner: 'img/logo-azul-marino-viajes.jpg',
        berlin: 'img/berlin.jpg',
        aventureros: 'img/aventureros.jpg',
        mar: 'img/mar.jpg',
        kayak: 'img/kayak.jpeg',
        avion: 'img/avion.jpg'
    } ;
    const opcionesDelMenu = ['Inicio', 'Nosotros', 'Servicios', 'Contacto'];

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    function renderWeb (){
        // 1 . Crear Banner
        const banner = document.createElement('img');
        banner.id = 'banner';
        banner.src = imgs.banner;

        // 2 . Menu web
        const menuWeb = document.createElement('div');
        menuWeb.id = "menuWeb";
        
        for (let i = 0; i < opcionesDelMenu.length; i++) {
            const opcionMenu = document.createElement('p');
            opcionMenu.className = 'menu';
            opcionMenu.innerText = opcionesDelMenu[i];
            menuWeb.appendChild(opcionMenu);
        }

        // 3. primera sección y texto
        const primerDIV = document.createElement('div');
        primerDIV.id = 'primer-div';

        const primerImagen = document.createElement('img');
        primerImagen.src = imgs.berlin;
        primerImagen.id = 'img-primer-div';

        const primerTextoWrapper = document.createElement('div');
        primerTextoWrapper.id = 'content-wrapper';
        const primerTitular = document.createElement('h2');
        primerTitular.innerText = 'Este es el titular del div de Texto';
        primerTitular.id = 'titular-primer-div';

        const primerTexto = document.createElement('p');
        primerTexto.innerText = loremIpsum;
        primerTexto.id = 'texto-primer-div';

        const button0 = document.createElement('p');
        button0.className = 'boton';
        button0.innerText = 'Ver más';

        primerDIV.appendChild(primerImagen);
        primerTextoWrapper.appendChild(primerTitular);
        primerTextoWrapper.appendChild(primerTexto);
        primerTextoWrapper.appendChild(button0);
        primerDIV.appendChild(primerTextoWrapper);

        // 4. Segunda sección
        const segundoDIV = document.createElement('div');
        segundoDIV.id = 'segundo-div'
        // 4.1 Titular e imagen
        const titularEimg = document.createElement('div');
        titularEimg.className = 'titular-e-img-2-div'

        const segundoTitular = document.createElement('h2');
        segundoTitular.innerText = 'Este es el titular de la sección 2';
        const segundaImagen = document.createElement('img');
        segundaImagen.src = imgs.aventureros;
        segundaImagen.id = 'aventureros'

        titularEimg.appendChild(segundoTitular);
        titularEimg.appendChild(segundaImagen);

        segundoDIV.appendChild(titularEimg);

        // 5. Tercera Sección
        const tercerDIV = document.createElement('div');
        tercerDIV.id = 'tercer-div';

        // 5.1 primer artículo
        const artic1 = document.createElement('div');
        artic1.className = 'articulo';

        const artic1Img = document.createElement('img');
        artic1Img.src = imgs.mar;

        const artic1Txt = document.createElement('h3');
        artic1Txt.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

        const button1 = document.createElement('p');
        button1.className = 'boton';
        button1.innerText = 'Comprar';

        artic1.appendChild(artic1Img);
        artic1.appendChild(artic1Txt);
        artic1.appendChild(button1);

        // 5.2 segundo artículo
        const artic2 = document.createElement('div');
        artic2.className = 'articulo';

        const artic2Img = document.createElement('img');
        artic2Img.src = imgs.kayak;

        const artic2Txt = document.createElement('h3');
        artic2Txt.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

        const button2 = document.createElement('p');
        button2.className = 'boton';
        button2.innerText = 'Comprar';

        artic2.appendChild(artic2Img);
        artic2.appendChild(artic2Txt);
        artic2.appendChild(button2);

        // 5.3 tercer articulo
        const artic3 = document.createElement('div');
        artic3.className = 'articulo';

        const artic3Img = document.createElement('img');
        artic3Img.src = imgs.avion;

        const artic3Txt = document.createElement('h3');
        artic3Txt.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

        const button3 = document.createElement('p');
        button3.className = 'boton';
        button3.innerText = 'Comprar';

        artic3.appendChild(artic3Img);
        artic3.appendChild(artic3Txt);
        artic3.appendChild(button3);

        // 5.X Ensamblar tercera sección
        tercerDIV.appendChild(artic1);
        tercerDIV.appendChild(artic2);
        tercerDIV.appendChild(artic3);


        //  Ensamblar la web
        parent.appendChild(banner);
        parent.appendChild(menuWeb);
        parent.appendChild(primerDIV);
        parent.appendChild(segundoDIV);
        parent.appendChild(tercerDIV);
    };

    renderWeb();
});