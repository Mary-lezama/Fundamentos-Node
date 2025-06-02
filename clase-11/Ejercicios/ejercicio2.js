/*Crea un script de Node.js que muestre un menú de opciones usando 
readline-sync. El menú debe permitir al usuario elegir entre tres acciones: 
ver un mensaje de bienvenida, generar un hash de un texto, o salir. */


const readlineSync = require('readline-sync');
const crypto = require('crypto');

do function mostrarMenu() {
  console.log('\n--- Menú de Opciones ---');
  console.log('1. Ver mensaje de bienvenida');
  console.log('2. Generar hash de un texto');
  console.log('3. Salir');
  let salir = false;
}

while (!salir) {
  mostrarMenu();
  const opcion = readlineSync.question('Por favor, ingresa el número de la opción que deseas: ');

  switch (opcion) {
    case '1':
      console.log('¡Bienvenido! Espero que tengas un excelente día.');
      break;
    case '2':
      const texto = readlineSync.question('Ingresa el texto que deseas hashear: ');
      const hash = crypto.createHash('sha256').update(texto).digest('hex');
      console.log(`El hash SHA-256 del texto es: ${hash}`);
      break;
    case '3':
      console.log('¡Hasta luego!');
      salir = true;
      break;
    default:
      console.log('Opción no válida. Por favor, intenta nuevamente.');
  }
}