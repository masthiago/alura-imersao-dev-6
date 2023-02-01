/*
 *
 * Imersão Dev Alura - 6a Ed.
 * 
 * Dia 01. Desafio 03.
 * Converter Anos-Luz em Metros
 * 
 * Esse script permite que, com o formulário do arquivo index.html o usuário
 * insira o valor de uma temperatura, informe qual unidade de medida esse
 * valor refere-se e ao clicar no botão calcular o valor informado seja
 * convertido para as outras unidades de medida de temperatura. 
 * As unidades reconhecidas nesse script são celsius, fahrenheit e kelvin.
 * 
 */


// Captura dos inputs de formulários presentes no html
const temperature = document.querySelector('#temperature');         // Campo Temperatura
const celsiusResult = document.querySelector('#celsiusres');        // Campo de Resultado para Celsius
const fahrenheitResult = document.querySelector('#fahrenheitres');  // Campo de Resultado para Fahrenheit
const kelvinResult = document.querySelector('#kelvinres');          // Campo de Resultado para Kelvin
const calc = document.querySelector('#calc');                       // Botão Calcular
const error = document.querySelector('#error');                     // Área de exibição de erro


// Função que converte celsius para fahrenheit
function celsiusToFahrenheit(celsius){
    return (9/5) * celsius + 32;
}

// Função que converte celsius para kelvin
function celsiusToKelvin(celsius){
    // T(K) = T(°C) + 273.15
    return celsius + 273.15;
}

// Função que converte fahrenheit para celsius
function fahrenheitToCelsius(fahrenheit){
    // (℉ - 32) / 1800
    return (fahrenheit - 32) / 1.8;
}

// Função que converte fahrenheit para kelvin
function fahrenheitToKelvin(fahrenheit){
    // K = (y °F + 459,67) x 5/9
    return (fahrenheit + 459.67) * (5/9);
}

// Função que converte kelvin para celsius
function kelvinToCelsius(kelvin){
    // T(°C) = K - 273.15 
    return kelvin - 273.15;
}

// Função que converte kelvin para fahrenheit
function kelvinToFahrenheit(kelvin){
    // F = (K − 273.15) × 1.8 + 32
    return (kelvin - 273.15) * 1.8 + 32;
}

// Ao clicar no botão calcular
calc.addEventListener('click', function () {

    // Capture o valor que está no campo Temperatura informada pelo usuário
    var temperatureValue = temperature.value;

    // Checa se é um número, espaços ou vazio. A variável ok armazenará um booleano,
    // true caso seja apenas número ou false se não for apenas números
    var ok = !(
        isNaN(Number(temperatureValue)) || /^ *$/.test(temperatureValue)
    )

    // Se o teste para apenas números for válido
    if (ok) {

        // limpe o campo de erro, que pode conter mensagens anteriores
        error.innerHTML = null;

        // Colete do radio button a unidade de medida de temperatura informada pelo usuário
        var typeOf = document.querySelector('input[name="typeof"]:checked').value;

        // Garanta que o valor da temperatura seja usado pelo javascript como um número
        // pois 1 é diferente de '1'.
        temperatureValue = Number(temperatureValue);

        // Se a temperatura informada pelo usuários for em celsius
        if (typeOf == 'celsius') {
            celsiusResult.value = null;  // Esvazie o campo celsius
            fahrenheitResult.value = celsiusToFahrenheit(temperatureValue).toFixed(1);  // Calcule e preencha o campo fahrenheint
            kelvinResult.value = celsiusToKelvin(temperatureValue).toFixed(1);  // Calcule e preencha o campo kelvin
        // Caso não seja celsius, mas seja fahrenheit
        } else if (typeOf == 'fahrenheit') {
            fahrenheitResult.value = null;  // Esvaziar
            celsiusResult.value = fahrenheitToCelsius(temperatureValue).toFixed(1); // Para celsius
            kelvinResult.value = fahrenheitToKelvin(temperatureValue).toFixed(1);  // Para kelvin
        // Caso não tenha sido celsius, nem fahrenheit, mas seja kelvin
        } else if (typeOf == 'kelvin') {
            kelvinResult.value = null;  // Esvaziar
            fahrenheitResult.value = kelvinToFahrenheit(temperatureValue).toFixed(1);   // Para fahrenheit
            celsiusResult.value = kelvinToCelsius(temperatureValue).toFixed(1);     // Para celsius
        // Se não for nenhum dos anterioes (esse caso não é esperado)
        } else {
            // Limpe todos os campos
            celsiusResult.value = null;
            fahrenheitResult.value = null;
            kelvinResult.value = null;

            // Apresente o erro
            error.innerHTML = 'Há algo errado, verifique se os dados informados estão corretos.';
        }
    // Caso o teste de número não seja válido
    } else {
        // Limpe todos os campos
        celsiusResult.value = null;
        fahrenheitResult.value = null;
        kelvinResult.value = null;

        // Apresente o erro.
        error.innerHTML = 'Preencer apenas com números.';
    }
});
