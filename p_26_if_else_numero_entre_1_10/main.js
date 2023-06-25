let numeroInput = document.getElementById('numero');
let verificarButton = document.getElementById('verificarButton');
let mostrarDiv = document.getElementById('saida');

verificarButton.addEventListener("click", function () {
    let numero = Number(numeroInput.value);
    
    if(numero >= 1 && numero <= 10){
        mostrarDiv.innerHTML = 'O número válido!';
    }
    else if(numero < 1){
        mostrarDiv.innerHTML = 'O número muito baixo!';
    }
    else if(numero > 10){
        mostrarDiv.innerHTML = 'O número muito alto!';
    }
    else{
        mostrarDiv.innerHTML = 'Algo deu errado!';
    }
});