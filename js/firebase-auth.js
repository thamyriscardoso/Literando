import {auth} from './firebase.js';

auth.onAuthStateChanged(function(user) {
    if (user) {
        document.querySelector('#logado').style = 'display: none';
        document.querySelector('#btnSair').style = 'display: block';
        window.location.replace('perfil.html');
        console.log('logado');
    } else {
        console.log('nao logado');
    }
});

export const getIdUsuario = function() {
    return new Promise(function(resolve) {
        auth.onAuthStateChanged(function(user) {
            resolve(user.uid);
        });
    });
};

export const login = function(email, senha) {
    auth.signInWithEmailAndPassword(email, senha)
        .then(function() {
            window.location.replace('index.html');
        })
        .catch(function(error) {
            document.querySelector('#msgError').style = 'display: block';
        });
};

export const logout = function() {
    auth.signOut()
        .then(function() {
            document.querySelector('#btnSair').style = 'display: none';
            document.querySelector('#logado').style = 'display: block';
            console.log('Deslogou');
        });
};

export const cadastro = function(email, senha) {
    auth.createUserWithEmailAndPassword(email, senha)
        .then(function() {
            window.location.replace('index.html');
            console.log('sucesso');
        })
        .catch(function(error) {
            console.log(error);
        });
};

export const deletar = function() {
    const USER = auth.currentUser;
    USER.delete()
        .then(function() {
            window.location.replace('index.html');
        });
};

export const alterarSenha = function(senha, confirmSenha) {
    if (senha === confirmSenha) {
        auth.currentUser.updatePassword(senha)
            .then(function() {
                console.log('error'); // caso funcione
            })
            .catch(function(error) {
                // caso nao funcione
            });
    } else {
        // caso não funcione
    }
};
