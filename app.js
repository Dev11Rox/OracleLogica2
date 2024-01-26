
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Escribe un Numero';

function asignarTextElem(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}
asignarTextElem('h1','Juego de adivina el numero')
asignarTextElem('p','Escribe un numero del 1 al 10')
function intentoUser(){
    alert('click desde el boton');
};
