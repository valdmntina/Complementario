const users = [
    {
        id: 1,
        nombre: 'Valentina Duque'
    },
    {
        id: 2,
        nombre: 'Donkanzzz'
    },
    {
        id: 3,
        nombre: 'Santiago Colmenares'
    },
    {
        id: 4,
        nombre: 'Claudia Lopez'
    }
];

export function getUserById(id, callback) {
    const user = users.find(function (user) {
        return user.id == id;
    });
    if (!user) {
        return callback(`usuario no encontrado para el id ${id}`)
    }
    return callback(null, user)
}