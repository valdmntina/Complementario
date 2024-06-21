import { users, asignaciones } from "./datos.js";

export function getUserById(id, callback) {
    const user = users.find(function (user) {
        return user.id == id;
    });
    if (!user) {
        return callback(`usuario no encontrado para el id ${id}`)
    }
    return callback(null, user)
}

export function getAsignacionByIds (ids, callback) {
    const respuesta = asignaciones.filter( (asignacion) => ids.includes(asignacion.id) ? true : false);
    callback(null, respuesta)
}


    
    
    // console.log(asignacion.id)
    // console.log(ids)
    // callback()
    
    // console.log(asignacion)
    // if (ids.includes(indice)) return true
    // callback(respuesta)
    // console.log(indice)
    // console.log(arreglo)
    
    // const asignacion = asignaciones.find(function (asignacion) {
    //     return asignac.id == id;
    // });
    // if (!asignacion) {
    //     return callback(`asignacion no encontrada para el id ${id}`)
    // }
    // return callback(null, asignacion)
