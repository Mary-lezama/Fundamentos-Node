/*Ejercicio 2: El menú del día 🍽️
Escribe una función que reciba un objeto con platos y precios, y devuelva
los platos cuyo precio sea menor a $20.
Consigna:
• Usa un bucle for...in.
• Usa objetos y arrays.*/


//creamos el objeto
 let menu = {
    "parrilla": 60,
    "pasta": 15,
    "Arroz": 11,
    "Sopa": 21,
    "pescado": 9
}
// hacemos una funcion expresada
function platosBaratos(menu) {
   let platos = [] //array vacio donde entraran los platos que cumplen con la condicion

for(let plato in menu ) { // aplicamos for ... in, la variable plato en objeto menu
    if ( menu[plato] < 20){   // si el valor del plato del menu es menor a 20 
        platos.push(plato)      // agregar el plato del objeto al arrray platos[]
    }
}
    return platos; //retornamos el array de platos
}

console.log(platosBaratos(menu))  //invocammos la funcion(objeto) // devuelve: pasta, arroz, pescado