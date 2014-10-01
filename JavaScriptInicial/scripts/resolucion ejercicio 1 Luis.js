var suma = function (datos) {
    var suma = 0;
    for (var i = 0; i < datos.length; i++) {
        suma += parseInt(datos[i]);     //para pasarlo a enteros
    }
    return suma;
};

var media = function (datos) {
    var total = suma(datos);

    this.mediaAritmetica = total / datos.length;      //crea una variable en esa función que solo vale en el contexto this de la funcion
    //todas las funciones crean por defecto un this que nace al empezar la función y muere al terminar. Para usar el resultado, se usa el this.loquesea
    //al obj se le está creando una propiedad que se llama media
};

var ver = function (obj) {
    alert(obj.mediaAritmetica);

};
//funcion autoejecutable
(function () {
    var datos = [];

    while (true) {
        var n = prompt("Dime un número: ");
        if (isNaN(n)) 
            break;
        
        datos.push(n);
    }

    var obj = {};
    alert(suma(datos));
    media.call(obj, datos);     //aqui obj es el this de la función, y guardará eñ valor de la media.||A continuación se le pasa los valores del array
    ver(obj);
})();