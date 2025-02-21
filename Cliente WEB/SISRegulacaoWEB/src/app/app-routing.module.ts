import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { AlterarSenhaComponent } from './pages/alterar-senha/alterar-senha.component';
import { CadastrarRequisicaoComponent } from './pages/cadastrar-requisicao/cadastrar-requisicao.component';
import { CadastrarRequisicaoEDAEUSGComponent } from './pages/cadastrar-requisicao-edaeusg/cadastrar-requisicao-edaeusg.component';
import { MarcarViagemOnibusComponent } from './pages/marcar-viagem-onibus/marcar-viagem-onibus.component';
import { MarcarViagemTFDComponent } from './pages/marcar-viagem-tfd/marcar-viagem-tfd.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: PaginaInicialComponent },
  { path: 'alterarSenha', component: AlterarSenhaComponent },
  { path: 'cadastrarRequisicao', component: CadastrarRequisicaoComponent },
  { path: 'cadastrarRequisicaoEDAEUSG', component: CadastrarRequisicaoEDAEUSGComponent },
  { path: 'viagemOnibus', component: MarcarViagemOnibusComponent },
  { path: 'viagemTFD', component: MarcarViagemTFDComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
