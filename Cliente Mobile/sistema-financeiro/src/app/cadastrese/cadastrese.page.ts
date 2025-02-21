import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrese',
  templateUrl: './cadastrese.page.html',
  styleUrls: ['./cadastrese.page.scss'],
})
export class CadastresePage implements OnInit {

  authform: FormGroup;

  constructor(public navCtrl: NavController, private fb: FormBuilder,
              private usuarioService: UsuarioService, public loadingController: LoadingController) {
  }

  ngOnInit() {
    this.createform();
  }

  private createform(): void {
    this.authform = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(10)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmSenha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  cadastrese() {
    this.presentLoadingWithOptions();
    this.usuarioService.CriarLogin(this.authform.value).subscribe(
      erro => console.log('error'),
      () => console.log('OK')
    );
  }
  private async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 4500,
      message: 'Só um instante :)',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
  onSubmit() {
    this.cadastrese();
  }
}
