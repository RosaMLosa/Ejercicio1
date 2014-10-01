/* */

var miArray = [];

var numeroIntroducido = 0;

var obj = { resultadoMedia: 0 };        //declaro el objeto fuera porque lo tengo que tener hecho antes de la función

do {

    numeroIntroducido = prompt("Introduce un número para el array: ");
    if (!isNaN(numeroIntroducido)) {
        miArray.push(numeroIntroducido);
    }
    

} while (!isNaN(numeroIntroducido));

document.write("los valores que contiene mi array son: <br />");
for (var i = 0; i < miArray.length; i++) {

    document.write( "En la posición " + i + " contiene el valor-----> " + miArray[i] + "<br />");
}


var resultado = sumarValores(miArray);      //me hago la suma para meter el resultado en una variable que se llama resultado

document.write( "El resultado de la suma de los valores del array es: " + resultado + "<br />");

mediaEnObjeto.call(obj, resultado, miArray); //llamo a la funcion mediaEnObjeto, pasándole el obj creado arriba, y la suma, valor que necesita para la media

document.writeln("El resultado de la media de los valores que contiene el array es:  " + obj.resultadoMedia );



function sumarValores(array) {
    var suma = 0;

    for (var i = 0 ; i < array.length ; i++) {
        suma = suma + parseInt(array[i]);       //para pasar los valores del array a int

    }
    alert("La suma de los valores que contiene el array es: "+ suma );
    return suma;

};

function mediaEnObjeto(resultadoSuma, array) {

   
    this.resultadoMedia = (resultadoSuma / array.length);
    alert("El resultado de la media de los valores que contiene el array es:  " + this.resultadoMedia);

    return this.resultadoMedia;
   
};






