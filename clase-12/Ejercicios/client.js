/*cliente*/

const net = require('net')


const client = net.createConnection({port:8080},() => {
    console.log('conectado al servidor');
    client.write("/home/user/documents/probando.txt")
});



    client.on('data', (data) => {
        console.log(`dato recibidos del servidor: ${data.toString()}`)
       //client.end();
    });

    client.on('end', () => {
        console.log('Seccion finalizada')
});