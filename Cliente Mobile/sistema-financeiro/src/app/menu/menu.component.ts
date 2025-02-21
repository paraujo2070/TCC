import { async } from '@angular/core/testing';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public appPages = [
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Informações Adicionais',
      url: '/informacoesadicionais',
      icon: 'search'
    },
    {
      title: 'Alterar Senha',
      url: '/alterarsenha',
      icon: 'wallet'
    },
    {
      title: 'Gráfico Previdenciário',
      url: '/grafico-previdenciario',
      icon: 'stats'
    },
    {
      title: 'Administrador',
      url: '/verificar-credenciais',
      icon: 'flower'
    },
    {
      title: 'Sair',
      url: '/login',
      icon: 'log-out',
      handler: () => {
        this.sair();
      }
    }
  ];

  private sair() {
    this.storage.clear();
  }

  constructor(private storage: Storage) { }

  ngOnInit() {}

}
