/*
 *
 * Imersão Dev Alura - 6a Ed.
 * 
 * Dia 01. Desafio 02.
 * Converter Anos-Luz em Metros
 * 
 * Esse script permite que, com o formulário do arquivo index.html o usuário
 * insira o valor da distância em Anos Luz e receba o valor aproximado dessa 
 * distância convertida em metros.
 * 
 */

const lightYears = document.querySelector('#lightyears');
const meters = document.querySelector('#meters');
const calc = document.querySelector('#calc');
const error = document.querySelector('#error');


// Distância da luz em um segundo
// 300000000 metros em um segundo
// Notação científica: 3e8 => 3*10^8 => 300000000
const lightSpeed = 3e8;

// armazena o total em metros percorrido em um ano na velocidade da luz
const oneLightYearToMeters = lightSpeed *   // distância em metros em um segundo
    60 *   // segundos em um minuto
    60 *   // minutos em uma hora
    24 *   // horas em um dia
    365;   // dias em um ano

calc.addEventListener('click', function () {
    
    var lightYearsValue = lightYears.value;  // Coleta o valor no campo Anos Luz.
    var ok = lightYearsValue && lightYearsValue > 0;  // Verifica se o valor é válido;

    // Sendo um valor válido
    if (ok) {
        // Inicia a variável calcValue com o resultado da conversão.
        var calcValue = lightYearsValue * oneLightYearToMeters;
        meters.value = `${calcValue} metros`;  // Aplica o valor no campo Metros
        error.innerHTML = null;  // Remove mensagem de erro
    } else {
        
        // Exibe mensagem de erro.
        error.innerHTML = 'O valor informado não é válido. Use apenas número positivos maiores que 0.';

        // Limpa o campo metros para não exibir valores anteriores
        // que poderiam causar dificuldade de interpretação pelo usuário.
        meters.value = null;
    }  

});
