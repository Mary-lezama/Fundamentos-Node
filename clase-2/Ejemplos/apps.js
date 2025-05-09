/*  Consigna:
1. Crear un archivo JSON llamado productos.json que contenga un listado de
productos.
2. Cada producto debe tener las siguientes propiedades: id, nombre, y precio.
3. Escribir un programa en Node.js que realice las siguientes tareas:
• Lea el archivo productos.json y muestre en la consola el contenido actual.
• Agregue un nuevo producto al listado.
• Escriba nuevamente el archivo JSON con el producto añadido.
• Verifique y muestre en la consola el archivo actualizado.*/

// importamos el modulo fs

const fs = require ('fs')

//definir la ruta del archivo json que quiero manipular 

const rutaArchivo = './productos.json'

//leo el archivo json 

fs.readFile(rutaArchivo, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo: ', (err))
            return
        }

        // convertimos el contenido del archivo json (texto) a objeto js

        const productos = JSON.parse(data)

        //mostramos el contenido actual del archivo json en la consola
        console.log('productos actuales: ', productos);

        // Agregar un nuevo producto al listado
        //creamos para esto un nuevo objeto que represente el producto 
        const nuevoProducto = {
            id: productos.length + 1,
            nombre: 'telefono',
            precio: 800
        }
        //agregamos el nuevo producto al array de productos existentes 
        productos.push(nuevoProducto)

        //mostramos en la consola el array actualizado con el producto nuevo

        console.log('productos actualizados: ', productos);

        //escribimos el archivo json actualizado para esto convertimos el objeto js  productos nuevamente a texto jso
        const contenidoActualizado = JSON.stringify(productos, null, 2) //formatear el espacio (mejor legilibilidad)
        
        //escribir el archivo json ya modificado o actualizado

        fs.writeFile(rutaArchivo, contenidoActualizado, (err) => {
            if (err) {
                console.error('Error al escribir el archivo: ', (err));
                return
            }
            console.log('Archivo actualizado correctamente');
        })
})