/*Hoy tienen frente a ustedes una serie de ejercicios que les ayudarán a 
poner en práctica todo lo aprendido en clase sobre Node.js.          
Estos ejercicios están diseñados para reforzar conceptos clave como: 
•    El objeto global process y cómo usarlo. 
•                  El manejo de variables de entorno para personalizar 
aplicaciones. 
•    La interacción con el usuario mediante el módulo readline. 
•    Métodos para obtener información del entorno donde se 
ejecuta Node.js. 
Cada ejercicio está pensado para que puedan aprender de manera 
progresiva, construyendo confianza y consolidando lo que vimos en 
clase. ¡Recuerden que la práctica es la clave del éxito!     
Conceptos Fundamentales 
1. El objeto process: 
o process.argv: Recibe argumentos de la línea de comandos. 
o process.env: Accede a variables de entorno configuradas en 
un archivo .env. 
o process.cwd() y process.platform: Muestran información del 
entorno. 
2. Archivo .env: 
o Crear un archivo llamado .env. 
o Escribir variables en formato CLAVE=valor. 
o Cargar con: 
require('dotenv').config(); 
console.log(process.env.CLAVE); 
3. El módulo readline: 
o Crear una interfaz interactiva con el usuario. 
o Preguntar datos con rl.question y manejar eventos como 
rl.close. 
EJERCITACION: 
Ejercicio 1: ¡Personaliza tu saludo con Node.js! 
Consigna: 
En este ejercicio, crearás un programa que salude al usuario. El saludo 
será personalizado y dependerá de dos cosas: 
1. Una variable de entorno llamada GREETING que define el tipo de 
saludo (por ejemplo, "Hola", "Bienvenido" o "¡Buenos días!"). 
2. El nombre del usuario, que se obtendrá como argumento desde la 
línea de comandos. 
Si no se proporciona un saludo en las variables de entorno o un nombre 
en la línea de comandos, el programa usará valores predeterminados. 
El objetivo de este ejercicio es que practiques cómo usar el objeto 
process en Node.js, tanto para acceder a variables de entorno como para 
manejar argumentos de línea de comandos. 
Indicaciones: 
1. Crea un archivo llamado app.js donde escribirás el código. 
2. Usa el paquete dotenv para cargar las variables de entorno desde 
un archivo .env. 
3. Configura un saludo predeterminado en el archivo .env con la 
clave GREETING. 
4. Si el usuario no proporciona un nombre, el programa debe usar 
"Invitado" como nombre por defecto. 
5. Ejecuta el programa desde la terminal y verifica los diferentes 
resultados al cambiar las variables de entorno y los argumentos. 
Ejercicio 2: Descubre tu entorno de trabajo 
Consigna: 
En este ejercicio, escribirás un programa que muestre información útil 
sobre el entorno donde se está ejecutando el programa. Este ejercicio te 
ayudará a practicar los métodos del objeto process en Node.js. 
Requisitos del programa: 
1. Debe mostrar la plataforma del sistema operativo (Linux, macOS o 
Windows). 
2. Debe mostrar el directorio actual desde donde se ejecuta el 
programa. 
3. Usa los métodos process.platform y process.cwd() para obtener 
esta información. 
Indicaciones: 
1. Crea un archivo llamado app.js. 
2. Escribe un programa que imprima en la consola la plataforma y el 
directorio actual. 
3. Ejecuta el programa desde la terminal y verifica los resultados. 
Ejercicio 3: ¡Sumemos dos números! 
Consigna: 
Tu tarea es escribir un programa interactivo que permita al usuario 
ingresar dos números y calcule su suma. Este ejercicio te ayudará a 
practicar el uso del módulo readline para leer entradas del usuario en la 
consola. 
Requisitos del programa: 
1. Usa el módulo readline para crear una interfaz interactiva. 
2. Pide al usuario que ingrese dos números, uno a la vez. 
3. Calcula y muestra la suma de los dos números. 
4. Finaliza el programa con un mensaje de agradecimiento. 
Indicaciones: 
1. Crea un archivo llamado app.js. 
2. Usa readline.createInterface para manejar la entrada y salida del 
usuario. 
3. Utiliza callbacks para procesar las respuestas del usuario. 
4. Ejecuta el programa y prueba ingresando diferentes valores. 
Ejercicio 4: Mensaje de despedida personalizado 
Consigna: 
Crea un programa interactivo que pregunte al usuario su nombre y lo 
use en un mensaje de despedida. Usa variables de entorno para 
personalizar el saludo inicial. 
Requisitos del programa: 
1. Usa una variable de entorno llamada START_MESSAGE para 
configurar el saludo inicial. 
2. Usa readline para preguntar el nombre del usuario. 
3. Despídete del usuario con un mensaje personalizado. 
Ejercicio 5: Convierte temperaturas como un profesional 
Consigna: 
Crea un programa interactivo que permita convertir temperaturas de 
grados Celsius a Fahrenheit. Este ejercicio te ayudará a practicar el uso 
del módulo readline para manejar entradas del usuario y aplicar cálculos 
básicos. Además, incluye un mensaje personalizado de bienvenida 
configurado a través de variables de entorno. 
Requisitos del programa: 
1. Usa una variable de entorno llamada WELCOME_MESSAGE para 
mostrar un mensaje inicial. Si no se define, usa "¡Bienvenido al 
conversor de temperaturas!" por defecto. 
2. Usa el módulo readline para solicitar al usuario una temperatura en 
grados Celsius. 
3. Calcula la conversión a Fahrenheit usando la fórmula:  
(Se pueden ayudar buscando como es la fórmula en código en 
internet) 
4. Muestra el resultado en la consola. 
5. Despídete del usuario al final. 
Indicaciones: 
1. Crea un archivo llamado app.js para el código. 
2. Usa dotenv para cargar el mensaje de bienvenida desde el archivo 
.env. 
3. Configura la interfaz con readline y calcula la conversión. 
4. Ejecuta el programa y prueba ingresando diferentes valores de 
temperatura. 
Ejercicio 6 (Extra): Explora métodos de readline 
Consigna: 
Este ejercicio te permitirá explorar algunos métodos adicionales del 
módulo readline, como rl.setPrompt() y el evento 'line'. Escribe un 
programa interactivo que solicite varias palabras al usuario y las muestre 
en mayúsculas. El programa finalizará cuando el usuario escriba "salir". 
Requisitos del programa: 
1. Usa rl.setPrompt() para personalizar el mensaje que se muestra al 
usuario. 
2. Usa el evento 'line' para procesar cada palabra que el usuario 
ingrese. 
3. Si el usuario escribe "salir", el programa debe despedirse y finalizar. 
Indicaciones: 
1. Crea un archivo llamado app.js para el código. 
2. Configura la interfaz de readline y procesa las entradas del usuario. 
3. Usa el evento 'line' para manejar cada palabra ingresada.*/