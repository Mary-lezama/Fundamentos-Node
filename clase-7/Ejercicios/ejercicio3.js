/*Ejercicio 3: Servidor de Mensajes Personalizados
Consigna:
Crea un servidor TCP que permita a los clientes enviar mensajes. El
servidor debe responder con un mensaje personalizado dependiendo
del contenido del mensaje recibido:
• Si el cliente envía "Hola", el servidor debe responder
"¡Bienvenido!".
• Si el cliente envía "Adiós", el servidor debe responder "¡Hasta
luego!" y cerrar la conexión.
• Para cualquier otro mensaje, el servidor debe responder "Mensaje
recibido: [mensaje del cliente]".
Requisitos:
• Usa el evento data para recibir y procesar los mensajes del cliente.
• Usa el método socket.write() para enviar respuestas personalizadas.
• Usa el método socket.end() para cerrar la conexión cuando el
cliente envíe "Adiós"*/

const { Socket } = require('dgram')
const net = require('net')

//servidor TCP

const server = net.createServer((Socket) => {
    console.log('Un cliente se ha conectado al servidor');
    
    Socket.on('data', (data) => {
        const mensaje = data.toString().strim();
        console.log(`Mensaje recibido: ${mensaje}`);
       
        if (mensaje === 'Hola') {
            socket.write('Bienvenido!');
        } else if( mensaje === 'Adiós') {
            socket.write('Hasta Luego');
            socket.end()
        } else { 
           socket.write(`Mensaje recibido: ${mensaje}`);
        }
    });

    socket.end('end',() => {
        console.log('El cliente se ha desconectado');
    })

})

//hacemos el evento conection

server.on('connection',(socket) => {
    console.log('Nueva conexion establecida');
})

//variable del puerto

const PORT = 3000

//Usamos el evento listen

server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
})

server.on('listening', () => {
    console.log('El servidor esta listo para recibir conexiones');
})
