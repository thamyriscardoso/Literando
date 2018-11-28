import {login, cadastro, logout} from './firebase-auth.js';
const btnCadastro = document.querySelector('#cadastrar');
const btnLogin = document.querySelector('#entrar');
const btnSair = document.querySelector('#btnSair');
const btnClose = document.querySelector('#close');


btnCadastro.addEventListener('click', function(e) {
    e.preventDefault();
    const inputEmail = document.querySelector('#cadastroEmail').value;
    const inputSenha = document.querySelector('#cadastroSenha').value;
    cadastro(inputEmail, inputSenha);
});
btnLogin.addEventListener('click', function(e) {
    e.preventDefault();
    const inputEmail = document.querySelector('#loginEmail').value;
    const inputSenha = document.querySelector('#loginSenha').value;
    login(inputEmail, inputSenha);
});
btnSair.addEventListener('click', logout);
btnClose.addEventListener('click', function() {
    document.querySelector('#msgError').style = 'display:none';
});
