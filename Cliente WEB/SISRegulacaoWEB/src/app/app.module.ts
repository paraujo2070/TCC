import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { AlterarSenhaComponent } from './pages/alterar-senha/alterar-senha.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CadastrarRequisicaoComponent } from './pages/cadastrar-requisicao/cadastrar-requisicao.component';
import { CadastrarRequisicaoEDAEUSGComponent } from './pages/cadastrar-requisicao-edaeusg/cadastrar-requisicao-edaeusg.component';
import { MarcarViagemTFDComponent } from './pages/marcar-viagem-tfd/marcar-viagem-tfd.component';
import { MarcarViagemOnibusComponent } from './pages/marcar-viagem-onibus/marcar-viagem-onibus.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaInicialComponent,
    AlterarSenhaComponent,
    MenuComponent,
    CadastrarRequisicaoComponent,
    CadastrarRequisicaoEDAEUSGComponent,
    MarcarViagemTFDComponent,
    MarcarViagemOnibusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
