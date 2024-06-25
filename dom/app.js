// objeto padre en el navegador
let win = window;
let dom = document;

const $header = document.querySelector('header');
const $div = document.querySelector('div');
const $divs = document.querySelectorAll('div');
const $main = dom.querySelector('main');
const $div_item = dom.querySelectorAll('main > div.item');
// const $item = dom.getElementsByClassName('.item')
const $item = dom.querySelectorAll('.item')
const $id = dom.getElementById('item')
const $_id = dom.querySelector('#item')
const $img = dom.querySelector('img')
const $form = dom.querySelector('form')


console.log(win)
console.log(dom)
console.log(dom.doctype)
console.log(dom.head)
console.log(dom.title)
console.log(dom.body)
console.log(dom.styleSheets)
console.log(dom.header)

console.log($header)
console.log($div)
console.log($divs)


$divs.forEach((div, a) => {
    // div.textContent = `item a ${++a}`
});


const arregloA = [...$divs]
console.log(...$divs)
 
// $divs.map((a) =>  {
//     console.log(a)
// });

console.log($main.childNodes)
console.log($main.childElementCount)
console.log($main.firstElementChild)
console.log($main.lastElementChild)
console.log($main.parentElement)
console.log($main.previousElementSibling)
console.log($main.nextElementSibling)

console.log($img)
$img.setAttribute('src', 'https://picsum.photos/200/300')
$img.textContent = "imagen x"

// console.log($img.classList)
// $img.classList.add('block')
// $img.classList.remove('block')
// $img.classList.toggle('block')


$img.classList.add('block', 'box')


// console.log($div_item)
// console.log($item)
// console.log($id)
// console.log($_id)


// $_id.textContent = "Otra palabra"
// $_id.innerHTML = "<p> <b>Otra</b> palabra</p>"

$form.firstElementChild.setAttribute('type', 'file')
$form.setAttribute('encytpe', 'multipart/form-data')