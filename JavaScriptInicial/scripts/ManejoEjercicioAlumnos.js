

var miArrayAlumnos=ArrayAlumnos[];
function crearAlumno(nombre, nota, edad) {
    this.nombre = nombre;
    this.nota = nota;
    this.edad = edad;
   

    this.guardarAlumno= function(){
        miArrayAlumnos.push();

    }
    this.escribirAlumnosEnListado = function () {

        document.write("* "+this.nombre+"<BR>"); 

    }
    this.recuperarAlumnosBusqueda=function(){
        alert("Nombre: "+this.nombre+"<BR>"+"Nota: "+this.nota+"<BR>"+"Edad: "+this.edad);
    }
    this.buscarAlumno=function(){
        
        var buscarlos = document.getElementById("nombre").value;
        for(i=0;i<ArrayAlumnos.length;i++){
            if(ArrayAlumnos[i].nombre==alumno){
                buscarAlumno.recuperarAlumnosBusqueda;
                //var alumno=getElementById(ArrayAlumnos[i]);
            }
        }

    }


}






function calcularMedia(){
    var media=0;
    for(i=0;i<ArrayAlumnos.length;i++){
        media+=this.nota/ArrayAlumnos.length;
    }

}

function buscarAlumno() {
    var alumnoBuscado = document.getElementById(this.alumno);
    capa.innerHTML = "Estoy escribiendo dentro de la capa 1 <br />";       //innerHTML define el html que esta contenido en un contenedor

}