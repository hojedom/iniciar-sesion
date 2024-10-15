function ingresar(event) {
    event.preventDefault();  // Previene el envío del formulario si hay errores

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let nameUsuario = document.getElementById("nameUsuario").value.trim();
    let password = document.getElementById("password").value.trim();
    let pais = document.getElementById("pais").value;
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;
    let nivelEducativo = document.getElementById("nivel-educat").value;
    let completo = document.getElementById("completo").checked;
    let terminos = document.getElementById("terminos").checked;
    let visible = document.getElementById("mensaje");

    // resetea los campos que se coloreen por un error

    visible.style.display = "none";
    document.querySelectorAll("input, select").forEach(el => el.style.backgroundColor = "");

    // Muestra el error hasta el return y luego continua cuando todo este bien

    if (nombre === "") {
        visible.innerText = "Complete los campos obligatorios.";
        visible.style.display = "block";
        document.getElementById('nombre').style.backgroundColor = "pink";
    }

    if (apellido === "") {
        visible.innerText = "Complete los campos obligatorios.";
        visible.style.display = "block";
        document.getElementById('apellido').style.backgroundColor = "pink";
    }

    if (nameUsuario === "") {
        visible.innerText = "Complete los campos obligatorios.";
        visible.style.display = "block";
        document.getElementById('nameUsuario').style.backgroundColor = "pink";
    }
    
    if (nameUsuario === "PP1") {
        visible.innerText = "El nombre de usuario no puede ser 'PP1'.";
        visible.style.display = "block";
        document.getElementById('nameUsuario').style.backgroundColor = "pink";
        return;
    }

    if (password === "") {
        visible.innerText = "Complete los campos obligatorios..";
        visible.style.display = "block";
        document.getElementById('password').style.backgroundColor = "pink";
    }

    if (pais === "") {
        visible.innerText = "Complete los campos obligatorios..";
        visible.style.display = "block";
        document.getElementById('pais').style.backgroundColor = "pink";
    }

    if (dia === "" || mes === "" || anio === "") {
        visible.innerText = "Complete los campos obligatorios..";
        visible.style.display = "block";
        if (dia === "") document.getElementById('dia').style.backgroundColor = "pink";
        if (mes === "") document.getElementById('mes').style.backgroundColor = "pink";
        if (anio === "") document.getElementById('anio').style.backgroundColor = "pink";
        return;
    }

    // Valida que el usuario sea mayor de 18 años

    const fechaNacimiento = new Date(anio, mes - 1, dia);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    if (hoy.getMonth() + 1 < mes || (hoy.getMonth() + 1 === mes && hoy.getDate() < dia)) {
        edad--;
    }
    if (edad < 18) {
        visible.innerText = "Debes ser mayor de 18 años para registrarte.";
        visible.style.display = "block";
        document.getElementById('anio').style.backgroundColor = "pink";
        return;
    }

    // Valida el select de nivel educativo

    if (nivelEducativo === "") {
        visible.innerText = "Complete los campos obligatorios.";
        visible.style.display = "block";
        document.getElementById('nivel-educat').style.backgroundColor = "pink";
        return;
    }

    if (nivelEducativo === "ninguno" && completo) {
        visible.innerText = "No puede seleccionar 'Ninguno' y marcar 'Completo'.";
        visible.style.display = "block";
        document.getElementById('nivel-educat').style.backgroundColor = "pink";
        return;
    }

    // valida terminos y condiciones

    if (!terminos) {
        visible.innerText = "Debe aceptar los términos y condiciones.";
        visible.style.display = "block";
        document.getElementById('terminos').style.outline = "2px solid red";
        return;
    }

    // Si no hay error, mostrar mensaje de éxito

    visible.innerText = "Usuario registrado correctamente.";
    visible.style.display = "block";
    visible.style.color = "green"; 

    // si todo estabien se resetea y redirige a index despues de 2 segundos
    
    setTimeout(function() {
        window.location.href = "index.html";
        document.getElementById ("userForm"). reset();
    }, 2000);
}

// mostrar y ocultar clave

function mostrarClave() {
    let clave = document.getElementById("password");
    if (clave.type === "password") {
        clave.type = "text";
    } else {
        clave.type = "password";
    }
}
