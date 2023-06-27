const contagemRegressiva = document.getElementById('contagemRegressiva');
const iniciarButton = document.getElementById('iniciar');
const pararButton = document.getElementById('parar');
const limparButton = document.getElementById('limpar');

let cronometro;
let tempoRetante = 0;

function alterarContagemRegressiva() {
  let minutos = Math.floor(tempoRetante / 60);
  let segundos = tempoRetante % 60;
  contagemRegressiva.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

function iniciarContagemRegressiva() {
  cronometro = setInterval(function() {
    if (tempoRetante > 0) {
      tempoRetante--;
      alterarContagemRegressiva();
    } else {
      pararContagemRegressiva();
    }
  }, 1000);
}

function pararContagemRegressiva() {
  clearInterval(cronometro);
}

function limparCountdown() {
  pararContagemRegressiva();
  tempoRetante = 0;
  alterarContagemRegressiva();
}

iniciarButton.addEventListener('click', function() {
  tempoRetante = 5 * 60; // 5 minutos em segundos
  iniciarContagemRegressiva();
});

pararButton.addEventListener('click', function() {
  pararContagemRegressiva();
});

limparButton.addEventListener('click', function() {
  limparContagemRegressiva();
});
