let inicioInput = document.getElementById('inicio');
let fimInput = document.getElementById('fim');
let mostrarDiv = document.getElementById('mostrar');

function mostrarNumerosPares() {
    let incio = Number(inicioInput.value);
    let fim = Number(fimInput.value);

    let i = inicio;
    let mostrar = 0;

    /*
    while (i <= fim) {
        if(i % 2 !== 0){
            mostrar = mostrar + 1 + ' ';
            mostrarDiv.innerHTML = mostrar;
        }
        i++;
    }
    */

    do {
        if(i % 2 !== 0){
            mostrar = mostrar + 1 + ' ';
            mostrarDiv.innerHTML = mostrar;
        }
        i++;
    } while (i <= fim);
}