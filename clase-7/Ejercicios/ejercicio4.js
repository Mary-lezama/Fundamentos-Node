/*Ejercicio 4: Servidor con Manejo de Errores
Consigna:
Crea un servidor TCP que maneje errores de conexión de manera
adecuada. Si ocurre un error en la conexión con un cliente, el servidor
debe imprimir un mensaje de error en la consola y cerrar la conexión con
ese cliente. Además, el servidor debe seguir funcionando y aceptando
nuevas conexiones.
Requisitos:
• Usa el evento error para detectar errores en la conexión.
• Usa el método socket.destroy() para cerrar la conexión en caso de
error.
• Asegúrate de que el servidor siga escuchando nuevas conexiones
después de manejar el error.*/

const { error } = require('console');
const { Socket } = require('dgram');
const { ClientRequest } = require('http');
const net = require('net');

// Crear el servidor
const server = net.createServer((Socket) => {
    console.log('Un cliente ha establecido conexion');

    // Manejar datos recibidos del cliente
    socket.on('data', (data) => {
        console.log(`Datos recibidos del cliente: ${data}`);
        socket.write('Mensaje recibido');
    });

     // Manejo de errores en la conexión

    Socket.on('error', (err) => {
        console.log(`Error en la conexion con el cliente: ${err.message}`);
        Socket.destroy() // Cierra la conexión
    });

    socket.end('end', ()=> {
        console.log('Cliente desconectado'); //detecta cuando el cliente cierra la conexion
    });

});

//Entorno del servidor

server.on('connection', (Socket) =>{
    console.log('Nuevo servidor conectado')
})

// Manejar errores del servidor
server.on('error', (err) => {
    console.error('Error en el servidor:', err.message);
});

server.listen(3000, () => {
    console.log(`servidor escuchando en el puerto: ${3000}`)
})

server.on('listening', () => {
    console.log('El servidor esta listo para escuchar conexiones')
})

