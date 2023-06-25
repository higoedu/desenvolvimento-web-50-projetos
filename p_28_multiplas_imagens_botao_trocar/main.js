const imagens = [
    "imagens/imagem_1.jpg",
    "imagens/imagem_2.jpg",
    "imagens/imagem_3.jpg"
]

let indiceAtual = 0;

let imagemElement = document.getElementById('imagem');
let botaoElement = document.getElementById('botao');

botaoElement.addEventListener('click', function() {
    indiceAtual++;

    if(indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    imagemElement.src = imagens[indiceAtual];
});