import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterarsenhaPage } from './alterarsenha.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AlterarsenhaPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlterarsenhaPage]
})
export class AlterarsenhaPageModule {}
