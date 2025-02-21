import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {
  authform: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.createform();
  }
  private createform(): void {
    this.authform = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit(): void {
    this.recuperarSenha();
  }

  private recuperarSenha() {
    this.usuarioService.recuperarSenha(this.authform.value).subscribe(
    erro => console.log('error'),
    () => console.log('OK'));
  }
}
