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

   let listaTareas = fs.readFileSync('./tareas.json','utf-8');

   return listaTareas;

}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
    let tareasTmp = leerTareas(tarea); 
   
    let tareasDeArchivo = JSON.parse(tareasTmp);

    tareasDeArchivo.push(tarea);

    JSON.stringify(tareasDeArchivo);


}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
   let tareasTmp = leerTareas(tarea); 

   let tareasNuevas = tareasTmp.find( function (tarea) {
        return tarea.estado == estado;
   });

}