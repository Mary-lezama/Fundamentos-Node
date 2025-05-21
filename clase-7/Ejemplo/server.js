/*Hoy vamos a crear juntas  “Servidor TCP en Node.js con Eventos” 
Objetivo: Implementa un servidor TCP en Node.js que gestione conexiones, reciba/envié datos y maneje 
eventos.
 Requerimientos:
 Configuración básica:
 • Usa el módulo net.
 • Escucha en el puerto 3000.
 • Eventos del Socket (por cliente):
 • Registra conexiones, datos recibidos (convertidos a texto), cierres y errores.
 • Responde al cliente con "Mensaje recibido por el servidor" tras recibir datos.
 • Cierra la conexión automáticamente tras 5 segundos de inactividad (timeout).
 Eventos del Servidor:
 Muestra mensajes al iniciar (listening), al conectarse un cliente (connection), ante errores y al cerrarse.*/

 //PASO 1 Importacion del modulo net

const { Socket } = require('dgram')
const net = require('net')

//PASO 2 creamos un servidor TCP

const server = net.createServer((Socket) => {
    console.log("Un cliente se conecto al servidor!");

    //PASO 3 evento data

    Socket.on('data', (data) => {
        console.log(`Datos recibidos del cliente: ${data.toString()}`);
        //podemos responderle al cliente
        Socket.write('Mensaje recibido por el servidor')
    })

    //PASO 4 evento end

    Socket.on('end', () => {
        console.log('El cliente ha cerrado la conexion');
    })

    //PASO 5 evento error

    Socket.on('error', (err) => {
        console.log(`Error de conexion: ${err.message}`);
    })
    //PASO 6 evento close

    Socket.on('close', () => {
        console.log('La conexion con el cliente se ha cerrado');
    })
})

//Paso 7 evento connection

server.on('connection', (Socket) => {
    console.log('Nueva conexion establecida');
})

//PASO 8 creacion de la variable del puerto

const PORT = 3000

server.listen(PORT, ( )=> {
    console.log(`Servidor esta escuchando en el puerto: ${PORT}`);

})

server.on('listening', () => {
    console.log('El servidor esta listo para recibir conexiones');
})

 server.on('error', (err) => {
        console.log(`Error al iniciar el servidor: ${err.message}`);
    })
    //PASO 6 evento close

server.on('close', () => {
        console.log('La conexion con el servidor se ha cerrado');
    })


