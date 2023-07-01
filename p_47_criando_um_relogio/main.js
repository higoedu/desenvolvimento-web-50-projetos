const relogioElement = document.getElementById('relogio');

function alterarRelogio() {
  const data = new Date();
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');
  const segundo = data.getSeconds().toString().padStart(2, '0');
  relogioElement.textContent = `${hora}:${minuto}:${segundo}`;
}

alterarRelogio();
setInterval(alterarRelogio, 1000);