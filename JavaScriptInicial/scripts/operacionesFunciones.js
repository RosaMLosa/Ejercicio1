



//function sumar(n1, n2) {

//    return n1 + n2;

//}

//(function () {

//    var r = sumar(15, 20);

//    alert(r);

//})();


//otra manera


//function sumar(n1, n2) {

//    return n1 + n2;

//}

//(function () {

//    var r = sumar(15, 20);

//    alert("Normal: "+r);

//    var obj = {base:22, altura:44};   //-----> VARIABLE Q SE CREE IGUALADA A UNAS LLAVES ES UN objeto JS (JSON- JavaScript Object Notation) X e Y son las distintas propiedades que tiene el objeto

//                                        //sin constructor ni nada!
//    //APPLY
//    var args = [5, 23];     //creo un array con dos argumentos i0=5;i1=23
//    var rr = sumar.apply(obj, args);        //llamo a lafunción con el método apply(this.-propia instancia en memoria del objeto en la función, lista de argumentos que le paso  la función)
//                                            //apply vale para cambiar la referencia de this.
//    var rrr = sumar.call(obj, 5, 23);   //es como el call, pero se le meten a pelo los argumentos ppara el objeto.

//    alert("Con apply:"+rr);
//    alert("Con call: "+rrr);

//})();


//DOS:

function sumar(n1, n2) {

    return n1 + n2;

}

(function () {

    var r = sumar(15, 20);

    alert("Normal: "+r);

    var obj = {base:22, altura:44};   //-----> VARIABLE Q SE CREE IGUALADA A UNAS LLAVES ES UN objeto JS (JSON- JavaScript Object Notation) X e Y son las distintas propiedades que tiene el objeto

//                                          //sin constructor ni nada!
    //APPLY
    var args = [5, 23];     //creo un array con dos argumentos i0=5;i1=23
    var rr = sumar.apply(obj, args);        //llamo a lafunción con el método apply(this.-propia instancia en memoria del objeto en la función, lista de argumentos que le paso  la función)
                                            //apply vale para cambiar la referencia de this.
    var rrr = sumar.call(obj, 5, 23);   //es como el call, pero se le meten a pelo los argumentos ppara el objeto.

    alert("Con apply:" + rr);
    alert("Con call: " + rrr);
    //alert(sumar.toSource());        //no chuta, está depreciado
    alert("toString: " + sumar.toString());        //devuelve el codigo fuente de la funcion
    alert("valueOF: " + sumar.valueOf());

    alert("Con this.resultado: " + obj.resultado);

    //var s2 = sumar.arguments.callee;      //no funciona ya
    //alert(s2(4, 3));

})();
