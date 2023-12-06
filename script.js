intentos = 0;
ganado = 0;
empate = 0;
perdido = 0;

var usuario = document.getElementById('opcionUsuario');
var bot = document.getElementById('opcionOponente');

document.getElementById('Intentos').innerHTML = intentos;

function enviarPapel() {
    intentos = 1 + intentos;
    max = 3;
    min = 1;

    document.getElementById('Intentos').innerHTML = intentos;
    nroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);

    switch (nroAleatorio) {
        case 1:
            bot.innerHTML = '<img src="papel.png">';
            break;
        case 2:
            bot.innerHTML = '<img src="piedra.png">';
            break;
        case 3:
            bot.innerHTML = '<img src="tijera.png">';
            break;
    }

    //1 = PAPEL; 2 = PIEDRA; 3 = TIJERA

    if (nroAleatorio == 1) {
        document.getElementById('Respuesta').style.color = "#DDC91E";
        document.getElementById('Respuesta').innerHTML = ('Terminaron en empate');

        empate = empate + 1;
        document.getElementById('Empate').innerHTML = empate;
    } else if (nroAleatorio == 2) {
        document.getElementById('Respuesta').style.color = "green";
        document.getElementById('Respuesta').innerHTML = ('FELICIDADES! GANASTE');

        ganado = ganado + 1;
        document.getElementById('Ganados').innerHTML = ganado;
    } else if (nroAleatorio == 3) {
        document.getElementById('Respuesta').style.color = "red";
        document.getElementById('Respuesta').innerHTML = ('oh... perdiste');

        perdido = perdido + 1;
        document.getElementById('Perdido').innerHTML = perdido;
    }

    usuario.innerHTML = '<img src="papel.png">';
}

function enviarPiedra() {
    intentos = 1 + intentos;
    max = 3;
    min = 1;

    document.getElementById('Intentos').innerHTML = intentos;
    nroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);

    switch (nroAleatorio) {
        case 1:
            bot.innerHTML = '<img src="papel.png">';
            break;
        case 2:
            bot.innerHTML = '<img src="piedra.png">';
            break;
        case 3:
            bot.innerHTML = '<img src="tijera.png">';
            break;
    }

    //1 = PAPEL; 2 = PIEDRA; 3 = TIJERA

    if (nroAleatorio == 1) {
        document.getElementById('Respuesta').style.color = "red";
        document.getElementById('Respuesta').innerHTML = ('oh... perdiste');

        perdido = perdido + 1;
        document.getElementById('Perdido').innerHTML = perdido;
    } else if (nroAleatorio == 2) {
        document.getElementById('Respuesta').style.color = "#DDC91E";
        document.getElementById('Respuesta').innerHTML = ('Terminaron en empate');

        empate = empate + 1;
        document.getElementById('Empate').innerHTML = empate;
    } else if (nroAleatorio == 3) {
        document.getElementById('Respuesta').style.color = "green";
        document.getElementById('Respuesta').innerHTML = ('FELICIDADES! GANASTE');

        ganado = ganado + 1;
        document.getElementById('Ganados').innerHTML = ganado;
    }

    usuario.innerHTML = '<img src="piedra.png">';
}

function enviarTijera() {
    intentos = 1 + intentos;
    max = 3;
    min = 1;

    document.getElementById('Intentos').innerHTML = intentos;
    nroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);

    switch (nroAleatorio) {
        case 1:
            bot.innerHTML = '<img src="papel.png">';
            break;
        case 2:
            bot.innerHTML = '<img src="piedra.png">';
            break;
        case 3:
            bot.innerHTML = '<img src="tijera.png">';
            break;
    }

    //1 = PAPEL; 2 = PIEDRA; 3 = TIJERA

    if (nroAleatorio == 1) {
        document.getElementById('Respuesta').style.color = "green";
        document.getElementById('Respuesta').innerHTML = ('FELICIDADES! GANASTE');

        ganado = ganado + 1;
        document.getElementById('Ganados').innerHTML = ganado;
    } else if (nroAleatorio == 2) {
        document.getElementById('Respuesta').style.color = "red";
        document.getElementById('Respuesta').innerHTML = ('oh... perdiste');

        perdido = perdido + 1;
        document.getElementById('Perdido').innerHTML = perdido;
    } else if (nroAleatorio == 3) {
        document.getElementById('Respuesta').style.color = "#DDC91E";
        document.getElementById('Respuesta').innerHTML = ('Terminaron en empate');

        empate = empate + 1;
        document.getElementById('Empate').innerHTML = empate;
    }

    usuario.innerHTML = '<img src="tijera.png">';
}