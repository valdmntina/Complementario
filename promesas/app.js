function cuadradoPromesa(value) {
    if (typeof value !== 'number'){
        return Promise.reject("Cuidado, el valor ingresado no es un número");
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value: value,
                result: value * value
            });
        }, 3000);
    }) 
}

cuadradoPromesa(2)
.then((obj) => {
    console.log(`Promesa con valor ${obj.value} y con resultado ${obj.result}`);
    return cuadradoPromesa(obj.result)
}).then((obj) => {
    console.log(`Promesa con valor ${obj.value} y con resultado ${obj.result}`);
    return cuadradoPromesa(obj.result)
}).then((obj) => {
    console.log(`Promesa con valor ${obj.value} y con resultado ${obj.result}`);
    return cuadradoPromesa(obj.result)
})
.catch((e) => {
    console.log(e)
});

