import { LoadingController } from '@ionic/angular';
import { DadosListar } from './../dadoslistar';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {
  dadosListar: DadosListar[] = [];

  constructor(public storage: Storage, private usuarioService: UsuarioService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.enviarMensagem();
  }

  private async enviarMensagem() {
    this.presentLoadingWithOptions();
    const off = await this.storage.get('1');
    // tslint:disable-next-line: no-use-before-declare
    const dado = new DadosCrede(off.email, off.senha);
    this.usuarioService.listarTodosUsuarios(dado).subscribe((usuario: DadosListar[]) => {
      this.dadosListar = Object.keys(usuario).map(i => usuario[i]);
      console.log(this.dadosListar);
    });
  }

  private async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 7000,
      message: 'Só um instante :)',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }


}

export class DadosCrede {
  email: string;
  senha: string;

  constructor(email: string, senha: string) {
    this.email = email;
    this.senha = senha;
  }
}
