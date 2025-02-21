import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-informacoesadicionais',
  templateUrl: './informacoesadicionais.page.html',
  styleUrls: ['./informacoesadicionais.page.scss'],
})
export class InformacoesadicionaisPage implements OnInit {
  authform: FormGroup;
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

  constructor(private fb: FormBuilder, private storage: Storage, private usuarioService: UsuarioService,
              public router: Router) {
    this.createform();
  }

  ngOnInit() {
    this.teste();
  }

  private async pegarDados() {
    const off = await this.storage.get('1');
    this.nome = off.nome;
    this.aplicacoesfinanceiras = off.aplicacoesfinanceiras;
    this.bensaoseaposentar = off.bensaoseaposentar;
    this.bensimoveis = off.bensimoveis;
    this.bensmoveis = off.bensmoveis;
    this.capacidadedepoupar = off.capacidadedepoupar;
    this.datadenascimento = off.datadenascimento;
    this.datadenascimentodoconjuge = off.datadenascimentodoconjuge;
    this.estadocivil = off.estadocivil;
    this.estimativadedespesa = off.estimativadedespesa;
    this.expectativadevida = off.expectativadevida;
    this.expectativadevidadoconjuge = off.expectativadevidadoconjuge;
    this.idadeseaposentar = off.idadeseaposentar;
    this.inssprevisto = off.inssprevisto;
    this.inssprevistoconjuge = off.inssprevistoconjuge;
    this.nomedoconjuge = off.nomedoconjuge;
    this.outrasfontesderenda = off.outrasfontesderenda;
    this.outrasfontesderendadoconjuge = off.outrasfontesderendadoconjuge;
    this.profissaoatual = off.profissaoatual;
    this.profissaoatualdoconjuge = off.profissaoatualdoconjuge;
    this.projetosdevidacurtoprazo = off.projetosdevidacurtoprazo;
    this.projetosdevidalongoprazo = off.projetosdevidalongoprazo;
    this.projetosdevidamedioprazo = off.projetosdevidamedioprazo;
    this.quantiamensalpretendeseaposentar = off.quantiamensalpretendeseaposentar;
    this.quantos = off.quantos;
    this.remuneracaoliquida = off.remuneracaoliquida;
    this.remuneracaoliquidadoconjuge = off.remuneracaoliquidadoconjuge;
    this.temfilhos = off.temfilhos;
    this.tipodedeclaracaodeimpostoderenda = off.tipodedeclaracaodeimpostoderenda;
  }
  public async teste() {
    await this.pegarDados();
    await this.createform();
  }

  private createform(): void {
    this.authform = this.fb.group({
      datadenascimento: [this.datadenascimento, [Validators.required]],
      estadocivil: [this.estadocivil, [Validators.required]],
      expectativadevida: [this.expectativadevida, [Validators.required]],
      nomedoconjuge: [this.nomedoconjuge, [Validators.required]],
      datadenascimentodoconjuge: [this.datadenascimentodoconjuge, [Validators.required]],
      expectativadevidadoconjuge: [this.expectativadevidadoconjuge, [Validators.required]],
      temfilhos: [this.temfilhos, [Validators.required]],
      quantos: [this.quantos, [Validators.required]],
      profissaoatual: [this.profissaoatual, [Validators.required]],
      remuneracaoliquida: [this.remuneracaoliquida, [Validators.required]],
      outrasfontesderenda: [this.outrasfontesderenda, [Validators.required]],
      inssprevisto: [this.inssprevisto, [Validators.required]],
      profissaoatualdoconjuge: [this.profissaoatualdoconjuge, [Validators.required]],
      remuneracaoliquidadoconjuge: [this.remuneracaoliquidadoconjuge, [Validators.required]],
      outrasfontesderendadoconjuge: [this.outrasfontesderendadoconjuge, [Validators.required]],
      inssprevistoconjuge: [this.inssprevistoconjuge, [Validators.required]],
      capacidadedepoupar: [this.capacidadedepoupar, [Validators.required]],
      estimativadedespesa: [this.estimativadedespesa, [Validators.required]],
      tipodedeclaracaodeimpostoderenda: [this.tipodedeclaracaodeimpostoderenda, [Validators.required]],
      bensimoveis: [this.bensimoveis, [Validators.required]],
      aplicacoesfinanceiras: [this.aplicacoesfinanceiras, [Validators.required]],
      projetosdevidacurtoprazo: [this.projetosdevidacurtoprazo, [Validators.required]],
      projetosdevidamedioprazo: [this.projetosdevidamedioprazo, [Validators.required]],
      projetosdevidalongoprazo: [this.projetosdevidalongoprazo, [Validators.required]],
      idadeseaposentar: [this.idadeseaposentar, [Validators.required]],
      quantiamensalpretendeseaposentar: [this.quantiamensalpretendeseaposentar, [Validators.required]],
      bensaoseaposentar: [this.bensaoseaposentar, [Validators.required]],
      bensmoveis: [this.bensmoveis, [Validators.required]]
    });
  }

