document.addEventListener('DOMContentLoaded', () => {
    const parentDIV = document.getElementById('parent');

    fetch('data/vehiculos.json')
        .then(response => {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            return response.json();
        })
        .then(datos => {
            const contenedor = document.createElement('div');
            Object.entries(datos).forEach(([clave, coche]) => {
                const divCoche = document.createElement('div');
                divCoche.id = clave; //id=coche1
                divCoche.className = 'coche-item';

                const img = document.createElement('img');
                img.src = coche.Foto;

                // contenedor de cada coche por individual
                divCoche.appendChild(img);
                // agrega la ficha del coche
                Object.entries(coche).forEach(([propiedad, valor]) => {
                    if (propiedad !== 'Foto') { //evita agregar la imagen
                        const p = document.createElement('p');
                        p.innerHTML = `${propiedad}: ${valor}`;
                        divCoche.appendChild(p);
                    }
                })
                // contenedor de todos los coches
                contenedor.appendChild(divCoche);
                // parent de todos los contenedores
                parentDIV.appendChild(contenedor);
            })
        })
}
);