document.addEventListener('DOMContentLoaded', function () {
    carregarPublicacoesNoLocalStorage();
    carregarUsuariosNoLocalStorage();

    const publicacoes = JSON.parse(localStorage.getItem('publicacoes')) || [];
    const noticias = filtrarEOrdenarPublicacoes(publicacoes, 'noticia', 3);
    const artigos = filtrarEOrdenarPublicacoes(publicacoes, 'artigo', 3);
    const tutoriais = filtrarEOrdenarPublicacoes(publicacoes, 'tutorial', 3);

    exibirPublicacoes(noticias, '.noticias .body-section');
    exibirPublicacoes(artigos, '.artigos .body-section');
    exibirPublicacoes(tutoriais, '.tutoriais .body-section');
});

function filtrarEOrdenarPublicacoes(publicacoes, tipo, quantidade) {
    const publicacoesFiltradas = publicacoes.filter(item => item.tipo === tipo);
    const publicacoesOrdenadas = publicacoesFiltradas.sort((a, b) => b.id - a.id);
    return publicacoesOrdenadas.slice(0, quantidade);
}

function exibirPublicacoes(publicacoes, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
        publicacoes.forEach(publicacao => {
            switch (publicacao.tipo) {
                case 'noticia':
                    adicionarNoticiaNaPagina(publicacao, container);
                    break;
                case 'artigo':
                    adicionarArtigoNaPagina(publicacao, container);
                    break;
                case 'tutorial':
                    adicionarTutorialNaPagina(publicacao, container);
                    break;
                default:
                    console.error('Tipo de publicação não reconhecido:', publicacao.tipo);
            }
        });
    } else {
        console.error('Container não encontrado:', containerSelector);
    }
}

function adicionarNoticiaNaPagina(noticia, container) {
    const divNoticia = document.createElement('div');
    divNoticia.innerHTML = `
        <a href="view/publicacoes/publicacao-aberta.html?id=${noticia.id}">
            <img src="${noticia.imagem}" alt="${noticia.titulo}" class="img-publicacao">
            <div class="descricao">
                <p>${noticia.descricao}</p>
            </div>
        </a>
    `;
    container.appendChild(divNoticia);
}

function adicionarArtigoNaPagina(artigo, container) {
    const divArtigo = document.createElement('div');
    divArtigo.innerHTML = `
        <a href="view/publicacoes/publicacao-aberta.html?id=${artigo.id}">
            <img src="${artigo.imagem}" alt="${artigo.titulo}" class="img-publicacao">
            <div class="descricao">
                <p>${artigo.descricao}</p>
            </div>
        </a>
    `;
    container.appendChild(divArtigo);
}

function adicionarTutorialNaPagina(tutorial, container) {
    const divTutorial = document.createElement('div');
    divTutorial.innerHTML = `
        <a href="view/publicacoes/publicacao-aberta.html?id=${tutorial.id}">
            <img src="${tutorial.imagem}" alt="${tutorial.titulo}" class="img-publicacao">
            <div class="descricao">
                <p>${tutorial.descricao}</p>
            </div>
        </a>
    `;
    container.appendChild(divTutorial);
}


function carregarPublicacoesNoLocalStorage() {
    if (!localStorage.getItem('publicacoesCarregadas')) {
        //item para controle a prioridade dos ids
        localStorage.setItem('id', 16);
      const urlPublicacoes = '../assets/scripts/publicacoes.json';
      fetch(urlPublicacoes)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erro HTTP! Código: ${response.status}`);
          }
          return response.json();
        })
        .then(publicacoes => {
          localStorage.setItem('publicacoes', JSON.stringify(publicacoes));
          console.log('Dados carregados no localStorage com sucesso!');
          localStorage.setItem('publicacoesCarregadas', 'true');
        })
        .catch(error => {
          console.error('Erro ao carregar o arquivo publicacoes.json:', error);
        });
    } else {
      console.log('Os dados já foram carregados anteriormente.');
    }
}

function carregarUsuariosNoLocalStorage() {
    if (!localStorage.getItem('usuariosCarregadas')) {
      const urlUsuarios = '../assets/scripts/usuarios.json';
      fetch(urlUsuarios)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erro HTTP! Código: ${response.status}`);
          }
          return response.json();
        })
        .then(usuarios => {
          localStorage.setItem('usuarios', JSON.stringify(usuarios));
          console.log('Dados carregados no localStorage com sucesso!');
          localStorage.setItem('usuariosCarregadas', 'true');
        })
        .catch(error => {
          console.error('Erro ao carregar o arquivo usuarios.json:', error);
        });
    } else {
      console.log('Os dados já foram carregados anteriormente.');
    }
}