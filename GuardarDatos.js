//Traer el elemento que tiene como id guardad:
let Guardar=document.getElementById("guardar");


//Asignar elemntos conclick al elemento anterior
Guardar.addEventListener('click',function(){
    //1.Traer el valor almacenado en los imputs
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;

    //2.guardar en el localstorage
    localStorage.setItem('Nombre',nombre);
    localStorage.setItem('Apellido',apellido);

    //3.Limpiae los daros que quedan en los inputs
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
});

document.getElementById('mostrar').addEventListener('click',function(){

    //Traer los valores del localStorage
    let nombreGuardado=localStorage.getItem('Nombre');
    let apellidoGuardado=localStorage.getItem('Apellido');

    //mostrar los datos en Html
    document.getElementById("mostrarNombre").innerHTML=nombreGuardado;
    document.getElementById("mostrarApellido").innerHTML=apellidoGuardado;


})

