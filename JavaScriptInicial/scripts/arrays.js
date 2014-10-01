var array1 = new Array(4);

var array2 = [];

var array3 = [1, 2, 6, 8, 7];

array2[0] = "Pepe";
array1[0] = "Maruja Limón";

//array3 = array3.concat(array1);     //----> saldrían undefined porque arriba está inicializado el array con 4 elementos, 
//pero solamente le ponemos uno (Maruja Limón) con lo que saldrían 3 undefineds
array3 = array3.concat(array2);
array3.push("Hola don Pepito");
//PARA QUITAR ELEMENTOS DE DENTRO:

array3.splice(2, 2, "Adiós","don", "José");

for (var i = 0; i < array3.length; i++) {
    document.write(array3[i] + "<br />");
}
alert(i);       //te escribe el valor de i, que como al acabar de recorrer el array vale 4, pero hace un i++, por eso sale 5