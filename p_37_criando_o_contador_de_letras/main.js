const textoInput = document.getElementById('texto-input');
const contadoButton = document.getElementById('contador-button');
const resultado = document.getElementById('resultado');

function contadorLetras() {
  const texto = textoInput.value;
  const contado = texto.length;
  resultado.textContent = `O texto contém ${count} letras.`;
}

contadoButton.addEventListener('click', contadorLetras);
