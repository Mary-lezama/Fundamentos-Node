/*Ejercicio 1: ¿Quién puede entrar al parque?

Tienes un parque de diversiones que permite la entrada a personas
mayores de 12 años y menores de 60. Escribe una función que reciba una
lista de edades y devuelva cuántas personas pueden entrar al parque.

Consigna:
• Usa un bucle for y condicionales.
• Usa un array como entrada de la función.
• Devuelve el número de personas que cumplen con los requisitos.*/

let edades = [10, 15, 35, 65, 12, 59];

function entradaAutorizada(edades){
    let contador = 0;
    for( let i = 0; i < edades.length; i++) { //ciclo for
        if(edades[i] > 12 && edades[i] < 60){ //si modificamos esta condicion colocando 11 arroja resultado de 4 
            contador++;           // modificador del contador            
        }
    }
    return contador;
}
console.log('Personas autorizadas a entrar: ' + entradaAutorizada(edades)); //Arroja 3 es decir 15,35 y 59