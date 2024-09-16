document.getElementById('enviar').addEventListener('click', function () {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" || password === "1234") {
        window.location.href = 'cartas.html';
    } else {
        document.getElementById('alerta').style.display = 'block';
        document.getElementById('alerta').innerText = 'Por favor, completa ambos campos.';
    }
});