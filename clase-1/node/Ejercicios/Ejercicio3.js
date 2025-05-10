/*Ejercicio 3: Ordenando números
Crea una función que reciba un array de números y devuelva un nuevo
array con los números ordenados de menor a mayor.
Consigna:
• Usa el método sort().*/

let numeros = [5, 2, 9, 1, 7]; 

function ordenarNumeros(numeros){
  return  numeros.sort((a, b) => a - b)  //ordenamos de menor a mayor si la resta a-b es negativa a va antes de b
                                          //si es positiva b va antes de a y si es cero no cambia el orden
}

console.log(ordenarNumeros(numeros)); // devuelve 1,2,5,7,9