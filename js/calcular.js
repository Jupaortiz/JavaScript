//Datos de entrada
let num1= Number(document.querySelector('#numero1').value);
let num2= Number(document.querySelector('#numero2').value);
let opcion=document.querySelector('#operacion').value;

//Proceso
let resultado;
switch(opcion){
    case "1":
        resultado=num1+num2;
        break;
    case "2":
        resultado=num1-num1
        break;
    case "3":
        resultado=num1*num2
        break;
    case "4":
        resultado=num1/num2
        break
    default:
        resultado ="Selecione una operacion valida";

    
    //Datos de salida
    console.log(resultado);
    document.getElementById('resultado').innerText="El resultado de la operacoin es de"+resultado;
   
}

function Convetir(){
    let dinero=Number(document.getElementById('valor').value);
    let cambio=document.getElementById('convertidor').value;

    const euro=4658;
    let total;
    let moneda;

    if(cambio=="pesos")
    {
        total=dinero/euro;
        moneda="Euros"
    }
    else if(cambio=="euros")
    {
        total=dinero*euro;
        moneda="Pesos"
    }
    document.getElementById('total').innerText="El valor convertido es de "+total+ " "+moneda;
}