import { StorageService } from './storage.service';
import { CredenciaisSalvasOFF } from './../interfaces/credenciais-salvas-off';
import { Token } from './../interfaces/token';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLService } from './url.service';
import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private credenciais: CredenciaisSalvasOFF;

  constructor(private http: HttpClient, private urlSevice: URLService,
              private router: Router, private storage: StorageService) { }


  login(data): Observable<any> {
    return this.http.post<Token>(this.urlSevice.url() + 'login', data, { observe: 'response' })
      .pipe(map((res => {
        if (res.status === 200) {
          this.credenciais = {
            email: data.email,
            senha: data.senha,
            token: res.body.token
          };
          this.storage.setData('1', this.credenciais);
          this.router.navigate(['inicio']);
        } else {
          return of(console.log('error'));
        }
      })));
  }

  recuperarSenha(data): Observable<any> {
    return this.http.post(this.urlSevice.url() + 'recuperarSenha', data, { observe: 'response' })
     .pipe(catchError(err => {
        if (err.status === 200) {
          this.router.navigate(['login']);
        } else {
          return of(console.log('error'));
        }
        throw (err);
      }));
  }

  cadastrarViagemOnibus(data): Observable<any> {
    return this.http.post(this.urlSevice.url() + 'cadastrarViagemOnibus', data, { observe: 'response' })
      .pipe(map((res => {
        if (res.status === 200) {
          return this.router.navigate(['inicio']);
        } else {
          return of(console.log('error'));
        }
      })));
  }
  cadastrarViagemTFD(data): Observable<any> {
    return this.http.post<Token>(this.urlSevice.url() + 'cadastrarViagemTFD', data, { observe: 'response' })
      .pipe(map((res => {
        if (res.status === 200) {
          return this.router.navigate(['inicio']);
        } else {
          return of(console.log('error'));
        }
      })));
  }

  listarUsuariosChat(data): Observable<any> {
    return this.http.post<any>(this.urlSevice.url() + 'listarChats', data)
      .pipe(map(chats => {
        // tslint:disable-next-line: no-use-before-declare
        //  return new Chat(chats);
      }))
      .pipe(catchError(err => {
        return of();
      }));
  }

  cadastrarRequisicao(data): Observable<any> {
    return this.http.post(this.urlSevice.url() + 'cadastrarRequisicao', data, { observe: 'response' })
      .pipe(map((res => {
        if (res.status === 200) {
          this.router.navigate(['inicio']);
        } else {
          return of(console.log('error'));
        }
      })));
  }

  cadastrarRequisicaoEDAEUSG(data): Observable<any> {
    return this.http.post(this.urlSevice.url() + 'cadastrarRequisicaoUSGEEDA', data, { observe: 'response' })
      .pipe(map((res => {
        if (res.status === 200) {
          this.router.navigate(['inicio']);
        } else {
          return of(console.log('error'));
        }
      })));
  }



}
