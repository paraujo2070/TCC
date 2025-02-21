import { Component, OnInit } from '@angular/core';
import { UsuarioService, Chat } from '../usuario.service';
import { Storage } from '@ionic/storage';
import { Date } from '../alterarsenha/alterarsenha.page';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { ContatosComponent } from '../contatos/contatos.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

   usuarios: Chat[] = [];
   authform: FormGroup;
   destinatario: Chat[] = [];
   remetente: Chat[] = [];

  constructor(private usuarioService: UsuarioService, private storage: Storage,
              public loadingController: LoadingController, public router: Router,
              public modalController: ModalController, private fb: FormBuilder) { }



   ngOnInit(): void {
     this.createform();
     this.presentLoadingWithOptions();
     this.listarUauariosChat();
  }

  private createform(): void {
    this.authform = this.fb.group({
      username: ['', [Validators.required]]
    });
  }

  private irParaChat() {
    // tslint:disable-next-line: prefer-const
    let navigationExtras: NavigationExtras = {
      state: {
        username: this.authform.value.username
      }
    };
    this.router.navigate(['/chat'], navigationExtras);
  }

  onSubmit(): void {
    this.irParaChat();
  }

  doRefresh(event) {
    this.listarUauariosChat();
    setTimeout(() => {
      event.target.complete();
    }, 3000);
  }


  private async listarUauariosChat() {
    const off = await this.storage.get('1');
    const dado = new Date(off.email, off.senha);
    this.usuarioService.listarUsuariosChat(dado).subscribe((chat: Chat[]) => {
      this.destinatario = Object.keys(chat).map( i => chat[i].destinatario);
      this.remetente = Object.keys(chat).map( i => chat[i].remetente);
      for (let i = 0; i < this.destinatario.length; i++) {
        if (this.destinatario[i] === off.username) {
          this.usuarios[i] = this.remetente[i];
        }
        if (this.remetente[i] === off.username) {
          this.usuarios[i] = this.destinatario[i];
        }
      }
    },
      erro => console.log('error'),
      () => console.log('OK'));
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: ContatosComponent
    });
    return await modal.present();
  }

}
