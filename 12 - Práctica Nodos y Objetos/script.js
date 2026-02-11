document.addEventListener( 'DOMContentLoaded', () => {
    const parent = document.getElementById('parent');

    //Objetos alumnos
    const alumna1 = {
        img : 'img/alumna1.jpg',
        nombre : 'Cristina',
        apellido : 'Lopez',
        edad : '24',
        curso : '2º DAM'
    };

    const alumno2 = {
        img : 'img/alumno2.png',
        nombre : 'Manuel',
        apellido : 'Guzmán',
        edad : '18',
        curso : '1º DAM'
    };

    const alumna3 = {
        img : 'img/alumna3.jpg',
        nombre: 'Mónica',
        apellido : 'Ariza',
        edad : '26',
        curso : '2º DAW'
    };

    //Se crea una función para recorres los objetos
    function iterateAlumnos ( alumno ) {
        // div para el alumno
        const alumnoDIV = document.createElement('div');
        alumnoDIV.className = 'alumno';

        const alumnoIMG = document.createElement('img');
        alumnoIMG.className = 'alumno-imagen';
        alumnoIMG.src = alumno.img;

        //Iterar datos del alumno
        const alumnoDatosEtiqueta = ['Nombre','Apellido: ', 'Edad: ', 'Curso: '];
        const alumnoDatosKey = ['nombre', 'apellido', 'edad', 'curso'];

        const alumnoDatosDiv = document.createElement('div');
        alumnoDatosDiv.className = 'datos-alumno-individual';

        for (let i = 0; i < alumnoDatosEtiqueta.length; i++) {
            const key = alumnoDatosKey[i];
            const etiqueta = alumnoDatosEtiqueta[i];

            const datoAlumnoEtiqueta = document.createElement('p');
            datoAlumnoEtiqueta.id = 'dato-alumno-etiqueta-'+etiqueta;
            datoAlumnoEtiqueta.innerText = etiqueta;

            const datoAlumnoValor = document.createElement('p');
            datoAlumnoValor.id = 'dato-alumno-valor'+key;
            datoAlumnoValor.innerText = alumno[key];

            alumnoDatosDiv.appendChild(datoAlumnoEtiqueta);
            alumnoDatosDiv.appendChild(datoAlumnoValor);
        }

        alumnoDIV.appendChild(alumnoIMG);
        alumnoDIV.appendChild(alumnoDatosDiv);

        return alumnoDIV;
    };

    function renderWeb () {

        const listadoAlumnos = [alumna1, alumno2, alumna3];

        const alumnosLineaUno = document.createElement('div');
        alumnosLineaUno.className = 'linea-alumnos';

        const alumnosLineaDos = document.createElement('div');
        alumnosLineaDos.className = 'linea-alumnos';

        for (let i = 0; i < listadoAlumnos.length; i++) {
            const alumnoRender = iterateAlumnos(listadoAlumnos[i]);
            alumnosLineaUno.appendChild(alumnoRender);
            parent.appendChild(alumnosLineaUno);
        }
        
        for (let i = 0; i < listadoAlumnos.length; i++) {
            const alumnoRender = iterateAlumnos(listadoAlumnos[i]);
            alumnosLineaDos.appendChild(alumnoRender);
            parent.appendChild(alumnosLineaDos);
        }  
    }
    
    renderWeb();
});