import { StorageService } from './../../services/storage.service';
import { UsuarioService } from './../../services/usuario.service';
import { CadastrarRequisicaoEDAEUSG } from './../../interfaces/cadastrar-requisicao-edaeusg';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-requisicao-edaeusg',
  templateUrl: './cadastrar-requisicao-edaeusg.component.html',
  styleUrls: ['./cadastrar-requisicao-edaeusg.component.css']
})
export class CadastrarRequisicaoEDAEUSGComponent implements OnInit {
  authform: FormGroup;
  cadastrar: CadastrarRequisicaoEDAEUSG;
  dado: any;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService,
              private storage: StorageService) { }

  ngOnInit() {
    this.createform();
  }

  private createform(): void {
    this.authform = this.fb.group({
      nome: ['', [Validators.required,  Validators.minLength(6)]],
      cns: ['', [Validators.required, Validators.minLength(15)]],
      tipo: ['', [Validators.required]],
      datadenascimento: ['', [Validators.required]],
      status: ['', [Validators.required]],
      numerodetelefone: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.cadastrarRequisicao();
    this.authform.reset();
  }

  private cadastrarRequisicao() {
    this.cadastrar = {
      nome: this.authform.value.nome,
      cns: this.authform.value.cns,
      tipo: this.authform.value.tipo,
      datadenascimento: this.authform.value.datadenascimento,
      status: this.authform.value.status,
      numerodetelefone: this.authform.value.numerodetelefone,
      token: this.retornarToken()
    };
    console.log(this.cadastrar);
    this.usuarioService.cadastrarRequisicaoEDAEUSG(this.cadastrar).subscribe(
      erro => console.log('error'),
    () => console.log('OK'));
  }

  private retornarToken(): string {
    this.dado = this.storage.getData('1');
    return this.dado.token;
  }
}
