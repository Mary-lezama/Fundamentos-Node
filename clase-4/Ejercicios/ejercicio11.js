/*Ejercicio 11: Sistema de gestión de contactos             
Consigna: 
Imagina que estás desarrollando una miniaplicación para gestionar 
contactos. Tu objetivo es: 
1. Crear un archivo llamado contactos.json que almacene una lista de 
contactos. 
2. Implementar funciones para: 
o Agregar un contacto: Cada contacto debe tener nombre, 
teléfono y email. 
o Listar todos los contactos. 
o Buscar un contacto por nombre. 
3. Asegúrate de que los contactos no se repitan (valida el nombre 
antes de agregarlo). 
Pista: Usa readFile para obtener la lista actual de contactos y writeFile 
para guardar cambios. 
*/

const fs = require('fs');

// Función para leer el archivo de contactos
function leerContactos() {
    if (fs.existsSync('contactos.json')) {
        const data = fs.readFileSync('contactos.json', 'utf-8');
        return JSON.parse(data);
    }
    return []; // Si no existe el archivo, devolvemos una lista vacía
}

// Función para guardar contactos en el archivo
function guardarContactos(contactos) {
    fs.writeFileSync('contactos.json', JSON.stringify(contactos, null, 2));
}

// Agregar un contacto
function agregarContacto(nombre, telefono, email) {
    const contactos = leerContactos();

    // Verificamos si ya existe un contacto con ese nombre
    if (contactos.some(contacto => contacto.nombre === nombre)) {
        console.log(`El contacto "${nombre}" ya existe. ❌`);
        return;
    }

    contactos.push({ nombre, telefono, email });
    guardarContactos(contactos);
    console.log(`Contacto "${nombre}" agregado exitosamente. ✅`);
}

// Listar todos los contactos
function listarContactos() {
    const contactos = leerContactos();
    console.log("Lista de contactos: 📇");
    console.table(contactos);
}

// Buscar un contacto por nombre
function buscarContacto(nombre) {
    const contactos = leerContactos();
    const contacto = contactos.find(c => c.nombre === nombre);

    if (contacto) {
        console.log("Contacto encontrado: 📌", contacto);
    } else {
        console.log(`No se encontró ningún contacto con el nombre "${nombre}". ❌`);
    }
}

// Pruebas
agregarContacto("Ana", "123-456-789", "ana@mail.com");
agregarContacto("Juan", "987-654-321", "juan@mail.com");
listarContactos();
buscarContacto("Ana");