/*Ejercicio 4: ¿Existe tu perfil?     
Consigna: 
Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json 
existe. Si no existe, crea uno nuevo con un perfil básico. 
Pista: Usa fs.existsSync para verificar la existencia del archivo. */


//  Importamos el módulo fs para verificar y crear archivos
const fs = require('fs');

// Verificamos si el archivo perfil.json existe
if (fs.existsSync('perfil.json')) {
    console.log("¡Tu perfil ya existe! 😊 Revisa perfil.json.");
} else {
    // Si no existe, creamos un archivo con un perfil básico
    const perfilBasico = {
        nombre: "Laura",
        edad: 35,
        ciudadFavorita: "Londres"
    };

    fs.writeFile('perfil.json', JSON.stringify(perfilBasico, null, 2), (err) => {
        if (err) {
            console.error("No se pudo crear el perfil básico:", err);
        } else {
            console.log("¡Perfil básico creado! 🌟");
        }
    });
}

