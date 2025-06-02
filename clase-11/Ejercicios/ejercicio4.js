/*Ejercicio 4: Validación de Contraseña 
Crea un script que solicite al usuario una contraseña y la valide. Si la 
contraseña es "secreto123", muestra un mensaje de acceso concedido. 
De lo contrario, muestra un mensaje de acceso denegado*/

const readline = require('readline');
const script = readline.question('ingrese su contraseña')

const contraseña =  prompt(readline.question('su contraseña ingresada es: '))

console.log('la contraseña ingresada es secreto123')

