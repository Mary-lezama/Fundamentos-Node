/*Ejercicio 5: Detectar cuando el servidor cierra la conexión
 Consigna
Crea un cliente que:
1. Se conecte y envíe "¿Sigues ahí, servidor?".
2. Cuando el servidor cierre la conexión, muestre " Servidor cerró
la conexión".
 Pistas
• El evento 'end' se activa cuando el servidor finaliza la conexión*/

const net = require('net')
const readline = require('readline')

const rl = createInterface({
    imput: process.stdin,
    output: process.stdout
});

function enviarMensaje(){
    rl.question('Escribe un mensaje: ', (msg) => {
        if (msg === 'Salir') {
            client.end();
            rl.close();

        } else {
            client.write(msg);
            enviarMensaje();
        } 

    })
} 
client.on('connect', enviarMensaje);

const client = net.createConnection({port:3000,host:'localHost'}, () => {
    console.log('conexion con el servidor establecida')
    client.write('Sigues ahi, servidor?')
})

client.on('end', () => {
    console.log("Servidor cerro la conexión")
})


