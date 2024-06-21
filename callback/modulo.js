import { users, asignaciones } from "./datos";

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
    console.log(ids)
    const respuesta = asignaciones.filter( (x, ids) => {
        console.log(ids)
    });
    // const asignacion = asignaciones.find(function (asignacion) {
    //     return asignac.id == id;
    // });
    // if (!asignacion) {
    //     return callback(`asignacion no encontrada para el id ${id}`)
    // }
    // return callback(null, asignacion)
}