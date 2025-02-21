import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterfacesService implements token, DadosLogin {
  Email: string;
  senha: string;
  token: string;

  constructor() { }



}

interface token {
  token: string;
}

interface DadosLogin {
  Email: string;
  senha: string;
}
