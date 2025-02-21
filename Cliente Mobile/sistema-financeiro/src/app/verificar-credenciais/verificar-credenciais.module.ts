import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { VerificarCredenciaisPage } from './verificar-credenciais.page';

const routes: Routes = [
  {
    path: '',
    component: VerificarCredenciaisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerificarCredenciaisPage]
})
export class VerificarCredenciaisPageModule {}
