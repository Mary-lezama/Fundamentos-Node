/*Ejercicio 1: Creación y Manipulación de un Objeto JSON 
1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada 
clase2.  
2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.  
3.En este archivo, crea un objeto JSON que represente un libro. El objeto 
debe tener las siguientes propiedades: titulo, autor, año, genero (puede 
ser un array de géneros). 
Instrucciones: 
• Muestra en la consola el título y el autor del libro. 
• Actualiza el año del libro a un valor más reciente. 
• Añade una nueva propiedad llamada páginas que indique el número 
de páginas del libro. 
• Muestra el objeto actualizado en la consola.*/


let libro = {
    "titulo" : "Crepusculo",
    "autor" : "Marta Lara",
    "anio" : "1990",
    "genero" : ["romance","suspenso","ficcion"]

};
console.log("Título: ", libro.titulo);
console.log ('Autor: ', libro.autor);

//Actualiza el año del libro a un valor más reciente. 

libro.anio = 2025;

// Añade una nueva propiedad llamada páginas que indique el número de páginas del libro. 

libro.paginas = 150

//Muestra el objeto actualizado en la consola

console.log("Objeto Actualizado", libro);