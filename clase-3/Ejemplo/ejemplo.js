/* CONSIGNA
Vamos a crear una app basica en Node.js para gestionar una lista de tareas 
Usaremos modulo nativo como fs y trabajaremos con JSON  para almacenar
El objetivo es que aprendan a leer y escribir en archivos, usar rutas relativas y absolutas
y trabajar con datos JSON en Node.js

PASOS A SEGUIR
1. Inicializar un proyecto con npm init (opcional)
2 Crear un archivo 'tareas.json' para almacenar las tareas 
3. Desarrollar un script que permita:
   -listar las tareas
   -agregar una nueva tarea*/

   //paso 1 importamos el modulo fs

   const fs = require('fs')

   //paso2 definimos la ruta del archivo tareas.json
    
   const filepath = './tareas.json'

   //paso3 leemos los argumentos pasados desde la linea de comandos 

   const args = process.argv.slice(2)
   const comando = args[0] // primer argumento : el comando ejecutar
   const descripcion = args.slice(1).join(' ') //el resto de los argumentos:la descripcion de la tarea 

   // paso 4 funcion para leer el archivo json y devolver las tareas 
   const leerTareas = () => {
      const contenido = fs.readFileSync(filepath, 'utf-8') //leer el archivo de tareas.json
      return JSON.parse(contenido) //convertir el contenido json a un array de tareas
   }

   // paso 5 funcion para escribir tareas en el archivo json

   const escribirTareas = (tareas) => {
      const json = JSON.stringify(tareas, null, 2) //para convertir el array de tareas en formato json
      fs.writeFileSync(filepath, json, 'utf-8')//para guardar el json en el archivo 
   }

   //paso 6 funcion para agregar una tarea
    
   const agregarTarea = (descripcion) => {
      const tareas = leerTareas() //leer tareas actuales 
      tareas.push({ id: tareas.length + 1, descripcion, completada: false }) //agregar una nueva tarea
      escribirTareas(tareas)//guardar las tareas ya actualizadas
      console.log('Tarea agregada: ', descripcion);
   }

   //paso 7 funcion para listar todas las tareas 

   const listarTareas = () => {
     const tareas = leerTareas() //leer tareas actuales
     console.log('Lista de tareas: ');
     tareas.forEach((tarea) => {
      const estado = tarea.completada ? 'si esta completada' : 'no esta completada' //mostrar si la tarea esta completada
      console.log(`${tarea.id}.${tarea.descripcion} - ${estado}`);
        });
   }

   //paso 8 funcio para marcar la tarea como completada

   const completarTarea = (id) => {
      const tareas = leerTareas() //leemos las tareas actuales
      const tarea = tareas.find((t) => t.id === parseInt(id))//buscar la tarea por id
      if (tarea){
         tarea.completada = true //marca la tarea como completada
         escribirTareas(tareas) // guardar las tareas actualizadas
         console.log('Tarea compleata: ', tarea.descripcion);
      } else {
         console.log('Tarea no encontrada');
      }
   }

   //paso 9 manejo de comandos

   if (comando === 'agregar') {
      agregarTarea(descripcion)
   } else if (comando === 'listar') {
      listarTareas()
   } else if (comando === 'completar') {
      completarTarea(descripcion)
   }else {
      console.log('comando no reconocido. Usar: "agregar", "listar" o "completar"');
   }
   