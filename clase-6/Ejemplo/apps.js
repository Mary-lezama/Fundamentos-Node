/*Hoy vamos a crear juntas una “Aplicación básica para saludar al usuario y conocer su edad” 
Instrucciones
 1. Crea un archivo llamado apps.js en Visual Studio Code.
 2. Escribe un programa que haga lo siguiente:
 • Reciba el nombre del usuario desde la línea de comandos.
 • Use una variable de entorno para personalizar el saludo predeterminado.
 • Muestre información básica del entorno de ejecución:
 • El directorio actual desde donde se ejecuta el programa.
 • La plataforma del sistema operativo.
 • Use el módulo readline para preguntarle al usuario su edad.
 • Agradezca al usuario y termine de forma ordenada.
 3. Crea un archivo .env para configurar un saludo personalizado.*/


//Importacion

const readline = require('readline')

// carga de las variables de entorno desde el archivo .env

require('dotenv').config()

//establecemos el saludo predeterminado usando una varible de entorno

const saludoPredeterminado = process.env.SALUDO || "Hola"

//procesamos los argumentos de la linea de comando 
//capturamos el primer argumento despues del nombre del archivo como el nombre del usuario si no proporciona un 
//argumento usamos "Invitado"

const args = process.argv.slice(2)
const userName = args [0] || 'Invitado'

//mostramos el saludo personalizado y el nombre del usuario 

console.log(`${saludoPredeterminado}, ${userName}`);

//mostramos informacion sobre el entorno de ejecucion 
console.log('Informacion sobre el entorno de ejecucion: ');

//mostramos la direccion actual desde donde se ejecuta el programa 

console.log(`Directorio actual: ${process.cwd()}`);

//mostramos la plataforma actual donde se esjecuta el programa

console.log(`Plataforma: ${process.platform}`);

//creacion de la interface

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// usamos el metodo question de rl

rl.question('Cuantos anios tienes?',(edad) => {
    console.log(`Wow! ${edad} anios es una increible edad.`);
    rl.close()
})

//manejamos el evento close con el metodo on

rl.on('close', () =>{
    console.log('Gracias por usar este programa. Adios!');
    process.exit(0)
})


