const calcularButton = document.getElementById("calcular");
calcularButton.addEventListener("click", function() {
  const precoCarro = document.getElementById("preco").value;
  const pagamentoInicial = document.getElementById("pagamentoInicial").value;
  const prazoEmprestimo = document.getElementById("prazoEmprestimo").value;
  const taxaJuros = document.getElementById("taxaJuros").value;

  const montanteEmprestimo = precoCarro - pagamentoInicial;
  const taxaJurosMensal = (taxaJuros / 100) / 12;
  const numerosPagamentos = prazoEmprestimo;
  const pagamentoMensal = (montanteEmprestimo * taxaJurosMensal) / (1 - Math.pow(1 + taxaJurosMensal, - numerosPagamentos));
  
  const resultado = document.getElementById("result");
  resultado.textContent = `Pagamento mensal: $${pagamentoMensal.toFixed(2)}`;
});
