
function cambiarVisibilidad() {
    var capas = document.getElementsByTagName("div");

    for (var i = 0; i < capas.length; i++) {
        if (capas[i].style.display == "none") {
            capas[i].style.display = "block";
        } else {
            capas[i].style.display = "none";
        }
    }

}

function escribirTexto() {
    var capa = document.getElementById("capa1");
    capa.innerHTML += "Estoy escribiendo dentro de la capa 1 <br />";       //innerHTML define el html que esta contenido en un contenedor

}

function cambiarPosicion() {            //para que chute necesita que metas un valor en la cja de texto
    var texto = document.getElementById("posicion").value;
    var capa = document.getElementById("capa2");
    if (!isNaN(texto)) {
        capa.style.left = texto + "px";
    }
}
