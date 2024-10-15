function ingresar() {

    let usuario = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let visible = document.getElementById("mensaje");
    
    visible.style.display = "none";
    document.getElementById('username').style.backgroundColor = "";
    document.getElementById('password').style.backgroundColor = "";


    //los campos incorrectos tendran un fondo rosa, si no, redirige a otra ventana

    if (usuario !== "PP1") {
        visible.innerText = "Usuario incorrecto";
        visible.style.display = "block";
        document.getElementById('username').style.backgroundColor = "pink";
    } 

    if (password !== "Integrador") {
        visible.innerText = "Contraseña incorrecta";
        visible.style.display = "block";
        document.getElementById('password').style.backgroundColor = "pink";
    } 

    if (usuario !== "PP1" && password !== "Integrador") {
        visible.innerText = "Usuario incorrecto";
        visible.style.display = "block";
        visible.style.color = "red";
    }

    if (usuario === "PP1" && password === "Integrador") {
        visible.innerText = "Inicio de sesión exitoso";
        visible.style.display = "block";
        visible.style.color = "green";


    //confirma el inicio de sesión exitoso, tarda 2 segundos y redirige

    setTimeout(function() {
        window.open("https://www.google.com/logos/2010/pacman10-i.html", "_blank");
        }, 2000);
    }
}


    function mostrarClave() {
        let clave = document.getElementById("password");
        if (clave.type === "password") {
            clave.type = "text";
        } else {
            clave.type = "password";
    }
}





