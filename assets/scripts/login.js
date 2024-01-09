'use strict'

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

function makeSignIn() {
	const loginEmail = document.getElementById('loginEmail')
	const loginPassword = document.getElementById('loginPassword')

	if (loginEmail.innerHTML === '') exibirModal('Campo vazio')
}
