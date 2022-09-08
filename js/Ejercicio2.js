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
//Convertir
const boton = document.getElementById('Convertir');

boton.addEventListener('click', function()
{
    const rango = document.getElementById('primerOp').value;
    const rango1 = document.getElementById('segundaOp').value;
    const grados = document.getElementById('termino').value;
    parseInt(rango, rango1);
    parseFloat(grados);

    if(rango == 1 && rango1 == 5)
    {       
        let valor = (grados - 32)/1.8;
        alert(`Los ${grados}º Fahrenheit a Celsius es ${valor}`);
    }
    else if(rango == 1 && rango1 == 6)
    {
        let valor = 5/9*(grados - 32) + 273.15;
        alert(`Los ${grados}º Fahrenheit a Kelvin es ${valor.toFixed(2)}`);
    }
    else if(rango == 2 && rango1 == 4)
    {
        let valor = (grados * 1.8) + 32;
        alert(`Los ${grados}º Celsius a Fahrenheit es ${valor.toFixed(2)}`);
    }
    else if(rango == 2 && rango1 == 6)
    {
        let valor = parseFloat(grados) + 273.15;
        alert(`Los ${grados}º Celsius a Fahrenheit es ${valor.toFixed(2)}`);     
    }
    else if(rango == 3 && rango1 == 4)
    {
        let valor = (grados - 273.15) * 9/5 + 32
        alert(`los ${grados}º Kelvin a Fahrenheit es ${valor.toFixed(2)}`);  
    }
    else if(rango == 3 && rango1 == 5)
    {
        let valor = parseFloat(grados) - 273.15;
        alert(`los ${grados}º Kelvin a Celcius son: ${valor.toFixed(2)}`);  
    }
})