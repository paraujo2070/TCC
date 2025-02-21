import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Tab3Page } from './tab3.page';
import { SharedModule } from '../shared/shared.module';
import { ContatosComponent } from '../contatos/contatos.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page, ContatosComponent],
  entryComponents: [ContatosComponent]
})
export class Tab3PageModule {}
