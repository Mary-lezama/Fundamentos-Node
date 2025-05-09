// Importacion de fs

var fs = require('fs') //cammonjs

//configuramos una variable de nombre datos, que contenga los datos a persistir en el archivo 

datos = "Ejemplo de datos que podemos escribir en un archivo"

//utilizacion del modulo fs

fs.writeFile('archivo.txt', datos,function (err) {
    if (!err) {
        console.log('Los datos han sido escritos a archivo.txt');
    } else {
        throw err
    }
})

