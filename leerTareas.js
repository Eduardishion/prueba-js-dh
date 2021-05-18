const fs = require('fs');

exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */

   let listaTareas = fs.readFileSync('./tareas.json','utf-8');
   return listaTareas;

}