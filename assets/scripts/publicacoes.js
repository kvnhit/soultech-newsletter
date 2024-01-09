document.addEventListener('DOMContentLoaded', function () {
    const publicacoes = JSON.parse(localStorage.getItem('publicacoes')) || [];
    const paginaAtual = determinarPaginaAtual();
    publicacoes.forEach(item => {
        switch (item.tipo) {
            case 'noticia':
                if (paginaAtual === 'noticias') {
                    adicionarNoticiaNaPagina(item, '.noticias .body-section');
                }
                break;
            case 'artigo':
                if (paginaAtual === 'artigos') {
                    adicionarArtigoNaPagina(item, '.artigos .body-section');
                }
                break;
            case 'tutorial':
                if (paginaAtual === 'tutoriais') {
                    adicionarTutorialNaPagina(item, '.tutoriais .body-section');
                }
                break;
            default:
                console.error('Tipo de publicação não reconhecido:', item.tipo);
        }
    });
});

function adicionarNoticiaNaPagina(noticia, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
        const divNoticia = document.createElement('div');
        divNoticia.innerHTML = `
            <a href="publicacoes/publicacao-aberta.html?id=${noticia.id}">
                <img src="${noticia.imagem}" alt="${noticia.titulo}" class="img-publicacao">
                <div class="descricao">
                    <p>${noticia.descricao}</p>
                </div>
            </a>
        `;
        container.appendChild(divNoticia);
    } else {
        console.error('Container não encontrado:', containerSelector);
    }
}

function adicionarArtigoNaPagina(artigo, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
        const divArtigo = document.createElement('div');
        divArtigo.innerHTML = `
            <a href="publicacoes/publicacao-aberta.html?id=${artigo.id}">
                <img src="${artigo.imagem}" alt="${artigo.titulo}" class="img-publicacao">
                <div class="descricao">
                    <p>${artigo.descricao}</p>
                </div>
            </a>
        `;
        container.appendChild(divArtigo);
    } else {
        console.error('Container não encontrado:', containerSelector);
    }
}

function adicionarTutorialNaPagina(tutorial, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
        const divTutorial = document.createElement('div');
        divTutorial.innerHTML = `
            <a href="publicacoes/publicacao-aberta.html?id=${tutorial.id}">
                <img src="${tutorial.imagem}" alt="${tutorial.titulo}" class="img-publicacao">
                <div class="descricao">
                    <p>${tutorial.descricao}</p>
                </div>
            </a>
        `;
        container.appendChild(divTutorial);
    } else {
        console.error('Container não encontrado:', containerSelector);
    }
}

function determinarPaginaAtual() {
    const caminhoAtual = window.location.pathname;
    switch (true) {
        case caminhoAtual.includes('/noticias.html'):
            return 'noticias';
        case caminhoAtual.includes('/artigos.html'):
            return 'artigos';
        case caminhoAtual.includes('/tutoriais.html'):
            return 'tutoriais';
        default:
            return false;
    }
}