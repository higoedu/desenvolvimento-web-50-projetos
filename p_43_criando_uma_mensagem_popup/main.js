const abrirModalButton = document.getElementById("abrirModal");
const modal = document.getElementById("modal");
const fecharModalButton = document.getElementsByClassName("fechar")[0];

abrirModalButton.addEventListener("click", function() {
  modal.style.display = "block"; // Mostrar o modal
});

fecharModalButton.addEventListener("click", function() {
  modal.style.display = "none"; // Esconder o modal
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Esconder o modal quando o usuário clica fora dele
  }
});
