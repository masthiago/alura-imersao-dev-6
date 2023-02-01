

const temperature = document.querySelector('#temperature');
const celsiusResult = document.querySelector('#celsiusres');
const fahrenheitResult = document.querySelector('#fahrenheitres');
const kelvinResult = document.querySelector('#kelvinres');
const calc = document.querySelector('#calc');
const error = document.querySelector('#error');


function celsiusToFahrenheit(celsius){
    // °F = (°C x 1,8) + 32
    return (9/5) * celsius + 32;
}

function celsiusToKelvin(celsius){
    // T(K) = T(°C) + 273.15
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit){
    // (℉ - 32) / 1800
    return (fahrenheit - 32) / 1.8;
}

function fahrenheitToKelvin(fahrenheit){
    // K = (y °F + 459,67) x 5/9
    return (fahrenheit + 459.67) * (5/9);
}

function kelvinToCelsius(kelvin){
    // T(°C) = K - 273.15 
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin){
    // F = (K − 273.15) × 1.8 + 32
    return (kelvin - 273.15) * 1.8 + 32;
}


calc.addEventListener('click', function () {

    var typeOf = document.querySelector('input[name="typeof"]:checked');

    var temperatureValue = temperature.value;

    // Checa se é um número, espaços ou vazio
    var ok = !(
        isNaN(Number(temperatureValue)) || /^ *$/.test(temperatureValue)
    )

    // console.log(temperatureValue == Number(temperatureValue), temperatureValue, Number(temperatureValue), /^ *$/.test(temperatureValue));

    // console.log( !(isNaN(Number(temperatureValue)) || /^ *$/.test(temperatureValue)) );

    if (ok) {

        error.innerHTML = null;

        var typeOf = document.querySelector('input[name="typeof"]:checked').value;

        temperatureValue = Number(temperatureValue);

        if (typeOf == 'celsius') {
            celsiusResult.value = null;
            fahrenheitResult.value = celsiusToFahrenheit(temperatureValue).toFixed(1);
            kelvinResult.value = celsiusToKelvin(temperatureValue).toFixed(1);
        } else if (typeOf == 'fahrenheit') {
            fahrenheitResult.value = null;
            celsiusResult.value = fahrenheitToCelsius(temperatureValue).toFixed(1);
            kelvinResult.value = fahrenheitToKelvin(temperatureValue).toFixed(1);
        } else if (typeOf == 'kelvin') {
            kelvinResult.value = null;
            fahrenheitResult.value = kelvinToFahrenheit(temperatureValue).toFixed(1);
            celsiusResult.value = kelvinToCelsius(temperatureValue).toFixed(1); 
        } else {
            celsiusResult.value = null;
            fahrenheitResult.value = null;
            kelvinResult.value = null;

            error.innerHTML = 'Há algo errado, verifique se os dados informados estão corretos.';
        }
    } else {

        celsiusResult.value = null;
        fahrenheitResult.value = null;
        kelvinResult.value = null;

        error.innerHTML = 'Preencer apenas com números.';

    }


    // console.log("c to f");
    // console.log(celsiusToFahrenheit(temperatureValue));

    // console.log("c to k");
    // console.log(celsiusToKelvin(temperatureValue));

    // console.log("f to c");
    // console.log(fahrenheitToCelsius(temperatureValue));

    // console.log("f to k");
    // console.log(fahrenheitToKelvin(temperatureValue));

    // console.log("k to c");
    // console.log(kelvinToCelsius(temperatureValue));

    // console.log("k to f");
    // console.log(kelvinToFahrenheit(temperatureValue));

});