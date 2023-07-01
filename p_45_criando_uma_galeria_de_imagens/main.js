// Adicionar ouvinte de evento ao contêiner da galeria
document.querySelector('.galeria').addEventListener('click', (event) => {
    
    // Verifique se o elemento clicado é uma imagems
    if (event.target.tagName === 'IMG') {
    
      // Criar um novo elemento modal
      const modal = document.createElement('div');
      modal.classList.add('modal');
    
      // Criar um novo elemento de imagems
      const modalImg = document.createElement('img');
      modalImg.src = event.target.src;
    
      // Adicione o elemento de imagem ao elemento modal
      modal.appendChild(modalImg);
    
      // Adicione o elemento modal à página
      document.body.appendChild(modal);
    
      // Adicionar ouvinte de evento ao elemento modal
      modal.addEventListener('click', () => {
    
        // Remova o elemento modal da página
        document.body.removeChild(modal);
      });
    }
  });
  