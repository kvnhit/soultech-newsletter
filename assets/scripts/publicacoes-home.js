document.addEventListener('DOMContentLoaded', function () {
    const publicacoes = JSON.parse(localStorage.getItem('publicacoes')) || [];
    const noticias = publicacoes.filter(item => item.tipo === 'noticia').slice(-3);
    const noticiasBodySection = document.querySelector('.noticias .body-section');
    noticias.forEach(noticia => {
        adicionarNoticiaNaPagina(noticia, noticiasBodySection);
    });
    const artigos = publicacoes.filter(item => item.tipo === 'artigo').slice(-3);
    const artigosBodySection = document.querySelector('.artigos .body-section');
    artigos.forEach(artigo => {
        adicionarArtigoNaPagina(artigo, artigosBodySection);
    });
    const tutoriais = publicacoes.filter(item => item.tipo === 'tutorial').slice(-3);
    const tutoriaisBodySection = document.querySelector('.tutoriais .body-section');
    tutoriais.forEach(tutorial => {
        adicionarTutorialNaPagina(tutorial, tutoriaisBodySection);
    });
});

function adicionarNoticiaNaPagina(noticia, container) {
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
}

function adicionarArtigoNaPagina(artigo, container) {
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
}

function adicionarTutorialNaPagina(tutorial, container) {
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
}
