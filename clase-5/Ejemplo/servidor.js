/*Hoy vamos a crear juntas un servidor TCP básico. 
Este servidor estará listo para escuchar conexiones desde otros programas (los 
"clientes") y mostrar en pantalla cualquier dato que reciba. 
Aún no nos enfocaremos en los clientes, solo en construir el servidor.
 Objetivo:
 • Configurar un servidor TCP que:
 1. Escuche en el puerto 4000.
 2. Detecte cuando alguien se conecta.
 3. Muestre en la consola cualquier mensaje que reciba.*/

 // importamos el modulo net

 const { Socket } = require('dgram')
const net = require('net') //permite trabajar con servidores TCP

 //Creamos el servidor

 const server = net.createServer((Socket) => {
    console.log('Un cliente se ha conectado'); //mensaje que aparece cuando un cliente se conecta al servidor

    //escuchamos el EVENTO DATA, que se activa cuando el cliente envia datos al servidor
    socket.on('data',(data) => {
        //mostramos en la consola el mnj recibido  del cliente
        console.log("Mensaje recibido: ", data.toString());
    })

     //escuchamos el EVENTO END , que se activa cuando el cliente se desconecta del servidor 
     socket.on('end',() => {
        //mostramos en la consola el mnj indicando que el cliente se desconecto
        console.log("El cliente se ha desconectado");
    })

})

// Definimos el puerto en el que el servidor estara escuchando 

const PORT = 4000;

// Inicio el servidor y lo ponemos a escuchar en el puerto que le pasamos 

server.listen(PORT, () => {
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
})
