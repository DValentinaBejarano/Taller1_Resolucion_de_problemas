//Convertir
let boton = document.getElementById('Convertir');

boton.addEventListener('click', function()
{
    let rango = document.getElementById('primerOp').value;
    let rango1 = document.getElementById('segundaOp').value;
    let grados = document.getElementById('termino').value;
    parseInt(rango, rango1);
    parseFloat(grados);

    if(rango == 1 && rango1 == 5)
    {       
        let valor = (grados - 32)/1.8;
        swal(`Los ${grados}º Fahrenheit a Celsius es ${valor}`);
    }
    else if(rango == 1 && rango1 == 6)
    {
        let valor = 5/9*(grados - 32) + 273.15;
        swal(`Los ${grados}º Fahrenheit a Kelvin es ${valor.toFixed(2)}`);
    }
    else if(rango == 2 && rango1 == 4)
    {
        let valor = (grados * 1.8) + 32;
        swal(`Los ${grados}º Celsius a Fahrenheit es ${valor.toFixed(2)}`);
    }
    else if(rango == 2 && rango1 == 6)
    {
        let valor = parseFloat(grados) + 273.15;
        swal(`Los ${grados}º Celsius a Fahrenheit es ${valor.toFixed(2)}`);     
    }
    else if(rango == 3 && rango1 == 4)
    {
        let valor = (grados - 273.15) * 9/5 + 32
        swal(`los ${grados}º Kelvin a Fahrenheit es ${valor.toFixed(2)}`);  
    }
    else if(rango == 3 && rango1 == 5)
    {
        let valor = parseFloat(grados) - 273.15;
        swal(`los ${grados}º Kelvin a Celcius son: ${valor.toFixed(2)}`);  
    }
})