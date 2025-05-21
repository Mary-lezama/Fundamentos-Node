/*Ejercicio 1: Conectar y enviar un mensaje al servidor
 Consigna
Crea un cliente TCP que:
1. Se conecte a un servidor en localhost:5000.
2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola,
servidor!".
3. Escuche los datos recibidos y los muestre en consola.
 Pistas
• Usa net.createConnection() para conectar al servidor.
• Maneja el evento 'connect' para saber cuándo la conexión está
lista.
• Usa client.write() para enviar el mensaje.
• Captura los datos con el evento 'data'.

Ejercicio 2: Implementar un timeout en la conexión
 Consigna
Modifica el cliente del Ejercicio 1 para que:
1. Si después de 5 segundos no ha recibido una respuesta, cierre la
conexión.
2. Muestre " Tiempo de espera agotado" en la consola antes de
cerrar.
 Pistas
• Usa client.setTimeout() con 5000 milisegundos.
• Cuando el timeout ocurra, usa client.end() para cerrar la conexión.*/

// Importamos el modulo net

const net = require('net');

//hacemos la configuracion de port y el host

const PORT = 5000
const HOST = 'localHost'

//creamos la conexion 

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Se ha conectado al servidor')
    client.write('HOLA SERVIDOR!')

    client.setTimeout(5000, () => {
        console.log('Tiempo de espera agotado')
    })
    client.end()
})


//creamos el evento data 
 client.on('data', (data) => {
        console.log('Datos recibidos', data.toString());
})

//evento end

client.on('end',()=> {
    console.log('La conexion con el servidor se cerro')
})

client.on('error', (err) => {
    console.log('Error en la conexion', err.message)
})