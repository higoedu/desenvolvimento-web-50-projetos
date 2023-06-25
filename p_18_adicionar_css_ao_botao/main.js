function trocarCorFundo(){
    let cores = ['red', 'blue', 'green', 'orange'];
    let randomCor = cores[Math.floor(Math.random() * cores.length)];

    document.body.style.backgroundColor = randomCor;
}

/*
Math.round//retorna o valor mais próximo do inteiro
Math.ceil//retorna o valor mais próximo do inteiro para cima
Math.floor//retorna o valor mais próximo do inteiro para baixo
Math.max//retorna o valor do maior inteiro
Math.min//retorna o valor do menor inteiro
Math.floor(Math.random() * 100)//retorna o valor randômico valor de 0 a 1
* 100 anda duas casas decimais
*/
