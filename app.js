
let numSec = 0;
let intentos = 0;
let listaNumeros = [];
let numMax = 10;
//reiniciar();
condicionesIniciales();


function asignarTextElem(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
};


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
        };
        intentos++;
        limpiar();
    };
    return;
};
function limpiar() {
    document.querySelector('#numUser').value='';
    
};

function reiniciar() {
    limpiar();
    //editar mensaje de inicio a numeros
    //generar el numero aleatorio
    //reiniciar contador de intentos
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //desahilitar el boton
    
};

function generarNumeroSecreto() {
    let numGen = Math.floor(Math.random()*numMax)+1;
    //alert(`el numero secreto generado es ${numSec}`);
    
    if (listaNumeros.length==numMax){
        asignarTextElem('p','Ya se adivinaron los numeros posibles');

    }else{
        if (listaNumeros.includes(numGen)){
            return generarNumeroSecreto();
        }else{
            listaNumeros.push(numGen);
            return numGen;
        }
    }

    
};

function condicionesIniciales() {
    asignarTextElem('h1','Juego de adivina el numero');
    asignarTextElem('p',`Escribe un numero del 1 al ${numMax}`);
    numSec = generarNumeroSecreto();
    intentos=1;
    alert(`el numero secreto es ${numSec}`);
    //document.getElementById('reiniciar').setAttribute('disabled', true);
};

//alert(`el numero secreto es ${numSec}`);


//alert(`el numero del usuario es ${numSec}`);