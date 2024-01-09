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
			if (loginEmail.value || loginPassword.value === '') {
				exibirModal('Por favor, preencha todos os campos.')
				return false
			}

			if (loginEmail.value === '') {
				exibirModal('O campo Email não pode estar vazio!')
				return false
			}
			if (loginPassword.value === '') {
				exibirModal('O campo Senha não pode estar vazio!')
				return false
			}
		} else if (signUpDiv.style.display === 'block') {
			const nomeCompleto = document.getElementById('nomeCompleto')
			const cadastroEmail = document.getElementById('cadastroEmail')
			const cadastroPassword = document.getElementById('cadastroPassword')
			const confirmacaoSenha = document.getElementById('confirmacaoSenha')

			if (nomeCompleto.value || cadastroEmail.value || cadastroPassword.value || confirmacaoSenha.value === '') {
				exibirModal('Por favor, preencha todos os campos.')
				return false
			}
			if (nomeCompleto.value === '') {
				exibirModal('O campo Email não pode estar vazio!')
				return false
			}
			if (cadastroEmail.value === '') {
				exibirModal('O campo Senha não pode estar vazio!')
				return false
			}
			if (cadastroPassword.value === '') {
				exibirModal('O campo Senha não pode estar vazio!')
				return false
			}
			if (confirmacaoSenha.value === '') {
				exibirModal('O campo Senha não pode estar vazio!')
				return false
			}
		} else return true
	}
})

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
