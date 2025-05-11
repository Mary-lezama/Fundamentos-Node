/*Ejercicio 7: Encuentra tu meta perdida     
Consigna: 
Revisa tu lista de metas en el archivo metas.json. Busca si una meta 
específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala. 
Pista: Usa fs.readFile para leer el archivo y un método como find para 
buscar en la lista. */

// Importamos el módulo fs para manejar archivos
const fs = require('fs');

// Meta que queremos buscar
const metaBuscar = "Viajar a Japón";

// Leemos el archivo metas.json
fs.readFile('metas.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error al leer tu lista de metas:", err);
    } else {
        // Convertimos el contenido en una lista
        let metas = JSON.parse(data);

        // Verificamos si la meta ya está en la lista
        if (metas.includes(metaBuscar)) {
            console.log(`¡La meta "${metaBuscar}" ya está en tu lista! ✅`);
        } else {
            // Si no está, la agregamos y actualizamos el archivo
            metas.push(metaBuscar);

            fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => {
                if (err) {
                    console.error("Error al actualizar tu lista de metas:", err);
                } else {
                    console.log(`¡Meta "${metaBuscar}" agregada con éxito! 🎉`);
                }
            });
        }
    }
});
