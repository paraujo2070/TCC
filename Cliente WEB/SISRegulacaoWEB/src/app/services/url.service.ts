import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URLService {

  constructor() { }

  url(): string {
    return 'http://localhost:5000/planejamento-financeiro-4afb7/us-central1/';
  }
}
