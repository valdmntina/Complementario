import { users, asignaciones } from "./datos.js"

export function getUserById(id) {
    return new Promise((ok, error) => {
        users.find (function (user) {
            if (user.id === id) ok(user)
        });
        
        if (!user) {
            error(`Usuario no encontrado para el id ${id}`)
        }
    });
}

export function getAsignacionByIds (ids, callback) {
    if (!ids) {
        return Promise.reject(`No tiene asignaciones`)
    }
    return new Promise ((ok, error) => {
        const respuesta = asignaciones.filter( (asignacion) => ids.includes(asignacion.id) ? true : false);
        if (respuesta.length > 0) {
            ok(respuesta)
        }
        error(`El usuario no tiene asignaciones`)
    });
}