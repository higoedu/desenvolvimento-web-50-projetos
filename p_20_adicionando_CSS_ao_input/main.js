let randomNumero = Math.floor(Math.random() * 100);
let tentativas = 0;

console.log(randomNumero);

function verificarNumero() {
    let verifique = document.getElementById('adivine').value;//pega o valor que foi digitado naquele input
    let mensagem = document.getElementById('mensagem');
    tentativas++;

    if (verifique == randomNumero) {
        mensagem.innerHTML = 'Parabéns, você adivinhou o número em ' + tentativas +' tentativas!';
    }
    else if (verifique < randomNumero) {
        mensagem.innerHTML = 'Muito baixo, tente novamente!';
    }
    else {
        mensagem.innerHTML = 'Muito alto, tente novamente!';
    }
}
