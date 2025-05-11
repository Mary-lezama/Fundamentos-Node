/*En estudiantes.js: 
o Crea un array de objetos que represente una lista de 
estudiantes. Cada estudiante debe tener las propiedades: nombre, edad, 
curso y notas (un array de números). 
o Exporta este array usando module.exports. */

let estudiantes = [
   { nombre : "maria",
    edad : 15,
    curso : "deporte",
    notas : ["2","1","1"]
   },
   {
    nombre : "Luisa",
    edad : 14,
    curso : "arte",
    notas : ["2","1","4"]
   },
   {
    nombre : "luis",
    edad : 17,
    curso : "filosofia",
    notas : ["2","1","5"]
   }
];

module.exports = estudiantes;