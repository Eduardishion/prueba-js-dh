/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/


const fs = require('fs');


exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
   
   //apertura de de archivo  
   let listaTareasEnArchivoJson = fs.readFileSync('./tareas.json','utf-8');

   //conversion de cadena json a arraglo
   let arregloTareas = JSON.parse(listaTareasEnArchivoJson);

   //retornando vector
   return arregloTareas;
   
}


exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.  
    */
    
    //apertura de de archivo  
   let listaTareasEnArchivoJson = fs.readFileSync('./tareas.json','utf-8');
    
    //conversion de cadena json a arraglo
   let arregloTareas = JSON.parse(listaTareasEnArchivoJson);

    //agregado de nueva tarea
   arregloTareas.push(tarea);

    //convercion de arregloTareas a cadena json 
    let cadenaJson = JSON.stringify(arregloTareas);

    //escritura de archivo json con cadenaJson
    fs.writeFileSync('./tareas.json', cadenaJson);

}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
   
   //apertura de de archivo  
   let listaTareasEnArchivoJson = fs.readFileSync('./tareas.json','utf-8');
   //conversion de cadena json a arraglo
   let arregloTareas = JSON.parse(listaTareasEnArchivoJson);
   //filtrado de datos
   let objetosFiltrados = arregloTareas.filter(tarea=> tarea.status == estado )


   return objetosFiltrados;

}


