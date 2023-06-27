const contador = document.getElementById('contador');
const incremetarButton = document.getElementById('incrementar');
const decrementarButton = document.getElementById('decrementar');
const limparButton = document.getElementById('limpar');

let cont = 0;

function alterarContador() {
    contador.textContent = cont;
}

incremetarButton.addEventListener('click', function() {
    cont++;
    alterarContador();
});

decrementarButton.addEventListener('click', function() {
    if (cont > 0) {
        cont--;
        alterarContador();
    }
});

limparButton.addEventListener('click', function() {
    cont = 0;
    alterarContador();
});
