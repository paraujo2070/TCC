import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastresePage } from './cadastrese.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CadastresePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastresePage]
})
export class CadastresePageModule {}
