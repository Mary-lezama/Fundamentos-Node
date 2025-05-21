/*Ejercicio 3: Pausar y reanudar la recepción de datos
 Consigna
Crea un cliente TCP que:
1. Reciba mensajes continuamente del servidor.
2. Al recibir el primer mensaje, pause la recepción durante 3
segundos.
3. Luego de los 3 segundos, reanude la recepción y siga mostrando
los mensajes.
 Pistas
• Usa client.pause() y client.resume().
• Un setTimeout() puede ayudarte a reanudar después de 3
segundos.*/

const net = require('net')

const client = net.createConnection({port:3000, host:'localHost'}, ()=>{
    console.log('Conexion con el servidor establecida')
    client.write('Bienvenido al servidor')
    
    client.setTimeout(3000, () => {
        console.log('El tiempo de espera a expirado')
    });

    setTimeout(() => {
        console.log('Pausando la recepcion de datos');
        client.pause()

        setTimeout(() => {
        console.log('Reanudando la recepcion de datos');
        client.resume()
    })
    })


});

/*Ejercicio 4: Manejo de errores en la conexión
 Consigna
Modifica el cliente para que:
1. Si ocurre un error (como un servidor no disponible), lo detecte y lo
muestre con " Error: [mensaje]".
2. Si la conexión se cierra inesperadamente, muestre " Conexión
cerrada inesperadamente".
 Pistas
• Usa client.on('error', callback) para manejar errores.
• Usa client.on('close', callback) para detectar cierres.*/

const mensaje = 'Falla en la conexion'
const mensajeDos = 'Conexion cerrada inesperadamente'

client.on('error', (err) => {
    console.log(`Error: ${mensaje}`)
})

client.on('close', () => {
    console.log(mensajeDos)
})

/*Ejercicio 5: Detectar cuando el servidor cierra la conexión
 Consigna
Crea un cliente que:
1. Se conecte y envíe "¿Sigues ahí, servidor?".
2. Cuando el servidor cierre la conexión, muestre " Servidor cerró
la conexión".
 Pistas
• El evento 'end' se activa cuando el servidor finaliza la conexión*/

