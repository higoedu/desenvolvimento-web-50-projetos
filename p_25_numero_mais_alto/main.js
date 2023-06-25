let numero1Input = document.getElementById('numero1');
let numero2Input = document.getElementById('numero2');
let mostrarDiv = document.getElementById('saida');

function mostrarNumerosMaisAlto() {
    let numero1 = Number(numero1Input.value);
    let numero2 = Number(numero2Input.value);

    let numeroMaisAlto = (numero1 > numero2) ? numero1 : numero2;

    mostrarDiv.innerHTML = 'O número mais alto é ' + numeroMaisAlto;
}