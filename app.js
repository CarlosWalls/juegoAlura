let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let NumeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Correcto, # de intentos ${intentos} ${(intentos=== 1) ?'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    return;
}
}

function generarNumeroSecreto(params) {
    let numeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == NumeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    return numeroSecreto;
}
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Coloca un número del 1 al ${NumeroMaximo}`);    
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(params) {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p',`Coloca un número del 1 al ${NumeroMaximo}`);

condicionesIniciales();
