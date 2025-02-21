import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URLService {

  constructor() { }

  url(): string {
    return 'https://us-central1-planejamento-financeiro-4afb7.cloudfunctions.net/';
  }
}
