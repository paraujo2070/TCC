import { StorageService } from './../../services/storage.service';
import { UsuarioService } from './../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViagemOnibusETFD } from './../../interfaces/viagem-onibus-etfd';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcar-viagem-tfd',
  templateUrl: './marcar-viagem-tfd.component.html',
  styleUrls: ['./marcar-viagem-tfd.component.css']
})
export class MarcarViagemTFDComponent implements OnInit {
  cadastrar: ViagemOnibusETFD;
  authform: FormGroup;
  dado: any;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService,
              private storage: StorageService) { }

  ngOnInit() {
    this.createform();
  }

  private createform(): void {
    this.authform = this.fb.group({
      nomedopaciente: ['', [Validators.required,  Validators.minLength(6)]],
      nomedoacompanhante: ['', [Validators.required, Validators.minLength(6)]],
      endereco: ['', [Validators.required, Validators.minLength(6)]],
      numerodetelefone: ['', [Validators.required]],
      nomedohospital: ['', [Validators.required, Validators.minLength(6)]],
      horariodaconsulta: ['', [Validators.required]],
      datadaviagem: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.salvarViagemOnibus();
    this.authform.reset();
  }

  private salvarViagemOnibus() {
    this.cadastrar = {
      nomedopaciente: this.authform.value.nomedopaciente,
      nomedoacompanhante: this.authform.value.nomedoacompanhante,
      endereco: this.authform.value.endereco,
      numerodetelefone: this.authform.value.numerodetelefone,
      nomedohospital: this.authform.value.nomedohospital,
      horariodaconsulta: this.authform.value.horariodaconsulta,
      datadaviagem: this.authform.value.datadaviagem,
      token: this.retornarToken()
    };
    console.log(this.cadastrar);
    this.usuarioService.cadastrarViagemTFD(this.cadastrar).subscribe(
      erro => console.log('error'),
      () => console.log('OK'));
  }

  private retornarToken(): string {
    this.dado = this.storage.getData('1');
    return this.dado.token;
  }

}
