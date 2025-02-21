import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformacoesadicionaisPage } from './informacoesadicionais.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: InformacoesadicionaisPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InformacoesadicionaisPage]
})
export class InformacoesadicionaisPageModule {}