   public alterarEstadoCivil(): void {
    this.estadocivil = this.authform.value.estadocivil;
  }

  public  alterarTemFilhos() {
    this.temfilhos = this.authform.value.temfilhos;
  }

  onSubmit(): void {
    this.salvando();
  }

  private async salvando() {
    await this.salvarOffline();
    await this.salvarOnline();
  }


  private async salvarOffline() {
    const off = await this.storage.get('1');
    // tslint:disable-next-line: no-use-before-declare
    const dado = new EnviarDadosParaANuvem(off.email, off.senha, this.authform.value.datadenascimento, this.authform.value.estadocivil,
      this.authform.value.expectativadevida, this.authform.value.nomedoconjuge, this.authform.value.datadenascimentodoconjuge,
      this.authform.value.expectativadevidadoconjuge, this.authform.value.temfilhos,
      this.authform.value.quantos, this.authform.value.profissaoatual, this.authform.value.remuneracaoliquida,
      this.authform.value.outrasfontesderenda, this.authform.value.inssprevisto, this.authform.value.profissaoatualdoconjuge,
      this.authform.value.remuneracaoliquidadoconjuge, this.authform.value.outrasfontesderendadoconjuge,
      this.authform.value.inssprevistoconjuge,
      this.authform.value.capacidadedepoupar, this.authform.value.estimativadedespesa,
      this.authform.value.tipodedeclaracaodeimpostoderenda,
      this.authform.value.bensimoveis, this.authform.value.bensmoveis,
      this.authform.value.aplicacoesfinanceiras,
      this.authform.value.projetosdevidacurtoprazo, this.authform.value.projetosdevidamedioprazo,
      this.authform.value.projetosdevidalongoprazo,
      this.authform.value.idadeseaposentar, this.authform.value.quantiamensalpretendeseaposentar, this.authform.value.bensaoseaposentar);
    await this.storage.set('1', dado);
  }

  private async salvarOnline() {
    const off = await this.storage.get('1');
// tslint:disable-next-line: no-use-before-declare
    const dado = new EnviarDados1(off.email, off.senha, this.authform.value.datadenascimento, this.authform.value.estadocivil,
  this.authform.value.expectativadevida, this.authform.value.nomedoconjuge, this.authform.value.datadenascimentodoconjuge,
  this.authform.value.expectativadevidadoconjuge, this.authform.value.temfilhos,
  this.authform.value.quantos, this.authform.value.profissaoatual, this.authform.value.remuneracaoliquida,
  this.authform.value.outrasfontesderenda, this.authform.value.inssprevisto, this.authform.value.profissaoatualdoconjuge,
  this.authform.value.remuneracaoliquidadoconjuge, this.authform.value.outrasfontesderendadoconjuge,
  this.authform.value.inssprevistoconjuge,
  this.authform.value.capacidadedepoupar, this.authform.value.estimativadedespesa, this.authform.value.tipodedeclaracaodeimpostoderenda,
  this.authform.value.bensimoveis, this.authform.value.bensmoveis,
  this.authform.value.aplicacoesfinanceiras,
  this.authform.value.projetosdevidacurtoprazo, this.authform.value.projetosdevidamedioprazo,
  this.authform.value.projetosdevidalongoprazo,
  this.authform.value.idadeseaposentar, this.authform.value.quantiamensalpretendeseaposentar, this.authform.value.bensaoseaposentar);
// tslint:disable-next-line: no-use-before-declare
    this.usuarioService.informacoesAdicionais(dado).subscribe(
  erro => console.log('error'),
  () => console.log('OK'));
    console.log(dado);
}


}


