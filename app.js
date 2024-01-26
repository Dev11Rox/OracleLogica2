
let parrafo = document.querySelector('p');
let intentos =1;
let intMax =3;
parrafo.innerHTML = 'Escribe un Numero';
let numSec = generarNumeroSecreto();
condicionesIniciales()
function asignarTextElem(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}


function intentoUser(){
    let numUser = parseInt(document.getElementById('numUser').value) ;
    if (numUser===numSec) {
        asignarTextElem('p',`Acertaste el numero en ${intentos} ${intentos ==1? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numUser>numSec){
            asignarTextElem('p','El número es incorrecto, prueba con uno menor'); 
        }else if(numUser<numSec) {
            asignarTextElem('p','El número es incorrecto, prueba con uno mayor');
        }
        intentos++;
        limpiar();
    }
    return;
};
function limpiar() {
    document.querySelector('#numUser').value='';
    
}

function reiniciar() {
    limpiar();
    //editar mensaje de inicio a numeros
    //generar el numero aleatorio
    //reiniciar contador de intentos
    condicionesIniciales();
    //desahilitar el boton
    
}

function generarNumeroSecreto() {
    let num = Math.floor(Math.random()*10)+1;
    return num;
};

function condicionesIniciales() {
    asignarTextElem('h1','Juego de adivina el numero');
    asignarTextElem('p','Escribe un numero del 1 al 20');
    intentos=1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//alert(`el numero secreto es ${numSec}`);

alert(`el numero secreto es ${numSec}`);
//alert(`el numero del usuario es ${numSec}`);