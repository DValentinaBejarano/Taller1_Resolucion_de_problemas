//1. Longitud palabra 
let tamaño = document.getElementById('longitud');

tamaño.addEventListener('click', function()
{
    let palabra = document.getElementById('enunciado').value;
    Swal.fire(`La palabra que usted ingreso es: ${palabra} y la longitud es: ${palabra.length}`);
});

//2. Mayúsculas
let pMayus = document.getElementById('mayuscula');

pMayus.addEventListener('click', function()
{
    let palabra = document.getElementById('enunciado').value;
    Swal.fire(`En mayúscula es: ${palabra.toUpperCase()}`);
});

//3.Minúsculas
let pMinus = document.getElementById('minusculas');

pMinus.addEventListener('click', function()
{
    let palabra = document.getElementById('enunciado').value;
    Swal.fire(`En minúscula es: ${palabra.toLowerCase()}`);
});

//4. Primer cáracter de la palabra
let pCaracter = document.getElementById('primerCaracter');

pCaracter.addEventListener('click',function()
{
    let palabra = document.getElementById('enunciado').value;
    Swal.fire(`El primer cáracter es: ${palabra.charAt()}`);
});