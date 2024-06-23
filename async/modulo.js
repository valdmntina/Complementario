export async function usuarios () {
    let users = await fetch(`https://jsonplaceholder.typicode.com/users`)
    let list = await users.json();
    console.log(list)
    return list;
}

export async function post(id) {
    let users = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    let list = await users.json();
    console.log(list)
    return list;
}