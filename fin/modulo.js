export const search = async (nombre) => {
    const response = await fetch(`127.0.0.1:3000/usuarios?nombre=${nombre}`);
    console.log(response)
    const usuario = await response.json();
    return usuario;
}