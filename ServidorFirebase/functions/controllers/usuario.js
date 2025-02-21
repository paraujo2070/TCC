/* eslint-disable prefer-arrow-callback */
'use strict';

const firebase = require("firebase");
const functions = require('firebase-functions');
const cors = require('cors')({
  origin: true,
  methods: "GET,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
});

exports.post = functions.https.onRequest(async (req, res) => {

  cors(req, res, async () => {

    let app = firebase.auth();

    await app.createUserWithEmailAndPassword(req.body.email, req.body.senha)
      .catch(() => {
        res.status(400).send('usuario já existe!');
      });

    await firebase.auth().onAuthStateChanged(user => {
      firebase.database().ref('usuarios/' + user.uid).update({
        nome: req.body.nome,
        username: req.body.username
      });
    });

    await app.currentUser.sendEmailVerification().catch(() => {
      res.status(400).send("Verifique sua Conexão com a internet");
    });

    await app.signInWithEmailAndPassword(req.body.email, req.body.senha).catch(() => {
      res.status(400).send("Verifique sua Conexão com a internet");
    });

    res.status(200).send("usuario cadastrado com sucesso");
  });
});

exports.postinform = functions.https.onRequest(async (req, res) => {

  cors(req, res, async () => {

    let app = firebase.auth();

    await app.signInWithEmailAndPassword(req.body.email, req.body.senha).catch(() => {
      res.status(400).send("Verifique sua Conexão com a internet");
    });

    await firebase.auth().onAuthStateChanged(user => {
      firebase.database().ref('usuarios/' + user.uid).update({
        datadenascimento: req.body.datadenascimento,
        estadocivil: req.body.estadocivil,
        expectativadevida: req.body.expectativadevida,
        nomedoconjuge: req.body.nomedoconjuge,
        datadenascimentodoconjuge: req.body.datadenascimentodoconjuge,
        expectativadevidadoconjuge: req.body.expectativadevidadoconjuge,
        temfilhos: req.body.temfilhos,
        quantos: req.body.quantos,
        profissaoatual: req.body.profissaoatual,
        remuneracaoliquida: req.body.remuneracaoliquida,
        outrasfontesderenda: req.body.outrasfontesderenda,
        inssprevisto: req.body.inssprevisto,
        profissaoatualdoconjuge: req.body.profissaoatualdoconjuge,
        remuneracaoliquidadoconjuge: req.body.remuneracaoliquidadoconjuge,
        outrasfontesderendadoconjuge: req.body.outrasfontesderendadoconjuge,
        inssprevistoconjuge: req.body.inssprevistoconjuge,
        capacidadedepoupar: req.body.capacidadedepoupar,
        estimativadedespesa: req.body.estimativadedespesa,
        tipodedeclaracaodeimpostoderenda: req.body.tipodedeclaracaodeimpostoderenda,
        bensimoveis: req.body.bensimoveis,
        bensmoveis: req.body.bensmoveis,
        aplicacoesfinanceiras: req.body.aplicacoesfinanceiras,
        projetosdevidacurtoprazo: req.body.projetosdevidacurtoprazo,
        projetosdevidamedioprazo: req.body.projetosdevidamedioprazo,
        projetosdevidalongoprazo: req.body.projetosdevidalongoprazo,
        idadeseaposentar: req.body.idadeseaposentar,
        quantiamensalpretendeseaposentar: req.body.quantiamensalpretendeseaposentar,
        bensaoseaposentar: req.body.bensaoseaposentar
      });
    });

    res.status(200).send("Dados salvos com sucesso!");
  });
});

exports.postReuperar = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    await firebase.auth().sendPasswordResetEmail(req.body.email).catch(() => {
      res.status(400).send("verifique sua conexão com a internet e tente novamente!");
    });
    res.status(200).send("Verifique seu E-mail!");
  });

});

exports.postAlterarSenha = functions.https.onRequest(async (req, res) => {

  cors(req, res, async () => {

    let app = firebase.auth();

    await app.signInWithEmailAndPassword(req.body.email, req.body.senha).catch(() => {
      res.status(400).send("Usuario ou senha incoreta!");
    });

    await firebase.auth().onAuthStateChanged(user => {
      user.updatePassword(req.body.novasenha).catch(() => {
        res.status(400).send("Verifique sua Conexão com a internet");
      });
    });
    res.status(200).send("Senha alterada com sucesso!");
  });
});

