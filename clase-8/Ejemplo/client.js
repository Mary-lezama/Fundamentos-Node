// Hacer un cliente basico:

// Importamos el modulo net

const net  = require('net');

//configuaracion de la conexion 

const PORT = 5000

const HOST = 'localHost'

//creamos la conexion al servidor 

const client = net.createConnection({port:PORT, host: HOST}, () => {
    console.log('Conectado al servidor');

    client.write('Hola, señor servidor :)')
    
    // Establecemos un timeout de 1000ms
    client.setTimeout(1000);

    });

    // Evento para manejar timeout
client.on('timeout', () => {
    console.log('Tiempo de espera alcanzado, cerrando conexión...');
    client.end();
});

// Evento para recibir datos
client.on('data', (data) => {
    console.log('Datos recibidos por el servidor', data.toString());

})

client.on('end', () => {
    console.log('El servidor cerro la conexion');
})

client.on('error', (err) => {
    console.log('Error en la conexion', err.message);
})

client.on('close', () => {
    console.log('conexion cerrada');
})


// Para pausar y reanudar la recepción de datos
setTimeout(() => {
    console.log('Pausando la recepción de datos...');
    client.pause();

    setTimeout(() => {
        console.log('Reanudando la recepción de datos...');
        client.resume();
        client.write('Otro mensaje después de reanudar');
    }, 3000);
}, 2000);

// Para destruir el socket después de 1500ms
setTimeout(() => {
    console.log('Destruyendo el socket...');
    client.destroy();
}, 1500);

