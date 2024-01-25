document.addEventListener('DOMContentLoaded', function () {
    bloquearSelectNoticia();
    document.getElementById('descricao').addEventListener('input', function () {
        if (this.value.length > 255) {
            this.value = this.value.slice(0, 255);
            exibirModal('Descrição ultrapassou o limite de 255 caracteres');
        }
    });
    document.getElementById('formPublicacao').addEventListener('submit', function (event) {
        event.preventDefault(); 
        if (validarFormulario()) {
            const titulo = document.getElementById('titulo').value;
            const tipo = document.getElementsByName('tipo-publicacao')[0].value;
            const descricao = document.getElementById('descricao').value;
            const publicacao = document.getElementById('publicacao').value.replace(/\n/g, '<br>');
            const imagem = document.getElementById('imagem').files[0];
            let id = parseInt(localStorage.getItem('id')) || 0;
            id++;
            localStorage.setItem('id', id);
            const reader = new FileReader();
            reader.onload = function (event) {
                const imagemString = event.target.result;
                const novaPublicacao = {
                    id,
                    titulo,
                    imagem: imagemString,
                    tipo,
                    descricao,
                    publicacao,
                };
                adicionarPublicacao(novaPublicacao);
            };
            reader.readAsDataURL(imagem);
        }
    });

    function adicionarPublicacao(novaPublicacao) {
        let publicacoes = JSON.parse(localStorage.getItem('publicacoes')) || [];
        publicacoes.push(novaPublicacao);
        localStorage.setItem('publicacoes', JSON.stringify(publicacoes));
        document.getElementById('formPublicacao').reset();
        exibirModal('Publicação criada com sucesso!');
    }

    function exibirModal(message) {
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');
        modal.style.display = 'block';
        modalMessage.textContent = message;
        const okBtn = document.getElementById('okBtn');
        okBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    function validarFormulario() {
        const titulo = document.getElementById('titulo').value;
        const imagem = document.getElementById('imagem').value;
        const tipoPublicacao = document.getElementsByName('tipo-publicacao')[0].value;
        const descricao = document.getElementById('descricao').value;
        const publicacao = document.getElementById('publicacao').value;
        if (!titulo || !imagem || tipoPublicacao === '' || !descricao || !publicacao) {
            exibirModal('Por favor, preencha todos os campos.');
            return false;
        }
        if (titulo.length < 10) {
            exibirModal('O título deve ter pelo menos 10 caracteres.');
            return false;
        }
        return true;
    }

    function bloquearSelectNoticia(){
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioLogado = usuarios.find(u => u.logado);
        if (usuarioLogado.status != 'admin') {
            const optionNoticia = document.querySelector('.option-noticia');
            if (optionNoticia) {
            optionNoticia.style.display = 'none';
            }
        }
    }
});
