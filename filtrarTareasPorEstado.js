const leerTareas = require('./leerTareas');

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
   
   let listaTareas = leerTareas.leerTareas(); 
   let arreglo = JSON.parse(listaTareas);
   console.log(arreglo.filter(tarea=> tarea.status == estado ));

}