exports.postLogin = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.senha).catch(() => {
      res.status(400).send("Usuario ou senha incorretos");
    });
    res.status(200).send("Login efetuado com sucesso!");
  });
});


exports.loginFacebook = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    await facebookProvider.setCustomParameters({
      'display': 'popup'
    });
    await firebase.auth().signInWithPopup(facebookProvider).then(() => {
        return result.credential.accessToken && result.user;
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.error(error);
      });
  });
});

exports.enviarMensagem = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    let app = firebase.auth();

    await app.signInWithEmailAndPassword(req.body.email, req.body.senha).catch(() => {
      res.status(400).send("Verifique sua Conexão com a internet");
    });

    await firebase.auth().onAuthStateChanged(user => {
      firebase.database().ref('mensagem/' + req.body.remetente + req.body.destinatario).push({
        dadosdamensagem: req.body.dadosdamensagem,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      }).catch(() => {
        res.status(400).send("verifique sua conexão com a internet!");
      });
    });
    res.status(200).send("Mesagem gravada com sucesso");
  });
});

exports.listarMensagem = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    let app = firebase.auth();

    await app.signInWithEmailAndPassword(req.body.email, req.body.senha).catch(() => {
      res.status(400).send("Verifique sua Conexão com a internet");
    });

    await firebase.auth().onAuthStateChanged(user => {
      firebase.database().ref('mensagem/' + req.body.remetente + req.body.destinatario)
        .limitToLast(30)
        .orderByChild('timestamp')
        .on("value", function (ref) {
          res.status(200).send(ref.val());
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        })
    });
  });
});

exports.criarChat = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    let app = firebase.auth();

    await app.signInWithEmailAndPassword(req.body.email, req.body.senha).catch(() => {
      res.status(400).send("Verifique sua Conexão com a internet");
    });

    await firebase.auth().onAuthStateChanged(user => {
      firebase.database().ref('chats/' + req.body.remetente + req.body.destinatario).set({
        destinatario: req.body.destinatario,
        remetente: req.body.remetente,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
    })
    res.status(200).send("chat criado com sucesso");
  });
});

exports.listarChats = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    let app = firebase.auth();

    await app.signInWithEmailAndPassword(req.body.email, req.body.senha).catch(() => {
      res.status(400).send("Verifique sua Conexão com a internet");
    });

    await firebase.auth().onAuthStateChanged(user => {
      firebase.database().ref('chats/')
        .limitToLast(30)
        .orderByChild('timestamp')
        .on("value", function (ref) {
          res.status(200).send(ref.val());
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        })
    });
  });
});

exports.listarUsuarios = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    let app = firebase.auth();

    await app.signInWithEmailAndPassword(req.body.email, req.body.senha).catch(() => {
      res.status(400).send("Verifique sua Conexão com a internet");
    });

    await firebase.auth().onAuthStateChanged(user => {
      firebase.database().ref('usuarios/')
        .on("value", function (ref) {
          res.status(200).send(ref.val());
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        })
    });
  });
});

exports.listarDadosUsuarioAtual = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    let app = firebase.auth();

    await app.signInWithEmailAndPassword(req.body.email, req.body.senha).catch(() => {
      res.status(400).send("Verifique sua Conexão com a internet");
    });

    await firebase.auth().onAuthStateChanged(user => {
      firebase.database().ref('usuarios/' + user.uid)
        .on("value", function (ref) {
          res.status(200).send(ref.val());
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        })
    });
  });
});

exports.alteracoesPerfil = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    let app = firebase.auth();

    await app.signInWithEmailAndPassword(req.body.email, req.body.senha).catch(() => {
      res.status(400).send("Verifique sua Conexão com a internet");
    });

    await firebase.auth().onAuthStateChanged(user => {
      
      user.updateEmail(req.body.novoemail).catch(() => {
        res.status(400).send("Verifique sua Conexão com a internet");
      });
    
      firebase.database().ref('usuarios/' + user.uid).update({
        nome: req.body.nome
      });
    });

    res.status(200).send("Alterado com sucesso!");
  });
});