import { Chat } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { UsuarioService } from '../usuario.service';
import { Storage } from '@ionic/storage';
import { Usuario } from '../usuario';
import { Date } from '../alterarsenha/alterarsenha.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss'],
})
export class ContatosComponent implements OnInit {

  authform: FormGroup;
  nome: Usuario[] = [];
  username: Usuario[] = [];
  dados: any[] = [];
  chats: Usuario[] = [];

  constructor(public modalController: ModalController,
              private usuarioService: UsuarioService, private storage: Storage,
              public loadingController: LoadingController, private fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.createform();
    this.presentLoadingWithOptions();
    this.listarContatos();
  }

  private createform(): void {
    this.authform = this.fb.group({
      username: ['', [Validators.required]]
    });
  }

  async dismi() {
    this.modalController.dismiss();
  }

  private async listarContatos() {
    const off = await this.storage.get('1');
    const dado = new Date(off.email, off.senha);
    this.usuarioService.ListarContatos(dado).subscribe((usuario: Usuario[]) => {
      this.nome = Object.keys(usuario).map(i => usuario[i].nome);
      this.username = Object.keys(usuario).map(i => usuario[i].username);
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.nome.length; i++) {
        this.dados.push({
          nome: this.nome[i],
          username: this.username[i]
        });
      }
    },
      erro => console.log('error'),
      () => console.log('OK'));
  }

  onSubmit(): void {
    this.criarChat();
  }

  private async criarChat() {
    const off = await this.storage.get('1');
    const dados = {
      email: off.email,
      senha: off.senha,
      remetente: off.username,
      destinatario: this.authform.value.username
    };

    const dado = new Usuario(dados);
    const login = {
      email: off.email,
      senha: off.senha
    };
    this.usuarioService.listarUsuariosChat(login).subscribe((chat: Usuario[]) => {
      this.chats = Object.keys(chat).map(i => chat[i]);
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.chats.length; i++) {
        if (this.chats[i].destinatario === off.username && this.chats[i].remetente === this.authform.value.username) {
          return this.irParaChat();
        }
        if (this.chats[i].destinatario === this.authform.value.username && this.chats[i].remetente === off.username) {
          return this.irParaChat();
        }
      }
      this.usuarioService.criarChat(dado).subscribe(() => {
        return this.irParaChat();
      },
      erro => console.log('error'),
      () => console.log('OK'));
    },
      erro => console.log('error'),
      () => console.log('OK'));


  }

  private async irParaChat() {
    this.modalController.dismiss();
    // tslint:disable-next-line: prefer-const
    let navigationExtras: NavigationExtras = {
      state: {
        username: this.authform.value.username
      }
    };
    this.router.navigate(['/chat'], navigationExtras);
  }



  private async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 2000,
      message: 'Só um instante :)',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}
