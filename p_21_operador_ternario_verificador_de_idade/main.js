let verificadorButton = document.getElementById('verificador-button');
let idadeInput = document.getElementById('idade-input');

//método para escutar clique que acontece no botão do html
//vai rodar uma função
//escuta um clique lá do botão e executa essa função
verificadorButton.addEventListener('click', function() {
    let idade = idadaInput.value;//busca o que foi digitado no campo
    //tomar decisão
    let mensagem = (idade >= 18) ? 'Você é um adulto' : 'Você não é um adulto';//operador ternário

    alert(mensagem);

    idadeInput.value = '';//limpa campo
})