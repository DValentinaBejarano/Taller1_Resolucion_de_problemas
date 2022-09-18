//Triangulos
let averiguar = document.getElementById('Validar');
averiguar.addEventListener('click',()=>{
    let angulo1 = document.getElementById('valor').value;
    let angulo2 = document.getElementById('valor1').value;
    let angulo3 = document.getElementById('valor2').value;
    parseFloat(angulo1);parseFloat(angulo2);parseFloat(angulo3);

      if(angulo1==angulo2 && angulo1 ==angulo3){
            alert(`Es un triángulo equilátero, ¡Sus tres ángulos internos son iguales!`)
      }else if(angulo1==angulo2 || angulo2==angulo3 || angulo1==angulo3){
            alert(`Es un triángulo isósceles, ¡Tiene dos lados con la misma longitud!`);
      }else{
            alert(`Es un triángulo escaleno, ¡Posee todos los lados y ángulos diferentes!`);
      }  
})