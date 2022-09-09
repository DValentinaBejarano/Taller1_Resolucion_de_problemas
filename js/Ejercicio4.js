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

/*Sección ejercicios
const consultar = document.getElementById('consultar');

consultar.addEventListener('click', function () {
    const opcionN = document.getElementById('opcionN').value;
    const opcionA = document.getElementById('opcionA').value;
    const opcionAc = document.getElementById('opcionAc').value;
    parseInt(opcionN, opcionA, opcionAc);

    //Tatiana Cabrera
        if (opcionN == 1 && opcionA == 6 && opcionAc == 11) {
        alert(`Respuesta correcta`);
        }else{
            alert(`Respuesta incorrecta`);
        }

    //Carolina Forero  
        if (opcionN == 2 && opcionA == 7 && opcionAc == 12) {
        alert(`Respuesta correcta`);
        }else{
            alert(`Respuesta incorrecta`);
        }
    
    //Yaneth Castillo
        if (opcionN == 3 && opcionA == 8 && opcionAc == 13) {
        alert(`Respuesta correcta`);
        }else{
            alert(`Respuesta incorrecta`);
        }
        
    //Fernando Galindo
        if (opcionN == 4 && opcionA == 9 && opcionAc == 14) {
        alert(`Respuesta correcta`);
        }else{
            alert(`Respuesta incorrecta`);
        }

    //Cristian Buitrago
         if (opcionN == 5 && opcionA == 10 && opcionAc == 15) {
        alert(`Respuesta correcta`);
        }else{
            alert(`Respuesta incorrecta`);
        }

})*/