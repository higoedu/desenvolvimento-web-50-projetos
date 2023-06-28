const calculadora = {
    valorExibicao: '0',
    primeiroOperando: null,
    esperandoPeloSegundoOperando: false,
    operador: null,
  };
  
  function inputDigito(digito) {
    const { valorExibicao, esperandoPeloSegundoOperando } = calculadora;
  
    if (esperandoPeloSegundoOperando === true) {
      calculadora.valorExibicao = digito;
      calculadora.esperandoPeloSegundoOperando = false;
    } else {
      calculadora.valorExibicao = valorExibicao === '0' ? digito : valorExibicao + digito;
    }
  }
  
  function inputDecimal(ponto) {
    if (calculadora.esperandoPeloSegundoOperando === true) {
        calculadora.valorExibicao = "0."
      calculadora.esperandoPeloSegundoOperando = false;
      return
    }
  
    if (!calculadora.valorExibicao.includes(ponto)) {
      calculadora.valorExibicao += ponto;
    }
  }
  
  function handleOperator(proximoOperador) {
    const { primeiroOperando, valorExibicao, operador } = calculadora
    const valorEntrada = parseFloat(valorExibicao);
    
    if (operador && calculadora.esperandoPeloSegundoOperando)  {
      calculadora.operador = proximoOperador;
      return;
    }
  
  
    if (primeiroOperando == null && !isNaN(valorEntrada)) {
      calculadora.primeiroOperando = valorEntrada;
    } else if (operador) {
      const resultado = calcular(primeiroOperando, valorEntrada, operador);
  
      calculadora.valorExibicao = `${parseFloat(resultado.toFixed(7))}`;
      calculadora.primeiroOperando = resultado;
    }
  
    calculadora.esperandoPeloSegundoOperando = true;
    calculadora.operador = proximoOperador;
  }
  
  function calcular(primeiroOperando, segundoOperando, operador) {
    if (operador === '+') {
      return primeiroOperando + segundoOperando;
    } else if (operador === '-') {
      return primeiroOperando - segundoOperando;
    } else if (operador === '*') {
      return primeiroOperando * segundoOperando;
    } else if (operador === '/') {
      return primeiroOperando / segundoOperando;
    }
  
    return segundoOperando;
  }
  
  function limparCalculadora() {
    calculadora.valorExibicao = '0';
    calculadora.primeiroOperando = null;
    calculadora.esperandoPeloSegundoOperando = false;
    calculadora.operador = null;
  }
  
  function limparExibicao() {
    const exibicao = document.querySelector('.calculator-screen');
    exibicao.value = calculadora.valorExibicao;
  }
  
  limparExibicao();
  
  const chaves = document.querySelector('.calculator-keys');
  chaves.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
      return;
    }
  
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
        handleOperator(value);
        break;
      case '.':
        inputDecimal(value);
        break;
      case 'all-clear':
        limparCalculadora();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
          inputDigito(value);
        }
    }
  
    limparExibicao();
  });