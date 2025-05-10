/*Ejercicio 5: Generador de iniciales 🅰️
Escribe una función que reciba un nombre completo y devuelva las
iniciales en mayúsculas.
Consigna:
• Usa el método split() para dividir el nombre.
• Usa un bucle for y métodos de string.*/

let nombre = "juan perez gomez salazar"

function generarIniciales(nombreCompleto) {
  let palabras = nombreCompleto.split(" "); //Separamos las palabras 
  let iniciales = "";  // creamos un string vacio donde estara las iniciales

    for (let i = 0; i < palabras.length; i++ ){  
        iniciales += palabras[i][0].toUpperCase(); 
    }
    return iniciales;  //retornamos las iniciales 
}
console.log(generarIniciales(nombre)); // devuelve JPGS 