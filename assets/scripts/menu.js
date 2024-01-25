document.addEventListener('DOMContentLoaded', function () {
    atualizarMenu(); 
  });
  
  function atualizarMenu() {
    const cadastroLoginLink = document.getElementById('cadastroLoginLink');
    const linkEscreva = document.getElementById('linkEscreva');
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioLogado = usuarios.find(u => u.logado);
    if (usuarioLogado) {
      cadastroLoginLink.style.display = 'none';
      linkEscreva.style.display = 'inline';
      exibirUsuarioLogado(usuarioLogado);
    } else {
      cadastroLoginLink.style.display = 'inline';
      linkEscreva.style.display = 'none';
      ocultarUsuarioLogado();
    }
  }
  
  function exibirUsuarioLogado(usuario) {
    ocultarUsuarioLogado();
    const nomeUsuarioElement = document.createElement('span');
    nomeUsuarioElement.textContent = `Olá, ${usuario.nomeCompleto.split(' ')[0]}! `;
    nomeUsuarioElement.style.fontSize = '20px'; 
    const usuarioDiv = document.createElement('div');
    usuarioDiv.appendChild(nomeUsuarioElement);
    const logoutLink = document.createElement('a');
    logoutLink.href = '#'; 
    logoutLink.textContent = 'Logout';
    logoutLink.style.fontSize = '12px';
    logoutLink.style.color = '#ff0000';
    logoutLink.addEventListener('click', deslogar);
    usuarioDiv.appendChild(logoutLink);
    const header = document.querySelector('header');
    header.appendChild(usuarioDiv);
  }
  
  function ocultarUsuarioLogado() {
    const nomeUsuarioElement = document.querySelector('nav span');
    const logoutLink = document.querySelector('nav a[href="#"]');
    if (nomeUsuarioElement) {
      nomeUsuarioElement.remove();
    }
    if (logoutLink) {
      logoutLink.remove();
    }
  }
  
  function deslogar() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioLogado = usuarios.find(u => u.logado);
    if (usuarioLogado) {
      usuarioLogado.logado = false;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      window.location.href = '../index.html';
    }
  }
  