import { getUserById } from "./modulo.js";

let id = parseInt(prompt('Ingrese el id:'))

getUserById(id, function(error, user){
    if (error) {
        alert(error)
    } else {
        alert(`El usuario es ${user.nombre}`)
    }
 });