import { DadosOnline } from './../login/login.page';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-alterarsenha',
  templateUrl: './alterarsenha.page.html',
  styleUrls: ['./alterarsenha.page.scss'],
})
export class AlterarsenhaPage implements OnInit {
  usuario: DadosOnline;

  constructor(public navCtrl: NavController, private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private toast: ToastController, private storage: Storage, public loadingController: LoadingController) {
  }

  authform: FormGroup;

  ngOnInit() {
    this.createform();
  }

  private createform(): void {
    this.authform = this.fb.group({
      senhaatual: ['', [Validators.required, Validators.minLength(6)]],
      novasenha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarsenha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  private async alterarSenha(chave: string) {
    this.presentLoadingWithOptions();
    const off = await this.storage.get(chave);

    if (this.authform.value.senhaatual === off.senha && this.authform.value.novasenha === this.authform.value.confirmarsenha) {
      // tslint:disable-next-line: no-use-before-declare
      const dados = new DadosAlterarSenha(off.email, off.senha, this.authform.value.novasenha);
      this.usuarioService.AlterarSenha(dados).subscribe(
        erro => console.log('error'),
        () => console.log('OK'));
      // tslint:disable-next-line: no-use-before-declare
      const atualizar = new Date(off.email, this.authform.value.novasenha);
      await this.storage.set('1', atualizar);
    } else {
      this.mensagemSenhaIncorreta();
    }
  }

  public async pegarDadosOnline() {
    const off = await this.storage.get('1');
    const dado = {
      email: off.email,
      senha: off.senha
    };
    this.usuarioService.listarUsuarioAtual(dado).subscribe((usuario: DadosOnline) => {
      this.usuario = {
        email: off.email,
        senha: off.senha,
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

  private salvarDados(chave: string, usuario: DadosOnline) {
    return this.storage.set(chave, usuario);
  }

  private salvar(usuario: DadosOnline) {
    return this.salvarDados('1', usuario);
  }

  private async mensagemSenhaIncorreta() {
    const error = await this.toast.create({ message: 'As senha não coincidem!', duration: 5000 });
    error.present();
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
    this.alterarSenha('1');
  }
}

export class DadosAlterarSenha {
  email: string;
  senha: string;
  novasenha: string;

  constructor(email: string, senha: string, novasenha: string) {
    this.email = email;
    this.senha = senha;
    this.novasenha = novasenha;
  }
}

// tslint:disable-next-line: class-name
export class Date {
  email: string;
  senha: string;
  constructor(email: string, senha: string) {
    this.email = email;
    this.senha = senha;
  }
}
