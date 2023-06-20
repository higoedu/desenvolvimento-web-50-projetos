let listaCores = [];

for(let i = 1; i <= 3; i++){
    let corUsuario = prompt('Digite a cor ' + i + ':');

    listaCores.push(corUsuario);
}

//alert('Sua lista de cores ficou assim: ' + listaCores);

document.getElementById('listaCores').innerHTML = listaCores;
