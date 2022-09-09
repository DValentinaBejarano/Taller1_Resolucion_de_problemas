//Interfaz
let toggle = document.querySelector('.toggle')
let navigation = document.querySelector('.navigation')
let main = document.querySelector('.main')

toggle.onclick=function(){
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}

let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('hovered'))
    this.classList.add('hovered')
}
list.forEach((item)=>
item.addEventListener('mouseover', activeLink))

//Sección ejercicios
//1. Longitud palabra 
let tamaño = document.getElementById('longitud');

tamaño.addEventListener('click', function()
{
    let palabra = document.getElementById('enunciado').value;
    alert(`La palabra que usted ingreso es: ${palabra} y la longitud es: ${palabra.length}`);
});

//2. Mayúsculas
let pMayus = document.getElementById('mayuscula');

pMayus.addEventListener('click', function()
{
    let palabra = document.getElementById('enunciado').value;
    alert(`En mayúscula es: ${palabra.toUpperCase()}`);
});

//3.Minúsculas
let pMinus = document.getElementById('minusculas');

pMinus.addEventListener('click', function()
{
    let palabra = document.getElementById('enunciado').value;
    alert(`En minúscula es: ${palabra.toLowerCase()}`);
});

//4. Primer cáracter de la palabra
let pCaracter = document.getElementById('primerCaracter');

pCaracter.addEventListener('click',function()
{
    let palabra = document.getElementById('enunciado').value;
    alert(`El primer cáracter es: ${palabra.charAt()}`);
});