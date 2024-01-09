document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const publicacaoId = urlParams.get('id');
    const publicacoes = JSON.parse(localStorage.getItem('publicacoes')) || [];
    const publicacaoSelecionada = publicacoes.find(item => item.id === parseInt(publicacaoId));
    console.log(publicacaoSelecionada)
    console.log(publicacoes.map(item => item.id));
    if (publicacaoSelecionada) {
        preencherDetalhesPublicacao(publicacaoSelecionada);
    }
});

function preencherDetalhesPublicacao(publicacao) {
    const detalhesPublicacao = document.getElementById('detalhes-publicacao');
    detalhesPublicacao.innerHTML = `
        <h2>${publicacao.titulo}</h2>
        <img src="${publicacao.imagem}" alt="${publicacao.titulo}">
        <p>${publicacao.publicacao}</p>
        <footer>
            <img src="../../assets/img/usuarios/usuario.png" alt="Imagem do autor da publicação">
            <span>${publicacao.autor}</span>
        </footer>
    `;
}
