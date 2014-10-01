function hola1(msg) {
    alert(msg);
}

var hola2 = function (msg) {
    alert(msg);
};      //nece poner el ; cuando se declara como variable

//hola1("Dime el número 1:");

///hola2("Dime el número 2:");

//hola2 = ("Hola don Pepito");
//alert(hola2);

//var hola3 = hola2;      //-----> hola 3 hará lo mismo que hola 2, porque se ha pasado la referencia a la función
//hola3("Hola");



//hola2("Hola");        //no chutaría porque como se ha machacado hola2 con el hola don pepito, pues no puede chutar como función.

//FUNCIÓN QUE LLAMA A OTRA FUNCIÓN COMO VARIABLE: (no funciona)))

//var pasar = function (objeto) {
//    //alert(objeto);

//    return objeto.toUpperCase();
//};

//var rebibir = function (pasado) {
//    pasado("estoy llamando a una función desde otra");
//};

//recibir(pasar);


//AUTOINVOCACIÓN DE FUNCIONES;

var x = (function () { return (5 + 6) })();
document.writeln(typeof (x) + '<BR>');
document.writeln(x);

//copia de funciones:

var original = function () {
    alert('Hola Mundo');

}

var copia = original;

var original = function () {
    alert('adios mundo');

}

copia();        //devolverá 'hola mundo', porque no es un puntero!!!



//VISIBILIDAD DE FUNCIONES

var global = function () {
    alert('Hola Mundo');

}

var contenedora = function () {

    var subFuncion = function () { alert("Soy Local"); global(); }

    global();
    subFuncion();
}

contenedora();
subFuncion();

//PROPIEDADES DE LAS FUNCIONES:

