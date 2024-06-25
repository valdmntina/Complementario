"use strict"
const $root = document.querySelector('#root');
const $fragmento = document.createDocumentFragment();

const lista = [
    {
        id: 1,
        titulo: "Titulo 1",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam.",
        src: "https://picsum.photos/200"
    },
    {
        id: 1,
        titulo: "Titulo 2",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam.",
        src: "https://picsum.photos/200"
    },
    {
        id: 1,
        titulo: "Titulo 3",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam.",
        src: "https://picsum.photos/200"
    },
    {
        id: 1,
        titulo: "Titulo 4",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam.",
        src: "https://picsum.photos/200"
    }
]

lista.forEach((elemento) => {
    const $div = document.createElement('div');
    const $h1 = document.createElement('h1')
    const $p = document.createElement('p')
    const $img = document.createElement('img')

    $h1.textContent = elemento.titulo
    $img.setAttribute('src', elemento.src)
    $p.textContent = elemento.texto

    $div.appendChild($h1)
    $div.appendChild($img)
    $div.appendChild($p)

    $div.classList.add('card')
    $div.textContent = "Contenido del div"
    $fragmento.appendChild($div)
})

$div.appendChild($fragmento)

