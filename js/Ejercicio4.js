//Instructor-Materia
const consultar = document.getElementById('consultar');

consultar.addEventListener('click', function () {
const Nombre = document.getElementById('Nombre').value;
const Apellido = document.getElementById('Apellido').value;
const Materia = document.getElementById('Materia').value;
parseInt(Nombre, Apellido, Materia);

//Profe tatiana
    if (Nombre == 1 && Apellido == 6 && Materia == 11) {
    Swal.fire(`¡Respuesta correcta!, El nombre de la instructora es Tatiana su apellido es Cabrera y la materia que dicta es Calidad-FrontEnd`);
    }

    //Respuesta incorrecta
    else if (Nombre != 1 && Apellido != 6 && Materia == 11) {
    Swal.fire(`Respuesta incorrecta`);
    }

    else if (Nombre == 1 && Apellido != 6 && Materia != 11) {
        Swal.fire(`Respuesta incorrecta`);
    }

    else if (Nombre == 1 && Apellido != 6 && Materia == 11) {
        Swal.fire(`Respuesta incorrecta`);
    }

    else if (Nombre == 1 && Apellido == 6 && Materia != 11) {
        Swal.fire(`Respuesta incorrecta`);
    }

    else if (Nombre == 1 && Apellido == 6 && Materia != 11) {
        Swal.fire(`Respuesta incorrecta`);
    }

    else if (Nombre != 1 && Apellido == 6 && Materia == 11) {
        Swal.fire(`Respuesta incorrecta`);
    }



//Profe Carolina
    else if (Nombre == 2 && Apellido == 7 && Materia == 12) {
    Swal.fire(`¡Respuesta correcta!, El nombre de la instructora es Carolina su apellido es Forero y la materia que dicta es Seguimiento al desarrollo del proyecto`)
    }

    //Respuesta incorrecta
    else if (Nombre != 2 && Apellido != 7 && Materia == 12) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 2 && Apellido != 7 && Materia != 12) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre != 2 && Apellido == 7 && Materia != 12) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 2 && Apellido == 7 && Materia != 12) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre != 2 && Apellido == 7 && Materia == 12) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 2 && Apellido != 7 && Materia == 12) {
        Swal.fire('Respuesta incorrecta')
    }

    
//Profe Yaneth
    else if (Nombre == 3 && Apellido == 8 && Materia == 13) {
        Swal.fire(`¡Respuesta correcta!, El nombre de la instructora es Yaneth su apellido es Castillo y la materia que dicta es Gestión Ambiental`)
    }

    //Respuestas incorrectas
    else if (Nombre != 3 && Apellido != 8 && Materia == 13) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 3 && Apellido != 8 && Materia != 13) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre !== 3 && Apellido == 8 && Materia != 13) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 3 && Apellido == 8 && Materia != 13) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre != 3 && Apellido == 8 && Materia == 13) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 3 && Apellido != 8 && Materia == 13) {
        Swal.fire('Respuesta incorrecta')
    }

//Profe Fernando
    else if (Nombre == 4 && Apellido == 9 && Materia == 14) {
        Swal.fire(`¡Respuesta correcta!, El nombre del instructor es Fernando su apellido es Galindo y la materia que dicta es Bases de datos II`)
    }

    //Respuestas incorrectas
    else if (Nombre != 4 && Apellido != 9 && Materia == 14) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 4 && Apellido != 9 && Materia != 14) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre != 4 && Apellido == 9 && Materia != 14) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 4 && Apellido == 9 && Materia != 14) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre != 4 && Apellido == 9 && Materia == 14) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 4 && Apellido != 9 && Materia == 14) {
        Swal.fire('Respuesta incorrecta')
    }


//Profe Cristian  
    else if (Nombre == 5 && Apellido == 10 && Materia == 15) {
        Swal.fire(`¡Respuesta correcta!, El nombre del instructor es Cristian su apellido es Buitrago y la materia que dicta es Php avanzada`)
    }

    //Respuestas incorrectas
    else if (Nombre != 5 && Apellido != 10 && Materia == 15) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 5 && Apellido != 10 && Materia != 15) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre != 5 && Apellido == 10 && Materia != 15) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 5 && Apellido == 10 && Materia != 15) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre != 5 && Apellido == 10 && Materia == 15) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 5 && Apellido != 10 && Materia == 15) {
        Swal.fire('Respuesta incorrecta')
    }


    //Profe Luis
     else if (Nombre == 6 && Apellido == 11 && Materia == 16) {
        Swal.fire(`¡Respuesta correcta!, El nombre del instructor es Luis su apellido es Baquero y la materia que dicta es Cultura física`)
    }

    //Respuestas incorrectas
    else if (Nombre != 6 && Apellido != 11 && Materia == 16) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 6 && Apellido != 11 && Materia != 16) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre != 6 && Apellido == 11 && Materia != 16) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 6 && Apellido == 11 && Materia != 16) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre != 6 && Apellido == 11 && Materia == 16) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 6 && Apellido != 11 && Materia == 16) {
        Swal.fire('Respuesta incorrecta')
    }

    //Profe Adriana 
     else if (Nombre == 7 && Apellido == 12 && Materia == 17) {
        Swal.fire(`¡Respuesta correcta!, El nombre de la instructora es Adriana su apellido es Duarte y la materia que dicta es Diseño FrontEnd`)
    }

    //Respuestas incorrectas
    else if (Nombre != 7 && Apellido != 12 && Materia == 17) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 7 && Apellido != 12 && Materia != 17) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre != 7 && Apellido == 12 && Materia != 17) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 7 && Apellido == 12 && Materia != 17) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre != 7 && Apellido == 12 && Materia == 17) {
        Swal.fire('Respuesta incorrecta')
    }

    else if (Nombre == 7 && Apellido != 12 && Materia == 17) {
        Swal.fire('Respuesta incorrecta')
    }


})