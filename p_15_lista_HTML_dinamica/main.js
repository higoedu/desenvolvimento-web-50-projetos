let frutas = ['banana', 'abacate', 'manga'];
let listaNumeros = document.getElementById('listaNumeros');

for(i = 1; i < 3; i++){
    let listaItem = document.createElement('li');//cria um elemento
    //listaItem.textContent = 'Item ' + i;//insere um conteúdo com sendo um texto
    listaItem.appendChild(document.createTextNode(frutas[i]));//como adicionar a um documento
    listaNumeros.appendChild(listaItem);//adicione tudo que esta aqui atrás depois do último item
}