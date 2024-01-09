'use strict'

function signIn() {
	const signInDiv = document.getElementById('login')
	const signUpDiv = document.getElementById('cadastro')

	if (signUpDiv.style.display === 'block') {
		signUpDiv.style.display = 'none'
		signInDiv.style.display = 'block'
	} else signInDiv.style.display = 'block'
}

function signUp() {
	const signInDiv = document.getElementById('login')
	const signUpDiv = document.getElementById('cadastro')

	if (signInDiv.style.display === 'block') {
		signInDiv.style.display = 'none'
		signUpDiv.style.display = 'block'
	} else signUpDiv.style.display = 'block'
}

// function makeSignIn(){
//     const
// }
