/* Prácticas Bucles
     3. Se pide por pantalla el número de filas y de celdas (columnas) de la tabla.
     Posteriormente se crea con esas dimensiones. Ejemplo: filas=4, celdas=4 -> 4x4 de '*'.
*/

let numFilas = parseInt(prompt("Ingrese el número de filas para la tabla:"), 10);
let numCells = parseInt(prompt("Ingrese el número de celdas para la tabla:"), 10);

// If prompt is not available (e.g. running with Node for quick testing), use sample values
if (typeof prompt === 'undefined') {
    // Node / non-browser environment fallback for quick test
    console.log('prompt not available — using fallback 4x4 for quick test');
    numFilas = 4;
    numCells = 4;
}

// Validate input
if (isNaN(numFilas) || isNaN(numCells) || numFilas <= 0 || numCells <= 0) {
    alert && alert('Por favor ingrese números enteros positivos para filas y celdas.');
    console.error('Entrada inválida: filas=', numFilas, 'celdas=', numCells);
} else {
    const charTable = '*';
    let table = '';

    // Build the table: numFilas rows, each row has numCells characters
    for (let i = 0; i < numFilas; i++) {
        let row = '';
        for (let j = 0; j < numCells; j++) {
            row += charTable;
        }
        table += row + '\n';
    }

    // Output: console
    console.log(table);
}
