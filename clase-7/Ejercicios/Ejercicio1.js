/*Ejercicio 1: Servidor de Eco
Consigna:
Crea un servidor TCP que actúe como un servidor de eco. Cuando un
cliente se conecte, el servidor debe recibir los datos enviados por el
cliente y devolverlos exactamente igual (hacer un "eco"). Además, el
servidor debe imprimir en la consola cada vez que un cliente se conecta,
desconecta o envía datos.
Requisitos:
• Usa el evento connection para detectar nuevas conexiones.
• Usa el evento data para recibir datos del cliente.
• Usa el método socket.write() para enviar los datos de vuelta al
cliente.
• Usa los eventos end y close para manejar la desconexión del
cliente.
*/

// PASO 1 Importacion del net

const net = require('net')

//PASO 2 Creacion del servidor TCP

const server = net.createServer((socket) => {
    console.log('El cliente se ha conectado al servidor')

    //Hacemos el evento data
    socket.on('data',(data) => {
        console.log(`Datos recibidos del cliente: ${data.toString()}`);
        socket.write(data)
    })

    socket.on('end', () => {
        console.log('El cliente cerro la conexion exitosamente');
    })

    socket.on('close', () => {
        console.log('La conexion con el cliente se ha cerrado')
    })

})


server.on('connection', (socket) => {
    console.log('Nueva conexion establecida')
})

const PORT = 4000

server.listen(PORT,() => {
    console.log(`El servidor esta escuchando el puerto: ${PORT}`);
})

server.on('listening', () => {
    console.log('El servidor esta listo para recibir conexiones');
})

