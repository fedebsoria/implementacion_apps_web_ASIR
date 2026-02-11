document.addEventListener( 'DOMContentLoaded', () => {
    const parent = document.getElementById('parent');

    //Objetos alumnos
    const alumna1 = {
        imagen : 'img/alumna1.jpg',
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

    const alumno3 = {
        img : 'img/alumna3.jpg',
        apellido : 'Ariza',
        edad : '26',
        curso : '2º DAW'
    };

    //Se crea una función para recorres los objetos
    function iterateAlumnos ( alumno ) {
        // div para el alumno
        const alumnoDIV = document.createObject('div');
        alumnoDIV.className = 'alumno';

        const alumnoIMG = document.createObject('img');
        alumnoIMG.className = 'alumno-imagen';
        alumnoIMG.src = alumno.img;

        //Iterar datos del alumno
        const alumnoDatos = ['Apellido: ', 'Edad: ', 'Curso: ']

        const alumnoDatosDiv = document.createObject('div');
        alumnoDatosDiv.id = 'datos-alumno';

        for (let i = 0; i < 3; i++) {
            const datoAlumno = document.createObjet('p');
            datoAlumno.className = 'dato-alumno-individual';
            datoAlumno.innerText = alumnoDatos[i] + alumno[i+1];
            alumnoDatosDiv.appendChild(datoAlumno);
        }

        alumnoDIV.appendChild(alumnoIMG);
        alumnoDIV.appendChild(alumnoDatosDiv);
    };

    function renderWeb () {
        const alumna1DIV = iterateAlumnos(alumna1);

        parent.appendChild(alumna1DIV);

        
    }
    
    renderWeb();
});