import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.page.html',
  styleUrls: ['./recuperarsenha.page.scss'],
})
export class RecuperarsenhaPage implements OnInit {

  authform: FormGroup;

  constructor(public navCtrl: NavController, private fb: FormBuilder,
              private usuarioService: UsuarioService, public loadingController: LoadingController) {
  }

  ngOnInit() {
    this.createform();
  }

  private createform(): void {
    this.authform = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }


  RecuperarSenha() {
    this.presentLoadingWithOptions();
    this.usuarioService.RecuperarSenha(this.authform.value).subscribe(
      erro => console.log('error'),
      () => console.log('OK')
    );
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

  onSubmit() {
    this.RecuperarSenha();
  }
}