// tslint:disable-next-line: class-name
export class EnviarDadosParaANuvem {
  email: string;
  senha: string;
  datadenascimento: string;
  estadocivil: string;
  expectativadevida: string;
  nomedoconjuge: string;
  datadenascimentodoconjuge: string;
  expectativadevidadoconjuge: string;
  temfilhos: string;
  quantos: string;
  profissaoatual: string;
  remuneracaoliquida: string;
  outrasfontesderenda: string;
  inssprevisto: string;
  profissaoatualdoconjuge: string;
  remuneracaoliquidadoconjuge: string;
  outrasfontesderendadoconjuge: string;
  inssprevistoconjuge: string;
  capacidadedepoupar: string;
  estimativadedespesa: string;
  tipodedeclaracaodeimpostoderenda: string;
  bensimoveis: string;
  aplicacoesfinanceiras: string;
  projetosdevidacurtoprazo: string;
  projetosdevidamedioprazo: string;
  projetosdevidalongoprazo: string;
  idadeseaposentar: string;
  quantiamensalpretendeseaposentar: string;
  bensaoseaposentar: string;
  bensmoveis: string;

  // tslint:disable-next-line: ban-types
  constructor(email: string, senha: string, datadenascimento: string, estadocivil: string, expectativadevida: string,
              nomedoconjuge: string, datadenascimentodoconjuge: string,
              expectativadevidadoconjuge: string, temfilhos: string, quantos: string,
              profissaoatual: string, remuneracaoliquida: string, outrasfontesderenda: string,
              inssprevisto: string, profissaoatualdoconjuge: string, remuneracaoliquidadoconjuge: string,
              outrasfontesderendadoconjuge: string, inssprevistoconjuge: string, capacidadedepoupar: string,
              estimativadedespesa: string, tipodedeclaracaodeimpostoderenda: string, bensimoveis: string,
              bensmoveis: string,
              aplicacoesfinanceiras: string, projetosdevidacurtoprazo: string, projetosdevidamedioprazo: string,
              projetosdevidalongoprazo: string, idadeseaposentar: string, quantiamensalpretendeseaposentar: string,
              bensaoseaposentar: string) {
    this.email = email;
    this.senha = senha;
    this.datadenascimento = datadenascimento;
    this.estadocivil = estadocivil;
    this.expectativadevida = expectativadevida;
    this.nomedoconjuge = nomedoconjuge;
    this.datadenascimentodoconjuge = datadenascimentodoconjuge;
    this.expectativadevidadoconjuge = expectativadevidadoconjuge;
    this.temfilhos = temfilhos;
    this.quantos = quantos;
    this.profissaoatual = profissaoatual;
    this.remuneracaoliquida = remuneracaoliquida;
    this.outrasfontesderenda = outrasfontesderenda;
    this.inssprevisto = inssprevisto;
    this.profissaoatualdoconjuge = profissaoatualdoconjuge;
    this.remuneracaoliquidadoconjuge = remuneracaoliquidadoconjuge;
    this.outrasfontesderendadoconjuge = outrasfontesderendadoconjuge;
    this.inssprevistoconjuge = inssprevistoconjuge;
    this.capacidadedepoupar = capacidadedepoupar;
    this.estimativadedespesa = estimativadedespesa;
    this.bensimoveis = bensimoveis;
    this.tipodedeclaracaodeimpostoderenda = tipodedeclaracaodeimpostoderenda;
    this.aplicacoesfinanceiras = aplicacoesfinanceiras;
    this.projetosdevidacurtoprazo = projetosdevidacurtoprazo;
    this.projetosdevidamedioprazo = projetosdevidamedioprazo;
    this.projetosdevidalongoprazo = projetosdevidalongoprazo;
    this.idadeseaposentar = idadeseaposentar;
    this.quantiamensalpretendeseaposentar = quantiamensalpretendeseaposentar;
    this.bensaoseaposentar = bensaoseaposentar;
    this.bensmoveis = bensmoveis;
  }
}

