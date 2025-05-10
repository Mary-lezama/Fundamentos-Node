/*Ejercicio 4: Contando vocales 🅰️🅾️
Crea una función que reciba una cadena de texto y devuelva cuántas
vocales contiene.
Consigna:
• Usa un bucle for y condicionales.
• Considera vocales mayúsculas y minúsculas (a, e, i, o, u).*/

let texto = "Hola Mundo, todo bien?";

function contarVocales(texto){
    contador = 0;  // inicicializamos el contador
    let vocales = "aeiouAEIOU"; //especificamos con una cadena de texto las vocales
    for (let i = 0; i < texto.length; i++){ 
        if (vocales.includes(texto[i])){ // usamos el metodo includes con la variable vocales permitira devolver
            contador++;                   // la cantidad de vocales del texto
        }
    }
    return contador;
}

console.log(contarVocales(texto)); // devuelve 8