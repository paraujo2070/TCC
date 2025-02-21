import { DadosListar } from './dadoslistar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLService } from './url.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient, private urlSevice: URLService, public router: Router,
              private toast: ToastController) { }


  CriarLogin(data): Observable<any> {
    return this.http.post(this.urlSevice.url() + 'cadastrar', data, { observe: 'response' })
      .pipe(map((res => true))).
      pipe(catchError(err => {
        if (err.status === 200) {
          return of(this.paginaLoginCriacao());
        } else {
          return of(this.errorCadastar());
        }
        throw (err);
      }));
  }

  RecuperarSenha(data): Observable<any> {
    return this.http.post(this.urlSevice.url() + 'recuperar', data, { observe: 'response' })
      .pipe(map((res => true))).
      pipe(catchError(err => {
        if (err.status === 200) {
          return of(this.paginaLogin());
        } else {
          return of(this.errorRecuperarSenha());
        }
        throw (err);
      }));
  }

  AlterarSenha(data): Observable<any> {
    return this.http.post(this.urlSevice.url() + 'alterarSenha', data, { observe: 'response' })
      .pipe(map((res => true))).
      pipe(catchError(err => {
        if (err.status === 200) {
          return of(this.mesagemAlterarSenha());
        } else {
          return of(this.mesagemErrorAlterarSenha());
        }
        throw (err);
      }));
  }

  EfetuarLogin(data): Observable<any> {
    return this.http.post<any>(this.urlSevice.url() + 'login', data, { observe: 'response' })
      .pipe(map((res => true))).
      pipe(catchError(err => {
        if (err.status === 200) {
          return of(this.paginaInicial());
        } else {
          return of(this.errorLogin());
        }
        throw (err);
      }));
  }


  listarUsuariosChat(data): Observable<any> {
    return this.http.post<Chat>(this.urlSevice.url() + 'listarChats', data)
      .pipe(map(chats => {
        // tslint:disable-next-line: no-use-before-declare
        return new Chat(chats);
      }))
      .pipe(catchError(err => {
        return of(this.mesagemErrorBuscarChats());
      }));
  }

  ListarContatos(data): Observable<any> {
    return this.http.post<Usuario>(this.urlSevice.url() + 'listarUsuarios', data)
    .pipe(map(usuario => {
      return new Usuario(usuario);
    }))
    .pipe(catchError(err => {
      return of(this.mesagemErrorListarContatos());
    }));
  }

  ListarConversas(data): Observable<any> {
    return this.http.post<Usuario>(this.urlSevice.url() + 'listarMensagem', data)
    .pipe(map(usuario => {
      return new Usuario(usuario);
    }))
    .pipe(catchError(err => {
      return of(this.mesagemErrorListarContatos());
    }));
  }

  criarChat(data): Observable<any> {
    return this.http.post<Usuario>(this.urlSevice.url() + 'criarChat', data, { observe: 'response' })
    .pipe(map((res => true)))
      .pipe(catchError(err => {
        if (err.status === 200) {
          return of();
        } else {
          return of(this.error());
        }
      }));
  }

  listarUsuarioAtual(data): Observable<any> {
    return this.http.post<Usuario>(this.urlSevice.url() + 'listarDadosUsuarioAtual', data, { observe: 'response' } )
    .pipe(map(usuario => {
      return new Usuario(usuario.body);
    }))
    .pipe(catchError(err => {
      return of(this.error());
    }));
  }

  informacoesAdicionais(date): Observable<any> {
    return this.http.post(this.urlSevice.url() + 'inform', date, { observe: 'response' })
    .pipe(map((res => true))).
    pipe(catchError(err => {
      if (err.status === 200) {
        return of(this.errorInformacoesAdicionais());
      } else {
        return of(this.error());
      }
      throw (err);
    }));
  }

  alterarPerfil(date): Observable<any> {
    return this.http.post(this.urlSevice.url() + 'alteracoesPerfil', date, { observe: 'response' })
    .pipe(map((res => true))).
    pipe(catchError(err => {
      if (err.status === 200) {
        return of(this.perfilSucesso());
      } else {
        return of(this.error());
      }
      throw (err);
    }));
  }

  enviarMensagem(date): Observable<any> {
    return this.http.post(this.urlSevice.url() + 'enviarMensagem', date, { observe: 'response' })
    .pipe(map((res => true))).
    pipe(catchError(err => {
      if (err.status === 200) {
        return of();
      } else {
        return of(this.error());
      }
      throw (err);
    }));
  }

  listarTodosUsuarios(data): Observable<any> {
    return this.http.post<DadosListar>(this.urlSevice.url() + 'listarUsuarios', data, { observe: 'response' } )
    .pipe(map(listar => {
      return new DadosListar(listar.body);
    }))
    .pipe(catchError(err => {
      return of(this.error());
    }));
  }

  private async paginaInicial() {
    this.router.navigate(['/tabs']);
    const suceso = await this.toast.create({ message: 'Login efetuado com sucesso!', duration: 5000 });
    suceso.present();
  }
    private async perfilSucesso() {
      const suceso = await this.toast.create({ message: 'dados Alterado com sucesso.', duration: 5000 });
      suceso.present();
  }
  private async errorLogin() {
    const error = await this.toast.create({ message: 'Login ou senha incorretos!', duration: 5000 });
    error.present();
  }

  private async paginaLogin() {
    this.router.navigate(['/login']);
    const suceso = await this.toast.create({ message: 'Verifique seu email!', duration: 5000 });
    suceso.present();
  }
  private async errorRecuperarSenha() {
    const error = await this.toast.create({ message: 'E-mail não cadastrado na base de dados!', duration: 5000 });
    error.present();
  }
  private async paginaLoginCriacao() {
    this.router.navigate(['/login']);
    const suceso = await this.toast.create({ message: 'Login criado com sucesso!', duration: 5000 });
    suceso.present();
  }
  private async errorCadastar() {
    const error = await this.toast.create({ message: 'Verifique sua conexão com a internet e tente novamente!', duration: 5000 });
    error.present();
  }

  private async mesagemAlterarSenha() {
    const error = await this.toast.create({ message: 'Senha Alterada com sucesso!', duration: 5000 });
    error.present();
  }

  private async mesagemErrorAlterarSenha() {
    const error = await this.toast.create({ message: 'Verifique sua conexão com a internet', duration: 5000 });
    error.present();
  }

  private async mesagemErrorBuscarChats() {
    const error = await this.toast.create({ message: 'Verifique sua conexão com a internet', duration: 5000 });
    error.present();
  }
  private async mesagemErrorListarContatos() {
    const error = await this.toast.create({ message: 'Verifique sua conexão com a internet', duration: 5000 });
    error.present();
  }
  private async error() {
    const suceso = await this.toast.create({ message: 'Verifique sua conexão com a internet', duration: 5000 });
    suceso.present();
  }
  private async errorInformacoesAdicionais() {
    const error = await this.toast.create({ message: 'Informações salvas com sucesso', duration: 5000 });
    error.present();
  }

}

export class Chat {
  nomedestinatario?: string;
  destinatario?: string;
  timestamp?: string;

  // tslint:disable-next-line: ban-types
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
