var suma = function (datos) {
    var suma = 0;
    for (var i = 0; i < datos.length; i++) {
        suma += parseInt(datos[i]);     //para pasarlo a enteros
    }
    return suma;
}

var media = function (datos) {
    var total = suma(datos);

    this.media = total / datos.length;
};