import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsuarioService } from './../usuario.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authform: FormGroup;
  usuario: DadosOnline;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, public router: Router,
              public storage: Storage, public loadingController: LoadingController) {
  }

  ngOnInit(): void {
    this.createform();
  }

  private createform(): void {
    this.authform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  private login() {
    this.pegarDadosOnline();
    this.presentLoadingWithOptions();
    this.usuario = this.authform.value;
    this.usuarioService.EfetuarLogin(this.usuario).subscribe(
      erro => console.log('error'),
      () => console.log('OK')
    );
  }

  public pegarDadosOnline() {
    this.usuarioService.listarUsuarioAtual(this.authform.value).subscribe((usuario: DadosOnline) => {
      this.usuario = {
        email: this.authform.value.email,
        senha: this.authform.value.senha,
        username: usuario.username,
        nome: usuario.nome,
        aplicacoesfinanceiras: usuario.aplicacoesfinanceiras,
        bensaoseaposentar: usuario.bensaoseaposentar,
        bensimoveis: usuario.bensimoveis,
        bensmoveis: usuario.bensmoveis,
        capacidadedepoupar: usuario.capacidadedepoupar,
        datadenascimento: usuario.datadenascimento,
        datadenascimentodoconjuge: usuario.datadenascimentodoconjuge,
        estadocivil: usuario.estadocivil,
        estimativadedespesa: usuario.estimativadedespesa,
        expectativadevida: usuario.expectativadevida,
        expectativadevidadoconjuge: usuario.expectativadevidadoconjuge,
        idadeseaposentar: usuario.idadeseaposentar,
        inssprevisto: usuario.inssprevisto,
        inssprevistoconjuge: usuario.inssprevistoconjuge,
        nomedoconjuge: usuario.nomedoconjuge,
        outrasfontesderenda: usuario.outrasfontesderenda,
        outrasfontesderendadoconjuge: usuario.outrasfontesderendadoconjuge,
        profissaoatual: usuario.profissaoatual,
        profissaoatualdoconjuge: usuario.profissaoatualdoconjuge,
        projetosdevidacurtoprazo: usuario.projetosdevidacurtoprazo,
        projetosdevidalongoprazo: usuario.projetosdevidalongoprazo,
        projetosdevidamedioprazo: usuario.projetosdevidamedioprazo,
        quantiamensalpretendeseaposentar: usuario.quantiamensalpretendeseaposentar,
        quantos: usuario.quantos,
        remuneracaoliquida: usuario.remuneracaoliquida,
        remuneracaoliquidadoconjuge: usuario.remuneracaoliquidadoconjuge,
        temfilhos: usuario.temfilhos,
        tipodedeclaracaodeimpostoderenda: usuario.tipodedeclaracaodeimpostoderenda
      };
      this.salvar(this.usuario);
    },
    erro => console.log('error'),
    () => console.log('OK'));
  }

  onSubmit(): void {
    this.login();
  }
 private async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 4000,
      message: 'Autenticando',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  private salvarDados(chave: string, usuario: DadosOnline) {
    return this.storage.set(chave, usuario);
  }

  private salvar(usuario: DadosOnline) {
    return this.salvarDados('1', usuario);
  }

  get email(): FormControl {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    return <FormControl> this.authform.get('email');
  }
  get password(): FormControl {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    return <FormControl> this.authform.get('senha');
  }


}

export class DadosOnline {
    username: string;
    nome: string;
    aplicacoesfinanceiras: string;
    bensaoseaposentar: string;
    bensimoveis: string;
    bensmoveis: string;
    capacidadedepoupar: string;
    datadenascimento: string;
    datadenascimentodoconjuge: string;
    estadocivil: string;
    estimativadedespesa: string;
    expectativadevida: string;
    expectativadevidadoconjuge: string;
    idadeseaposentar: string;
    inssprevisto: string;
    inssprevistoconjuge: string;
    nomedoconjuge: string;
    outrasfontesderenda: string;
    outrasfontesderendadoconjuge: string;
    profissaoatual: string;
    profissaoatualdoconjuge: string;
    projetosdevidacurtoprazo: string;
    projetosdevidalongoprazo: string;
    projetosdevidamedioprazo: string;
    quantiamensalpretendeseaposentar: string;
    quantos: string;
    remuneracaoliquida: string;
    remuneracaoliquidadoconjuge: string;
    temfilhos: string;
    tipodedeclaracaodeimpostoderenda: string;
    email: string;
    senha: string;
    // tslint:disable-next-line: ban-types
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }

}
