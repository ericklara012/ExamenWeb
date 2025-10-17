var formulario = document.getElementById('contactForm');
var campoNombre = document.getElementById('nombre');
var campoEmail = document.getElementById('email');
var campoEdad = document.getElementById('edad');
var campoPais = document.getElementById('pais');
var divMensajes = document.querySelector('#mensajes');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    if (campoNombre.value === '' && campoEmail.value === '' && campoEdad.value === '' && campoPais.value === '') {
    divMensajes.textContent = "Rellena los campos";
    }
    else{
        divMensajes.textContent = "Registrado";
    }
}

);