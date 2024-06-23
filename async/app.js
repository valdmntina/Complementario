// async function cuadrado(value) {
//     if (typeof value !== "number") {
//         return Promise.reject(`Cuidado, el valor ${value} no es un numero`)
//     }
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve ({
//                 value: value,
//                 result: value * value
//             });
//         }, 2000)
//     });
//     let resultado = await promise;
//     return(resultado)
// }

// cuadrado(2)
// .then((obj) => {
//     console.log(obj)
// })

import { usuarios, post } from "./modulo.js"

const $section = document.querySelector("section")
const $div = document.createElement("div")

$section.appendChild($div)
console.log($section)

usuarios()
.then((lista) => {
    lista.map((user) => {
        const $div = document.createElement("div");
        const $a = document.createElement("a");
        const $ul = document.createElement("ul");
        const $span = document.createElement("span")

        $a.setAttribute("href", "#");
        $a.classList.add("enlace");
        $a.textContent = user.name;
        $ul.textContent = user.username;
        $span.textContent = user.company;

        $div.classList.add("item");
        $div.appendChild($a);
        $div.appendChild($ul)

        $section.appendChild($div);
        post(user.id)
        .then((posts) => {
            // console.log(posts)
        })
    })
})

// console.log(list)