import { getUserById, getAsignacionByIds } from "./modulo.js";

let id = parseInt(prompt('Ingrese el id:'))

getUserById(id)
.then((user) => {
    // console.log(user)
    getAsignacionByIds(user.asignaciones)
})

