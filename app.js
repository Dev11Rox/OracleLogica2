
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Escribe un Numero';

function asignarTextElem(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
asignarTextElem('h1','Juego de adivina el numero')
asignarTextElem('p','Escribe un numero del 1 al 20')

function intentoUser(){
    let numUser = document.getElementById('numUser').value;
    if (numUser===numSec) {
        asignarTextElem('p','Acertaste el numero')
    }
    return;
};

function generarNumeroSecreto() {
    let num = Math.floor(Math.random()*10)+1;
    return num;
}

//alert(`el numero secreto es ${numSec}`);
