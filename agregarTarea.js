
const leerTareas = require('./leerTareas');
const fs = require('fs');

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.  
    */
    let tareasTmp = leerTareas.leerTareas(); 
    
    //console.log(typeof(tareasTmp));

    let tareasDeArchivo = JSON.parse(tareasTmp);

    //console.log(typeof(tareasDeArchivo));
    tareasDeArchivo.push(tarea);

    let nuevoDato = JSON.stringify(tareasDeArchivo);

    fs.writeFileSync('./tareas.json', nuevoDato);

}