document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('formLogin').addEventListener('submit', function (event) {
		event.preventDefault()
		if (validarFormulario()) {
			realizarLogin();
		}
	})
	document.getElementById('formCadastro').addEventListener('submit', function (event) {
		event.preventDefault()
		if (validarFormulario()) {
			cadastrarUsuario();
		}
	})

	function exibirModal(message) {
		const modal = document.getElementById('modal')
		const modalMessage = document.getElementById('modal-message')
		modal.style.display = 'block'
		modalMessage.textContent = message
		const okBtn = document.getElementById('okBtn')
		okBtn.addEventListener('click', function () {
			modal.style.display = 'none'
		})
		window.addEventListener('click', function (event) {
			if (event.target === modal) {
				modal.style.display = 'none'
			}
		})
	}

	function validarFormulario() {
		const signInDiv = document.getElementById('login')
		const signUpDiv = document.getElementById('cadastro')

		if (signInDiv.style.display === 'block') {
			const loginEmail = document.getElementById('loginEmail')
			const loginPassword = document.getElementById('loginPassword')
			if (loginEmail.value === '' || loginPassword.value === '') {
				exibirModal('Por favor, preencha todos os campos.')
				return false
			} else if (loginEmail.value === '') {
				exibirModal('O campo Email não pode estar vazio!')
				return false
			} else if (loginPassword.value === '') {
				exibirModal('O campo Senha não pode estar vazio!')
				return false
			} else return true
		} else if (signUpDiv.style.display === 'block') {
			const nomeCompleto = document.getElementById('nomeCompleto')
			const cadastroEmail = document.getElementById('cadastroEmail')
			const cadastroPassword = document.getElementById('cadastroPassword')
			const confirmacaoSenha = document.getElementById('confirmacaoSenha')

			if (nomeCompleto.value === '' || cadastroEmail.value === '' || cadastroPassword.value === '' || confirmacaoSenha.value === '') {
				exibirModal('Por favor, preencha todos os campos.')
				return false
			} else if (nomeCompleto.value === '') {
				exibirModal('O campo Email não pode estar vazio!')
				return false
			} else if (cadastroEmail.value === '') {
				exibirModal('O campo Senha não pode estar vazio!')
				return false
			} else if (cadastroPassword.value === '') {
				exibirModal('O campo Senha não pode estar vazio!')
				return false
			} else if (confirmacaoSenha.value === '') {
				exibirModal('O campo Senha não pode estar vazio!')
				return false
			} else return true
		} else return true
	}
})
const users = [{ username: 'admin', email: 'admin@gmail.com', password: '1234' }]
let isLogged = false

function showSignIn() {
	const signInDiv = document.getElementById('login')
	const signUpDiv = document.getElementById('cadastro')

	if (signUpDiv.style.display === 'block') {
		signUpDiv.style.display = 'none'
		signInDiv.style.display = 'block'
	} else signInDiv.style.display = 'block'
}

function ShowSignUp() {
	const signInDiv = document.getElementById('login')
	const signUpDiv = document.getElementById('cadastro')

	if (signInDiv.style.display === 'block') {
		signInDiv.style.display = 'none'
		signUpDiv.style.display = 'block'
	} else signUpDiv.style.display = 'block'
}

function cadastrarUsuario() {
	const nomeCompleto = document.getElementById('nomeCompleto').value;
	const email = document.getElementById('cadastroEmail').value;
	const senha = document.getElementById('cadastroPassword').value;
	const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;
  
	if (senha !== confirmacaoSenha) {
	  alert('As senhas não coincidem. Por favor, digite novamente.');
	  return;
	}
  
	const usuario = {
	  nomeCompleto,
	  email,
	  senha,
	  status: 'usuario',
	  logado: false,
	};

	const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
	if (usuarios.some(u => u.email === usuario.email)) {
	  alert('Este e-mail já está cadastrado. Por favor, use outro e-mail.');
	  return;
	}
	usuarios.push(usuario);
	localStorage.setItem('usuarios', JSON.stringify(usuarios));
	alert('Cadastro realizado com sucesso!');
	document.getElementById('formCadastro').reset();
}

function realizarLogin() {
	const email = document.getElementById('loginEmail').value;
	const senha = document.getElementById('loginPassword').value;
	const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
	const usuarioEncontrado = usuarios.find(u => u.email === email);
	if (usuarioEncontrado && usuarioEncontrado.senha === senha) {
		usuarioEncontrado.logado = true;
		localStorage.setItem('usuarios', JSON.stringify(usuarios));
		alert('Login realizado com sucesso!');
		window.location.href = 'home.html';
	} else {
	  	alert('Email ou senha incorretos. Por favor, tente novamente.');
	}
}

  
