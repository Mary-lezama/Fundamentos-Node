/*Ejercicio 2: Descubre tu perfil        
Consigna: 
Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste 
en el ejercicio anterior y muestra la información en la consola para 
asegurarte de que todo está correcto. 
Pista: Utiliza fs.readFile con la codificación 'utf-8' para obtener el 
contenido del archivo como texto legible. */

// importamos el fs

const fs = require('fs') 

fs.readFile('perfil.json', 'utf-8', (err, data) => {
    if (err){
        console.error("Hubo un error, no se pudo leer el perfil");
     } else {
        const perfil = JSON.parse(data)
        console.log("Aqui esta tu perfil: ", perfil);
     }
})