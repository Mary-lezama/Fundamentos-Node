//IMPORTAR

const net = require('net')

//CREAMOS LA CONEXION TCP PARA QUE SE CONECTE AL SERVIDOR 

const client = net.createConnection({port:5000}, () => {
    console.log('Conectado al servidor!')
    client.write('Hola servidor :) ya me conecte')
})

//COMIENZO  A DEFINIR LOS EVENTOS

client.on('data', (data) => {
    console.log('Mensaje recibido', data.toString());
})

client.on('end', () => {
    console.log('El servidor se cerro');
})

client.on('error', (err) => {
    console.log('Error: ', err.message);
})

client.on('close', () => {
    console.log('Se cerro la conexion');
})

//JUGAMOS CON EL TIEMPO

client.setTimeout(10000)

client.on('timeout', () => {
    console.log('EL tiempor de espera se termino');
    client.end()
});

setTimeout(() => {
    console.log('Pausando la recepcion de datos...');
    client.pause()
},5000)

setTimeout(() => {
    console.log('Reaunudando la recepcion de datos...');
    client.resume()
},5000)

setTimeout(() => {
    console.log('Destruyendo la recepcion de datos...');
    client.destroy()
},3000)

setTimeout(() => {
    console.log('Destruyendo la recepcion de datos...');
    client.unref()
},2000)

setTimeout(() => {
    console.log('Destruyendo la recepcion de datos...');
    client.ref()
},3000)