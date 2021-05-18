/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/

const leerTareas = require('./leerTareas');
const agregarTarea = require('./agregarTarea');
const filtrarTareasPorEstado = require('./filtrarTareasPorEstado');

// exports.leerTareas = function () {
//     /*
//         En esta función debes leer y retornar las tareas registradas.
//     */

//    let listaTareas = fs.readFileSync('./tareas.json','utf-8');

//    return listaTareas;

// }

leerTareas.leerTareas();
// exports.agregarTarea = function (tarea) {
//     /*
//         Registra y guarda una nueva tarea.
//     */
//     let tareasTmp = leerTareas(); 
    
//     let tareasDeArchivo = JSON.parse(tareasTmp);

//     tareasDeArchivo.push(tarea);

//     JSON.stringify(tareasDeArchivo);

// }

agregarTarea(tarea);


// exports.filtrarTareasPorEstado = function (estado) {
//     /*
//         En esta función debes de leer las tareas y retornar las que tengan el estado que se
//         manda en el parametro.
//     */
//    let tareasTmp = leerTareas(); 

//    let tareasNuevas = tareasTmp.find( function (tarea) {
//         return tarea.estado == estado;
//    });

// }

filtrarTareasPorEstado(estado);