import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'alterarsenha', loadChildren: './alterarsenha/alterarsenha.module#AlterarsenhaPageModule' },
  { path: 'cadastrese', loadChildren: './cadastrese/cadastrese.module#CadastresePageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'informacoesadicionais', loadChildren: './informacoesadicionais/informacoesadicionais.module#InformacoesadicionaisPageModule' },
  { path: 'recuperarsenha', loadChildren: './recuperarsenha/recuperarsenha.module#RecuperarsenhaPageModule' },
  { path: 'grafico-previdenciario',
  loadChildren: './grafico-previdenciario/grafico-previdenciario.module#GraficoPrevidenciarioPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'administrador', loadChildren: './administrador/administrador.module#AdministradorPageModule' },  { path: 'verificar-credenciais', loadChildren: './verificar-credenciais/verificar-credenciais.module#VerificarCredenciaisPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
