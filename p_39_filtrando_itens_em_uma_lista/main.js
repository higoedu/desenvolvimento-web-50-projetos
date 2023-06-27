const pesquisa = document.querySelector('#pesquisa');
const lista = document.querySelector('#lista');

pesquisa.addEventListener('input', () => {
  const value = pesquisa.value.toLowerCase();
  const items = lista.getElementsByTagName('li');
  Array.from(items).forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.indexOf(value) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
