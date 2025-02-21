import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-verificar-credenciais',
  templateUrl: './verificar-credenciais.page.html',
  styleUrls: ['./verificar-credenciais.page.scss'],
})
export class VerificarCredenciaisPage implements OnInit {
  authform: FormGroup;
  email: any;
  senha: any;

  constructor( private fb: FormBuilder, private storage: Storage, public router: Router, private toast: ToastController) { }

  ngOnInit(): void {
    this.createform();
  }

  private createform(): void {
    this.authform = this.fb.group({
      senhaatual: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.verificarCredenciais();
  }

  private async verificarCredenciais() {
    await this.buscar();
    if (this.email === 'paraujo20700@gmail.com' && this.senha === this.authform.value.senhaatual) {
      this.router.navigate(['/administrador']);
    } else {
      const suceso = await this.toast.create({ message: 'Este usuario não é um administrador!', duration: 5000 });
      suceso.present();
    }

  }

  private async buscar() {
    const off = await this.storage.get('1');
    this.email = off.email;
    this.senha = off.senha;
  }
}
