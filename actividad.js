//Traer el elemento ya gregar la funcion
let Guardar=document.getElementById('guardar')

Guardar.addEventListener('click',function(){
    //traer valor inputs
    let nombre=document.getElementById('nombre').value;
    let contraseña=document.getElementById('contraseña').value;
    let confirmarContraseña=document.getElementById('confirmarContraseña').value;

    
    if(contraseña=contraseñaGuardada){
        localStorage.setItem('Nombre',nombre);
        localStorage.setItem('Contraseña',contraseña);
        alert("La contraseña guardada correctamente")
    }else{
        alert("La contraseña no coincide")  
    }


    //limpiar inputs
    document.getElementById("nombre").value="";
    document.getElementById("contraseña").value="";
    document.getElementById("confirmarContraseña").value="";
   
})
document.getElementById('mostrar').addEventListener('click',function(){
    //traer valores
    let nombreGuardado=localStorage.getItem('Nombre');
    let contraseñaGuardada=localStorage.getItem('Contraseña');


  
    //Mostrar datos en html
    document.getElementById('nombrex').innerHTML=nombreGuardado
    document.getElementById('contraseñax').innerHTML=contraseñaGuardada
    document.getElementById('confirmarContraseñax').innerHTML=confirmarGuardada
    
})