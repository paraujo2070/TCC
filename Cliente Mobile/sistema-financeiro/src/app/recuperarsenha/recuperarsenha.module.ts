import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecuperarsenhaPage } from './recuperarsenha.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RecuperarsenhaPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecuperarsenhaPage]
})
export class RecuperarsenhaPageModule {}
