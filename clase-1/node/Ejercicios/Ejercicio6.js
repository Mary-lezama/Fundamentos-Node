/*Ejercicio 6: Calculadora de promedio
Escribe una función que reciba un array de números y devuelva el
promedio.
Consigna:
• Usa un bucle for para sumar los números.
• Divide la suma total entre la cantidad de elementos del array.*/


let calificaciones = [50, 35, 68, 15, 72];

function calcularPromedio(numeros){
    let suma = 0
    
    for (let i = 0 ; i < numeros.length; i++){
        suma += numeros[i]; // establecemos los numeros de cada indice
}
 return suma / numeros.length; //retornamos el calculo del promedio

}

console.log(calcularPromedio(calificaciones)); // Devuelve 48