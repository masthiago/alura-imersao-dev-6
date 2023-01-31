/*
 *
 * Imersão Dev Alura - 6a Ed.
 * 
 * Dia 01. Desafio 01.
 * Adicionar outras moedas para converter
 * 
 * Esse script permite que, com o formulário do arquivo index.html o usuário
 * insira o valor da cotação de uma moeda, o preço um produto informado nesta
 * mesma moeda e ao clica no botão Calcula saiba qual o preço desse produto
 * em R$, a partir da cotação informada.
 * 
 */

// Contantes para captura dos elemementos usados no cálculo.

const quotation = document.querySelector('#quotation');  // Campo Cotação
const price = document.querySelector('#price');          // Campo Preço
const converted = document.querySelector('#converted');  // Campo Convertido
const calc = document.querySelector('#calc');            // Botão Calcular
const error = document.querySelector('#error');          // Mensagem de erro

// Qual o botão Calcula for pressionado
calc.addEventListener(
    'click', function () {
        
        var quotationValue = quotation.value;  // Registrar valor no campo Cotação
        var priceValue = price.value;          // Registrar valor no campo Preço

        // Os valores devem ser numércios e maiores que 0
        // a variável ok armazena a comparação se todos os campo estão de acordo com
        // essa condição. o valor dessa variável será do tipo boleano (true ou false).
        var ok = quotationValue && 
                 priceValue && 
                 quotationValue > 0 && 
                 priceValue > 0;

        // Se a variável ok armaneza true (todas as condições foram satisfeitas)
        if (ok) {

            // Realize e armazene o valor da multiplicação entre a Cotação e Preço
            // e já realize a formação do número para conter apenas duas casas decimais.
            var convertedValue = (quotationValue * priceValue).toFixed(2);
            
            // Aplique o valor calculado em uma string com símbolo R$ a frente do valor
            converted.value = `R$ ${convertedValue}`;

            // Limpe o campo de exibição erro, caso tenha sido modificado anteriormente.
            error.innerHTML = null;

        // Caso a variável ok armazene um false (alguma condição não foi satisfeita)
        } else {

            // Limpe o campo Convertido
            converted.value = null;

            // Aplica a mensagem de erro que informa as condições de funcionamento.
            error.innerHTML = 'Valores inválidos. Para os dois campos é necessário usar valores positivos e maiores que zero.';

        }
    }
);