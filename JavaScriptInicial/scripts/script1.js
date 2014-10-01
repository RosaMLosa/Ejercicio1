function espar(numero1) {
    var numero2 = 22;
    return numero1 % 2 == 0;
}

//var numero = prompt("Dime un número:");     //prompt es funcion integrada en navegador que saca dialogo en el navegador. Prompt devuelve texto

//alert(espar(numero));       //alert es la típica alerta del navegador

for (var i = 0; i < 10 ; i++){
    document.writeln("El numero " + i + (espar(i) ? " es par " : " es impar "));
    document.writeln("<br />");
}

alert(numero2);     //si en la función se declara variable de esta manera:  numero=3    , esta variable es GLOBAL!!
                    //en cambio, si se declara dentro de la función de esta manera:   var numero=3     , estás creando una variable LOCAL!!
                    //si se declara una variable así:     var numero = 4     fuera de una función,  estás creando una variable GLOBAL. Ejemplo::        
//var numero2 = 6;      TB PODRÍA DECLARARSE DE FORMA GLOBAL SIN EL VAR, POR IR DELANTE DE UNA FUNCIÓN.
//function espar(numero1) {
//    var numero2 = 22;
//    return numero1 % 2 == 0;
//}
//alert(numero2); -------> NOS DARÁ 6, PORQUE ESTÁ INVOCANDO A LA VARIABLE GLOBAL. LA QUE TIENE VALOR 22 ES LOCAL.


/*(function () {      //funcion autoejecutable una vez que ha cargado toda la pégina. Se mete después del body

})();*/