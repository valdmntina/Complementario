import { getUserById, getAsignacionByIds } from "./modulo.js";

let id = parseInt(prompt('Ingrese el id:'))

getUserById(id, function(error, user){
    if (error) {
        console.error(error)
    } else {
        getAsignacionByIds(user.asignaciones, function (asignacionesNombres){
            console.log(asignacionesNombres)
        })
    }
 });