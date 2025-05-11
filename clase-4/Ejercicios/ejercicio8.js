/*Ejercicio 8: Cuenta tus metas        
Consigna: 
¿Sabes cuántas metas has establecido? Escribe un programa que lea tu 
archivo metas.json y cuente cuántas metas tienes actualmente. 
Pista: Usa length para obtener la cantidad de elementos en la lista. 
*/

// Importamos el módulo fs para manejar archivos
const fs = require('fs');

// Leemos el archivo metas.json
fs.readFile('metas.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error al leer tu lista de metas:", err);
    } else {
        // Convertimos el contenido en una lista
        const metas = JSON.parse(data);

        // Mostramos la cantidad de metas en consola
        console.log(`Tienes ${metas.length} metas en tu lista. 🌟`);
    }
});
