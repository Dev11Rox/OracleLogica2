
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
    alert('click desde el boton');
    return;
};

function generarNumeroSecreto() {
    let num = Math.floor(Math.random()*10)+1;
    return num;
}

let numSec = generarNumeroSecreto();
//alert(`el numero secreto es ${numSec}`);
