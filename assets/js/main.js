//Capturar evento de submit do formulario
const form = document.querySelector('#formulario-IMC' );

form.addEventListener ('submit', function (e) {
e.preventDefault();

const inputPeso = form.querySelector('#input-peso');
const inputAltura = form.querySelector('#input-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado(' Peso Inválido', false);
        return;
    }
    else if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }
    
const imc = calculaIMC(peso, altura);

setResultado(imc, true);

}) ;

function calculaIMC (peso, altura) {
    
    const imc = (peso / altura**2);
    return imc.toFixed(1);
    

}


function criaP () {
    const paragrafo = document.createElement('p');
    return paragrafo;
}


function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ' ';
    const paragrafo = criaP();
    
    if (isValid ){
        paragrafo.classList.add('paragrafo-resultado');
    }else{
        paragrafo.classList.add('bad');
    }

    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo);

}

