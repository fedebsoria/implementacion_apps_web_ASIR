document.addEventListener("DOMContentLoaded", () => {
    // 1. Pregunta inicial antes de cargar nada en el DOM
    const quiereSaber = confirm("¿Quieres conocer tu horóscopo?"); // cite: 61
    
    if (!quiereSaber) {
        // Si contesta que no, no aparece nada
        return; // cite: 64
    }

    // Almacenamiento de los datos del XML mapeados para agilizar el proceso
    let datosZodiaco = [];
    let datosChino = [];

    // 2. Obtención del archivo XML local
    fetch('horoscopo.xml') // cite: 67
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(xml => {
            parsearDatos(xml);
            inicializarAplicacion();
        })
        .catch(err => console.error("Error al recuperar el XML:", err));

    function parsearDatos(xml) {
        // Parsear Signos del Zodíaco
        const signos = xml.getElementsByTagName("signo");
        for (let s of signos) {
            datosZodiaco.push({
                id: s.getAttribute("id"),
                nombre: s.getElementsByTagName("nombre")[0].textContent,
                inicio: s.getElementsByTagName("inicio")[0].textContent,
                fin: s.getElementsByTagName("fin")[0].textContent,
                imagen: s.getElementsByTagName("imagen")[0].textContent,
                prediccion: s.getElementsByTagName("prediccion")[0].textContent,
                caracteristicas: s.getElementsByTagName("caracteristicas")[0].textContent
            });
        }

        // Parsear Horóscopo Chino
        const animales = xml.getElementsByTagName("animal");
        for (let a of animales) {
            datosChino.push({
                residuo: parseInt(a.getAttribute("residuo")),
                nombre: a.getElementsByTagName("nombre")[0].textContent,
                imagen: a.getElementsByTagName("imagen")[0].textContent
            });
        }
    }

    function inicializarAplicacion() {
        const body = document.body; // cite: 68

        // --- Contenedor Principal ---
        const container = document.createElement("div");
        container.className = "main-container";

        // --- Encabezado ---
        const header = document.createElement("header");
        const titulo = document.createElement("h1");
        titulo.textContent = "Horóscopo y signos del zodíaco"; // cite: 3
        header.appendChild(titulo);
        container.appendChild(header);

        // --- Bloque Calculadora ---
        const calcSection = document.createElement("section");
        calcSection.className = "calculadora-section";

        const calcTitle = document.createElement("h2");
        calcTitle.textContent = "¿Cuál es mi signo del zodíaco? ¿Y mi horóscopo chino?"; // cite: 41, 70
        calcSection.appendChild(calcTitle);

        const labelFecha = document.createElement("label");
        labelFecha.textContent = "Introduce tu fecha de nacimiento: "; // cite: 42, 71
        
        const inputFecha = document.createElement("input");
        inputFecha.type = "date"; // Manejo nativo de fecha cómodo y libre de fallos por strings erróneos
        inputFecha.id = "fechaNacimiento";
        
        labelFecha.appendChild(inputFecha);
        calcSection.appendChild(labelFecha);

        // Bloque dinámico donde se inyectan los resultados del cálculo
        const wrapperResultados = document.createElement("div");
        wrapperResultados.id = "wrapperResultados";
        calcSection.appendChild(wrapperResultados);

        container.appendChild(calcSection);

        // --- Bloque Grid Horóscopo Chino ---
        const chinoSection = document.createElement("section");
        chinoSection.className = "chino-section";
        
        const chinoTitle = document.createElement("h2");
        chinoTitle.textContent = "El Horóscopo chino"; // cite: 46, 75
        chinoSection.appendChild(chinoTitle);

        const gridChino = document.createElement("div");
        gridChino.className = "grid-chino";

        // Pintar de forma dinámica la matriz de 12 animales basándose en el XML
        datosChino.forEach(animal => {
            const card = document.createElement("div");
            card.className = "animal-card";
            
            const img = document.createElement("img");
            img.src = animal.imagen;
            img.alt = animal.nombre;
            
            const p = document.createElement("p");
            p.textContent = animal.nombre;
            
            card.appendChild(img);
            card.appendChild(p);
            gridChino.appendChild(card);
        });
        
        chinoSection.appendChild(gridChino);
        container.appendChild(chinoSection);

        // Adjuntar todo al body vacío
        body.appendChild(container); // cite: 68

        // --- Evento de escucha del Input de Fecha ---
        inputFecha.addEventListener("change", (e) => { // cite: 69
            if (!e.target.value) return;
            
            const fechaSeleccionada = new Date(e.target.value);
            const dia = fechaSeleccionada.getDate();
            const mes = fechaSeleccionada.getMonth() + 1; // Enero es 0
            const anio = fechaSeleccionada.getFullYear();

            // Calcular Signo Occidental
            const signoZodiacal = obtenerSignoZodiaco(dia, mes);
            // Calcular Signo Chino
            const signoChino = obtenerHoroscopoChino(anio);

            // Vaciar cálculos anteriores
            wrapperResultados.innerHTML = "";

            if (signoZodiacal && signoChino) {
                // Texto Informativo Base
                const pZodiaco = document.createElement("p");
                pZodiaco.innerHTML = `<strong>Tu signo del zodíaco es:</strong> ${signoZodiacal.nombre}`; // cite: 44, 73
                
                const pChino = document.createElement("p");
                pChino.innerHTML = `<strong>Tu horóscopo chino es:</strong> ${signoChino.nombre}`; // cite: 45, 74

                // Bloque Detalle de Predicción y Características (Requisito visual del PDF)
                const infoDetalle = document.createElement("div");
                infoDetalle.className = "info-detalle-card";

                const detailHeader = document.createElement("div");
                detailHeader.className = "detail-header";

                const iconSigno = document.createElement("img");
                iconSigno.src = signoZodiacal.imagen;
                iconSigno.alt = signoZodiacal.nombre;

                const detailTitle = document.createElement("h3");
                detailTitle.textContent = `${signoZodiacal.nombre} (${signoZodiacal.inicio}-${signoZodiacal.fin})`; // cite: 25, 26

                detailHeader.appendChild(iconSigno);
                detailHeader.appendChild(detailTitle);
                infoDetalle.appendChild(detailHeader);

                const hPred = document.createElement("h4");
                hPred.textContent = "PREDICCIÓN DE HOY"; // cite: 27
                const pPred = document.createElement("p");
                pPred.textContent = signoZodiacal.prediccion; // cite: 28, 29, 30

                const hChar = document.createElement("h4");
                hChar.textContent = "CARACTERÍSTICAS DEL SIGNO"; // cite: 31
                const pChar = document.createElement("p");
                pChar.textContent = signoZodiacal.caracteristicas; // cite: 32, 33, 34

                infoDetalle.appendChild(hPred);
                infoDetalle.appendChild(pPred);
                infoDetalle.appendChild(hChar);
                infoDetalle.appendChild(pChar);

                // Renderizar nodos dinámicos en la UI
                wrapperResultados.appendChild(pZodiaco);
                wrapperResultados.appendChild(pChino);
                wrapperResultados.appendChild(infoDetalle);
            }
        });
    }

    // Lógica matemática y de rangos para determinar los signos
    function obtenerSignoZodiaco(dia, mes) {
        return datosZodiaco.find(signo => {
            const [dInicio, mInicio] = signo.inicio.split("/").map(Number);
            const [dFin, mFin] = signo.fin.split("/").map(Number);

            if (mes === mInicio && dia >= dInicio) return true;
            if (mes === mFin && dia <= dFin) return true;
            return false;
        });
    }

    function obtenerHoroscopoChino(anio) {
        const residuo = anio % 12;
        return datosChino.find(a => a.residuo === residuo);
    }
});