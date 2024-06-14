function suma(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n 
    });
    return resultado;
}

console.log(suma(5, 5))
console.log(suma(5, 5, 1, 2, 3, 4))

const arreglo1 = [1, 5, 9, 12];
const arreglo2 = [1, 5, 9, 12];

console.log(arreglo1, arreglo2)

// letters.concat(arreglo1, arreglo2)

const ab = arreglo1.concat(arreglo2)
console.log(ab)

const abc = [... arreglo1, ...arreglo2]
console.log(abc)
