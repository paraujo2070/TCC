'use strict';

const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyARktRkawyz3G7vcapr8xq2Ns8V_f8x_8M",
    authDomain: "planejamento-financeiro-4afb7.firebaseapp.com",
    databaseURL: "https://planejamento-financeiro-4afb7.firebaseio.com",
    projectId: "planejamento-financeiro-4afb7",
    storageBucket: "",
    messagingSenderId: "600713243915",
    appId: "1:600713243915:web:64256173ee351b068fc60e"
};

firebase.initializeApp(firebaseConfig);

const controllerUsuario = require('./controllers/usuario');


exports.cadastrar = controllerUsuario.post;
exports.inform = controllerUsuario.postinform;
exports.recuperar = controllerUsuario.postReuperar;
exports.alterarSenha = controllerUsuario.postAlterarSenha;
exports.login = controllerUsuario.postLogin;
exports.loginFacebook = controllerUsuario.loginFacebook;
exports.enviarMensagem = controllerUsuario.enviarMensagem;
exports.listarMensagem = controllerUsuario.listarMensagem;
exports.criarChat = controllerUsuario.criarChat;
exports.listarUsuarios = controllerUsuario.listarUsuarios;
exports.listarChats = controllerUsuario.listarChats;
exports.listarDadosUsuarioAtual = controllerUsuario.listarDadosUsuarioAtual;
exports.alteracoesPerfil = controllerUsuario.alteracoesPerfil;