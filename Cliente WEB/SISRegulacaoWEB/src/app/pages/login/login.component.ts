import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authform: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.createform();
  }
  private createform(): void {
    this.authform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(): void {
    this.login();
  }

  private login() {
    this.usuarioService.login(this.authform.value).subscribe(
      erro => console.log('error'),
      () => console.log('OK'));
  }

}
