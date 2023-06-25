let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let operador = document.getElementById('operador');
let calcularButton = document.getElementById('calcular');
let resultadoDiv = document.getElementById('resultado');

calcularButton.addEventListener('click', function() {
    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);
    let oper = operador.value;
    let res;

    switch (oper) {
        case '+':
            res = num1 + num2;
            break;
    
        case '+':
            res = num1 - num2;
            break;

        case '*':
            res = num1 * num2;
            break;

        case '/':
            res = num1 / num2;
            break;
        
        default:
            res = 'operação inválida';
            break;
    }

    resultadoDiv.innerHTML = 'O resultado é ' + res;
});
