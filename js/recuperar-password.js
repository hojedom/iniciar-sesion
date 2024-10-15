
document.getElementById('recuperar-contra').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById('username');
    

    // el usuario es PP1, sino, sera un usuario invalido y el campo tendra un fondo rosa

    if (username.value === 'PP1') {
        alert("Se envió un correo al usuario ingresado");

        // una vez enviado la alert, 1 segundo y redirige a index

        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000);

    } else {
        alert("Usuario no registrado");
        username.style.backgroundColor = 'pink';
    }
});


