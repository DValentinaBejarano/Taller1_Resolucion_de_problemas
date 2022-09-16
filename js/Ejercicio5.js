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
//Circulo
    //Perimetro
    let perimetroC=document.getElementById("perimetroC");
    let perimetroCirculo=document.getElementById("perimetroCirculo");
    let cerrarModalC=document.querySelector(".cerrarModalC");


    perimetroC.addEventListener("click",()=>{
        perimetroCirculo.style.display="block";
    })

    cerrarModalC.addEventListener("click",()=>{
        perimetroCirculo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==perimetroC){
            perimetroC.style.display="flex"; 
        }
    })

    const calcularPC=document.getElementById("calcularPC");

    calcularPC.addEventListener("click",()=>{
        const radio=document.getElementById("radio").value;
        parseInt(radio);
        let resultado = radio * 3.1416 * 2;
        alert(`El perímetro del circulo es ${resultado.toFixed(2)}`);
    })

    //Area
    let areaC=document.getElementById("areaC");
    let areaCirculo=document.getElementById("areaCirculo");
    let cerrarModal=document.querySelector(".cerrarModal");

    areaC.addEventListener("click",()=>{
        areaCirculo.style.display="block";
    })

    cerrarModal.addEventListener("click",()=>{
        areaCirculo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==areaC){
            areaC.style.display="flex"; 
        }
    })

    const calcularAC=document.getElementById("calcularAC");

    calcularAC.addEventListener("click",()=>{
        const radio=document.getElementById("radio").value;
        parseInt(radio);
        let resultado = 3.1416 * (radio *  radio);
        alert(`El área del circulo es ${resultado.toFixed(2)}`);
    })

//Triangulo
    //perimetro
    let perimetroT=document.getElementById("perimetroT");
    let perimetroTri=document.getElementById("perimetroTri");
    let cerrarModalTri=document.querySelector(".cerrarModalTri");

    perimetroT.addEventListener("click",()=>{
        perimetroTri.style.display="block";
    })

    cerrarModalTri.addEventListener("click",()=>{
        perimetroTri.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==perimetroT){
            perimetroT.style.display="flex"; 
        }
    })


    const calcularPT=document.getElementById("calcularPT");

    calcularPT.addEventListener("click",()=>{
        let lado1=document.getElementById("lado1").value;
        let lado2=document.getElementById("lado2").value;
        let lado3=document.getElementById("lado3").value;
        parseInt(lado1,lado2,lado3);
        let resultado = (parseInt(lado1) + parseInt(lado2) + parseInt(lado3));
        alert(`El perímetro del triangulo es ${resultado}`);
    })


    //Area
    let areaT=document.getElementById("areaT");
    let areaTri=document.getElementById("areaTri");
    let cerrarModalTri2=document.querySelector(".cerrarModalTri2");

    areaT.addEventListener("click",()=>{
        areaTri.style.display="block";
    })

    cerrarModalTri2.addEventListener("click",()=>{
        areaTri.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==areaT){
            areaT.style.display="flex"; 
        }
    })


    const calcularAT=document.getElementById("calcularAT");

    calcularAT.addEventListener("click",()=>{
        let baseT=document.getElementById("baseT").value;
        let alturaT=document.getElementById("alturaT").value;
        parseInt(baseT,alturaT);
        let resultado = (baseT * alturaT)/2;
        alert(`El perímetro del triangulo es ${resultado}`);
    })

//Cuadrado
    //perimetro
    let perimetroCu=document.getElementById("perimetroCu");
    let perimetroCua=document.getElementById("perimetroCua");
    let cerrarModalCua=document.querySelector(".cerrarModalCua");

    perimetroCu.addEventListener("click",()=>{
        perimetroCua.style.display="block";
    })

    cerrarModalCua.addEventListener("click",()=>{
        perimetroCua.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==perimetroCu){
            perimetroCu.style.display="flex"; 
        }
    })

    const calcularPCu=document.getElementById("calcularPCu");

    calcularPCu.addEventListener("click",()=>{
        let ladoC=document.getElementById("ladoC").value;
        parseInt(ladoC);
        let resultado = ladoC * 4;
        alert(`El perímetro del cuadrado es ${resultado}`);
    })


    //Area
    let areaCu=document.getElementById("areaCu");
    let areaCua=document.getElementById("areaCua");
    let cerrarModalCua2=document.querySelector(".cerrarModalCua2");

    areaCu.addEventListener("click",()=>{
        areaCua.style.display="block";
    })

    cerrarModalCua2.addEventListener("click",()=>{
        areaCua.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==areaCu){
            areaCu.style.display="flex"; 
        }
    })

    const calcularACu=document.getElementById("calcularACu");

    calcularACu.addEventListener("click",()=>{
        let ladoCA=document.getElementById("ladoCA").value;
        parseInt(ladoCA);
        let resultado = ladoCA * ladoCA;
        alert(`El área del triangulo es ${resultado}`);
    })

//Rectangulo
    //perimetro
    let perimetroRec=document.getElementById("perimetroRec");
    let perimetroRectan=document.getElementById("perimetroRectan");
    let cerrarModalRec=document.querySelector(".cerrarModalRec");

    perimetroRec.addEventListener("click",()=>{
        perimetroRectan.style.display="block";
    })

    cerrarModalRec.addEventListener("click",()=>{
        perimetroRectan.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==perimetroRec){
            perimetroRec.style.display="flex"; 
        }
    })

    const calcularPR=document.getElementById("calcularPR");

    calcularPR.addEventListener("click",()=>{
        let baseR=document.getElementById("baseR").value;
        let alturaR=document.getElementById("alturaR").value;
        parseInt(baseR,alturaR);
        let resultado = 2 *(parseInt(baseR) + parseInt(alturaR));
        alert(`El perímetro del rectangulo es ${resultado}`);
    })

    //Area
    let areaRec=document.getElementById("areaRec");
    let areaRectan=document.getElementById("areaRectan");
    let cerrarModalRec2=document.querySelector(".cerrarModalRec2");

    areaRec.addEventListener("click",()=>{
        areaRectan.style.display="block";
    })

    cerrarModalRec2.addEventListener("click",()=>{
        areaRectan.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==areaRec){
            areaRec.style.display="flex"; 
        }
    })

    const calcularAR=document.getElementById("calcularAR");

    calcularAR.addEventListener("click",()=>{
        let baseAR=document.getElementById("baseAR").value;
        let alturaAR=document.getElementById("alturaAR").value;
        parseInt(baseAR,alturaAR);
        let resultado = baseAR * alturaAR;
        alert(`El perímetro del triangulo es ${resultado}`);
    })