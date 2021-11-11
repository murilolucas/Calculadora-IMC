
const form = document.querySelector('#formulario-IMC');
//Seta a Data na calculadora
const dataAtual = document.querySelector('#week_day');
const data = new Date();
dataAtual.innerHTML = formataData(data);

//Capturar evento de submit do formulario
form.addEventListener('submit', function (e) {
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

});

function calculaIMC(peso, altura) {

    const imc = (peso / altura ** 2);
    return imc.toFixed(1);


}


function criaP() {
    const paragrafo = document.createElement('p');
    return paragrafo;
}


function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ' ';
    const paragrafo = criaP();

    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado');
    } else {
        paragrafo.classList.add('bad');
    }

    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo);

}


function zeroAesquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function diaDaSemana(dia_semana) {
    let diaSemanaTexto;

    switch (dia_semana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça - Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    }
}

function mesTexto(mes) {
    let mesAnoTexto;

    switch (mes) {
        case 0:
            mesAnoTexto = 'Janeiro';
            return mesAnoTexto;
        case 1:
            mesAnoTexto = 'Fevereiro';
            return mesAnoTexto;
        case 2:
            mesAnoTexto = 'Março';
            return mesAnoTexto;
        case 3:
            mesAnoTexto = 'Abril';
            return mesAnoTexto;
        case 4:
            mesAnoTexto = 'Maio';
            return mesAnoTexto;
        case 5:
            mesAnoTexto = 'Junho';
            return mesAnoTexto;
        case 6:
            mesAnoTexto = 'Julho';
            return mesAnoTexto;
        case 7:
            mesAnoTexto = 'Agosto';
            return mesAnoTexto;
        case 8:
            mesAnoTexto = 'Setembro';
            return mesAnoTexto;
        case 9:
            mesAnoTexto = 'Outubro';
            return mesAnoTexto;
        case 10:
            mesAnoTexto = 'Novembro';
            return mesAnoTexto;
        case 11:
            mesAnoTexto = 'Dezembro';
            return mesAnoTexto;
    }

}

function formataData(data) {
    const sem = diaDaSemana(data.getDay());
    const dia = zeroAesquerda(data.getDate());
    const mes = mesTexto(data.getMonth());
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());

    return `${sem}, ${dia} de ${mes} de ${ano}, ${hora}:${min}`;
}


