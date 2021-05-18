exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
    let tareasTmp = leerTareas(); 
    
    let tareasDeArchivo = JSON.parse(tareasTmp);

    tareasDeArchivo.push(tarea);

    JSON.stringify(tareasDeArchivo);

}