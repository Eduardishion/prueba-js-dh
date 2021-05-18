exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
   let tareasTmp = leerTareas(); 

   let tareasNuevas = tareasTmp.find( function (tarea) {
        return tarea.estado == estado;
   });

}