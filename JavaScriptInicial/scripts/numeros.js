var n1 = prompt("Dime el numero 1");
var n2= prompt("Dime el numero 2");

if (isNaN(n1) || isNaN(n2)) {
    alert("Error, introduce solo numeros");
} else {
    var n3 = n1 / n2;
    alert(n3);
    if (isFinite(n3)) {         //se podría poner tb: if(n3!=Infinity && n3!=-Infinity)-----> PERO ES MÁS CÓMODO HACERLO CON LA FUNCIÓN isFinite

        alert(n3);
    } else {
        alert("La operación es Infinita");
    }
}