export class EnviarDados1 {
  email: string;
  senha: string;
  datadenascimento: string;
  estadocivil: string;
  expectativadevida: string;
  nomedoconjuge: string;
  datadenascimentodoconjuge: string;
  expectativadevidadoconjuge: string;
  temfilhos: string;
  quantos: string;
  profissaoatual: string;
  remuneracaoliquida: string;
  outrasfontesderenda: string;
  inssprevisto: string;
  profissaoatualdoconjuge: string;
  remuneracaoliquidadoconjuge: string;
  outrasfontesderendadoconjuge: string;
  inssprevistoconjuge: string;
  capacidadedepoupar: string;
  estimativadedespesa: string;
  tipodedeclaracaodeimpostoderenda: string;
  bensimoveis: string;
  bensmoveis: string;
  aplicacoesfinanceiras: string;
  projetosdevidacurtoprazo: string;
  projetosdevidamedioprazo: string;
  projetosdevidalongoprazo: string;
  idadeseaposentar: string;
  quantiamensalpretendeseaposentar: string;
  bensaoseaposentar: string;

  // tslint:disable-next-line: ban-types
  constructor(email: string, senha: string, datadenascimento: string, estadocivil: string, expectativadevida: string,
              nomedoconjuge: string, datadenascimentodoconjuge: string,
              expectativadevidadoconjuge: string, temfilhos: string, quantos: string,
              profissaoatual: string, remuneracaoliquida: string, outrasfontesderenda: string,
              inssprevisto: string, profissaoatualdoconjuge: string, remuneracaoliquidadoconjuge: string,
              outrasfontesderendadoconjuge: string, inssprevistoconjuge: string, capacidadedepoupar: string,
              estimativadedespesa: string, tipodedeclaracaodeimpostoderenda: string, bensimoveis: string,
              bensmoveis: string,
              aplicacoesfinanceiras: string, projetosdevidacurtoprazo: string, projetosdevidamedioprazo: string,
              projetosdevidalongoprazo: string, idadeseaposentar: string, quantiamensalpretendeseaposentar: string,
              bensaoseaposentar: string) {
    this.email = email;
    this.senha = senha;
    this.datadenascimento = datadenascimento;
    this.estadocivil = estadocivil;
    this.expectativadevida = expectativadevida;
    this.nomedoconjuge = nomedoconjuge;
    this.datadenascimentodoconjuge = datadenascimentodoconjuge;
    this.expectativadevidadoconjuge = expectativadevidadoconjuge;
    this.temfilhos = temfilhos;
    this.quantos = quantos;
    this.profissaoatual = profissaoatual;
    this.remuneracaoliquida = remuneracaoliquida;
    this.outrasfontesderenda = outrasfontesderenda;
    this.inssprevisto = inssprevisto;
    this.profissaoatualdoconjuge = profissaoatualdoconjuge;
    this.remuneracaoliquidadoconjuge = remuneracaoliquidadoconjuge;
    this.outrasfontesderendadoconjuge = outrasfontesderendadoconjuge;
    this.inssprevistoconjuge = inssprevistoconjuge;
    this.capacidadedepoupar = capacidadedepoupar;
    this.estimativadedespesa = estimativadedespesa;
    this.bensimoveis = bensimoveis;
    this.tipodedeclaracaodeimpostoderenda = tipodedeclaracaodeimpostoderenda;
    this.aplicacoesfinanceiras = aplicacoesfinanceiras;
    this.projetosdevidacurtoprazo = projetosdevidacurtoprazo;
    this.projetosdevidamedioprazo = projetosdevidamedioprazo;
    this.projetosdevidalongoprazo = projetosdevidalongoprazo;
    this.idadeseaposentar = idadeseaposentar;
    this.quantiamensalpretendeseaposentar = quantiamensalpretendeseaposentar;
    this.bensaoseaposentar = bensaoseaposentar;
    this.bensmoveis = bensmoveis;
  }
}
