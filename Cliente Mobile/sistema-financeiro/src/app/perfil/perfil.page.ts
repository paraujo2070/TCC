import { DadosOnline } from './../login/login.page';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  authform: FormGroup;
  usuario: DadosOnline;
  nome: string;
  email: string;

  constructor(public storage: Storage, private usuarioService: UsuarioService, private fb: FormBuilder) {
    this.createform();
   }

  ngOnInit() {
    this.teste();
  }

  private createform(): void {
    this.authform = this.fb.group({
      email: [this.email, [Validators.required, Validators.email]],
      nome: [this.nome, [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.alterar();
  }

  private async teste() {
    await this.pegarDados();
    await this.createform();
  }

  private async pegarDados() {
    const off = await this.storage.get('1');
    this.email = off.email;
    this.nome = off.nome;
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

  private async alterar() {
    const off = await this.storage.get('1');
    // tslint:disable-next-line: no-use-before-declare
    const dado = new DadosCredenciais(off.email, off.senha,
      this.authform.value.email, this.authform.value.nome);
    console.log(dado);
    this.usuarioService.alterarPerfil(dado).subscribe(
      erro => console.log('error'),
      () => console.log('OK')
    );
    // tslint:disable-next-line: no-use-before-declare
    const atualizar = new SalvarOFF(this.authform.value.email, off.senha, off.username);
    this.storage.set('1', atualizar);
  }

}

// tslint:disable-next-line: class-name
export class DadosCredenciais {
  email: string;
  senha: string;
  novoemail: string;
  nome: string;

  constructor(email: string, senha: string, novoemail: string, nome: string) {
    this.email = email;
    this.senha = senha;
    this.novoemail = novoemail;
    this.nome = nome;
  }
}

export class SalvarOFF {
  email: string;
  senha: string;
  username: string;

  constructor(email: string, senha: string, username: string) {
    this.email = email;
    this.senha = senha;
    this.username = username;
  }
}
