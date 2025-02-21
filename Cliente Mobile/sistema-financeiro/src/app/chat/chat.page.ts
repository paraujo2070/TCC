import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  authform: FormGroup;
  username: any;
  dadosListar: dadosListar[] = [];
  dadosListar1: dadosListar[] = [];
  auxiliar: dadosListar[] = [];



  ngOnInit() {
    this.createform();
    this.listarConversas();
  }


  constructor(private storage: Storage, private usuarioService: UsuarioService, private router: Router,
    private route: ActivatedRoute, private fb: FormBuilder) {
    this.route.queryParams.subscribe(params => {
      // tslint:disable-next-line: prefer-const
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.username = getNav.extras.state.username;
      }
    });
  }

  private createform(): void {
    this.authform = this.fb.group({
      mensagem: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.enviarMensagem();
  }

  public async enviarMensagem() {
    const off = await this.storage.get('1');
    let mens: dadosListar[] = [];
    // tslint:disable-next-line: no-use-before-declare
    const dado = new dadosListar(off.email, off.senha, off.username,
      this.username, this.authform.value.mensagem);

    // tslint:disable-next-line: no-use-before-declare
    const dado1 = new dadosListar(off.email, off.senha, this.username,
      off.username, this.authform.value.mensagem);

    // tslint:disable-next-line: no-use-before-declare
    const credenciais = new dadosCredeciais(off.email, off.senha, this.username, off.username);

    this.usuarioService.listarUsuariosChat(credenciais).subscribe((mensagem: dadosListar[]) => {
      mens = Object.keys(mensagem).map(i => mensagem[i]);
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i <= mens.length; i++) {
        if (mens[i].destinatario === off.username && mens[i].remetente === this.username) {
          this.usuarioService.enviarMensagem(dado).subscribe(
            erro => console.log('error'),
            () => console.log('OK'));
            return this.authform.reset();
        }
        if (mens[i].destinatario === this.username && mens[i].remetente === off.username) {
          this.usuarioService.enviarMensagem(dado1).subscribe(
            erro => console.log('error'),
            () => console.log('OK'));
          return this.authform.reset();
        }
      }
      this.usuarioService.enviarMensagem(dado).subscribe(
        erro => console.log('error'),
        () => console.log('OK'));
      return this.authform.reset();
    });
  }

  public async listarConversas() {
    const off = await this.storage.get('1');
    // tslint:disable-next-line: no-use-before-declare
    const dado = new dadosCredeciais(off.email, off.senha, this.username, off.username);
    // tslint:disable-next-line: no-use-before-declare
    const dado1 = new dadosCredeciais(off.email, off.senha, off.username, this.username);

    this.usuarioService.ListarConversas(dado).subscribe((usuario: dadosListar[]) => {
      this.auxiliar = Object.keys(usuario).map(i => usuario[i].dadosdamensagem);

      for (let i = 0; this.auxiliar.length; i++) {
        if (this.auxiliar[i].dadosdamensagem !== null) {
          return this.dadosListar = this.auxiliar;
        }
      }
      this.usuarioService.ListarConversas(dado1).subscribe((usuario1: dadosListar[]) => {
        return this.dadosListar = Object.keys(usuario1).map(i => usuario1[i].dadosdamensagem);
      });
    });
  }

}

// tslint:disable-next-line: class-name
export class dadosCredeciais {
  email: string;
  senha: string;
  destinatario: string;
  remetente: string;

  constructor(email: string, senha: string, destinatario: string, remetente: string) {
    this.email = email;
    this.senha = senha;
    this.remetente = remetente;
    this.destinatario = destinatario;
  }
}

// tslint:disable-next-line: class-name
export class dadosListar {
  email: string;
  senha: string;
  destinatario: string;
  remetente: string;
  dadosdamensagem: string;

  constructor(email: string, senha: string, destinatario: string,
    remetente: string, dadosdamensagem: string) {
    this.email = email;
    this.senha = senha;
    this.destinatario = destinatario;
    this.remetente = remetente;
    this.dadosdamensagem = dadosdamensagem;
  }
}

