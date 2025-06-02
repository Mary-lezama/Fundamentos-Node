/*Ejercicio 3: Calculadora Simple 
Crea un script en Node.js que utilice readline-sync para solicitar al 
usuario dos números y una operación (suma, resta, multiplicación o 
división). Luego, muestra el resultado de la operación seleccionada. */

const readline = require('readline-sync');

// Solicitar los dos números al usuario
let numero1 = parseFloat(readline.question('Introduce el primer numero: '));
let numero2 = parseFloat(readline.question('Introduce el segundo numero: '));

// Solicitar la operación al usuario
let operacion = readline.question('Que operacion deseas realizar? (suma, resta, multiplicacion, division): ');

// Función para calcular el resultado
function calcular(num1, num2, op) {
    switch (op.toLowerCase()) {
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2;
        case 'division':
            if (num2 === 0) {
                return 'Error: no se puede dividir por cero.';
            }
            return num1 / num2;
        default:
            return 'Operación no válida.';
    }
}

// Mostrar el resultado
let resultado = calcular(numero1, numero2, operacion);
console.log(`Resultado: ${resultado}`);