document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('formLogin').addEventListener('submit', function (event) {
		event.preventDefault()
		if (validarFormulario()) {
			alert('Tudo certo!')
		}
	})
	document.getElementById('formCadastro').addEventListener('submit', function (event) {
		event.preventDefault()
		if (validarFormulario()) {
			alert('Tudo certo!')
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

function login() {
	const email = document.getElementById('loginEmail').value
	const password = document.getElementById('loginPassword').value

	const user = users.find(u => u.email === email)

	if (user && user.password === password) {
		alert('Login bem-sucedido!')

		localStorage.setItem('usuarioLogado', JSON.stringify(user))

		window.location.href = '../view/home.html'
	} else {
		alert('Usuário ou senha incorretos. Tente novamente.')
	}
}

function signup() {
	const newUsername = document.getElementById('nomeCompleto').value
	const newEmail = document.getElementById('cadastroEmail').value
	const newPassword = document.getElementById('cadastroPassword').value
	const newPasswordConfirmation = document.getElementById('confirmacaoSenha').value

	const userExists = users.some(u => u.username === newUsername)

	if (newPassword !== newPasswordConfirmation) alert('Senha não confere')

	if (userExists) alert('Usuário já cadastrado. Escolha um nome de usuário diferente.')
	else {
		users.push({ username: newUsername, email: newEmail, password: newPassword })
		alert('Cadastro bem-sucedido! Faça login agora.')
	}
}

function welcomeUser(isLogged) {
	debugger
	let divLoginLink = document.getElementById('loginLink')
	if (isLogged) {
		let novoH2 = document.createElement('h2')

		novoH2.textContent = 'Bem vindo'

		divLoginLink.innerHTML = ''
		divLoginLink.appendChild(novoH2)
	}
}

function verificarStatusLogin() {
	var usuarioLogado = localStorage.getItem('usuarioLogado')

	if (usuarioLogado) {
		var user = JSON.parse(usuarioLogado)
		console.log('Usuário logado:', user)

		exibirMensagemDeBoasVindas(user.username)
	} else {
		console.log('Nenhum usuário logado')

		window.location.href = '../view/login.html'
	}
}

function exibirMensagemDeBoasVindas(username) {
	document.getElementById('mensagemBoasVindas').innerHTML = 'Bem-vindo, ' + username + '!'
}
